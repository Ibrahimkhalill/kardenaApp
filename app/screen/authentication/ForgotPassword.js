import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";

import BackButton from "../component/BackButton";

const { width } = Dimensions.get("window");
const ForgotPassword = ({ navigation }) => {
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

      {/* Forgot Password Form */}
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Forgot Password?</Text>
        <Text style={styles.subText}>
          Don’t worry! It occurs. Please enter the email address linked with
          your account.
        </Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          placeholderTextColor="gray"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Send Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("OtpVerification")}
        >
          <Text style={styles.buttonText}>SEND</Text>
        </TouchableOpacity>

        {/* Footer Text */}
        <Text style={styles.footerText}>
          Remember Password?{" "}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 50,
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
    marginBottom: 40,
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: "contain",
  },
  logoText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },
  formContainer: {
    alignItems: "center",
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subText: {
    color: "#ccc",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    width: "100%",
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#BAFF29",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 10,
  },
  linkText: {
    color: "rgba(186, 255, 41, 0.8)",
    textDecorationLine: "underline",
  },
});

export default ForgotPassword;
