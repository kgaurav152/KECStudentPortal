import React from 'react'
import { Image, StyleSheet, Pressable, Text, View, SafeAreaView, ImageBackground, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding, Margin } from "../GlobalStyles";


const screenHeight=Dimensions.get('window').height;
const screenWidth=Dimensions.get('window').width;

export default function Landing() {
    const navigation = useNavigation();
  
  return (
    <View  style={styles.landingPage}>
    <ImageBackground
      style={styles.backgroundMeshImage}
      resizeMode="cover"
      source={require("../assets/background-mesh4.png")}
    >
        <View style={styles.headerTextContainer}>
        <Text style={styles.headerTextMajor}>KEC Student Portal</Text>
        <Text style={styles.headerTextMinor}>Katihar Engineering College</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/org_college_logo.png")} />
        </View>
        
        <View style={[styles.btnContainer, styles.mt32]}>
        <LinearGradient
          locations={[0, 1]}
          colors={["#9c3fe4", "#c65647"]}
          useAngle={true}
          angle={243}
          style={styles.BtnConfig}
        >
          <Pressable style={styles.pressableBtnStyle} onPress={() => navigation.navigate("SignUp")}>
            <Text>Sign Up</Text>
          </Pressable>
        </LinearGradient>
        <LinearGradient
          locations={[0, 1]}
          colors={["#9c3fe4", "#c65647"]}
          useAngle={true}
          angle={243} 
          style={styles.BtnConfig}
        >
          <Pressable style={styles.pressableBtnStyle} onPress={() => navigation.navigate("LogIn")}>
            <Text>Log In</Text>
          </Pressable>
        </LinearGradient>
      </View>
      <View style={[styles.footerTextContainer, styles.mt69]}>
        <Text style={{color:Color.grayscalesWhite}}>© RICWD Team , KEC</Text>
      </View>
      </ImageBackground>
    </View>
  );
};


const styles=StyleSheet.create({
  mt14: {
    marginTop: 14,
  },
   mt32: {
    marginTop: 32,
  },
  mt49: {
   marginTop: 49,
  },
  mt69: {
    marginTop: 69,
  },
  landingPage: {
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
fontSize:38,
fontWeight:'bold',
fontFamily:FontFamily.headersH1Heavy,
color:Color.grayscalesWhite,
},
headerTextMinor:{
fontSize:25,
color:Color.darkgray,
},
logoContainer:{
  marginTop:20,
  marginBottom:20,
  alignItems:"center",
},
btnContainer:{
  // flex:1,
  flexDirection:"column",
  alignItems: "center",
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

footerTextContainer:{
alignItems:"center",
},

});