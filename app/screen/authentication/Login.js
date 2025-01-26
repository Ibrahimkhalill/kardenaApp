import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";

import GradientBackground from "../component/GradientBackground";
const { width } = Dimensions.get("window");
const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/logo.png")} // Replace with your logo path
              style={styles.logo}
            />
          </View>

          {/* Gradient Form */}
          <GradientBackground>
            <Text style={styles.loginText}>Sign in</Text>

            <TextInput
              style={styles.input}
              placeholder="E-mail or Mobile Number"
              placeholderTextColor="gray"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.forgotPasswordContainer}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.termsText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("HealthGoals")}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              Didn’t join yet?{" "}
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                {" "}
                <Text style={styles.linkText}>Sign Up</Text>
              </TouchableOpacity>{" "}
            </Text>
          </GradientBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: "contain",
  },
  loginText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
    color: "#fff",
    paddingVertical: 10,
    marginBottom: 24,
    width: "100%",
    fontSize: 16,
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    width: "100%",
    marginBottom: 20,
  },
  termsText: {
    color: "#FF2929",
    fontSize: 12,
  },
  button: {
    backgroundColor: "#BAFF29",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    color: "#ccc",
    textAlign: "center",
    fontSize: 14,
  },
  linkText: {
    color: "rgba(186, 255, 41, 0.6)",
    textDecorationLine: "underline",
  },
});

export default Login;
