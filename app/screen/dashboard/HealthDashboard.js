import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons"; // For icons (requires expo)
import { SafeAreaView } from "react-native-safe-area-context";
import GradiantBox from "../component/GradiantBox";
import Health from "../../assets/health.svg";
const HealthDashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/heatlh_dashboard.png")}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>HEALTH</Text>
          </View>

          {/* Circular Progress Summary */}
          <View style={styles.circularProgressContainer}>
            <View style={styles.summaryInfo}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 10,
                  marginBottom: 3,
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(11, 173, 115, 1)",
                  }}
                >
                  <Ionicons name="footsteps-sharp" size={16} color={"white"} />
                </View>

                <Text style={styles.summaryText}>Daily Steps (Steps)</Text>
              </View>
              <Text style={styles.summaryValue}>180/300</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 10,
                  marginBottom: 1,
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(2, 19, 165, 1)",
                  }}
                >
                  <FontAwesome5 name="fire" size={16} color={"white"} />
                </View>

                <Text style={styles.summaryText}>Calories (kcal)</Text>
              </View>

              <Text style={styles.summaryValue}>180/300</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 10,
                  marginBottom: 1,
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(241, 147, 57, 1)",
                  }}
                >
                  <Ionicons name="location-sharp" size={16} color={"white"} />
                </View>

                <Text style={styles.summaryText}>Distance (Km)</Text>
              </View>

              <Text style={styles.summaryValue}>4.2/5</Text>
            </View>
            <View>
              <Health width={220} />
            </View>
          </View>

          {/* Health Metrics Cards */}
          {/* Steps */}
          <TouchableOpacity onPress={() => navigation.navigate("StepsScreen")}>
            <GradiantBox>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.metricCardHeader}>
                  <Ionicons name="walk" size={24} color="#00ff7f" />
                  <Text style={styles.metricCardTitle}>STEPS</Text>
                </View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="rgba(144, 144, 144, 1)"
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={styles.metricCardValue}>6800</Text>
                  <Text style={styles.metricCardSubtitle}>80%</Text>
                </View>

                <TouchableOpacity style={styles.metricButton}>
                  <MaterialIcons
                    name="insights"
                    size={16}
                    color="rgba(11, 173, 115, 1)"
                  />
                  <Text style={styles.metricButtonText}>Measures</Text>
                </TouchableOpacity>
              </View>
            </GradiantBox>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("HeartRateScreen")}
          >
            <GradiantBox>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.metricCardHeader}>
                  <Ionicons name="heart" size={24} color="#ff4d67" />
                  <Text style={styles.metricCardTitle}>HEART RATE</Text>
                </View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="rgba(144, 144, 144, 1)"
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={styles.metricCardValue}>76 BPM</Text>
                  <Text style={styles.metricCardSubtitle}>
                    Range: 60-100 BPM
                  </Text>
                </View>

                <TouchableOpacity style={styles.metricButton}>
                  <MaterialIcons
                    name="insights"
                    size={16}
                    color="rgba(243, 40, 104, 1)"
                  />
                  <Text style={styles.metricButtonText}>Measures</Text>
                </TouchableOpacity>
              </View>
            </GradiantBox>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SleepScreen")}>
            <GradiantBox>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.metricCardHeader}>
                  <Ionicons name="moon" size={24} color="#8a2be2" />
                  <Text style={styles.metricCardTitle}>SLEEP</Text>
                </View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="rgba(144, 144, 144, 1)"
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={styles.metricCardValue}>7h 20m</Text>
                  <Text style={styles.metricCardSubtitle}>
                    The sleep time is ideal
                  </Text>
                </View>

                <TouchableOpacity style={styles.metricButton}>
                  <MaterialIcons
                    name="insights"
                    size={16}
                    color="rgba(11, 173, 115, 1)"
                  />
                  <Text style={styles.metricButtonText}>Measures</Text>
                </TouchableOpacity>
              </View>
            </GradiantBox>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SpO2Screen")}>
            <GradiantBox>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.metricCardHeader}>
                  <Ionicons name="pulse" size={24} color="#00ffff" />
                  <Text style={styles.metricCardTitle}>SpO2</Text>
                </View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="rgba(144, 144, 144, 1)"
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={styles.metricCardValue}>99%</Text>
                  <Text style={styles.metricCardSubtitle}>Normal</Text>
                </View>

                <TouchableOpacity style={styles.metricButton}>
                  <MaterialIcons
                    name="insights"
                    size={16}
                    color="rgba(11, 173, 115, 1)"
                  />
                  <Text style={styles.metricButtonText}>Measures</Text>
                </TouchableOpacity>
              </View>
            </GradiantBox>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("BPScreen")}>
            <GradiantBox>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.metricCardHeader}>
                  <Ionicons name="fitness" size={24} color="#ff4500" />
                  <Text style={styles.metricCardTitle}>BLOOD PRESSURE</Text>
                </View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="rgba(144, 144, 144, 1)"
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={styles.metricCardValue}>120/80</Text>
                  <Text style={styles.metricCardSubtitle}>Normal</Text>
                </View>

                <TouchableOpacity style={styles.metricButton}>
                  <MaterialIcons
                    name="insights"
                    size={16}
                    color="rgba(255, 62, 1, 1)"
                  />
                  <Text style={styles.metricButtonText}>Measures</Text>
                </TouchableOpacity>
              </View>
            </GradiantBox>
          </TouchableOpacity>

          {/* Blood Pressure */}
        </ScrollView>
      </ImageBackground>
      {/* Header */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000",
  },
  headerContainer: {
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  circularProgressContainer: {
    flexDirection: "row",

    justifyContent: "space-between",
  },
  circularProgressPlaceholder: {
    width: 230,
    height: 170,
    borderRadius: 60,
    resizeMode: "cover",
  },
  circularProgressText: {
    color: "#666",
    textAlign: "center",
  },
  summaryInfo: {
    flex: 1,
    justifyContent: "center",
  },
  summaryText: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 1,
  },
  summaryValue: {
    fontSize: 18,
    color: "#BAFF29",
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 40,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  metricCard: {
    backgroundColor: "#1e1e1e",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  metricCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  metricCardTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  metricCardValue: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 1,
  },
  metricCardSubtitle: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 15,
  },
  metricButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2e2e2e",
    padding: 10,
    borderRadius: 10,
  },
  metricButtonText: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 5,
  },
});

export default HealthDashboard;
