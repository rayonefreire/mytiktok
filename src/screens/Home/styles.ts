import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'black',
  },
  header: {
    marginTop: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  video: {
    width: windowWidth,
    height: windowHeight - 80,
  },
});