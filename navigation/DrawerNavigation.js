import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from "./BottomTabNavigator";
import Notifications from "../screens/Notifications";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="DrawerTest" component={TabNavigator} 
    options={{ drawerLabel: 'Home' }}
    />
    <Drawer.Screen name="Notifications" component={Notifications} />
  </Drawer.Navigator>
  );
}

export default DrawerNavigation;