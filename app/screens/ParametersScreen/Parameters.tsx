import React from 'react';
import {Button} from 'react-native-elements';

interface IProps {
  navigation: any;
  route: any;
}

const Parameters: React.FC<IProps> = ({navigation, route}) => {
  return (
    <Button
      title={`Go To Next Screen ${route.params.sortType}`}
      onPress={() => {
        navigation.navigate('Initial');
      }}
    />
  );
};

export default Parameters;
