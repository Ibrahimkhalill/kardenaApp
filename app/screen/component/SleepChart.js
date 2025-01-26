import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Svg, Rect, G, Line, Circle } from "react-native-svg";

const SleepChart = ({ data }) => {
  const screenWidth = Dimensions.get("window").width - 40; // Full width with padding
  const chartHeight = 150; // Chart height
  const totalBars = data.length; // Total number of time intervals
  const barWidth = screenWidth / totalBars; // Width of each bar

  // Max duration to normalize heights (adjust this based on the maximum duration in your data)
  const maxDuration = 10;

  return (
    <View style={styles.container}>
      {/* Chart */}
      <Svg width={screenWidth} height={chartHeight}>
        <G>
          {data.map((item, index) => {
            const x = index * barWidth;

            // Heights for each state
            const restfulHeight = (item.restful / maxDuration) * chartHeight;
            const lightHeight = (item.light / maxDuration) * chartHeight;
            const awakeHeight = (item.awake / maxDuration) * chartHeight;

            return (
              <G key={index}>
                {/* Restful (Blue) */}
                {item.restful > 0 && (
                  <Rect
                    x={x + barWidth / 4}
                    y={chartHeight - restfulHeight}
                    width={barWidth / 2}
                    height={restfulHeight}
                    fill="#0BAD73"
                  />
                )}
                {/* Light (Purple) */}
                {item.light > 0 && (
                  <Rect
                    x={x + barWidth / 4}
                    y={chartHeight - restfulHeight - lightHeight}
                    width={barWidth / 2}
                    height={lightHeight}
                    fill="#8A2BE2"
                  />
                )}
                {/* Awake (Green) */}
                {item.awake > 0 && (
                  <Rect
                    x={x + barWidth / 4}
                    y={chartHeight - restfulHeight - lightHeight - awakeHeight}
                    width={barWidth / 2}
                    height={awakeHeight}
                    fill="#FF4D67"
                  />
                )}
              </G>
            );
          })}
        </G>

        {/* Time Axis */}
        <Line
          x1="0"
          y1={chartHeight - 2}
          x2={screenWidth}
          y2={chartHeight - 2}
          stroke="#fff"
          strokeWidth="1"
        />
      </Svg>

      {/* Legend */}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: "#0BAD73" }]} />
          <Text style={styles.legendText}>Restful</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: "#8A2BE2" }]} />
          <Text style={styles.legendText}>Light</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: "#FF4D67" }]} />
          <Text style={styles.legendText}>Awake</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
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
});

export default SleepChart;
