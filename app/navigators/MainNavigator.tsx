import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InitialScreen from '../screens/InitialScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#E0E0FA',
          elevation: 0,
        },
        headerTintColor: '#25283D',
      }}>
      <Stack.Screen name="Initial" component={InitialScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
