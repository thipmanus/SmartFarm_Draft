import React , {Component} from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { Container,Picker,Form,Button, Header, Title, Content, Footer, FooterTab, Icon,StyleProvider,Text as NBText } from 'native-base';

export class camera extends Component {
  render() {
    return (
      
        <Container>
        <Header style={styles.tainer}>
          <Text>
          <Title>
         วิเคราะห์อาการขาดแร่ธาตุของพืช
         </Title>
         </Text>
        </Header>
        <Content>

        </Content>
        <Footer>
         <FooterTab>
          <Button vertical
            onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name='ios-home' />
            <NBText>หน้าหลัก</NBText>
            </Button>
            <Button active
            onPress={() => this.props.navigation.navigate('Camera')}  >
            <Icon name='ios-camera' />
            <NBText>กล้อง</NBText>
            </Button>
            <Button vertical
            onPress={() => this.props.navigation.navigate('Calcu')}>
            <Icon name='ios-apps' />
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

export default camera

const styles = StyleSheet.create({
  tainer: { 
      paddingTop: 0,
      //flexDirection: 'column',
      //justifyContent: 'flex-end',
      alignItems: 'center',
      
  }
});