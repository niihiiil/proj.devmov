import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginscreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Sistema de vuelos" component={LoginScreen} />
        {/* Agrega otras pantallas aquí */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

