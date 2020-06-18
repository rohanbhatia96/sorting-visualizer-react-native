import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {RouteProp} from '@react-navigation/native';
import {StackParamList} from '../../navigators/mainNavigatorTypes';

import {getMergeSortAnimations} from '../../helpers/mergeSort';
import {getQuickSortAnimations} from '../../helpers/quickSort';
import styles from './styles';

type ScreenRouteProp = RouteProp<StackParamList, 'Sorting'>;

interface IProps {
  route: ScreenRouteProp;
}

const Sorting: React.FC<IProps> = ({route}) => {
  const [inputArray, setInputArray] = useState<number[]>(route.params.numArray);
  const [barColor, setBarColor] = useState<string[]>(
    Array(inputArray.length).fill('#add8e6'),
  );

  const ArrayView: React.FC = () => {
    const viewGroup = inputArray.map((num: number, index: number) => (
      <View
        key={index}
        style={[
          styles.arraySingle,
          {
            height: `${(num / 1000) * 100}%`,
            backgroundColor: barColor[index],
            marginHorizontal: 100 / inputArray.length,
          },
        ]}
      />
    ));
    return <>{viewGroup}</>;
  };

  const onSortingStart = () => {
    if (route.params.sortType === 'Merge Sort') {
      mergeSortingStart();
    } else {
      quickSortingStart();
    }
  };

  const mergeSortingStart = () => {
    let animArr = getMergeSortAnimations(inputArray);
    for (let i = 0; i < animArr.length; i++) {
      let barColorAnim = Array(inputArray.length).fill('#add8e6');
      barColorAnim = barColorAnim.fill(
        '#399cbd',
        animArr[i].scanArea.start,
        animArr[i].scanArea.end,
      );
      let animations = animArr[i].animations;
      let offset = animArr[i].offset;
      setTimeout(() => {
        setBarColor(barColorAnim);
        setInputArray((prevArray) => {
          let newArray = [...prevArray];
          for (let j = 0; j < animations.length; j++) {
            newArray[j + offset] = animations[j];
          }
          return newArray;
        });
      }, 0);
    }
  };

  const quickSortingStart = () => {
    let tempArray = [...inputArray];
    let anims = getQuickSortAnimations(tempArray);
    for (let i = 0; i < anims.length; i++) {
      let barColorAnim = Array(inputArray.length).fill('#add8e6');
      barColorAnim[anims[i].index1] = '#399cbd';
      barColorAnim[anims[i].index2] = '#399cbd';
      setTimeout(() => {
        setBarColor(barColorAnim);
        setInputArray((prevArray) => {
          let newArray: number[];
          let temp: number;
          newArray = [...prevArray];
          temp = newArray[anims[i].index1];
          newArray[anims[i].index1] = newArray[anims[i].index2];
          newArray[anims[i].index2] = temp;
          return newArray;
        });
      }, i * 1000);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.controlsContainer}>
        <Button title="Start Sort" onPress={onSortingStart} />
      </View>
      <View style={styles.arrayContainer}>
        <ArrayView />
      </View>
    </View>
  );
};

export default Sorting;
