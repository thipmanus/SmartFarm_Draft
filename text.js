/*
class Home extends React.Component {
  render() {
      return (
        
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          <Container> 
          <Content>
          <Form>
            <Picker
              note
              mode="dropdown"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="ใบผักกาด" value="key1" />
              <Picker.Item label="ใบกะเพรา" value="key2" />
              <Picker.Item label="ใบคะน้า" value="key3" />
              <Picker.Item label="โปรดเลือกชนิดของใบพืช" value="key0" />
            </Picker>
          </Form>
        </Content>
        </Container>
          </View>
        
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>หน้าหลัก</Text>
          <Text style={{ marginTop: 20 }} onPress={() => this.props.navigation.navigate('Tabs')}>Go to Tabs</Text>
          </View>
      );
  }
}

class camera extends React.Component {
  render() {
      return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>กล้อง</Text>
          </View>
      );
  }
}

class calcu extends React.Component {
  render() {
      return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>คำนวณ</Text>
          </View>
      );
  }
}

class contra extends React.Component {
  render() {
      return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>ติดต่อ</Text>
          </View>
      );
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }
  onValueChange(value= string) {
    this.setState({
      selected: value
    });
  }


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
    </Container>
    
    );
  }
}



const tabs = TabNavigator ({
  camera: { screen: camera },
  calcu: { screen: calcu },
  contra: { screen: contra }
},
  {
      tabBarPosition: 'bottom',
      swipeEnabled: false,
      tabBarComponent: props => {
          return (
            <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("camera")}>
                            <Icon name="bowtie" />
                            <NBText>กล้อง</NBText>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("calcu")}>
                            <Icon name="briefcase" />
                            <NBText>คำนวณ</NBText>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 2}
                            onPress={() => props.navigation.navigate("contra")}>
                            <Icon name="headset" />
                            <Text>ติดต่อ</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            /*
              <StyleProvider style={getTheme(platform)}>
                  <Footer>
                      <FooterTab>
                          <Button
                              active={props.navigationState.index === 0}
                              onPress={() => props.navigation.navigate("home")}>
                              <Icon name='ios-home' />
                              <NBText>หน้าหลัก</NBText>
                          </Button>
                          <Button
                              active={props.navigationState.index === 1}
                              onPress={() => props.navigation.navigate("camera")}>
                              <Icon name='ios-camera' />
                              <NBText>กล้อง</NBText>
                          </Button>
                          <Button
                              active={props.navigationState.index === 2}
                              onPress={() => props.navigation.navigate("calcu")}>
                              <Icon name='ios-apps' />
                              <NBText>คำนวณ</NBText>
                          </Button>
                          <Button
                              active={props.navigationState.index === 3}
                              onPress={() => props.navigation.navigate("cont")}>
                              <Icon name='ios-contact' />
                              <NBText>ติดต่อ</NBText>
                          </Button>
                      </FooterTab>
                  </Footer>
              </StyleProvider>
              
          );
      }
  });

  export default main = StackNavigator({
    Home: { screen: Home },
    Tabs: { screen: tabs }
  }, {
        initialRouteName: "Home",

    })  

const styles = StyleSheet.create({
  tainer: { 
      paddingTop: 0,
      //flexDirection: 'column',
      //justifyContent: 'flex-end',
      alignItems: 'center',
      
  }
});
*/