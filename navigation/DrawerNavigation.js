import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from "./BottomTabNavigator";
import Notifications from "../screens/Notifications";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="UWEC TICKET APP" component={TabNavigator} 
    options={{ drawerLabel: 'Home' }}
    />
    <Drawer.Screen name="History" component={Notifications} />
  </Drawer.Navigator>
  );
}

export default DrawerNavigation;