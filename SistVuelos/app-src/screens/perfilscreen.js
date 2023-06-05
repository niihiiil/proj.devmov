import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const PerfilScreen = () => {
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [tarjeta, setTarjeta] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleGuardar = () => {
    // Aquí puedes realizar la lógica para guardar los datos del perfil en la base de datos
    console.log('Datos del perfil guardados:', { nombre, dni, tarjeta, direccion, telefono });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="DNI"
          value={dni}
          onChangeText={setDni}
        />
        <TextInput
          style={styles.input}
          placeholder="Tarjeta de crédito"
          value={tarjeta}
          onChangeText={setTarjeta}
        />
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          value={direccion}
          onChangeText={setDireccion}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={telefono}
          onChangeText={setTelefono}
        />
        {/* Otros campos del formulario de perfil */}
        {/* ... */}
        <Button title="Guardar perfil" onPress={handleGuardar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  formContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});

export default PerfilScreen;
