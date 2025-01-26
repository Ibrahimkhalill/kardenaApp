import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={["rgba(232, 232, 232, 0.2)", "rgba(186, 253, 49, .1)"]}
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
    width: width * 0.95, // Dynamically use device width
    borderRadius: 20,
    padding: 20,
  },
});

export default GradientBackground;
