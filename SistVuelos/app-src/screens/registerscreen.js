import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dni, setDni] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleRegister = () => {
    // Lógica para registrar al usuario y guardar los datos en las tablas correspondientes en la base de datos
    // Puedes hacer una llamada a la API para guardar los datos

    // Reiniciar los valores de los campos después del registro exitoso
    setEmail('');
    setPassword('');
    setDni('');
    setNombre('');
    setApellidos('');
    setDireccion('');
    setTelefono('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TextInput
        label="DNI"
        value={dni}
        onChangeText={setDni}
        style={styles.input}
      />
      <TextInput
        label="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      <TextInput
        label="Apellidos"
        value={apellidos}
        onChangeText={setApellidos}
        style={styles.input}
      />
      <TextInput
        label="Dirección"
        value={direccion}
        onChangeText={setDireccion}
        style={styles.input}
      />
      <TextInput
        label="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
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
