import react from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

import { useNavigation } from "@react-navigation/native";


const ForgotPasswordModal = ({ onClose }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.forgotPasswordModal}>
      <Text
        style={[
          styles.infoTextTypo,
          styles.infoText,
        ]}
      >
        Email with a reset password link sent successfully !
      </Text>
      <LinearGradient
        style={[styles.largeButton, styles.mt39]}
        locations={[0, 1]}
        colors={["#a903d2", "#410095"]}
        useAngle={true}
        angle={225}
      >
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => navigation.navigate('Landing')}
        >
          <Text style={styles.buttonText}>
            Continue
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({

  mt39:{marginTop:39},

  forgotPasswordModal: {
    borderRadius: 25,
    backgroundColor: "#060417",
    padding: 60,
    alignItems: "center",
  },
  infoText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  infoTextTypo: {
    fontSize: FontSize.headersH1Heavy_size,
    letterSpacing: 0.5,
    lineHeight: 36,
    fontWeight: "800",
    fontFamily: FontFamily.manropeExtrabold,
    color: Color.grayscalesWhite,
  },
  largeButton: {
    width: 270,
    height: 67,
    justifyContent:'center',
  },
  buttonText: {
    fontSize: FontSize.buttonsButtonLarge_size,
    letterSpacing: 0.4,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.buttonsButton,
    color: Color.grayscalesWhite,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
  },
});

export default ForgotPasswordModal;
