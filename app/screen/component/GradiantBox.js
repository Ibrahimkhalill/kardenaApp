import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const GradiantBox = ({ children }) => {
  return (
    <LinearGradient
      colors={[
        "rgba(255, 255, 255, 0.17)",
        "rgba(255, 255, 255, 0.0381)",
        "rgba(255, 255, 255, 0)",
      ]}
      start={{ x: 0.5, y: 0 }} // Start at the top center
      end={{ x: 0.5, y: 1 }} // End at the bottom center
      style={styles.wrappper}
    >
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrappper: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, .2)",
  },
  content: {
    justifyContent: "space-between",
    gap: 1,
  },
});

export default GradiantBox;
