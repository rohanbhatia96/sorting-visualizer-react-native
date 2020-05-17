import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InitialScreen from '../screens/InitialScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Sorting Visualizer">
      <Stack.Screen name="Sorting Visualizer" component={InitialScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
