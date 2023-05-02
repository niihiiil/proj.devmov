//@ts-check
import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Principal } from '../components/Elementos_Component.js';
// @ts-ignore
import { ModelPropierty } from '../MODEL/Common_Model.js';

class Form extends Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.editObject = props.editObject ?? {};
    this.controls = [];
    for (const key in this.model) {
      this.controls.push(
        constructControlFromModel(
          key,
          this.model[key],
          this.editObject[key],
          this.onChangeText
        )
      );
    }
  }
  onChangeText = (value, prop) => {
    this.editObject[prop] = value;
    console.table(this.editObject);
  };
  render() {
    const { onSave, saveText } = this.props;

    return (
      <View>
        {this.controls}
        <TouchableOpacity onPress={() => onSave(this.editObject)} style={styles.button}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function constructControlFromModel(propName, prop, value, onChangeText, onSave) {
  let control;
  if (prop.type.toUpperCase() == 'TEXT') {
    control = (
      <View>
        <Text style={Principal.header2}>{propName}</Text>
        <TextInput
          style={Principal.input}
          onChangeText={(value) => onChangeText(value, propName)}
          value={value}
          secureTextEntry={prop.type.toUpperCase() == 'PASSWORD'}
        />
      </View>
    );
  } else if (prop.type.toUpperCase() == 'PASSWORD') {
    control = (
      <View>
        <Text style={Principal.header2}>{propName}</Text>
        <TextInput
          style={Principal.input}
          onChangeText={(value) => onChangeText(value, propName)}
          value={value}
          secureTextEntry={true}
        />
      </View>
    );
  } else if (prop.type.toUpperCase() == 'DATE') {
    control = (
      <View>
        <Text style={Principal.header2}>{propName}</Text>
        <TextInput
          style={Principal.input}
          onChangeText={(value) => onChangeText(value, propName)}
          value={value}
          keyboardType="numeric"
          placeholder="dd/mm/aaaa"
        />
      </View>
    );
  } else {
    control = (
      <View>
        <Text>{propName}</Text>
      </View>
    );
  }

  if (onSave) {
    return (
      <View>
        {control}
        <TouchableOpacity onPress={onSave} style={styles.button}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return control;
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0B243D',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export { Form };
