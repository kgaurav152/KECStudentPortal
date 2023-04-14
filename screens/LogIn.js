import React, {useState, useContext} from 'react'
import { StyleSheet, Pressable, Text, View, Dimensions, ImageBackground, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {AuthContext} from '../navigation/AuthProvider';
import { useNavigation } from "@react-navigation/native";


import { Color, FontSize, FontFamily, Border, Padding, Margin } from "../GlobalStyles";


const screenHeight=Dimensions.get('window').height;
const screenWidth=Dimensions.get('window').width;

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {login} = useContext(AuthContext);

  return (

    <View  style={styles.loginPage}>
      <ImageBackground
        style={styles.backgroundMeshImage}
        resizeMode="cover"
        source={require("../assets/background-mesh4.png")}
      >
        

      {/* LoginForm */}

      <View style={styles.loginFormParent}>
        <Text style={styles.greetingText}>Good to see you again!</Text>
        <View style={[styles.InputBoxParent, styles.mt14]}>
          <TextInput
            style={styles.dataInputBox}
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#a4a4a4"
          />
          <TextInput
            style={[styles.dataInputBox, styles.mt32]}
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
            placeholderTextColor="#a4a4a4"
          />
        </View>
      </View>  
       <Pressable
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text style={[styles.forgotPasswordText,  styles.mt14]}>Forgot Password?</Text>
      </Pressable>


      {/* formEndsHere */}

      <LinearGradient
        style={[styles.BtnConfig, styles.mt32]}
        locations={[0, 1]} 
        colors={["#a903d2", "#410095"]}
        useAngle={true}
        angle={225}
      >
        <Pressable
          onPress={() =>  login(email, password)}
        >
          <Text style={[styles.buttonText, styles.logInClr]}>Log In</Text>
        </Pressable>
      </LinearGradient>
      <Pressable
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={[styles.newToBtnText, styles.mt32]}>
          <Text>
            <Text>New to Student Portal? </Text>
            <Text style={{color:Color.amber}}>Sign Up {` >`}</Text>
          </Text>
        </Text>
      </Pressable>

      </ImageBackground>
    </View>

  );
};




const styles=StyleSheet.create({
  mt32: {
    marginTop: 32,
  },
  mt14: {
    marginTop: 14,
  },
  loginPage: {
    backgroundColor: Color.gray_100,
    // width: screenWidth,
    // height: screenHeight,
    // flex: 1,
  },
  backgroundMeshImage:{
    height : screenHeight,
    width: screenWidth,
    justifyContent:"center",
    alignItems:"center",
  },
  
  greetingText: {
    fontSize: FontSize.headersH1Heavy_size,
    lineHeight: 28,
    fontFamily: FontFamily.headersH2Light,
    color: Color.grayscalesWhite,
    textAlign: "center",
    alignSelf: "stretch",
    marginBottom: Margin.m_13xl,
  },
  
  dataInputBox: {
    // height: 52,
    alignSelf: "stretch",
    borderRadius: 15,
    borderWidth:1,
    // borderColor:"transparent",
    borderBottomWidth:3,
    borderBottomColor:Color.amber,
    color:"white",
  },
  InputBoxParent: {
    // alignSelf: "stretch",
    width: (.75*screenWidth)
  },

  // forgotPasswordbtn: {
  //   alignItems: "flex-end"
  // },
  
  forgotPasswordText: {
    fontSize: FontSize.buttonsButton_size,
    lineHeight: 17,
    fontWeight: "700",
    fontFamily: FontFamily.headersH1Heavy,
    textAlign: "right",
    color:Color.mediumblue,
  },


  BtnConfig:{
    padding:Padding.p_smi,
    borderRadius:Border.br_3xs,
    marginBottom:Margin.m_4xs,
    width:(screenWidth/2),
  },

  buttonText:{
    
    letterSpacing: 0.3,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.buttonsButton,
    fontSize: FontSize.buttonsButton_size,
    color: Color.grayscalesWhite,
    textAlign: "center",
  },
  
  newToBtnText: {
    // display: "flex",
    // width: 253,
    // height: 34,
    // alignItems: "center",
    // textAlign: "center",
    // fontSize: FontSize.buttonsButton_size,
    color:Color.darkgray
  },
});