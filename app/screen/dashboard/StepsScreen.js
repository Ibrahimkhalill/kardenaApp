import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";
import Slider from "@react-native-community/slider";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GradiantBox from "../component/GradiantBox";
import { LinearGradient } from "expo-linear-gradient";
const StepsScreen = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LinearGradient
          colors={["rgba(232, 232, 232, 0.2)", "rgba(186, 253, 49, .1)"]}
          start={{ x: 0.5, y: 0 }} // Start at the top center
          end={{ x: 0.5, y: 1 }}
          style={{ paddingHorizontal: 20 }}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>STEPS</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
              <FontAwesome5 name="calendar-alt" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          {/* Day Selector */}
          <View style={styles.tabContainer}>
            <Text style={styles.tabActive}>Day</Text>
            <View style={styles.tabIndicator} />
          </View>
          {/* Steps Information */}
          <View style={styles.stepsContainer}>
            <Text style={styles.stepsCount}>
              4432 <Text style={styles.stepsLabel}>Steps</Text>
            </Text>
            <Text style={styles.dateText}>20 Oct. 2025 Tue Average</Text>
          </View>
          {/* Bar Chart */}
          <BarChart
            data={{
              labels: ["00:00", "06:00", "12:00", "18:00", "24:00"],
              datasets: [
                {
                  data: [200, 600, 1200, 800, 1000],
                },
              ],
            }}
            width={screenWidth - 40}
            height={220}
            yAxisLabel=""
            chartConfig={{
              backgroundColor: "#000",
              backgroundGradientFrom: "#1c1c1c",
              backgroundGradientTo: "#1c1c1c",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(11, 173, 115, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 20,
              borderRadius: 16,
            }}
          />
        </LinearGradient>
        <View style={{ padding: 15 }}>
          <View style={styles.metricsContainer}>
            <View style={styles.metricItem}>
              <Ionicons name="location" size={24} color="#0BAD73" />
              <Text style={styles.metricValue}>99.99 Km</Text>
            </View>
            <View style={styles.metricItem}>
              <Ionicons name="time" size={24} color="#0BAD73" />
              <Text style={styles.metricValue}>99999 Kcal</Text>
            </View>
            <View style={styles.metricItem}>
              <FontAwesome5 name="fire" size={24} color="#0BAD73" />
              <Text style={styles.metricValue}>99999 Min</Text>
            </View>
          </View>

          {/* Target Section */}
          <View style={styles.targetContainer}>
            <Text style={styles.targetTitle}>TARGET: 7000 STEPS</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10000}
              value={7000}
              minimumTrackTintColor="#0BAD73"
              maximumTrackTintColor="#aaa"
              thumbTintColor="#fff"
            />
          </View>

          {/* Performance Graph */}
          <View>
            <Text style={styles.performanceTitle}>Last 7 Days Performance</Text>
            <BarChart
              data={{
                labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
                datasets: [
                  {
                    data: [2, 4, 5, 6, 8, 9, 10],
                  },
                ],
              }}
              width={screenWidth - 50}
              height={220}
              yAxisLabel=""
              chartConfig={{
                backgroundColor: "#000",
                backgroundGradientFrom: "#000",
                backgroundGradientTo: "#000",
                decimalPlaces: 0,
                color: (opacity = 0.1) => `rgba(11, 173, 115, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 20,
                marginRight: 30,
                borderRadius: 16,
              }}
            />
          </View>
        </View>
        {/* Metrics Section */}
      </ScrollView>
      {/* Header */}
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
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  tabContainer: {
    marginTop: 20,
    alignItems: "flex-start",
  },
  tabActive: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#BAFF29",
  },
  tabIndicator: {
    width: 50,
    height: 2,
    backgroundColor: "#BAFF29",
    marginTop: 5,
  },
  stepsContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  stepsCount: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#0BAD73",
  },
  stepsLabel: {
    fontSize: 24,
    fontWeight: "normal",
    color: "#fff",
  },
  dateText: {
    fontSize: 16,
    color: "#aaa",
    marginTop: 5,
  },
  metricsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,

    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  metricItem: {
    alignItems: "center",
  },
  metricValue: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },
  targetContainer: {
    marginVertical: 20,
    backgroundColor: "#18191C",
    padding: 10,
    borderRadius: 10,
  },
  targetTitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  performanceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
});

export default StepsScreen;
