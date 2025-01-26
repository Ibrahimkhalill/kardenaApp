import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowButton from "../component/ArrowButton";

const FAQScreen = ({ navigation }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Kardena Fitness App, and who is it for?",
      answer:
        "The Kardena Fitness App is designed for everyone looking to improve their health and fitness. It offers personalized fitness tracking, coaching, and insights.",
    },
    {
      question: "What features does the Kardena Fitness App offer?",
      answer:
        "The app provides features like step tracking, sleep analysis, heart rate monitoring, and goal setting.",
    },
    {
      question: "What features does the Kardena Fitness App offer?",
      answer:
        "The app provides features like step tracking, sleep analysis, heart rate monitoring, and goal setting.",
    },
    {
      question: "Which wearable devices are compatible with the app?",
      answer:
        "The Kardena Fitness App is designed to support a wide range of devices, ensuring flexibility and convenience for users. It is compatible with popular fitness wearables such as H Band, G Band, and other major brands in the market. To provide users with precise guidance, a detailed compatibility list is readily available within the app's settings. This allows users to easily verify if their device is supported and ensure seamless integration for optimal performance and tracking.",
    },
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ArrowButton />
        <Text style={styles.headerTitle}>FAQ</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search Help"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
        />
        <Ionicons name="search" size={20} color="#fff" />
      </View>

      {/* FAQ List */}
      <ScrollView contentContainerStyle={styles.faqContainer}>
        {faqs.map((item, index) => (
          <View key={index} style={styles.faqItem}>
            <TouchableOpacity
              style={[
                styles.faqQuestion,
                expandedIndex === index && styles.expandedQuestion,
              ]}
              onPress={() => toggleFAQ(index)}
            >
              <Text style={styles.questionText}>{item.question}</Text>
              <Ionicons
                name={expandedIndex === index ? "chevron-up" : "chevron-down"}
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
            {expandedIndex === index && (
              <View style={styles.faqAnswer}>
                <Text style={styles.answerText}>{item.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 50,
    borderWidth: 1,
    borderColor: "rgba(186, 255, 41, 1)",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    height: 58,
    color: "#fff",

    paddingVertical: 10,
  },
  faqContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  faqItem: {
    marginBottom: 15,
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
  },
  faqQuestion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
  expandedQuestion: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  questionText: {
    fontSize: 16,
    color: "#fff",
    flex: 1,
  },
  faqAnswer: {
    backgroundColor: "#1e1e1e",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#333",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  answerText: {
    fontSize: 14,
    color: "#aaa",
  },
});

export default FAQScreen;
