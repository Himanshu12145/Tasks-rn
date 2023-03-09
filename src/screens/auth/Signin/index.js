import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../components/Button';
const Signin = () => {
  return (
    <View style={styles.container}>
      <Button>Login</Button>
    </View>
  );
};

export default React.memo(Signin);
