import React from 'react'
import { StyleSheet, Text, View, TextInput, Button,Alert } from 'react-native';


const Principal = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header1: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    header2: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      title: {
        textAlign: 'center',
        marginVertical: 8,
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      button: {
        backgroundColor: '#4CAF50',
        color: '#FFFFFF',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        minWidth: 100,
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 18,
}

      
  });
  
  export { Principal };