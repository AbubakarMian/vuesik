/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// import CustomSplashScreen from './app/view/SplashScreen';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./App/Navigation/StackNavigator";

import { BottomTabNavigator  } from "./App/Navigation/TabNavigator";
import Example from './App/View/Example';




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
 
  render() {
  
    return (
      // <Provider store={configureStore}>
      <View style={{flex: 1}}>
        <StatusBar hidden={true} translucent={true} />
     
            <NavigationContainer>
              <BottomTabNavigator/>
            </NavigationContainer>
      </View>
      // </Provider>
    );
  }
}
