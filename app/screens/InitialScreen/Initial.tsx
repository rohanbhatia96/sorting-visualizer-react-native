import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../navigators/mainNavigatorTypes';
import styles from './styles';

type ScreenNavigationProp = StackNavigationProp<StackParamList, 'Initial'>;
interface IProps {
  navigation: ScreenNavigationProp;
}

const Initial: React.FC<IProps> = ({navigation}) => {
  const buttons: string[] = ['Merge Sort', 'Quick Sort'];
  const ButtonGroup: React.FC = () => {
    const buttonGroup = buttons.map((button: string) => (
      <Button
        key={button}
        title={button}
        buttonStyle={styles.button}
        onPress={() => {
          navigation.navigate('Parameters', {sortType: button});
        }}
      />
    ));
    return <>{buttonGroup}</>;
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.appHeading}>Sorting Visualizer</Text>
        <Text style={styles.authorHeading}>by Rohan Bhatia</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.questionText}>
          Which sort would you like to visualize?
        </Text>
        <ButtonGroup />
      </View>
    </View>
  );
};

export default Initial;
