import React, { useState } from "react";
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

const ResetPassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = () => {
    navigation.navigate("PasswordChanged");
    // if (password !== confirmPassword) {
    //   alert("Passwords do not match!");
    //   return;
    // }
    // alert("Password reset successfully!");
    // Add navigation or API call here
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

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Create New Password</Text>
        <Text style={styles.subText}>
          Your new password must be unique from those previously used.
        </Text>

        {/* Password Inputs */}
        <TextInput
          style={styles.input}
          placeholder="NEW PASSWORD"
          placeholderTextColor="gray"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="CONFIRM PASSWORD"
          placeholderTextColor="gray"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Reset Button */}
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>RESET PASSWORD</Text>
        </TouchableOpacity>
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
    marginBottom: 50,
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
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: "rgba(218, 218, 218, 1)",
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
});

export default ResetPassword;
