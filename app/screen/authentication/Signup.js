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

const Signup = ({ navigation }) => {
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

          {/* Sign Up Form */}
          <GradientBackground>
            <Text style={styles.signUpText}>Sign Up</Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="gray"
              autoCapitalize="words"
            />
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
            <Text style={styles.termsText}>
              By signing up, you agree to our{" "}
              <Text
                style={styles.linkText}
                onPress={() => alert("Terms & Conditions")}
              >
                Terms & Conditions
              </Text>{" "}
              and{" "}
              <Text
                style={styles.linkText}
                onPress={() => alert("Privacy Policy")}
              >
                Privacy Policy
              </Text>
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}>
              Joined us before?{" "}
              <Text
                style={styles.linkText}
                onPress={() => navigation.navigate("Login")}
              >
                Sign In
              </Text>
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
  signUpText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
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
  termsText: {
    color: "#ccc",
    fontSize: 12,
    marginBottom: 20,
    textAlign: "left",
  },
  linkText: {
    color: "rgba(186, 255, 41, 0.6)",
    textDecorationLine: "underline",
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
});

export default Signup;
