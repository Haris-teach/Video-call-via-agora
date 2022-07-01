//=================================== React Native Import Files =====================

import React, {useRef, useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';

import CallScreen from '../screens/common/CallScreen';
import LoginScreen from '../screens/auth/Login';

const RootStack = createNativeStackNavigator();
const Stack = () => {
  const isLogin = useSelector(state => state.authReducer.isLogin);
  const token = useSelector(state => state.authReducer.token);

  const AfterLoginAppContainer = () => {
    return (
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerMode: 'none',
            headerShown: false,
          }}>
          <RootStack.Screen name={'Home'} component={CallScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };

  const BeforeLoginAppContainer = () => {
    return (
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerMode: 'none',
            headerShown: false,
          }}>
          <RootStack.Screen name="Login" component={LoginScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };

  if (isLogin == false) {
    return <BeforeLoginAppContainer />;
  } else {
    return (
      <>
        <AfterLoginAppContainer />
      </>
    );
  }
};
export default Stack;
