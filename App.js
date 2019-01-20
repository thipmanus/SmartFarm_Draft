import React , {Component} from 'react';
import { StyleSheet,Button, View ,Text} from 'react-native';
import { Container,Picker,Form, Header, Title, Content, Footer, FooterTab, Icon,StyleProvider,Text as NBText } from 'native-base';
import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';

import home from './screens/home';
import camera from './screens/camera';
import calculator from './screens/calcu';
import contact from './screens/contact';

const RootStack = createStackNavigator({
  Home: {
    screen: home
  },
  Camera: {
    screen: camera
  },
  Calcu: {
    screen: calculator
  },
  Contact: {
    screen: contact
  }
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: "#3F51B5",
    },
    headerTitleStyle : {
      textAlign: 'center',
      alignSelf:'center'
    },
  },
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