import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Button, Avatar } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Sistema de Vuelos" />
                <Appbar.Action icon="airplane" />
            </Appbar.Header>
            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Reserva')}
                    style={styles.button}
                >
                    Reserva
                </Button>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Perfil')}
                    style={styles.button}
                >
                    Perfil
                </Button>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Embarque')}
                    style={styles.button}
                >
                    Embarque
                </Button>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('InformacionVuelos')}
                    style={styles.button}
                >
                    Información de Vuelos
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginBottom: 16,
        width: 200,
    },
});

export default HomeScreen;
