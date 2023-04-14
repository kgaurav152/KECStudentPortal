import React, {useState, useContext } from 'react'
import { Image, StyleSheet, Pressable, Text, View, TextInput, Dimensions, ImageBackground, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import { Color, FontSize, FontFamily, Border, Padding, Margin } from "../GlobalStyles";
import { AuthContext } from '../navigation/AuthProvider';


const screenHeight=Dimensions.get('window').height;
const screenWidth=Dimensions.get('window').width;




export default function Signup() {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const {register} = useContext(AuthContext);

    const passChecker = (password,confirmPassword) => {
      if (password==confirmPassword){register(email,password,name);}
       else {alert('Password & Confirm Password do not match. try again...!')
      }
       };

  return (
    
    <ScrollView  style={styles.signUpPage}>
      <ImageBackground
        style={styles.backgroundMeshImage}
        resizeMode="cover"
        source={require("../assets/background-mesh4.png")}
      >
        
      <View style={[styles.signUPFormParent, styles.mt28]}>
      <View  style={[styles.InputBoxParent, styles.mt14, styles.ml9]}>
        <TextInput
          style={styles.dataInputBox}
          placeholder="Email *"
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          keyboardType="email-address"
          placeholderTextColor="#a4a4a4"
        />
        <TextInput
          style={[styles.dataInputBox, styles.mt32]}
          labelValue={name}
          onChangeText={(userName) => setName(userName)}
          placeholder="Display Name *"
          keyboardType="default"
          placeholderTextColor="#a4a4a4"
        />
        <TextInput
          style={[styles.dataInputBox, styles.mt32]}
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholder="Password *"
          keyboardType="default"
          secureTextEntry={true}
          placeholderTextColor="#a4a4a4"
        />
        <TextInput
          style={[styles.dataInputBox, styles.mt32]}
          labelValue={confirmPassword}
          onChangeText={(userPassword) => setConfirmPassword(userPassword)}
          placeholder="Confirm Password *"
          keyboardType="default"
          placeholderTextColor="#a4a4a4"
        />
      </View>
      <View style={[styles.reqInfoTextParent, styles.mt39]}>
        <Text style={[styles.reqInfoTextHeader, styles.mb6]}>Password requirements :</Text>
        <View style={[styles.mt6]}>
          <View
            style={[styles.pt3, styles.reqInfoTextFlexBox]}
          >
            <Image
              style={styles.reqInfoTextIcon}
              resizeMode="cover"
              source={require("../assets/password-requirements.png")}
            />
            <Text
              style={[
                styles.ml9,
                styles.reqInfoTextTypo,
                styles.mb3,
              ]}
            >{`Must contain at least 8 characters, 1 special symbol (!@#$%&), 1 number`}</Text>
          </View>
          <View
            style={[
              styles.mt3,
              styles.reqInfoTextFlexBox,
            ]}
          >
            <Image
              style={styles.reqInfoTextIcon}
              resizeMode="cover"
              source={require("../assets/password-requirements.png")}
            />
            <Text
              style={[
                styles.ml9,
                styles.reqInfoTextTypo,
              ]}
            >
              May not include your name or birth date
            </Text>
          </View>
        </View>
      </View>
    </View>

    <LinearGradient
        style={[styles.BtnConfig, styles.mt32]}
        locations={[0, 1]} 
        colors={["#a903d2", "#410095"]}
        useAngle={true}
        angle={225}
      >
        <Pressable
          onPress={() => passChecker(password,confirmPassword)}
        >
          <Text style={[styles.buttonText, styles.logInClr]}>Sign Up</Text>
        </Pressable>
      </LinearGradient>
      <Pressable
        onPress={() => navigation.navigate('LogIn')}
      >
        <Text style={[styles.newToBtnText, styles.mt32]}>
          <Text>
            <Text>Already have an Account?  </Text>
            <Text style={{color:Color.amber}}>Log In {` >`}</Text>
          </Text>
        </Text>
      </Pressable>

    </ImageBackground>

    </ScrollView>
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

  signUpPage: {
    backgroundColor: Color.gray_100,
  },
  backgroundMeshImage:{
    height : screenHeight,
    width: screenWidth,
    justifyContent:"center",
    alignItems:"center",
  },
  

  signUPFormParent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  
  InputBoxParent: {
    // alignSelf: "stretch",
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

  reqInfoTextParent: {
    width: (.8*screenWidth)
  },

  reqInfoTextHeader: {
    fontSize: FontSize.buttonsButton_size,
    textAlign: "left",
    color: Color.darkgray,
    fontFamily: FontFamily.headersH2Light,
  },
  reqInfoTextFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  reqInfoTextIcon: {
    width: 8,
    height: 8,
  },
  reqInfoTextTypo: {
    fontSize: FontSize.bodyBody2_size,
    textAlign: "left",
    color: Color.darkgray,
    fontFamily: FontFamily.headersH2Light,
    lineHeight: 12,
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
    color:Color.darkgray
  },
});