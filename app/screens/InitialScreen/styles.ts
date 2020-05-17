import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  mainContainer: ViewStyle;
  headingContainer: ViewStyle;
  contentContainer: ViewStyle;
  appHeading: TextStyle;
  authorHeading: TextStyle;
  questionText: TextStyle;
  button: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  mainContainer: {
    flex: 1,
  },
  headingContainer: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 0.65,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  appHeading: {
    fontSize: 32,
    color: 'gray',
  },
  authorHeading: {
    color: 'gray',
  },
  questionText: {
    paddingBottom: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    width: 200,
    paddingVertical: 15,
    marginVertical: 5,
  },
});

export default styles;
