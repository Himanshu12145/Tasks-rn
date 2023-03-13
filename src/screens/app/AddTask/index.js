import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
  Text,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';
import styles from './styles';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Categories from '../../../components/Categories';
import {categories} from '../../../constants/categories';
import DateInput from '../../../components/DateInput';
import Button from '../../../components/Button';
import {useSelector} from 'react-redux';

const AddTask = ({navigation}) => {
  const user = useSelector(state => state.user.data);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState();
  const [deadline, setDeadline] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const handleBack = () => {
    navigation.goBack();
  };
  const onSubmit = () => {
    const today = moment(new Date()).format('YYYY-MM-DD');
    const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');
    if (!title) {
      Alert.alert('Please enter the task title');
      return;
    }
    if (!categories) {
      Alert.alert('Please select a category');
      return;
    }
    if (moment(deadlineFormatted).isBefore(today)) {
      Alert.alert('Please enter future date');
      return;
    }

    setLoading(true);
    firestore()
      .collection('Tasks')
      .doc(user?.uid)
      .set({
        title,
        deadline,
        category,
      })
      .then(() => {
        setLoading(false);
        console.log('Task Added');
        navigation.navigate('Tasks');
        setTitle('');
        setDeadline(new Date());
        setCategory(null);
      })
      .catch(e => {
        console.log('error adding task >>>', e);
        setLoading(false);
        Alert.alert(e.message);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} hitSlop={8} onPress={handleBack}>
        <Image
          style={styles.backIcon}
          source={require('../../../assets/back.png')}
        />
      </Pressable>
      <Title type="thin">Add New Task</Title>
      <ScrollView>
        <Text style={styles.label}>Describe the task</Text>
        <Input
          value={title}
          onChangeText={setTitle}
          outlined
          placeholder="Type here..."
        />
        <Text style={styles.label}>Type</Text>
        <Categories
          categories={categories}
          selectedCategory={category}
          onCategoryPress={setCategory}
        />
        <Text style={styles.label}>Deadline</Text>
        {/* <DatePicker date={deadline} onDateChange={setDeadline} /> */}
        <DateInput value={deadline} onChange={setDeadline} />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button type="blue" style={styles.button} onPress={onSubmit}>
            Add the Task
          </Button>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AddTask);
