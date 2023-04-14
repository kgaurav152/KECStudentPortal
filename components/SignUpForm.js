import * as React from "react";
import { TextInput, StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const screenHeight=Dimensions.get('window').height;
const screenWidth=Dimensions.get('window').width;

const SignUpForm = () => {
  return (
    <View style={[styles.signUPFormParent, styles.mt28]}>
      <View  style={[styles.InputBoxParent, styles.mt14, styles.ml9]}>
        <TextInput
          style={styles.dataInputBox}
          placeholder="Email *"
          keyboardType="default"
          placeholderTextColor="#a4a4a4"
        />
        <TextInput
          style={[styles.dataInputBox, styles.mt32]}
          placeholder="Display Name *"
          keyboardType="default"
          placeholderTextColor="#a4a4a4"
        />
        <TextInput
          style={[styles.dataInputBox, styles.mt32]}
          placeholder="Password *"
          keyboardType="default"
          secureTextEntry
          placeholderTextColor="#a4a4a4"
        />
        <TextInput
          style={[styles.dataInputBox, styles.mt32]}
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
  );
};

const styles = StyleSheet.create({
  mt32: {
    marginTop: 32,
  },
  ml9: {
    marginLeft: 9,
  },
  mt3: {
    marginTop: 3,
  },
  mt6: {
    marginTop: 6,
  },
  mt39: {
    marginTop: 39,
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

  
  signUPFormParent: {
    alignItems: "center",
    alignSelf: "stretch",
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
});

export default SignUpForm;
