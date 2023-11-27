import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.red,
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: '100%',
  },
  title: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
