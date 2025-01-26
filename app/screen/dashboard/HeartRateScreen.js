import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../component/Header";
import { LinearGradient } from "expo-linear-gradient";

const HeartRateScreen = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width;

  // Dummy heart rate data
  const heartRateData = [60, 80, 100, 90, 110, 100, 120];
  const heartRateZones = [
    { range: "0-80", duration: "58 min", percentage: 40 },
    { range: "80-100", duration: "2 Hours 56 min", percentage: 60 },
    { range: "100-110", duration: "2 Hours 56 min", percentage: 70 },
    { range: "110-120", duration: "1 Hour 12 min", percentage: 50 },
    { range: "120+", duration: "58 min", percentage: 30 },
  ];

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={["rgba(230, 230, 230, 0.19)", "rgba(33, 164, 0, 0.1102)"]}
          start={{ x: 0.5, y: 0 }} // Start at the top center
          end={{ x: 0.5, y: 1 }}
        >
          <Header navigation={navigation} header_name={"Heart Rate"} />
          {/* Header */}

          {/* Current Heart Rate */}
          <View style={styles.currentHeartRate}>
            <Text style={styles.heartRateValue}>
              160 <Text style={styles.heartRateUnit}>BPM</Text>
            </Text>
            <Text style={styles.dateText}>20 Oct.2025 Tue Average</Text>
          </View>

          {/* Line Chart */}
          <LineChart
            data={{
              labels: ["00:00", "06:00", "12:00", "18:00", "24:00"],
              datasets: [
                {
                  data: heartRateData,
                  color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // Line color
                },
              ],
            }}
            width={screenWidth - 40} // Chart width
            height={220} // Chart height
            chartConfig={{
              backgroundGradientFrom: "#1e1e1e",
              backgroundGradientTo: "#1e1e1e",
              decimalPlaces: 0, // No decimal points
              color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#FF4D67",
              },
            }}
            bezier
            style={{
              marginVertical: 20,
              borderRadius: 16,
              marginHorizontal: 20,
            }}
          />
        </LinearGradient>

        {/* Heart Rate Zone */}
        <View style={styles.heartRateZone}>
          <Text style={styles.sectionTitle}>Heart Rate Zone</Text>
          {heartRateZones.map((zone, index) => (
            <View key={index} style={styles.zoneItem}>
              <Text style={styles.zoneLabel}>{zone.range}</Text>
              <View style={styles.zoneBar}>
                <View
                  style={[
                    styles.zoneBarFilled,
                    { width: `${zone.percentage}%` },
                  ]}
                />
              </View>
              <Text style={styles.zoneDuration}>{zone.duration}</Text>
            </View>
          ))}
        </View>
        <LinearGradient
          colors={["rgba(230, 230, 230, 0.19)", "rgba(253, 39, 107, 0.1102)"]}
          start={{ x: 0.5, y: 0 }} // Start at the top center
          end={{ x: 0.5, y: 1 }} // End at the bottom center
          style={styles.aboutSection}
        >
          <Text style={styles.aboutTitle}>ABOUT</Text>
          <Text style={styles.aboutText}>
            A "bad report" on heart rate zones typically indicates an issue with
            the accuracy, functionality, or interpretation of heart rate data in
            a fitness or health tracking app. Here’s a breakdown of common
            reasons and solutions for bad heart rate zone reports
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
  aboutTitle: {
    fontSize: 28,
    color: "rgba(240, 40, 103, 1)",
    fontWeight: "bold",
    marginBottom: 10,
  },
  header: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  dateText: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 5,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  tabText: {
    fontSize: 14,
    color: "#aaa",
  },
  activeTabText: {
    color: "#BAFF29",
    fontWeight: "bold",
  },
  currentHeartRate: {
    alignItems: "center",
    marginTop: 20,
  },
  heartRateValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
  },
  heartRateUnit: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "normal",
  },
  heartRateZone: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  zoneItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  zoneLabel: {
    fontSize: 14,
    color: "#fff",
    width: 55,
  },
  zoneBar: {
    flex: 1,
    height: 20,
    backgroundColor: "rgba(250, 250, 250, 1)",
    borderRadius: 4,
    marginHorizontal: 10,
  },
  zoneBarFilled: {
    height: "100%",
    backgroundColor: "rgba(247, 118, 159, 0.85)",
    borderRadius: 4,
  },
  zoneDuration: {
    fontSize: 10,
    color: "#aaa",
    position: "absolute",
    right: 10,
    bottom: -20,
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
    color: "rgba(240, 40, 103, 1)",
    lineHeight: 20,
  },
});

export default HeartRateScreen;
