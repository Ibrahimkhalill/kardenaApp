import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NotFoundScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Magnifying Glass Icon */}
      <View style={styles.iconContainer}>
        <Image
          source={require("../../assets/magnifying_glass.png")} // Replace with your magnifying glass image
          style={styles.icon}
        />
      </View>

      {/* Message */}
      <Text style={styles.title}>woops, not found 😢</Text>
      <Text style={styles.message}>
        Oops! Page not found. Please return to the home page or explore other
        sections of the app!
      </Text>

      {/* Rescan Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Add logic to rescan or navigate to another screen
          navigation.navigate("DeviceConnectionScreen");
        }}
      >
        <Text style={styles.buttonText}>RESCAN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141e13", // Dark green background
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
  message: {
    fontSize: 14,
    color: "#aaa",
    textAlign: "center",
    lineHeight: 20,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#BAFF29", // Bright green color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 120,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
});

export default NotFoundScreen;
