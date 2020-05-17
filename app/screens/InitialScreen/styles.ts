import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  mainContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  mainContainer: {
    flex: 1,
  },
});

export default styles;
