import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreen';
import SignInScreen from '../Screens/SignInScreen.js';
import SignUpScreen from '../Screens/SignUpScreen';
import SignOutScreen from '../Screens/SignOutScreen';
import TodoListDetailsScreen from '../Screens/TodoListDetailsScreen.js';
import TodoListsScreen from '../Screens/TodoListsScreen.js';

import { styles, tabBarStyles } from '../Helpers/styles';

import { TokenContext } from '../Context/Context';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function NavigationTodo () {
  return (
      <Stack.Navigator initialRouteName='List'>
        <Stack.Screen name='List' component={TodoListsScreen} />
        <Stack.Screen name='Details' component={TodoListDetailsScreen} />
      </Stack.Navigator>
  )
}

export default function Navigation() {

  const [token] = useContext(TokenContext);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabBarStyles}>
        {token == null ? (
          <>
            <Tab.Screen name='SignIn' component={SignInScreen} />
            <Tab.Screen name='SignUp' component={SignUpScreen} />
          </>
        ) : (
          <>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='TodoLists' component={NavigationTodo}/>
            <Tab.Screen name='SignOut' component={SignOutScreen} />
          </>
        )}
      </Tab.Navigator>

    </NavigationContainer>
  );
}
