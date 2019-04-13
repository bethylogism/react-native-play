import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './HelloWorld'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm dynamically changing text!!!</Text>
        <Text>Hello World.</Text>
        <HelloWorld style={styles.bigPink} name="Beth" />
        <HelloWorld style={styles.littleBlue} name="Santiago" />
        <HelloWorld style={styles.mustardYellow} name="Sina" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigPink: {
      color: '#ff00ff',
      fontWeight: 'bold',
      fontSize: 40,
    },
    littleBlue: {
      color: 'cornflowerblue',
      fontSize: 10,
    },
    mustardYellow: {
      color: '#E1AD01',
      fontSize: 20,
    }
});
