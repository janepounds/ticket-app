import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { MainNavigationStack } from "./MainNavigationStack";
import Settings from "../screens/Settings";
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#10ac84"
    //inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#ffffff' }}


    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#10ac84',
      tabBarInactiveTintColor: '#3e2465',
    })}   
  >
      
    <Tab.Screen name="Home" component={MainNavigationStack} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
  );
};

export default BottomTabNavigator;