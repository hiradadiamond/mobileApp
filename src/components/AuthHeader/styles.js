import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 54,
  },
  image: {
    width: 18,
    height: 18,
  },
  title: {
    color: Colors.red,
    fontSize: 26,
    fontWeight: '600',
    paddingHorizontal: 16,
  },
});
