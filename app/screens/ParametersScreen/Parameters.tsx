import React from 'react';
import {Button} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {StackParamList} from '../../navigators/mainNavigatorTypes';

type ScreenNavigationProp = StackNavigationProp<StackParamList, 'Parameters'>;
type ScreenRouteProp = RouteProp<StackParamList, 'Parameters'>;

interface IProps {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
}

const createRandomArray = (): number[] => {
  let arr: number[] = [];
  for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 1000));
  }
  return arr;
};

const Parameters: React.FC<IProps> = ({navigation, route}) => {
  return (
    <Button
      title={`Go To Next Screen ${route.params.sortType}`}
      onPress={() => {
        navigation.navigate('Sorting', {
          sortType: route.params.sortType,
          numArray: createRandomArray(),
        });
      }}
    />
  );
};

export default Parameters;
