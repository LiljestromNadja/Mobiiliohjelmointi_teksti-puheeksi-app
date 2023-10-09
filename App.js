import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Keyboard } from 'react-native';
import * as Speech from 'expo-speech';


export default function App() {

  const [input, setInput] = useState();

  const speak = () => {
    //const thingToSay = '1';
    Speech.speak(input);
    Keyboard.dismiss();
    setInput('');
  };
  

  return (
    <View style={styles.container}>
      <TextInput onChangeText={input => setInput(input)} value={input} placeholder='Type here what you want to hear'/>
      <Button title="Press to hear text" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



