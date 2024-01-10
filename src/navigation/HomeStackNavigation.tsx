import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeStackParamList } from './type'
import HomeScreen from '@/screens/home-screen';
import EditTaskScreen from '@/screens/edit-task-screen';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
        <Stack.Screen
        name='Home'
        component={HomeScreen}
        />
        <Stack.Screen
        name='EditTask'
        component={EditTaskScreen}
        />
    </Stack.Navigator>
  )
}

export default HomeStackNavigation