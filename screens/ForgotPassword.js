import React, {useContext, useState} from 'react'
import {  Image, StyleSheet, Pressable, Text, View, TextInput, Dimensions, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../navigation/AuthProvider';


import { Color, FontSize, FontFamily, Border, Padding, Margin } from "../GlobalStyles";


const screenHeight=Dimensions.get('window').height;
const screenWidth=Dimensions.get('window').width;




export default function ForgotPassword() {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const {forgotPassword} = useContext(AuthContext);
    
    const callForgot = async (email) => {
    const respond = await forgotPassword(email);
    if (respond=="hello"){
    navigation.navigate('LogIn');};
    }
    

  
  return (
    
    <View  style={styles.forgotPasswordPage}>
      <ImageBackground
        style={styles.backgroundMeshImage}
        resizeMode="cover"
        source={require("../assets/background-mesh4.png")}
      >
        <View style={[styles.forgotForm]}>
      
      <Text style={[styles.formHeaderText, styles.formHeaderTypo]}>
        Let’s recover your account.
      </Text>
      <Text style={[styles.formSubHeaderText, styles.formHeaderTypo, styles.mt39]}>
        Enter the email associated with your account.
      </Text>
      <View style={[styles.InputBoxParent, styles.mt19]}>
      <TextInput
        style={styles.dataInputBox}
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="#a4a4a4"
      />
      </View>
     </View>

        <LinearGradient
        style={[styles.BtnConfig, styles.mt39]}
        locations={[0, 1]}
        colors={["#a903d2", "#410095"]}
        useAngle={true}
        angle={225}
      >
        <Pressable
          onPress={() => callForgot(email)}
        >
          <Text style={[styles.buttonText, styles.buttonTextFlexBox]}>
            Send Reset Email
          </Text>
        </Pressable>
      </LinearGradient>

      </ImageBackground>
    </View>    
  );
};



const styles=StyleSheet.create({
  mt3: {
    marginTop: 3,
  },
  mt6: {
    marginTop: 6,
  },
  mt14: {
    marginTop: 14,
  },
  mt19:{marginTop:19},
  mt32: {
    marginTop: 32,
  },
  mt39: {
    marginTop: 39,
  },
  ml9: {
    marginLeft: 9,
  },
  mb3: {
    marginBottom: 3,
  },
  mb6: {
    marginBottom: 6,
  },
  pt3: {
    paddingTop: Padding.p_10xs,
  },

  forgotPasswordPage: {
    backgroundColor: Color.gray_100,
  },

  backgroundMeshImage:{
    height : screenHeight,
    width: screenWidth,
    justifyContent:"center",
    alignItems:"center",
  },
  
  forgotForm:{},
  formHeaderTypo: {
    textAlign: "left",
    color: Color.grayscalesWhite,
    fontFamily: FontFamily.headersH2Light,
  },
  formSubHeaderText: {
    // top: "26.79%",
    // fontSize: FontSize.bodyBody2_size,
    // lineHeight: 14,
  },
  formHeaderText: {
    fontSize: FontSize.headersH1Heavy_size,
    lineHeight: 28,
  },
  InputBoxParent: {
    alignSelf: "stretch",
    width: (.8*screenWidth)
  },
    
  dataInputBox: {
    alignSelf: "stretch",
    borderRadius: 15,
    borderWidth:1,
    borderBottomWidth:3,
    borderBottomColor:Color.amber,
    color:"white",
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

}
);