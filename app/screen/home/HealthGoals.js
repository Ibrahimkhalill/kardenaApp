/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HealthGoals = ({ navigation }) => {
  const [selectedGoals, setSelectedGoals] = useState([]);

  const goals = [
    { id: "1", title: "Do you want to track your daily steps?", icon: "🛴" },
    { id: "2", title: "Monitor heart rate during activities?", icon: "❤️" },
    { id: "3", title: "Monitor blood oxygen (SpO2)?", icon: "🫁" },
    { id: "4", title: "Track blood pressure?", icon: "🩸" },
    { id: "5", title: "Track sleep duration and quality?", icon: "💤" },
    { id: "6", title: "Just Trying Out The App!", icon: "✨" },
  ];

  const toggleGoal = (id) => {
    if (selectedGoals.includes(id)) {
      setSelectedGoals(selectedGoals.filter((goalId) => goalId !== id));
    } else {
      setSelectedGoals([...selectedGoals, id]);
    }
  };

  const renderGoalItem = ({ item }) => {
    const isSelected = selectedGoals.includes(item.id);
    return (
      <TouchableOpacity
        style={[styles.goalItem, isSelected && styles.selectedGoal]}
        onPress={() => toggleGoal(item.id)}
      >
        <Text style={styles.icon}>{item.icon}</Text>
        <Text style={styles.goalText}>{item.title}</Text>
        <View style={[styles.checkbox, isSelected && styles.checkedCheckbox]} />
      </TouchableOpacity>
    );
  };

  const handleContinue = () => {
    if (selectedGoals.length === 0) {
      alert("Please select at least one goal.");
    } else {
      //   alert(`Selected Goals: ${selectedGoals}`);
      navigation.navigate("HealthJourney");
      // Navigate to the next screen
      // navigation.navigate('NextScreen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>What’s your health goal/target?</Text>
      <FlatList
        data={goals}
        renderItem={renderGoalItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.goalList}
      />
      <View
        style={{
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    justifyContent: "center",
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  goalList: {
    paddingBottom: 20,
  },
  goalItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  selectedGoal: {
    backgroundColor: "#333",
    borderColor: "#BAFF29",
  },
  icon: {
    fontSize: 18,
    marginRight: 15,
    color: "#fff",
  },
  goalText: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "transparent",
  },
  checkedCheckbox: {
    backgroundColor: "#BAFF29",
    borderColor: "#BAFF29",
  },
  continueButton: {
    backgroundColor: "#BAFF29",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "50%",
  },
  continueButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HealthGoals;
