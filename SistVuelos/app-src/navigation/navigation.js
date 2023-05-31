import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginscreen';
import RegisterScreen from '../screens/registerscreen';
import HomeScreen from '../screens/homescreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Agrega otras pantallas aquí */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
