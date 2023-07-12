import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import EntityClass from '../../EntityClass';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const entity = new EntityClass();
      const path = 'usuarios/login';
      const body = {
        Usuario: email,
        Contraseña: password,
      };

      const response = await entity.execute(path, 'POST', body);

      Alert.alert('Inicio de sesión exitoso');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', error.message);
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
