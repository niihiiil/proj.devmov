import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      // Realizar la llamada a la API para validar las credenciales
      const response = await fetch('http://nativeproj:8001/api/security/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      if (response.ok) {
        // Inicio de sesión exitoso, redirigir a la pantalla Home
        navigation.navigate('Home');
      } else {
        // Error en el inicio de sesión
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      // Error en la conexión o en la solicitud HTTP
      console.error('Error:', error);
      alert('Ocurrió un error en el inicio de sesión');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleGoToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          label="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          label="Contraseña"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          right={
            <TextInput.Icon
              name={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Iniciar sesión
        </Button>
        <Button onPress={handleRegister}>Registrarse</Button>
        <Button onPress={handleGoToHome}>Home</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '80%',
    maxWidth: 500, 
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default LoginScreen;

