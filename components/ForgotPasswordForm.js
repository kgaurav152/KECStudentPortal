import * as React from "react";
import { TextInput, StyleSheet, Text, View, Dimensions } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";


const screenHeight=Dimensions.get('window').height;
const screenWidth=Dimensions.get('window').width;

const RecoverForm = () => {
  return (
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
        placeholder="Email"
        keyboardType="default"
        placeholderTextColor="#a4a4a4"
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  mt9:{marginTop:9},
  mt19:{marginTop:19},
  mt39:{marginTop:39},

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
  
});

export default RecoverForm;
