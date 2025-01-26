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
import Blood from "../../assets/blood.svg";
import Header from "../component/Header";
const SleepScreen = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width;
  const graphWidth = Dimensions.get("window").width - 40; // Full width with padding
  const graphHeight = 150; // Height of the graph
  const totalHours = 24; // Assuming 24-hour data for the graph

  // Calculate the total width of each time block
  const hourWidth = graphWidth / totalHours;
  const sleepData = [
    { restful: 4, light: 5, awake: 1 }, // First bar
    { restful: 2, light: 6, awake: 2 }, // Second bar
    { restful: 3, light: 4, awake: 3 }, // Third bar
    { restful: 1, light: 2, awake: 7 }, // Fourth bar
    { restful: 5, light: 3, awake: 2 }, // Fifth bar
    // Add more data as needed
  ];
  const sleepLabelData = [
    { label: "Restful", value: 205, color: "#0BAD73" }, // 205 minutes
    { label: "Light", value: 150, color: "#8A2BE2" }, // 150 minutes
    { label: "Awake", value: 150, color: "#FF4D67" }, // 150 minutes
  ];
  const sleepdETAILSData = [
    {
      name: "Restful",
      population: 205, // In minutes
      color: "#0BAD73",
      legendFontColor: "#fff",
      legendFontSize: 14,
    },
    {
      name: "Light",
      population: 150, // In minutes
      color: "#8A2BE2",
      legendFontColor: "#fff",
      legendFontSize: 14,
    },
    {
      name: "Awake",
      population: 150, // In minutes
      color: "#FF4D67",
      legendFontColor: "#fff",
      legendFontSize: 14,
    },
  ];
  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={["rgba(230, 230, 230, 0.19)", "rgba(33, 164, 0, 0.1102)"]}
          start={{ x: 0.5, y: 0 }} // Start at the top center
          end={{ x: 0.5, y: 1 }}
        >
          <Header header_name={"Sleep"} navigation={navigation} />

          {/* Sleep Summary */}
          <View style={styles.sleepSummary}>
            <Text style={styles.sleepTime}>
              8 <Text style={styles.timeLabel}>HOUR</Text> 10{" "}
              <Text style={styles.timeLabel}>MIN</Text>
            </Text>
            <Text style={styles.date}>20 Oct. 2025 Tue Average</Text>
          </View>

          {/* Graph */}
          <View style={styles.graphContainer}>
            <View style={styles.graph}>
              <Blood width={"100%"} />
            </View>
            <View style={styles.legendContainer}>
              <View style={styles.legendItem}>
                <View
                  style={[styles.legendColor, { backgroundColor: "#0BAD73" }]}
                />
                <Text style={styles.legendText}>Restful</Text>
              </View>
              <View style={styles.legendItem}>
                <View
                  style={[styles.legendColor, { backgroundColor: "#8A2BE2" }]}
                />
                <Text style={styles.legendText}>Light</Text>
              </View>
              <View style={styles.legendItem}>
                <View
                  style={[styles.legendColor, { backgroundColor: "#FF4D67" }]}
                />
                <Text style={styles.legendText}>Awake</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        {/* Sleep Ratio */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle1}>Sleep Ratio</Text>
          <View style={styles.sleepRatioContainer}>
            {/* <PieChart
              data={[
                {
                  name: "Restful",
                  population: 3.25,
                  color: "#0BAD73",
                  legendFontColor: "#fff",
                  legendFontSize: 14,
                },
                {
                  name: "Light",
                  population: 2.5,
                  color: "#8A2BE2",
                  legendFontColor: "#fff",
                  legendFontSize: 14,
                },
                {
                  name: "Awake",
                  population: 2.5,
                  color: "#FF4D67",
                  legendFontColor: "#fff",
                  legendFontSize: 14,
                },
              ]}
              width={screenWidth - 40}
              height={200}
              chartConfig={{
                backgroundColor: "#000",
                backgroundGradientFrom: "#1c1c1c",
                backgroundGradientTo: "#1c1c1c",
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[0, 0]}
              absolute
            /> */}
            <SleepDonutChart data={sleepLabelData} />

            <View style={styles.detailsContainer}>
              {sleepdETAILSData.map((item, index) => (
                <View key={index} style={styles.detailItem}>
                  <Text style={styles.detailTime}>
                    <Text style={{ fontSize: 25 }}>
                      {Math.floor(item.population / 60)}
                    </Text>{" "}
                    HOUR{" "}
                    <Text style={{ fontSize: 25 }}>{item.population % 60}</Text>{" "}
                    MIN
                  </Text>

                  <View
                    style={{
                      alignItems: "center",
                      flexDirection: "row",
                      gap: 5,
                      marginTop: 4,
                    }}
                  >
                    <Octicons name="dot-fill" color={item.color} size={20} />
                    <Text style={styles.detailLabel}>{item.name}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* About Section */}
        <LinearGradient
          colors={["rgba(230, 230, 230, 0.19)", "rgba(33, 164, 0, 0.1102)"]}
          start={{ x: 0.5, y: 0 }} // Start at the top center
          end={{ x: 0.5, y: 1 }} // End at the bottom center
          style={styles.aboutSection}
        >
          <Text style={styles.sectionTitle}>ABOUT</Text>
          <Text style={styles.aboutText}>
            Maintaining An Optimal SpO2 Level, Typically Between 95% And 100%,
            Is A Key Indicator Of Healthy Oxygen Saturation In The Blood. This
            Range Signifies That Your Body Is Efficiently Transporting Oxygen To
            Vital Organs And Tissues.
          </Text>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
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

export default SleepScreen;
