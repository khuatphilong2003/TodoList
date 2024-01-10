import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationType } from '@/navigation/type'

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationType>()
  const navigationtoEditScreen = useCallback(()=>{
    navigation.navigate('EditTask');
  },[navigation])
  return (
    <View>
      <Text onPress={navigationtoEditScreen}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen