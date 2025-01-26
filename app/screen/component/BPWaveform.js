import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import {
  Svg,
  Polyline,
  Line,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const BPWaveform = ({ data, color, gradient, label }) => {
  const screenWidth = Dimensions.get("window").width - 40; // Full width with padding
  const graphHeight = 150; // Height of the graph

  // Map data to create points for the waveform
  const points = data
    .map((value, index) => {
      const x = (screenWidth / data.length) * index;
      const y = graphHeight - (value / 150) * graphHeight; // Scale to fit within graph height
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <View style={styles.waveformContainer}>
      {/* Waveform */}

      <Svg height={graphHeight} width={screenWidth}>
        {/* Gradient Definition */}
        <Defs>
          <LinearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0%" stopColor={gradient[0]} />
            <Stop offset="100%" stopColor={gradient[1]} />
          </LinearGradient>
        </Defs>

        {/* Grid Lines */}
        {Array.from({ length: 10 }).map((_, index) => (
          <Line
            key={`v-${index}`}
            x1={(screenWidth / 10) * index}
            y1="0"
            x2={(screenWidth / 10) * index}
            y2={graphHeight}
            stroke="#333"
            strokeWidth="0.5"
          />
        ))}
        <Text
          style={{
            color: color,
            position: "absolute",
            top: "0",
            left: "45%",
            fontSize: 28,
          }}
        >
          {label}
        </Text>
        {Array.from({ length: 5 }).map((_, index) => (
          <Line
            key={`h-${index}`}
            x1="0"
            y1={(graphHeight / 5) * index}
            x2={screenWidth}
            y2={(graphHeight / 5) * index}
            stroke="#333"
            strokeWidth="0.5"
          />
        ))}

        {/* Waveform Line */}
        <Polyline
          points={points}
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="2"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  waveformContainer: {
    marginBottom: 30,
  },
});

export default BPWaveform;
