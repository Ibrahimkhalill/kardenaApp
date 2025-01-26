import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const HeightPicker = ({ navigation }) => {
  const [unit, setUnit] = useState("cm"); // 'cm' or 'inches'
  const [height, setHeight] = useState(170); // Default height value in cm
  const translateX = useSharedValue(0); // Keeps track of swipe distance

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX; // Update the swipe distance dynamically
    },
    onEnd: () => {
      const step = unit === "cm" ? 1 : 0.5; // Step size based on unit
      const maxValue = unit === "cm" ? 250 : 98; // Max height based on unit
      const minValue = unit === "cm" ? 50 : 20; // Min height based on unit

      // Calculate the new height based on swipe distance
      const adjustment = Math.round(translateX.value / 10) * step; // Each 10px swipe = 1 unit
      const newHeight = height + adjustment;

      // Clamp the height between the min and max values
      const clampedHeight = Math.min(Math.max(newHeight, minValue), maxValue);

      // Update the height and reset swipe distance
      setHeight(clampedHeight);
      translateX.value = 0; // Reset translation
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>What is your height?</Text>

        {/* Unit Selector */}
        <View style={styles.unitSelector}>
          <TouchableOpacity
            style={[
              styles.unitButton,
              unit === "inches" && styles.selectedUnitButton,
            ]}
            onPress={() => setUnit("inches")}
          >
            <Text
              style={[
                styles.unitButtonText,
                unit === "inches" && styles.selectedUnitText,
              ]}
            >
              inches
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.unitButton,
              unit === "cm" && styles.selectedUnitButton,
            ]}
            onPress={() => setUnit("cm")}
          >
            <Text
              style={[
                styles.unitButtonText,
                unit === "cm" && styles.selectedUnitText,
              ]}
            >
              cm
            </Text>
          </TouchableOpacity>
        </View>

        {/* Height Display */}
        <View style={styles.heightDisplay}>
          <Text style={styles.heightText}>{height}</Text>
          <Text style={styles.unitText}>{unit}</Text>
        </View>

        {/* Slider */}
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.rulerContainer, animatedStyle]}>
            {/* Dynamic Scale */}
            <View style={styles.scaleContainer}>
              {[...Array(41).keys()].map((i) => {
                const scaleValue = unit === "cm" ? 150 + i : 55 + i * 0.5;
                const isMainLine = i % 5 === 0;
                return (
                  <View key={i} style={styles.scaleItem}>
                    <View
                      style={[
                        styles.scaleLine,
                        isMainLine && styles.mainScaleLine,
                      ]}
                    />
                    {isMainLine && (
                      <Text style={styles.scaleText}>{scaleValue}</Text>
                    )}
                  </View>
                );
              })}
            </View>
          </Animated.View>
        </PanGestureHandler>

        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("NextScreen")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
  },
  unitSelector: {
    flexDirection: "row",
    marginVertical: 50,
    backgroundColor: "#1e1e1e",
    borderRadius: 25,
    padding: 5,
  },
  unitButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  selectedUnitButton: {
    backgroundColor: "#BAFF29",
  },
  unitButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  selectedUnitText: {
    color: "#000",
    fontWeight: "bold",
  },
  heightDisplay: {
    alignItems: "center",
    marginBottom: 30,
  },
  heightText: {
    fontSize: 48,
    color: "#BAFF29",
    fontWeight: "bold",
  },
  unitText: {
    fontSize: 18,
    color: "#fff",
  },
  rulerContainer: {
    width: "100%",
    height: 100,
    alignItems: "center",
    overflow: "hidden",
  },
  scaleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  scaleItem: {
    width: 20,
    alignItems: "center",
  },
  scaleLine: {
    width: 2,
    height: 15,
    backgroundColor: "#fff",
    marginBottom: 5,
  },
  mainScaleLine: {
    height: 25,
    backgroundColor: "#BAFF29",
  },
  scaleText: {
    color: "#fff",
    fontSize: 12,
  },
  nextButton: {
    backgroundColor: "#BAFF29",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 30,
    position: "absolute",
    bottom: 30,
  },
  nextButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HeightPicker;
