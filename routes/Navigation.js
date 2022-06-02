import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
      <Stack.Navigator>

        <Stack.Screen
        name="Register"
        component={RegisterScreen}
        />
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        />
        
      </Stack.Navigator>
  )
}

export default Navigation