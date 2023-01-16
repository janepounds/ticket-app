import React from 'react';
import NewTicket from '../screens/NewTicket';
import Profile from '../screens/Profile';
import HomeScreen from '../screens/HomeScreen';
import Settings from "../screens/Settings";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const MainNavigationStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen}
      //  options ={{
      //   title: 'UWEC Ticket App',
      //   headerStyle: {
      //     backgroundColor: '#17c261',
      //     visible: false
      //   },
      //   headerTintColor: '#fff',
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //   },
        
      
      // }}
      />
      <Stack.Screen name='NewTicket' component={NewTicket}
       options={{ title: 'New Ticket' }} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Test" component={Settings} />

    </Stack.Navigator>
  );
}

export { MainNavigationStack };