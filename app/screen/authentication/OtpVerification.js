import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import BackButton from "../component/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";

const OtpVerification = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus the next input
    if (value && index < otp.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && index > 0 && otp[index] === "") {
      inputs.current[index - 1]?.focus();
    }
  };

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

      {/* OTP Form */}
      <View style={styles.formContainer}>
        <Text style={styles.heading}>OTP Verification</Text>
        <Text style={styles.subText}>
          Enter the verification code we just sent on your email address.
        </Text>

        {/* OTP Inputs */}
        <View style={styles.otpContainer}>
          {otp.map((_, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              value={otp[index]}
              onChangeText={(value) => handleChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        {/* Send Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          <Text style={styles.buttonText}>SEND</Text>
        </TouchableOpacity>

        {/* Resend Option */}
        <Text style={styles.footerText}>
          Didn’t receive code?{" "}
          <Text style={styles.linkText} onPress={() => alert("Resend Code")}>
            Resend
          </Text>
        </Text>
      </View>
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
  },
  logoText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },
  formContainer: {
    marginTop: 20,
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
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
  },
  otpInput: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    width: 70,
    height: 50,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
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
  },
  linkText: {
    color: "rgba(186, 255, 41, 0.8)",
    textDecorationLine: "underline",
  },
});

export default OtpVerification;
