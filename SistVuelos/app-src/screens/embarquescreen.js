import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const EmbarqueScreen = () => {
  const [reservaID, setReservaID] = useState('');
  const [fecha, setFecha] = useState('');
  const [dni, setDni] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [numeroAsiento, setNumeroAsiento] = useState('');
  const [fila, setFila] = useState('');
  const [columna, setColumna] = useState('');
  const [planta, setPlanta] = useState('');

  const handleSearch = () => {
    // Lógica para buscar la información de embarque en la base de datos
    // Puedes hacer una llamada a la API para obtener los datos

    // Aquí puedes mostrar la información de embarque obtenida
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="ID de Reserva"
        value={reservaID}
        onChangeText={setReservaID}
        style={styles.input}
      />
      <TextInput
        label="Fecha"
        value={fecha}
        onChangeText={setFecha}
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
        label="Número de Asiento"
        value={numeroAsiento}
        onChangeText={setNumeroAsiento}
        style={styles.input}
      />
      <TextInput
        label="Fila"
        value={fila}
        onChangeText={setFila}
        style={styles.input}
      />
      <TextInput
        label="Columna"
        value={columna}
        onChangeText={setColumna}
        style={styles.input}
      />
      <TextInput
        label="Planta"
        value={planta}
        onChangeText={setPlanta}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSearch} style={styles.button}>
        Buscar
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

export default EmbarqueScreen;
