import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons"; // For icons (requires expo)
const ForwardButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialIcons
        name="arrow-forward-ios"
        size={21}
        color="rgba(73, 73, 73, 1)"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    borderRadius: 17,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ForwardButton;
