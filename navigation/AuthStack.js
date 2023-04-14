import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from "../screens/Landing";
import SignUp from '../screens/SignUp';
import LogIn from '../screens/LogIn';
import ForgotPassword from "../screens/ForgotPassword";
import { Pressable, View } from 'react-native';

const Stack = createStackNavigator();

const AuthStack = () => {

  
    return (
      <Stack.Navigator initialRouteName={Landing}>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn} 
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
            },
            headerTitle: 'Log In',
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <Pressable
                  name="plus"
                  size={22}
                  backgroundColor="#fff"
                  color="#2e64e5"
                  onPress={() => navigation.goBack}
                />
              </View>
            ),
            }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
            },
            headerTitle: 'Signup',
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <Pressable
                  name="plus"
                  size={22}
                  backgroundColor="#fff"
                  color="#2e64e5"
                  onPress={() => navigation.goBack}
                />
              </View>
        ),
          }}
        />
        <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 18,
              },
              headerTitle: 'Forgot Password',
              headerRight: () => (
                <View style={{marginRight: 10}}>
                  <Pressable
                    name="plus"
                    size={22}
                    backgroundColor="#fff"
                    color="#2e64e5"
                    onPress={() => navigation.goBack}
                  />
                </View>
          ),
            }}
        />
      </Stack.Navigator>
    );
  };
  
  export default AuthStack;