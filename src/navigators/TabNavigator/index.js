import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home'
import Visualizar from '../../screens/Visualizar'

const TabNavigator = () => {
    const TabNavigator = createBottomTabNavigator()
  return (
    <TabNavigator.Navigator screenOptions={{headerShown: false}}>
        <TabNavigator.Screen name='home' component={Home}/>
        <TabNavigator.Screen name='visualizar' component={Visualizar}/>
    </TabNavigator.Navigator>
  )
}

export default TabNavigator
