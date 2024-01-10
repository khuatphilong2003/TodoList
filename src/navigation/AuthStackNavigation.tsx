import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthStackParamList } from './type'
import WelcomeScreen from '@/screens/welcome-screen'
import SignUpScreen from '@/screens/signup-screen'
import SignInScreen from '@/screens/signin-screen'

const Stack = createStackNavigator<AuthStackParamList>()

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen
      name='Welcome'
      component={WelcomeScreen}
      />
      <Stack.Screen
      name='SignUp'
      component={SignUpScreen}
      />
      <Stack.Screen
      name='SignIn'
      component={SignInScreen}/>
    </Stack.Navigator>
  )
}

export default AuthStackNavigation
