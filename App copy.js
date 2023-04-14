/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import Landing from "./components/Landing";
import UserHome from "./components/UsersHome";
// import SignInLoader from "./screens/SignInLoader";
import ForgotPassword from "./components/ForgotPassword";
// import SignUpLoader from "./screens/SignUpLoader";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const App = () => {
//   return(
//     <>
//     {/* <Landing /> */}
//     {/* <LogIn /> */}
//     {/* <SignUp /> */}
//     {/* <ForgotPassword /> */}
//     {/* <ForgotPasswordModal /> */}
//     {/* <UserHome /> */}

//     </>
//   );
// };

const App = () => {
  const [user,setUser] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)
    })
  },[]);

  return (
    <SafeAreaView style={backgroundStyle}>
      
      <NavigationContainer>
        
      <View className={`App ${isProcessing ? 'disable-click' : ''}`}>
        
      <Stack.Navigator
            initialRouteName="Landing"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserHome"
              component={UserHome}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="SignInLoader"
              component={SignInLoader}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="SignUpLoader"
              component={SignUpLoader}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
      </View>

      </NavigationContainer>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
