import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { Appbar, Button, Avatar, Modal, List } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Sistema de Vuelos" />
        <Appbar.Action icon="airplane" />
        <TouchableWithoutFeedback onPress={handleButtonPress}>
          <View style={styles.menuButton}>
            <Avatar.Icon icon="menu" size={24} />
          </View>
        </TouchableWithoutFeedback>
      </Appbar.Header>
      <Modal visible={modalVisible} onDismiss={handleModalClose} contentContainerStyle={styles.modalContainer}>
        <List.Section>
          <List.Item
            title="Reserva"
            onPress={() => {
              navigation.navigate('Reserva');
              handleModalClose();
            }}
          />
          <List.Item
            title="Perfil"
            onPress={() => {
              navigation.navigate('Perfil');
              handleModalClose();
            }}
          />
          <List.Item
            title="Embarque"
            onPress={() => {
              navigation.navigate('Embarque');
              handleModalClose();
            }}
          />
          <List.Item
            title="Información de Vuelos"
            onPress={() => {
              navigation.navigate('InformacionVuelos');
              handleModalClose();
            }}
          />
        </List.Section>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuButton: {
    marginRight: 8,
  },
  modalContainer: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
