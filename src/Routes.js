import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import Onboarding from './screens/auth/Onboarding';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import auth from '@react-native-firebase/auth';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/app/Home';
import Tasks from './screens/app/Tasks';
import AddTask from './screens/app/AddTask';
import DrawerContent from './components/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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

  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{tabBarShowLabel: false, headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require('./assets/home_active.png')
                    : require('./assets/home_inactive.png')
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={Tasks}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require('./assets/calendar_active.png')
                    : require('./assets/calendar_inactive.png')
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  if (user) {
    return (
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="AddTask" component={AddTask} />
      </Drawer.Navigator>
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

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default React.memo(Routes);
