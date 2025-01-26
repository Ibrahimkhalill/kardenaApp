import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons"; // For icons (requires expo)
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationBar from "../component/NavigationBar";
import SleepCard from "./SleepCard";
import { ProgressCircle } from "react-native-svg-charts";
import ForwardButton from "../component/ForwardButton";
const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")} // Replace with your logo path
            style={styles.logo}
          />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("DeviceConnectionScreen")}
        >
          <Ionicons name="add" size={24} color="#BAFF29" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Strive Today For A Stronger Tomorrow</Text>

        {/* Content Cards */}
        {/* Steps Card */}
        <ImageBackground
          style={[styles.cardContainer, { minHeight: 200 }]} // Apply minHeight dynamically
          source={require("../../assets/steps.png")}
          imageStyle={{ borderRadius: 10 }}
        >
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "",
              }}
            >
              <Text style={styles.cardTitle}>Steps</Text>
              <ForwardButton />
            </View>
            <Text style={styles.stepsCount}>4,432 Steps</Text>
            <View style={styles.barChart}>
              <Image
                source={require("../../assets/barchat.png")} // Replace with your logo path
                style={styles.barchat}
              />
            </View>
            <View style={styles.statsRow}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name="location-sharp"
                  size={20}
                  color={"rgba(11, 173, 115, 1)"}
                />
                <Text style={styles.statItem}>3.72 Km</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5
                  name="fire"
                  size={20}
                  color={"rgba(11, 173, 115, 1)"}
                />
                <Text style={styles.statItem}> 223 Kcal</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="clockcircle"
                  size={19}
                  color={"rgba(11, 173, 115, 1)"}
                />
                <Text style={styles.statItem}> 35 Min</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ImageBackground>

        {/* Sleep Card */}
        <ImageBackground
          style={[styles.cardContainer, { minHeight: 200 }]} // Apply minHeight dynamically
          source={require("../../assets/sleep.png")}
          imageStyle={{ borderRadius: 10 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "",
            }}
          >
            <Text style={styles.cardTitle}>Sleep</Text>
            <ForwardButton />
          </View>
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
          <View style={styles.timeRangeContainer}>
            <Text style={styles.timeText}>22:20 pm</Text>
            <View style={styles.timeBar}>
              <View style={styles.filledBar} />
              <View style={styles.thumb} />
            </View>
            <Text style={styles.timeText}>07:00 am</Text>
          </View>
          <View style={styles.sleepStats}>
            <Text style={styles.statItem}>8h 40m</Text>
            <Text style={styles.statItem}>62 Bpm</Text>
          </View>
        </ImageBackground>

        <ImageBackground
          style={[styles.cardContainer, { minHeight: 200 }]} // Apply minHeight dynamically
          source={require("../../assets/heart.png")}
          imageStyle={{ borderRadius: 10 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "",
            }}
          >
            <Text style={styles.cardTitle}>HEART BIT</Text>
            <ForwardButton />
          </View>
          <View style={{ marginTop: 180 }}>
            <Text style={styles.heartRate}>
              160 <Text style={styles.heartRateSub}>BP</Text>
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          style={[styles.cardContainer, { minHeight: 300 }]} // Apply minHeight dynamically
          source={require("../../assets/oxygen.png")}
          imageStyle={{ borderRadius: 10 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "",
            }}
          >
            <Text style={styles.cardTitle}>SpO2</Text>
            <ForwardButton />
          </View>
          <View style={{ marginTop: 100 }}>
            <Text style={[styles.heartRate, { color: "white" }]}>90</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          style={[styles.cardContainer, { minHeight: 300 }]} // Apply minHeight dynamically
          source={require("../../assets/bp.png")}
          imageStyle={{ borderRadius: 10 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "",
            }}
          >
            <Text style={styles.cardTitle}>BP Meter</Text>
            <ForwardButton />
          </View>
        </ImageBackground>
      </ScrollView>
      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 5,
  },
  barchat: {
    width: "90%",
    resizeMode: "contain",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 17,
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
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "left",
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
    resizeMode: "contain",
  },
  cardTitle: {
    fontSize: 24,
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
    color: "#fff",
    fontSize: 14,
    marginLeft: 1,
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
    fontSize: 30,
    color: "#FF4D67",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  heartRateSub: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
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
    top: "37%",
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
  logo: {
    width: 60,
    height: 55,
  },
  heartIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  timeRangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  timeText: {
    fontSize: 14,
    color: "#fff",
  },
  timeBar: {
    flex: 1,
    height: 8,
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

export default Dashboard;
