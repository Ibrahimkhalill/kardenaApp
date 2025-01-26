import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/Feather"; // Install react-native-vector-icons if not already installed

const AnimatedButton = ({ navigation }) => {
  const iconAnimation = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.timing(iconAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(iconAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const translateX = iconAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10], // Move the icon 10 units to the right
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("PersonalInformation")}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View style={styles.iconContainer}>
        <Icon name="chevron-right" size={24} color="#000" />
      </View>
      <Text style={styles.text}>Lets start</Text>
      <Animated.View
        style={[styles.animatedIcon, { transform: [{ translateX }] }]}
      >
        <Icon name="chevron-right" size={20} color="rgba(186, 255, 41, 0.2)" />
        <Icon name="chevron-right" size={21} color="rgba(186, 255, 41, 0.5)" />
        <Icon name="chevron-right" size={22} color="#BAFF29" />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  iconContainer: {
    backgroundColor: "#BAFF29",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  animatedIcon: {
    marginLeft: 10,
    flexDirection: "row",
  },
});

export default AnimatedButton;
