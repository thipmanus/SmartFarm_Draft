import { createStackNavigator } from 'react-navigation';

//import camera from './screens/camera';
import home from './screens/home';


const Navigations = createStackNavigator({
  home: { screen: home } 
});

export default Navigations;