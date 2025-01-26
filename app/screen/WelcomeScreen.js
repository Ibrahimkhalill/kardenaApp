import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.heartContainer}>
          {/* Add your heart and pulse design here */}
          {/* Replace with your SVG or image assets */}
          <Image
            source={require("../assets/logo.png")} // Replace with your heart image
            style={styles.heartImage}
          />
        </View>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.tagline}>Start Your Daily</Text>
        <Text style={styles.tagline}>Health Journey</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.guestText}>Continue as a guest</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Black background
    justifyContent: "center",
    alignItems: "center",
  },
  text_container: {
    marginBottom: 20,
  },
  heartImage: {
    width: 150,
    height: 140,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 160,
  },
  heartContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  heartIcon: {
    fontSize: 64,
    color: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "capitalize",
  },
  tagline: {
    fontSize: 33,
    fontWeight: "700",
    color: "#E4E4E4",
    textAlign: "center",
  },
  buttonContainer: {
    width: "90%",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#bada55", // Neon green
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  registerButtonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  guestText: {
    color: "#bada55", // Neon green
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
