import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import userHome from "../screens/UserHome";

const Stack = createStackNavigator();

const AppStack = () => {

  
    return (
      <Stack.Navigator initialRouteName={userHome}>
        <Stack.Screen
          name="userHome"
          component={userHome}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    );
  };
  
  export default AppStack;