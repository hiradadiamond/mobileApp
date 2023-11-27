import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    color: Colors.blue,
    marginHorizontal: 13,
  },
  agreeTextBold: {
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 20,
  },
});
