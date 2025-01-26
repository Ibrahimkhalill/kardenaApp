import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";
import { MaterialIcons } from "@expo/vector-icons";

export default function ArrowButton({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}
    >
      <MaterialIcons name="arrow-back-ios" size={18} color="#FFFFFF" />
      {/* Smaller icon */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderWidth: 1,
    paddingLeft: 5,
    borderRadius: 13,
    borderColor: "rgba(217, 217, 217, 1)",
  },
});
