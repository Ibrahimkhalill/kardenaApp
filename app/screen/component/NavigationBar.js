import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons (requires expo)

const NavigationBar = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navigationBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Ionicons name="home" size={30} color="#BAFF29" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("HealthDashboard")}
        >
          <Ionicons name="heart" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <Ionicons name="person" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 20,
    color: "#BAFF29",
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#1e1e1e",
    padding: 10,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  cardContainer: {
    backgroundColor: "#1e1e1e",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  stepsCount: {
    fontSize: 24,
    color: "#BAFF29",
    fontWeight: "bold",
    marginBottom: 10,
  },
  barChart: {
    height: 100,
    backgroundColor: "#333",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  barChartPlaceholder: {
    color: "#666",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    color: "#BAFF29",
    fontSize: 14,
  },
  sleepScore: {
    fontSize: 48,
    color: "#BAFF29",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  sleepDescription: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  sleepTimeline: {
    height: 50,
    backgroundColor: "#333",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  sleepTimelinePlaceholder: {
    color: "#666",
  },
  sleepStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heartRate: {
    fontSize: 48,
    color: "#FF4D67",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  heartIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(186, 255, 41, 0.2)",
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NavigationBar;
