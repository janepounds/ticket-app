import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { MainNavigationStack } from "./MainNavigationStack";
import Settings from "../screens/Settings";


const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }}
  >
      
    <Tab.Screen name="Home" component={MainNavigationStack} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
  );
};

export default BottomTabNavigator;