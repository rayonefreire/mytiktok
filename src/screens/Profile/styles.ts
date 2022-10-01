import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
    height: 110,
    width: 110,
    borderRadius: 55,
    marginBottom: 25,
  },
  name: {
    fontSize: 20,
  }
});