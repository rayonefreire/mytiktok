import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profile: {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 25,
  },
  name: {
    fontSize: 20,
  },
  email: {
    fontSize: 18,
    color: 'gray',
    marginTop: 5,
  }
});