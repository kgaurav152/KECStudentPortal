import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View, SafeAreaView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const UsersPage = () => {
  return (
    <SafeAreaView style={styles.usersPage}>
      <Image
        style={styles.backgroundMeshIcon}
        resizeMode="cover"
        source={require("../assets/background-mesh.png")}
      />
      <View>
      <Text style={[styles.kecStudentPortal, styles.buttonTextClr]}>
        Kec Student Portal
      </Text>
      <View style={styles.title}>
        <Text style={styles.welcomeBack}>Welcome Back!</Text>
        <Text style={[styles.userGreetingsContainer, styles.mt21]}>
          <Text style={styles.displayNameText}>{`We missed you, `}</Text>
          <Text style={styles.displayName}>JohnDoe</Text>
        </Text>
      </View>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#a903d2", "#410095"]}
        useAngle={true}
        angle={225}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("LandingPage")}
        >
          <Text style={[styles.buttonText, styles.buttonTextClr]}>Log Out</Text>
        </Pressable>
      </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mt21: {
    marginTop: 21,
  },
  buttonTextClr: {
    color: Color.grayscalesWhite,
    textAlign: "center",
  },
  backgroundMeshIcon: {
    top: 0,
    left: 0,
    width: 429,
    position: "absolute",
    height: 932,
  },
  buttonText: {
    fontSize: FontSize.buttonsButton_size,
    letterSpacing: 0.3,
    lineHeight: 21,
    fontFamily: FontFamily.buttonsButton,
    textAlign: "center",
    fontWeight: "500",
  },
  pressable: {
    borderRadius: Border.br_3xs,
    shadowColor: "#5921cb",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: "100%",
    flexDirection: "row",
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_smi,
    justifyContent: "center",
    backgroundColor: "transparent",
    alignItems: "center",
    width: "100%",
  },
  button: {
    left: 136,
    top: 497,
    width: 157,
    height: 48,
    // alignItems:"center",
    // left:"auto",
    // right:"auto",
    position: "absolute",
    // flex: 1,
    alignSelf: "center",
  },
  welcomeBack: {
    alignSelf: "stretch",
    fontSize: 40,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: "#efefef",
    textAlign: "center",
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
  userGreetingsContainer: {
    fontSize: 14,
    textAlign: "left",
    width: 182,
    height: 21,
  },
  title: {
    top: 281,
    left: 55,
    width: 320,
    alignItems: "center",
    position: "absolute",
  },
  kecStudentPortal: {
    top: 81,
    left: 106,
    fontSize: FontSize.headersH1Heavy_size,
    lineHeight: 24,
    fontFamily: FontFamily.headersH1Heavy,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  usersPage: {
    backgroundColor: Color.gray_100,
    flex: 1,
    // height: 932,
    // height:auto,
    width: "100%",
  },
});

export default UsersPage;
