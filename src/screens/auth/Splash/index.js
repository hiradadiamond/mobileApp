import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';

const Splash = () => {
  onPress = () => {
    console.log('pressable');
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assets/splash.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Freelancer Nepal</Text>
        <Text style={[styles.innerTitle, styles.title]}>All you need!</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button title={'Sign Up'} />
      <Pressable>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
