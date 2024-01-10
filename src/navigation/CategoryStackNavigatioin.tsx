import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CategoriesStackParamList } from './type'
import CategoryScreen from '@/screens/category-screen'
import CategoriesScreen from '@/screens/categories-screen'
import CreateCategoryScreen from '@/screens/create-category-screen'
import EditCategoryScreen from '@/screens/edit-category-screen'

const Stack = createStackNavigator<CategoriesStackParamList>()

const CategoryStackNavigatioin = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
        <Stack.Screen
        name='Category'
        component={CategoryScreen}
        />
        <Stack.Screen
        name='Categories'
        component={CategoriesScreen}
        />
        <Stack.Screen
        name='CreateCategory'
        component={CreateCategoryScreen}
        />
        <Stack.Screen
        name='EditCategory'
        component={EditCategoryScreen}
        />
    </Stack.Navigator>
  )
}

export default CategoryStackNavigatioin