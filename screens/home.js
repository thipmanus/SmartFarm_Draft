import React , {Component} from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { Container,Picker,Form,Button, Header, Title, Content, Footer, FooterTab, Icon,StyleProvider,Text as NBText } from 'native-base';

export class home extends Component {
  render() {
    return (
      
        <Container>
        <Header style={styles.tainer}>
          <Text>
          <Title>
         วิเคราะห์อาการขาดแร่ธาตุของพืช
         </Title>
         </Text>
         <Button transparent>
         <Icon name='ios-menu' />
         </Button>
        </Header>
        <Content>

        </Content>
        <Footer>
                      <FooterTab>
                          <Button active
                              onPress={() => this.props.navigation.navigate('Home')}>
                              <Icon name='ios-home' />
                              <NBText>หน้าหลัก</NBText>
                          </Button>
                          <Button active
                              onPress={() => this.props.navigation.navigate('Next')}>
                              <Icon name='ios-camera' />
                              <NBText>กล้อง</NBText>
                          </Button>
                      </FooterTab>
                  </Footer>
         </Container>
     
    )
  }
}

export default home

const styles = StyleSheet.create({
  tainer: { 
      paddingTop: 0,
      //flexDirection: 'column',
      //justifyContent: 'flex-end',
      alignItems: 'center',
      
  }
});