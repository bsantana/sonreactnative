/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import PropsExample from './PropsExample'
import Counter from './Counter'
import { StackNavigator } from 'react-navigation'

class App extends Component<{}> {
  static navigationOptions = {
    title: 'Home'
  }

  constructor( props ) {
    super( props )

    this.state = {
      msg: 'Hello World'
    }
  }

  componentDidMount() {
    this.setState({
      msg: 'Bruno Santana'
    })
  }

  render() {
    let { msg } = this.state,
      { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Bem vindo ao curso de react native da School of net!
        </Text>

        <Button title="Avançar" onPress={ () => navigate('Counter') }></Button>

        <PropsExample name="Beatriz"></PropsExample>
        <Counter></Counter>
      </View>
    );
  }
}

const StackApp = StackNavigator({
  Home: {
    screen: App
  },
  Counter: {
    screen: Counter
  }
})

//export default App
export default StackApp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
