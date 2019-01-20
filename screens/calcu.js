import React , {Component} from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { Container,Picker,Form,Button, Header, Title, Content, Footer, FooterTab, Icon,StyleProvider,Text as NBText } from 'native-base';


export class calcu extends Component {
  static navigationOptions = {
    title: 'คำนวณสูตรปุ๋ย',
  };
  render() {
    return (
      
        <Container>
        
        <Content>

        </Content>
        <Footer>
         <FooterTab>
          <Button 
            onPress={() => this.props.navigation.navigate('Home')} >
            <Icon name='ios-home' />
            <NBText>หน้าหลัก</NBText>
            </Button>
            <Button vertical
            onPress={() => this.props.navigation.navigate('Camera')} >
            <Icon name='ios-camera' />
            <NBText>กล้อง</NBText>
            </Button>
            <Button active
            onPress={() => this.props.navigation.navigate('Calcu')} >
            <Icon name='ios-calculator' />
            <NBText>คำนวณ</NBText>
            </Button>
            <Button vertical
            onPress={() => this.props.navigation.navigate('Contact')}>
            <Icon name='ios-contact' />
            <NBText>ติดต่อ</NBText>
            </Button>
            </FooterTab>
           </Footer>
         </Container>
    )
  }
}

export default calcu ;
