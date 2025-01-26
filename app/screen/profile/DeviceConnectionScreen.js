import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const DeviceConnectionScreen = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  // Animation for the scanning circles
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Navigate to "No Device Found" page after 4 seconds
    const timeout = setTimeout(() => {
      navigation.navigate("NotFoundScreen");
    }, 4000);

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Device Connection</Text>
        <TouchableOpacity onPress={() => navigation.navigate("NextScreen")}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>
      </View>

      {/* Scanning Text */}
      <Text style={styles.scanningText}>Scanning...</Text>

      {/* Scanning Animation */}
      <View style={styles.scanningContainer}>
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [
                {
                  scale: scaleAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 2],
                  }),
                },
              ],
              opacity: scaleAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
            },
          ]}
        />
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [
                {
                  scale: scaleAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.7, 1.6],
                  }),
                },
              ],
              opacity: scaleAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
            },
          ]}
        />
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [
                {
                  scale: scaleAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.6, 1.1],
                  }),
                },
              ],
              opacity: scaleAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
            },
          ]}
        />
        <View style={styles.deviceIconContainer}>
          <Ionicons name="search" size={24} color="#BAFF29" />
        </View>
      </View>
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
    color: "#fff",
    fontWeight: "bold",
  },
  skipText: {
    fontSize: 16,
    color: "#BAFF29",
    fontWeight: "bold",
  },
  scanningText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginTop: 40,
  },
  scanningContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#BAFF29",
  },
  deviceIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DeviceConnectionScreen;
