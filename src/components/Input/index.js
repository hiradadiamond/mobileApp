import React, {useState} from 'react';
import {TextInput, View, Text, Pressable, Image} from 'react-native';
import {styles} from './styles';

const Input = ({label, placeHolder, isPassword}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const pressVisible = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !passwordVisible}
          placeholder={placeHolder}
          style={styles.input}
        />

        {isPassword ? (
          <Pressable onPress={pressVisible}>
            <Image
              style={styles.eye}
              source={
                passwordVisible
                  ? require('../../assets/eye.png')
                  : require('../../assets/eye_closed.png')
              }
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default React.memo(Input);
