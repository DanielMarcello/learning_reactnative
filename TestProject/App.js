import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    var names = {
      a: "A",
      b: "B"
    }
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>Hello World</Text>
        <Greeting name={names.b}></Greeting>
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
});
