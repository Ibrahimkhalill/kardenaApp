import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Svg, Circle, G, Text as SvgText } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import BPWaveform from "../component/BPWaveform";
import Header from "../component/Header";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import BP from "../../assets/bp.svg";
const BPScreen = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width;

  // BP waveform data
  const systolicData = [
    10, 10, 5, 11, 12, 10, 10, 85, 10, 50, 0, 50, 10, 10, 85, 10, 85, 1, 2, 100,
    7, 10, 70, 10, 10, 85, 10, 50, 0, 50, 10, 10, 85, 10, 85, 1, 2, 100, 50, 10,
    10, 85, 10, 50, 0, 50, 10, 50, 85, 10, 85, 1, 2, 3, 5,
  ];
  const diastolicData = [
    0, 1, 5, 7, 10, 70, 10, 10, 85, 10, 50, 0, 50, 10, 10, 85, 10, 85, 1, 2,
    100, 50, 10, 10, 85, 10, 50, 0, 10, 10, 10, 85, 10, 85, 1, 2, 50, 5, 0, 1,
    10, 10, 85, 10, 50, 0, 50, 10, 50, 85, 10, 85, 1, 2, 3, 5,
  ];

  // Semi-circle meter configuration
  const radius = 100;
  const strokeWidth = 10;

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={["rgba(230, 230, 230, 0.19)", "rgba(33, 164, 0, 0.1102)"]}
          start={{ x: 0.5, y: 0 }} // Start at the top center
          end={{ x: 0.5, y: 1 }}
        >
          <Header header_name={"BP"} navigation={navigation} />
          <View style={styles.bpContainer}>
            <Text style={styles.bpValue}>120/80</Text>
            <Text style={styles.dateText}>20 Oct. 2025 Tue Average</Text>
          </View>

          {/* Semi-Circular BP Meter */}
          <View style={styles.meterContainer}>
            <BP />

            {/* <Svg height={radius * 2} width={radius * 2}>
          <G rotation="-90" origin={`${radius}, ${radius}`}>
            <Circle
              cx={radius}
              cy={radius}
              r={radius - strokeWidth}
              stroke="#FF4D67" // Active stroke
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray="180 360" // Semi-circle
            />
            <Circle
              cx={radius}
              cy={radius}
              r={radius - strokeWidth}
              stroke="#333" // Background stroke
              strokeWidth={strokeWidth}
              fill="none"
            />
          </G>
          <SvgText
            x={radius}
            y={radius - 20}
            textAnchor="middle"
            fontSize="16"
            fill="#fff"
            fontWeight="bold"
          >
            BP Meter
          </SvgText>
          <SvgText
            x={radius}
            y={radius}
            textAnchor="middle"
            fontSize="14"
            fill="#aaa"
          >
            Normal
          </SvgText>
          <SvgText
            x={radius}
            y={radius + 40}
            textAnchor="middle"
            fontSize="12"
            fill="#fff"
          >
            15 sec Left
          </SvgText>
        </Svg> */}
          </View>
        </LinearGradient>

        {/* BP Metrics */}

        {/* BP Rate Zone */}
        <View style={styles.bpRateZone}>
          <Text style={styles.sectionTitle}>Bp Rate Zone</Text>
          {/* Systolic */}
          <BPWaveform
            data={systolicData}
            color="#FF4D67"
            gradient={["rgba(230, 112, 0, 1)", "rgba(150, 151, 150, 1)"]}
            label={120}
          />

          {/* Diastolic Waveform */}
          <BPWaveform
            data={diastolicData}
            color="#0BAD73"
            gradient={["#0BAD73", "#98FB98"]}
            label={80}
          />
        </View>
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
  bpContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  bpValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)",
  },
  dateText: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 5,
  },
  meterContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 60,
  },
  bpRateZone: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  waveformContainer: {
    marginBottom: 20,
  },
  waveformLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
});

export default BPScreen;
