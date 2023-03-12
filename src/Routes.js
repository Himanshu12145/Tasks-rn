import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import Onboarding from './screens/auth/Onboarding';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import auth from '@react-native-firebase/auth';
const Stack = createStackNavigator();

function Routes() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (user) {
    const logout = () => {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    };
    return (
      <>
        <Text style={{margin: 40}}>Welcome</Text>
        <Text onPress={logout} style={{margin: 40}}>
          Logout
        </Text>
      </>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default React.memo(Routes);
