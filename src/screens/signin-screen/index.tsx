import {Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/navigation/type'


const SignInScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>()
    const navigationToSignUpScreen =useCallback(()=>{
        navigation.navigate('SignUp')
    },[])
  return (
    <View>
      <TouchableOpacity
      onPress={navigationToSignUpScreen}
      >
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignInScreen

