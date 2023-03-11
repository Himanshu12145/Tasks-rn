import React, {useState} from 'react';
import styles from './styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {Text, SafeAreaView, View} from 'react-native';
import CheckBox from '../../../components/CheckBox';
import Title from '../../../components/Title';
const Signup = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);
  const onCheckBoxPressed = () => {
    setAgreed(value => !value);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />
      <Button type="blue">Create new account</Button>
      <View style={styles.row}>
        <CheckBox checked={agreed} onPress={onCheckBoxPressed} />
        <Text style={styles.agreeText}>
          I agreed to
          <Text style={styles.link}> Terms and Conditions</Text> and
          <Text style={styles.link}> Privacy Policy</Text>
        </Text>
      </View>

      <Text style={styles.footerText}>
        Already Registered?
        <Text
          onPress={() => navigation.navigate('Signin')}
          style={styles.footerLink}>
          {' '}
          Sign In!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
