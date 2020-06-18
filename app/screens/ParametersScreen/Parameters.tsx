import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {StackParamList} from '../../navigators/mainNavigatorTypes';
import styles from './styles';

type ScreenNavigationProp = StackNavigationProp<StackParamList, 'Parameters'>;
type ScreenRouteProp = RouteProp<StackParamList, 'Parameters'>;

interface IProps {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
}

const createRandomArray = (length: number): number[] => {
  let arr: number[] = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 1000));
  }
  return arr;
};

const Parameters: React.FC<IProps> = ({navigation, route}) => {
  const [numberOfNums, setNumberOfNums] = useState(20);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.questionText}>How Many Numbers Do You Want?</Text>
      <View style={styles.inputContainer}>
        <Button
          buttonStyle={styles.inputButton}
          title="-"
          onPress={() => {
            setNumberOfNums(numberOfNums - 5);
          }}
        />
        <Text style={styles.inputText}> {numberOfNums}</Text>
        <Button
          buttonStyle={styles.inputButton}
          title="+"
          onPress={() => {
            setNumberOfNums(numberOfNums + 5);
          }}
        />
      </View>
      <Button
        title={`Start ${route.params.sortType}`}
        onPress={() => {
          navigation.navigate('Sorting', {
            sortType: route.params.sortType,
            numArray: createRandomArray(numberOfNums),
          });
        }}
      />
    </View>
  );
};

export default Parameters;
