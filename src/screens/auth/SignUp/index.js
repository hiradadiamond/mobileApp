import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import CheckBox from '../../../components/CheckBox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  onBackPress = () => {
    console.log('pressable back');
  };
  return (
    <View style={styles.container}>
      <AuthHeader title={'Sign Up'} />
      <Input label={'Name'} placeHolder="John Doe" />
      <Input label={'E-mail'} placeHolder="example@email.com" />
      <Input isPassword label={'Password'} placeHolder="*****" />

      <View style={styles.agreeRow}>
        <CheckBox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with<Text>Terms</Text> & Privacy
        </Text>
      </View>

      <Button style={styles.button} title="Sign Up" />
      <Separator text="Or Sign up with" />
      <GoogleLogin />
    </View>
  );
};

export default React.memo(SignUp);
