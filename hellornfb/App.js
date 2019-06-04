/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import {Provider} from 'react-redux';
import Main from './components/main';
import store from './components/redux/store'

 export default class App extends Component {
  render() {
    return (
     <Provider store ={store}>
     <Main></Main>
     </Provider>
      );
  }
}


