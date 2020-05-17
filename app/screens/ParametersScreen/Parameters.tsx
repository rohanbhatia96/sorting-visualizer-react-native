import React from 'react';
import {Button} from 'react-native-elements';
const Parameters: React.FC = () => {
  return (
    <Button
      title="Go To Next Screen"
      onPress={() => {
        console.log('presed');
      }}
    />
  );
};

export default Parameters;
