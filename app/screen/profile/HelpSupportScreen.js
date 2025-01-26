import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowButton from "../component/ArrowButton";

const HelpSupportScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");

  const handleFeedbackSubmit = () => {
    // Add logic to handle feedback submission
    console.log("Title:", title);
    console.log("Problem:", problem);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ArrowButton />
        <Text style={styles.headerTitle}>HELP & SUPPORT</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}

        {/* Logo and Description */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")} // Replace with your logo path
            style={styles.logo}
          />
          <Text style={styles.description}>
            Need Assistance? Our Support Team Is Here To Help! Visit The FAQ
            Section For Quick Answers Or Contact Us Directly Through The App For
            Personalized Support. Stay On Track With Kardena.
          </Text>
        </View>

        {/* Input Fields */}
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the title of your issue"
          placeholderTextColor="#aaa"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Explain The Problem</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe your issue in detail"
          placeholderTextColor="#aaa"
          value={problem}
          onChangeText={setProblem}
          multiline
        />

        {/* Upload Screenshot */}
        <Text style={styles.label}>Upload Screenshot</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Ionicons name="add" size={30} color="#fff" />
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleFeedbackSubmit}
        >
          <Text style={styles.submitButtonText}>Submit Feedback</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 10,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: "#aaa",
    textAlign: "center",
    marginVertical  : 40,
    paddingHorizontal: 10,
    lineHeight: 20,
  },
  logo: {
    width: 130,
    height: 120,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginTop: 20,
  },
  input: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    fontSize: 16,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    height: 58,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  uploadButton: {
    backgroundColor: "#1e1e1e",
    height: 122,
    width: 143,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: "#BAFF29",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
});

export default HelpSupportScreen;
