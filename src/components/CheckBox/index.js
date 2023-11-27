import {TouchableOpacity, View, Image} from 'react-native';
import {styles} from './styles';
import React from 'react';

const CheckBox = ({checked, onCheck}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onCheck(!checked)}
      style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/Check.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(CheckBox);
