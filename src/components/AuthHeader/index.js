import {Pressable, Text, View, Image} from 'react-native';
import {styles} from './styles';
import React from 'react';

const AuthHeader = ({title, onBackPress}) => {
  console.log('title', title);
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress} hitSlop={20}>
        <Image
          style={styles.image}
          source={require('../../assets/auth_back_icon.png')}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default React.memo(AuthHeader);
