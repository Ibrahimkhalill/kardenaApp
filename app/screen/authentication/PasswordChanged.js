import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import BackButton from "../component/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";

const PasswordChanged = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <BackButton />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo.png")} // Replace with your logo path
          style={styles.logo}
        />
      </View>

      {/* Success Icon and Message */}
      <View style={styles.successContainer}>
        <Image
          source={require("../../assets/Sticker.png")} // Replace with your logo path
          style={styles.sticker}
        />
        <Text style={styles.heading}>Password Changed!</Text>
        <Text style={styles.subText}>
          Your password has been changed successfully.
        </Text>
      </View>

      {/* Back to Login Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Back To Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  backButton: {
    marginTop: 10,
    marginLeft: 10,
    padding: 10,
    borderRadius: 50,
  },
  backText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 140,
    resizeMode: "contain",
    marginBottom: 50,
  },
  sticker: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 30,
  },
  logoText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },
  successContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  successIcon: {
    backgroundColor: "#BAFF29",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  checkmark: {
    color: "#000",
    fontSize: 36,
    fontWeight: "bold",
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subText: {
    color: "#ccc",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#BAFF29",
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PasswordChanged;
