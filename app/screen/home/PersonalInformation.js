import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import CustomDatePicker from "./CustomDatePicker";
import GenderPicker from "./GenderPicker";

const PersonalInformation = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false); // Modal visibility state
  const [GenderVisible, setGenderVisible] = useState(false); // Modal visibility state

  const handleOpenModal = () => {
    setIsVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Overlay */}
      {(isVisible || GenderVisible) && <View style={styles.overlay} />}

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Please Fill In Your Personal Information
        </Text>
        <Text style={styles.description}>
          My name is Pushpo, a 23-year-old UI/UX designer with expertise in
          creating intuitive digital experiences. I’m currently studying
          political science while pursuing a passion for design and technology.
          I’m also working on several projects, including a fitness app.
        </Text>
        <Text style={styles.subHeader}>Personal Data Will Be Strictly.</Text>
      </View>

      {/* Input Options */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.inputField} onPress={handleOpenModal}>
          <Text style={styles.inputLabel}>Birthday</Text>
          <Text style={styles.inputValue}>Select</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.inputField}
          onPress={() => navigation.navigate("HeightPicker")}
        >
          <Text style={styles.inputLabel}>Height</Text>
          <Text style={styles.inputValue}>Select</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.inputField}
          onPress={() => setGenderVisible(true)}
        >
          <Text style={styles.inputLabel}>Gender</Text>
          <Text style={styles.inputValue}>Select</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.inputField}
          onPress={() => navigation.navigate("WeightPicker")}
        >
          <Text style={styles.inputLabel}>Weight</Text>
          <Text style={styles.inputValue}>Select</Text>
        </TouchableOpacity>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("SmartWatchScreen")}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      {/* Custom Date Picker */}
      <CustomDatePicker isVisible={isVisible} setIsVisible={setIsVisible} />
      <GenderPicker isVisible={GenderVisible} setIsVisible={setGenderVisible} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 1)",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent overlay
    zIndex: 1, // Ensures it sits above other elements
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "start",
  },
  description: {
    fontSize: 14,
    color: "#ccc",
    lineHeight: 20,
    marginBottom: 10,
    textAlign: "start",
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "left",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  inputLabel: {
    color: "#fff",
    fontSize: 16,
  },
  inputValue: {
    color: "#ccc",
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: "#BAFF29",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  nextButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PersonalInformation;
