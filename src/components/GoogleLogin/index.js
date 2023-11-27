import {TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import React from 'react';

const Button = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <Image
        style={styles.image}
        source={require('../../assets/google_login.png')}
      />
    </TouchableOpacity>
  );
};

export default React.memo(Button);
