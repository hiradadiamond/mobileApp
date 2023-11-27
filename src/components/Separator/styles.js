import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    height: 1,
    backgroundColor: Colors.lightGrey,
    flex: 1,
  },
  text: {
    color: Colors.blue,
    fontWeight: '500',
    marginHorizontal: 8,
  },
});
