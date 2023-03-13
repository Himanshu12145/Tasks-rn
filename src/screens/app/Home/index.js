import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import {setTasks} from '../../../store/tasks';
const Home = ({navigation}) => {
  const tasks = useSelector(state => state.tasks.data);
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();
  console.log('tasks >> ', tasks);
  useEffect(() => {
    firestore()
      .collection('Tasks')
      .where('userId', '==', user?.uid)
      .get()
      .then(querySnapshot => {
        const tasksList = [];
        querySnapshot.forEach(documentSnapshot => {
          tasksList.push({
            uid: documentSnapshot.id,
            ...(documentSnapshot.data() || {}),
          });
        });
        dispatch(setTasks(tasksList));
      });
  }, [user, dispatch]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <ScrollView>
        <Title type="thin">Daily Tasks:</Title>
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);
