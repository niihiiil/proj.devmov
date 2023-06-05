import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginscreen';
import RegisterScreen from '../screens/registerscreen';
import HomeScreen from '../screens/homescreen';
import ReservaScreen from '../screens/reservascreen';
import PerfilScreen from '../screens/perfilscreen';
import EmbarqueScreen from '../screens/embarquescreen';
import InformacionVuelosScreen from '../screens/informacionvuelosscren';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reserva" component={ReservaScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="Embarque" component={EmbarqueScreen} />
        <Stack.Screen name="InformacionVuelos" component={InformacionVuelosScreen} />
        {/* Agrega otras pantallas aquí */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
