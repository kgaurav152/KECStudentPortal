import * as React from "react";
import { Pressable, Text, StyleSheet, TextInput, View, Dimensions } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Margin } from "../GlobalStyles";

const screenHeight=Dimensions.get('window').height;
const screenWidth=Dimensions.get('window').width;

const LoginForm = () => {
//   const navigation = useNavigation();

  return (
    <View style={styles.loginParent}>
      <View style={styles.loginFormParent}>
        <Text style={styles.greetingText}>Good to see you again!</Text>
        <View style={[styles.InputBoxParent, styles.mt14]}>
          <TextInput
            style={styles.dataInputBox}
            placeholder="Email"
            keyboardType="default"
            placeholderTextColor="#a4a4a4"
          />
          <TextInput
            style={[styles.dataInputBox, styles.mt32]}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry
            placeholderTextColor="#a4a4a4"
          />
        </View>
      </View>  
       <Pressable
        style={styles.forgotPasswordbtn}
        onPress={() => navigation.navigate("ForgotPasswordPage")}
      >
        <Text style={[styles.forgotPasswordText,  styles.mt14]}>Forgot Password?</Text>
      </Pressable>
    </View> 
  );
};

const styles = StyleSheet.create({
  mt32: {
    marginTop: 32,
  },
  mt14: {
    marginTop: 14,
  },
  loginFormParent: {
    // justifyContent:"flex-start"
  },

  forgotPasswordText: {
    fontSize: FontSize.buttonsButton_size,
    lineHeight: 17,
    fontWeight: "700",
    fontFamily: FontFamily.headersH1Heavy,
    textAlign: "right",
    color:Color.mediumblue,
  },
  forgotPasswordbtn: {
    // top: 214,
    // left: 255,
    // width: 121,
    // justifyContent: "center",
    // alignItems: "flex-end",
    // position: "absolute",
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
    // alignItems: "center",
    // justifyContent: "space-around"
    width: (.8*screenWidth)
  },
  goodToSeeYouAgainParent: {
    // top: 0,
    // left: 0,
    // width: 370,
    // alignItems: "center",
    // position: "absolute",
  },
  forgotPasswordParent: {
    // top: 285,
    // left: 27,
    // width: 376,
    // height: 231,
    // position: "absolute",
  },
});

export default LoginForm;
