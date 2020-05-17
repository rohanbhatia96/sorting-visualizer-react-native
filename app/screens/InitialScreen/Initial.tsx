import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';

const Initial: React.FC = () => {
  const buttons: string[] = ['Merge Sort', 'Quick Sort'];
  const ButtonGroup: React.FC = () => {
    const buttonGroup = buttons.map((button: string) => (
      <Button key={button} title={button} buttonStyle={styles.button} />
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
