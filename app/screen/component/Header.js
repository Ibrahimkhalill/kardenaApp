import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons, Octicons, AntDesign } from "@expo/vector-icons";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { Svg, Rect, G } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import SleepChart from "../component/SleepChart";
import SleepRatio from "../component/SleepRatio";
import SleepDonutChart from "../component/SleepRatio";

const Header = ({ navigation, header_name }) => {
  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={23} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{header_name}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Ionicons name="calendar-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {["Day", "Week", "Month", "Years"].map((tab, index) => (
          <TouchableOpacity key={index} style={styles.tabItem}>
            <Text
              style={[
                styles.tabText,
                tab === "Day" ? styles.tabTextActive : null,
              ]}
            >
              {tab}
            </Text>
            {tab === "Day" && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  graph: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  tabItem: {
    alignItems: "center",
  },
  tabText: {
    fontSize: 14,
    color: "#aaa",
  },
  tabTextActive: {
    color: "#BAFF29",
    fontWeight: "bold",
  },
  tabIndicator: {
    height: 3,
    backgroundColor: "rgba(186, 255, 41, 1)",
    width: "100%",
    marginTop: 5,
  },
  sleepSummary: {
    alignItems: "center",
    marginTop: 20,
  },
  sleepTime: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  timeLabel: {
    fontSize: 14,
    color: "#fff",
  },
  date: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 5,
  },
  graphContainer: {
    marginTop: 20,
    width: "100%",
    padding: 15,
  },

  graphPlaceholder: {
    color: "#aaa",
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
    color: "#aaa",
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 28,
    color: "rgba(33, 164, 0, 1)",
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionTitle1: {
    fontSize: 28,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "bold",
    marginBottom: 10,
  },
  sleepRatioContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  sleepDetails: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  detailText: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 10,
  },
  aboutSection: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  aboutText: {
    fontSize: 14,
    color: "rgba(33, 164, 0, 1)",
    lineHeight: 20,
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
    color: "#aaa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalTime: {
    position: "absolute",
    top: 85, // Center within the chart
    left: 60,
    alignItems: "center",
  },
  totalTimeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  totalLabel: {
    fontSize: 14,
    color: "#aaa",
  },
  detailsContainer: {
    justifyContent: "space-around",
  },
  detailItem: {
    flexDirection: "col",
    alignItems: "start",
    marginBottom: 10,
  },
  detailBullet: {
    flexDirection: "column",
  },

  detailTime: {
    fontSize: 14,
    color: "#fff",
    marginRight: 10,
  },
  detailLabel: {
    fontSize: 14,
    color: "#aaa",
  },
});

export default Header;
