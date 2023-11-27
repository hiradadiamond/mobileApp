import {Text, View} from 'react-native';
import {styles} from './styles';
import React from 'react';

const Button = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default React.memo(Button);
