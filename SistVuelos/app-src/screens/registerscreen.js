import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Realizar la llamada a la API para registrar un nuevo usuario
      const response = await fetch('http://nativeproj:8001/api/security/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        // Registro exitoso, redirigir al usuario a la pantalla de inicio de sesión
        navigation.navigate('Login');
      } else {
        // Ocurrió un error en el registro, mostrar un mensaje de error o realizar alguna acción
        console.log('Error en el registro');
      }
    } catch (error) {
      // Ocurrió un error al realizar la llamada a la API, manejar el error adecuadamente
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Usuario"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        label="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Registrarse
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default RegisterScreen;
