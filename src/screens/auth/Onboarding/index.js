import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../components/Button';
const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../../assets/onboarding.png')}
          style={styles.image}
        />
        <View style={styles.footer} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Best task management app</Text>
        <Text style={styles.subtitle}>
          Get organized by sorting out all your tasks and boost your
          productivity.
        </Text>
        <Button onPress={() => navigation.navigate('Signin')}>Log In</Button>
        <Button type={'blue'} onPress={() => navigation.navigate('Signup')}>
          Get started
        </Button>
      </View>
    </View>
  );
};

export default React.memo(Onboarding);
