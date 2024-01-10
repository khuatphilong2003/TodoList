import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStackNavigation from './AuthStackNavigation'
import BottomTabNaivgation from './BottomTabNaivgation'

const Navigation = () => {
    // const user = true
  return (
    <NavigationContainer>
        <BottomTabNaivgation/>
    </NavigationContainer>
  )
}

export default Navigation
