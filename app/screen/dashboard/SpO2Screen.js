import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";
import { Ionicons } from "@expo/vector-icons";
import Header from "../component/Header";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import SOP from "../../assets/sop.svg";
const SpO2Screen = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width;

  // Dummy Data for SpO2 Zone
  const spo2Data = [90, 95, 98, 99, 99, 100, 100];

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={["rgba(230, 230, 230, 0.19)", "rgba(33, 164, 0, 0.1102)"]}
          start={{ x: 0.5, y: 0 }} // Start at the top center
          end={{ x: 0.5, y: 1 }}
        >
          <Header header_name={"SpO2"} navigation={navigation} />

          {/* SpO2 Percentage */}
          <View style={styles.spo2Container}>
            <Text style={styles.spo2Value}>99%</Text>
            <Text style={styles.dateText}>20 Oct. 2025 Tue Average</Text>
            <View style={styles.ecgContainer}>
              <SOP width={"100%"} />
            </View>
          </View>
        </LinearGradient>
        {/* Header */}

        {/* SpO2 Rate Zone */}
        <View style={styles.spo2RateZone}>
          <Text style={styles.sectionTitle}>SpO2 Rate Zone</Text>
          <BarChart
            data={{
              labels: ["1", "2", "3", "4", "5", "6", "7"],
              datasets: [
                {
                  data: spo2Data,
                },
              ],
            }}
            width={screenWidth - 40} // Chart width
            height={220} // Chart height
            yAxisSuffix="%"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundGradientFrom: "#000",
              backgroundGradientTo: "#000",
              color: (opacity = 1) => `rgba(186, 255, 41, ${opacity})`, // Bar color
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              barPercentage: 0.5,
              fillShadowGradient: "#0BAD73", // Gradient fill
              fillShadowGradientOpacity: 1,
            }}
            style={{
              marginVertical: 10,
              borderRadius: 16,
            }}
          />
        </View>
        <LinearGradient
          colors={["rgba(230, 230, 230, 0.19)", "rgba(33, 164, 0, 0.1102)"]}
          start={{ x: 0.5, y: 0 }} // Start at the top center
          end={{ x: 0.5, y: 1 }} // End at the bottom center
          style={styles.aboutSection}
        >
          <Text style={styles.aboutTitle}>ABOUT</Text>
          <Text style={styles.aboutText}>
            Maintaining an optimal SpO₂ level, typically between 95% and 100%,
            is a key indicator of healthy oxygen saturation in the blood. This
            range signifies that your body is efficiently transporting oxygen to
            vital organs and tissues, supporting overall wellness. Achieving and
            sustaining a "good" SpO₂ rate is often associated with strong
            cardiovascular health, proper lung function, and adequate
            circulation.
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
  aboutTitle: {
    fontSize: 28,
    color: "rgba(33, 164, 0, 1)",
    fontWeight: "bold",
    marginBottom: 10,
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
  spo2Container: {
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 30,
  },
  spo2Value: {
    fontSize: 48,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)",
  },
  dateText: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 5,
  },
  ecgContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "90%",
    justifyContent: "center",
  },
  ecgLine: {
    flex: 1,
    height: 80,
  },
  dropContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#BAFF29",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -40,
  },
  dropText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  spo2RateZone: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
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
});

export default SpO2Screen;
