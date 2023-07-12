import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { List } from 'react-native-paper';
import EntityClass from '../../EntityClass';

const InformacionVuelosScreen = () => {
  const [vuelos, setVuelos] = useState([]);

  useEffect(() => {
    const entity = new EntityClass();
    const path = 'vuelos';
    const getVuelos = async () => {
      try {
        const response = await entity.execute(path, 'GET');
        setVuelos(response);
      } catch (error) {
        console.error('Error al obtener los vuelos:', error);
      }
    };
    getVuelos();
  }, []);

  const renderItem = ({ item }) => (
    <List.Item
      title={item.CodigoUnico}
      description={`Origen: ${item.Localidad} - Destino: ${item.Pais}`}
      right={() => (
        <View style={styles.horarioContainer}>
          <Text style={styles.horarioText}>{item.HoraSalida}</Text>
          <Text style={styles.horarioText}>{item.HoraLlegada}</Text>
        </View>
      )}
      onPress={() => {
        // Lógica para manejar la selección de un vuelo
      }}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={vuelos}
        renderItem={renderItem}
        keyExtractor={(item) => item.AeropuertoID.toString()}
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
