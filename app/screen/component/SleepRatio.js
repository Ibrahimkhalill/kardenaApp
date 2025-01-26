import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Svg, Circle, Path } from "react-native-svg";

const SleepDonutChart = ({ data }) => {
  const screenWidth = Dimensions.get("window").width;
  const center = screenWidth / 4; // Center of the circle
  const radius = 60; // Radius of the circle
  const strokeWidth = 15; // Thickness of the arcs

  // Total duration to normalize the arc proportions
  const totalMinutes = data.reduce((sum, item) => sum + item.value, 0);

  // Helper function to calculate start and end angles for each arc
  const calculateArc = (startAngle, percentage) => {
    const endAngle = startAngle + percentage * 360;
    const startRadians = (startAngle - 90) * (Math.PI / 180);
    const endRadians = (endAngle - 90) * (Math.PI / 180);
    return { startRadians, endRadians };
  };

  // Helper function to create arc paths dynamically
  const createArc = (startAngle, percentage, color) => {
    const { startRadians, endRadians } = calculateArc(startAngle, percentage);
    const x1 = center + radius * Math.cos(startRadians);
    const y1 = center + radius * Math.sin(startRadians);
    const x2 = center + radius * Math.cos(endRadians);
    const y2 = center + radius * Math.sin(endRadians);

    const largeArcFlag = percentage > 0.5 ? 1 : 0;

    return (
      <Path
        key={`${color}-${startAngle}`}
        d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Svg height={center * 2} width={center * 2}>
        {/* Render arcs dynamically */}
        {data.map((item, index) => {
          const startAngle =
            index === 0
              ? 0
              : data
                  .slice(0, index)
                  .reduce((sum, item) => sum + item.value / totalMinutes, 0) *
                360;
          const percentage = item.value / totalMinutes;
          return createArc(startAngle, percentage, item.color);
        })}

        {/* Center Text */}
        <View style={styles.positioned}>
          <Text
            x={center}
            y={center - 10}
            textAnchor="middle"
            fontSize="18"
            fill="#fff"
            fontWeight="bold"
          >
            {Math.floor(totalMinutes / 60)}H {totalMinutes % 60}M
          </Text>
          <Text
            x={center}
            y={center + 10}
            textAnchor="middle"
            fontSize="12"
            fill="#aaa"
          >
            TOTAL
          </Text>
        </View>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    position: "relative",
  },
  positioned: {
    position: "absolute",
    top: 80,
    left: "40%",
  },
});

export default SleepDonutChart;
