import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InitialScreen from '../screens/InitialScreen';
import ParametersScreen from '../screens/ParametersScreen';
import {StackParamList} from './mainNavigatorTypes';

const Stack = createStackNavigator<StackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Initial">
      <Stack.Screen
        name="Initial"
        component={InitialScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Parameters"
        component={ParametersScreen}
        options={{title: 'Choose Parameters'}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
