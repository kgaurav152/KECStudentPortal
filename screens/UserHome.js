import React, {useContext, useState} from "react";
import { Image, StyleSheet, Pressable, Text, View, SafeAreaView, ImageBackground, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontSize, FontFamily, Border, Padding, Margin } from "../GlobalStyles";
import {AuthContext} from '../navigation/AuthProvider';
// import { useNavigation } from "@react-navigation/native";

const screenHeight=Dimensions.get('window').height;
const screenWidth=Dimensions.get('window').width;

const UserHome = () => {
  // const navigation = useNavigation();
  const {user, logout} = useContext(AuthContext);
  
  return (
    <View  style={styles.userPage}>
      <ImageBackground
        style={styles.backgroundMeshImage}
        resizeMode="cover"
        source={require("../assets/background-mesh4.png")}
      >
        
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTextMajor}>KEC Student Portal</Text>
        </View>
        <View style={[styles.headerTextContainer, styles.mt49]}>
          <Text style={styles.headerTextMinor}>Welcome Back !</Text>
        </View>
    
      <View style={styles.title}>
        <Text style={[styles.mt14]}>
          <Text style={styles.displayNameText}>{`We missed you, `}</Text>
          <Text style={styles.displayName}>{user.displayName}</Text>
        </Text>
      </View>
      <View  style = {[styles.btnContainer, styles.mt32]}>
      <LinearGradient
        style={styles.BtnConfig}
        locations={[0, 1]}
        colors={["#a903d2", "#410095"]}
        useAngle={true}
        angle={225}
      >
        <Pressable style={styles.pressableBtnStyle} onPress={() => logout()}>
          <Text style={{color:'white'}}>Log Out</Text>
        </Pressable>
      </LinearGradient>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: 14,
  },
  mt21: {
    marginTop: 21,
  },
   mt32: {
    marginTop: 32,
  },
  mt49: {
   marginTop: 49,
 },
  userPage: {
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

  headerTextContainer:{
  alignItems:"center",
  // marginTop:10,
  },

  headerTextMajor:{
  fontSize:35,
  fontWeight:'bold',
  fontFamily:FontFamily.headersH1Heavy,
  color:Color.grayscalesWhite,
  },
  headerTextMinor:{
  fontSize:25,
  color:Color.grayscalesWhite,
  },

  btnContainer:{
    // alignItems: "center",
  },
  BtnConfig:{
  
    padding:Padding.p_smi,
    borderRadius:Border.br_3xs,
    marginBottom:Margin.m_4xs,
    width:(screenWidth/2),
  },
  
  pressableBtnStyle:{
    // flex:1,
    // flexDirection:"column",
    alignItems: "center",
    
  },
  displayNameText: {
    fontFamily: FontFamily.poppinsMedium,
    color: Color.darkgray,
    fontWeight: "500",
  },
  displayName: {
    fontFamily: FontFamily.poppinsBold,
    color: Color.amber,
    fontWeight: "700",
  },
});

export default UserHome;
