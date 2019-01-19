import React , {Component} from 'react';
import { StyleSheet,Button, View ,Text} from 'react-native';
import { Container,Picker,Form, Header, Title, Content, Footer, FooterTab, Icon,StyleProvider,Text as NBText } from 'native-base';
//import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
import camera from './screens/camera';
import homes from './screens/home';

const RootStack = createStackNavigator({
  Home: {
    screen: homes
  },
  Next: {
    screen: camera
  }
},
{
  initialRouteName: 'Home'
}
);

const Apps = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <Apps />
    );
  }
}