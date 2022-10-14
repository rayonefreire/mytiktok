import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'black',
  },
  video: {
    width: windowWidth,
    height: windowHeight - 79,
  },
  empytComponent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150,
  },
  textEmpyt: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 20,
  }
});