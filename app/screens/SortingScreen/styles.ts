import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  mainContainer: ViewStyle;
  controlsContainer: ViewStyle;
  arrayContainer: ViewStyle;
  arraySingle: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  mainContainer: {
    flex: 1,
  },
  controlsContainer: {
    flex: 0.2,
  },
  arrayContainer: {
    flex: 0.8,
    flexDirection: 'row',
    backgroundColor: 'pink',
  },
  arraySingle: {
    flex: 1,
    marginHorizontal: 2,
  },
});

export default styles;
