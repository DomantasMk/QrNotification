import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import HomeScreen from '../screens/HomeScreen';
import QrScreen from '../screens/QrScreen';
import TimerScreen from '../screens/TimerScreen';

const MainNavigator = createStackNavigator({
Home:HomeScreen,
ScannerQr:QrScreen,
Timer:TimerScreen,
});

const App = createAppContainer(MainNavigator);

export default App;