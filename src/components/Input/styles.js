import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: Colors.blue,
    fontWeight: '500',
    marginBottom: 9,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 22,
    flex: 1,
  },
  eye: {
    width: 18,
    height: 18,
    marginHorizontal: 20,
  },
});
