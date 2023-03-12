import React, {useState} from 'react';
import styles from './styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {Text, SafeAreaView, View, Linking} from 'react-native';
import CheckBox from '../../../components/CheckBox';
import Title from '../../../components/Title';
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from '../../../constants/links';
const Signup = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);
  const onCheckBoxPressed = () => {
    setAgreed(value => !value);
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Password" secureTextEntry />
      <Input placeholder="Confirm Password" secureTextEntry />
      <Button type="blue">Create new account</Button>
      <View style={styles.row}>
        <CheckBox checked={agreed} onPress={onCheckBoxPressed} />
        <Text style={styles.agreeText}>
          I agreed to
          <Text
            style={styles.link}
            onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}>
            {' '}
            Terms and Conditions
          </Text>{' '}
          and
          <Text
            style={styles.link}
            onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
            {' '}
            Privacy Policy
          </Text>
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
