import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screen/SignIn';
import SignUp from './screen/SignUp';
import MyTabs from './screen/Home/MyTabs'
const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown:false,
            title: 'SignUp', //Set Header Title
            headerStyle: {
                backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
            },
        }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
              headerShown:false,
              title: 'SignIn', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{
            headerShown:false,
            title: 'MyTabs', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

export default App;
