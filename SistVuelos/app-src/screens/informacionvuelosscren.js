import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { List } from 'react-native-paper';

const InformacionVuelosScreen = () => {
  const [vuelos, setVuelos] = useState([]);

  useEffect(() => {
    // Lógica para obtener la información de vuelos desde la base de datos o una API
    // Puedes utilizar useEffect para realizar una llamada a la API y obtener los datos

    // Ejemplo de datos de vuelos obtenidos
    const data = [
      { id: 1, codigo: 'AB123', origen: 'Ciudad A', destino: 'Ciudad B', horaSalida: '10:00', horaLlegada: '12:00' },
      { id: 2, codigo: 'CD456', origen: 'Ciudad C', destino: 'Ciudad D', horaSalida: '13:30', horaLlegada: '15:30' },
      // ... más datos de vuelos
    ];

    setVuelos(data);
  }, []);

  const renderItem = ({ item }) => (
    <List.Item
      title={item.codigo}
      description={`Origen: ${item.origen} - Destino: ${item.destino}`}
      right={() => (
        <View style={styles.horarioContainer}>
          <Text style={styles.horarioText}>{item.horaSalida}</Text>
          <Text style={styles.horarioText}>{item.horaLlegada}</Text>
        </View>
      )}
      onPress={() => {
        // Acción al seleccionar un vuelo, puede ser redirigir a una pantalla de detalles del vuelo
      }}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={vuelos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  horarioContainer: {
    flexDirection: 'row',
  },
  horarioText: {
    marginHorizontal: 8,
  },
});

export default InformacionVuelosScreen;
