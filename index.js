/**
 * @format
 */
//import {document} from 'react-script';
import {AppRegistry} from 'react-native';
import App from './App';
//import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
//import CameraAccessScreen from './src/screens/CameraAccessScreen';
//import AppNavigation from './src/navigations/AppNavigation';
import AxiosGetData from './src/screens/AxiosGetData';

import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () =>App);

