import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import React from 'react';

const Button = ({title, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.6}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
