import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  mainContainer: ViewStyle;
  questionText: TextStyle;
  inputContainer: ViewStyle;
  inputButton: ViewStyle;
  inputText: TextStyle;
}
const styles = StyleSheet.create<Styles>({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  questionText: {
    marginVertical: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  inputButton: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginHorizontal: 30,
    marginBottom: 50,
  },
  inputText: {
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export default styles;
