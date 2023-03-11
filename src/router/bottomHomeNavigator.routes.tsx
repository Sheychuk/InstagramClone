import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from './home.routes';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import {ParamListBase, RouteProp} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

type ScreenOption = (props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}) => BottomTabNavigationOptions;

const screenOptions: ScreenOption = ({route}) => ({
  tabBarIcon: ({color, size}) => {
    if (route.name === 'HomeStack') {
      return <Foundation name="home" size={size} color={color} />;
    }
    if (route.name === 'Discovery') {
      return <Feather name="search" size={size} color={color} />;
    }
    if (route.name === 'Post') {
      return <Feather name="plus-square" size={size} color={color} />;
    }
    if (route.name === 'Notifications') {
      return <AntDesign name="hearto" size={size} color={color} />;
    }
    if (route.name === 'Profile') {
      return <Ionicons name="person-outline" size={size} color={color} />;
    }
  },
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: 'gray',
  tabBarShowLabel: false,
  headerShown: false,
});

const BottomHomeNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="HomeStack" component={HomeStackScreen} />
    <Tab.Screen name="Discovery" component={DiscoveryScreen} />
    <Tab.Screen name="Post" component={CreatePostScreen} />
    <Tab.Screen name="Notifications" component={NotificationsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default BottomHomeNavigator;
