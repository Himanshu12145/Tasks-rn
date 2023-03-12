import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import auth from '@react-native-firebase/auth';

const Signin = ({navigation}) => {
  const [values, setValues] = useState({});

  const onChange = (value, key) => {
    setValues(vals => ({...vals, [key]: value}));
  };

  const onSubmit = () => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log('user Signed in');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else {
          Alert.alert(error.message);
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome back!</Title>
      <Input
        onChangeText={val => onChange(val, 'email')}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Input
        onChangeText={val => onChange(val, 'password')}
        placeholder="Password"
        secureTextEntry
      />
      <Button onPress={onSubmit}>Login</Button>
      <Text style={styles.footerText}>
        Not Registered?
        <Text
          onPress={() => navigation.navigate('Signup')}
          style={styles.footerLink}>
          {' '}
          Sign Up!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(Signin);
