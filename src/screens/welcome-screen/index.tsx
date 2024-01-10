import {Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenNavigationType} from '@/navigation/type';

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'Welcome'>>();
  const navigationToSignInScreen = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);
  const navigationToSignUpScreen = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={navigationToSignInScreen}>
        <Text>Signin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigationToSignUpScreen}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
