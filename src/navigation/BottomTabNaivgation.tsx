import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootBottomTabParamList} from './type';
import HomeStackNavigation from './HomeStackNavigation';
import TodayScreen from '@/screens/today-screen';
import CompletedScreen from '@/screens/completed-screen';
import CategoryStackNavigatioin from './CategoryStackNavigatioin';
import SVGHome from '@/assets/svg/SVGHome.svg';
import SVGHomeChoose from '@/assets/svg/SVGHomeChoose.svg';
import SVGToday from '@/assets/svg/SVGToday.svg';
import SVGTodayChoose from '@/assets/svg/SVGTodayChoose.svg';
import SVGComplete from '@/assets/svg/SVGComplete.svg';
import SVGCompleteChoose from '@/assets/svg/SVGCompleteChoose.svg';
import SVGCategory from '@/assets/svg/SVGCategory.svg';
import SVGCategoryChoose from '@/assets/svg/SVGCategoryChoose.svg'

const Tab = createBottomTabNavigator<RootBottomTabParamList>();
const BottomTabNaivgation = () => {
  const renderItemIcon = useCallback((focused: boolean, name: string) => {
    switch (name) {
      case 'HomeStack':
        return !focused ? (
          <SVGHome width={25} height={25} />
        ) : (
          <SVGHomeChoose width={25} height={25} />
        );
      case 'Completed':
        return !focused ? (
          <SVGComplete width={25} height={25} />
        ) : (
          <SVGCompleteChoose width={25} height={25} />
        );
      case 'Today':
        return !focused ? (
          <SVGToday width={25} height={25} />
        ) : (
          <SVGTodayChoose width={25} height={25} />
        );
      case 'CategoriesStack':
        return !focused ? (
          <SVGCategory width={25} height={25} />
        ) : (
          <SVGCategoryChoose width={25} height={25} />
        );
    }
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}>
        <Tab.Screen
          name={'HomeStack'}
          component={HomeStackNavigation}
          options={() => ({
            headerShown: false,
            tabBarIcon: ({focused}) => renderItemIcon(focused, 'HomeStack'),
          })}
        />
        <Tab.Screen
          name={'Today'}
          component={TodayScreen}
          options={() => ({
            headerShown: false,
            tabBarIcon: ({focused}) => renderItemIcon(focused, 'Today'),
          })}
        />
        
         <Tab.Screen
          name={'Completed'}
          component={CompletedScreen}
          options={() => ({
            headerShown: false,
            tabBarIcon: ({focused}) => renderItemIcon(focused, 'Completed'),
          })}
        />
        <Tab.Screen
          name={'CategoriesStack'}
          component={CategoryStackNavigatioin}
          options={() => ({
            headerShown: false,
            tabBarIcon: ({focused}) => renderItemIcon(focused, 'CategoriesStack'),
          })}
        />
    </Tab.Navigator>
    
  );
};

export default BottomTabNaivgation;
