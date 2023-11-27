import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    height: 200,
    width: '100%',
  },
  titleContainer: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  innerTitle: {
    color: Colors.red,
    textDecorationLine: 'underline',
  },
  footerText: {
    color: Colors.black,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
