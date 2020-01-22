// npm install --save react-navigation
// npm install --save react-native-gesture-handler
// npm install --save react-navigation-stack
// react-native link react-native-safe-area-context
// react-native link


import React from 'react';
import {createAppContainer} from 'react-navigation';
// import {StackNavigator} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer";


import Home from './Home';
import DisplayText from './DisplayText';
import ChatApp from './ChatApp';
import DataTable from './DataTable';
import RealData from './RealData';
import Wallpaper from './Wallpaper';
import SlideImage from './SlideImage';
import SlideNoAnimate from './SlideNoAnimate';

const AppNavigator = createStackNavigator({
  Home:        { screen: Home},
  DisplayText: { screen: DisplayText },
  ChatApp:     { screen: ChatApp },
  DataTable:   { screen: DataTable},
  RealData:    { screen: RealData},
  Wallpaper:   {screen: Wallpaper},
  SlideImage: {screen: SlideImage},
  SlideNoAnimate: {screen: SlideNoAnimate}
});

const AppNavigator1 = createDrawerNavigator({
  Home:        { screen: Home} ,
  DisplayText: { screen: DisplayText },
  ChatApp:     { screen: ChatApp },
  DataTable:   { screen: DataTable},
  RealData:    { screen: RealData},
  Wallpaper:   {screen: Wallpaper},
  SlideImage:  {screen: SlideImage},
  SlideNoAnimate: {screen: SlideNoAnimate}
});


const Router = createAppContainer(AppNavigator1, AppNavigator);

export default Router;
