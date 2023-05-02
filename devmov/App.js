//@ts-check
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Principal} from './components/Elementos_Component.js'
import React from 'react';
import { Form } from './components/Form.js'

const loginForm = {
  usuario: { type: "TEXT"},
  password: { type: "PASSWORD"},
  fecha: { type: "DATE"}
}

export default function App() {

  const save = () => {
    console.log('Guardar datos en la base de datos');
  }

  return (
    <View style={Principal.container}>
      <Text>TEST COMPONENT</Text>
      <Text>TEST COMPONENT</Text>
      <Form model={loginForm} onSave={save} />
      <StatusBar style="auto" />
    </View>
  );
}
