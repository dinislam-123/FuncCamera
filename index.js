/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Home from './src/Home';
import Router from './src/Router.js';
// import SlideImage from './src/SlideImage'
// import DisplayText from './src/DisplayText';
// import ChatApp from './src/ChatApp';
// import DataTable from './src/DataTable';
// import RealData from './src/RealData';
// import Wallpaper from './src/Wallpaper';
import SlideNoAnimate from './src/SlideNoAnimate';

AppRegistry.registerComponent(appName, () => Router);
