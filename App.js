import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import call from 'react-native-phone-call';

// specfied number
const callPredefinedNumber = (number) => {
  const args = {
    number: number, // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
  };

  call(args).catch(console.error);
};


function PredefinedNumber({number}){
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => callPredefinedNumber(number)}
    >
      <Text style={styles.buttonText}>{number}</Text>
    </TouchableOpacity>
  )
}

export default function App() {
  const [number, setNumber] = useState('');

  const callANumber = () => {
    if (number.length != 10) {
      alert('Please enter a number');
      return;
    }

    const args = {
      number: number, // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
    };

    call(args).catch(console.error);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Call a number with React Native Phone Call
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a number"
          onChangeText={(text) => setNumber(text)}
          value={number}
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={callANumber}
        >
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>
          Or call a number predefined
        </Text>

        <PredefinedNumber number="8125163939"/>
        <PredefinedNumber number="8116055898"/>
        <PredefinedNumber number="8214562398"/>
        <PredefinedNumber number="1024154785"/>
        <PredefinedNumber number="1023541014"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    marginBottom: 15,
  },

  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#1c313a',
    padding: 10,
    marginTop: 15,
    width: '80%',
  },

  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },

});
