import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { ProgressCircle } from "react-native-svg-charts";

const SleepCard = () => {
  return (
    <ImageBackground
      source={require("../../assets/sleep.png")} // Replace with your background image path
      style={styles.container}
      imageStyle={{ borderRadius: 15 }}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Sleep</Text>
        <Ionicons name="chevron-forward" size={20} color="#fff" />
      </View>

      {/* Progress Circle */}
      <View style={styles.progressContainer}>
        <ProgressCircle
          style={styles.progressCircle}
          progress={0.5} // 50% progress
          progressColor={"#8A2BE2"}
          backgroundColor={"rgba(255,255,255,0.2)"}
          startAngle={-Math.PI}
          endAngle={0}
          strokeWidth={10}
        />
        <View style={styles.progressTextContainer}>
          <Text style={styles.progressValue}>50</Text>
          <Text style={styles.progressLabel}>Good</Text>
        </View>
      </View>

      {/* Sleep Time Range */}
      <View style={styles.timeRangeContainer}>
        <Text style={styles.timeText}>22:20 pm</Text>
        <View style={styles.timeBar}>
          <View style={styles.filledBar} />
          <View style={styles.thumb} />
        </View>
        <Text style={styles.timeText}>07:00 am</Text>
      </View>

      {/* Additional Metrics */}
      <View style={styles.metricsContainer}>
        <View style={styles.metricItem}>
          <Ionicons name="bed" size={20} color="#fff" />
          <Text style={styles.metricText}>8h 40m</Text>
        </View>
        <View style={styles.metricItem}>
          <Ionicons name="heart" size={20} color="#fff" />
          <Text style={styles.metricText}>62 Bpm</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "#1e1e1e",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  progressContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  progressCircle: {
    width: 150,
    height: 150,
  },
  progressTextContainer: {
    position: "absolute",
    top: "50%",
    alignItems: "center",
    transform: [{ translateY: -10 }],
  },
  progressValue: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
  progressLabel: {
    fontSize: 16,
    color: "#aaa",
  },
  timeRangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  timeText: {
    fontSize: 14,
    color: "#fff",
  },
  timeBar: {
    flex: 1,
    height: 4,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginHorizontal: 10,
    borderRadius: 2,
    position: "relative",
  },
  filledBar: {
    width: "50%", // Filled portion based on progress
    height: "100%",
    backgroundColor: "#8A2BE2",
    borderRadius: 2,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    position: "absolute",
    right: "50%",
    top: -3,
  },
  metricsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  metricItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  metricText: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 5,
  },
});

export default SleepCard;
