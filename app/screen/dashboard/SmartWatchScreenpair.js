import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const SmartWatchScreenpair = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Heading */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Pair your smart watch with app</Text>
        <Text style={styles.description}>
          To fully unlock the capabilities of your smartwatch, it is important
          to pair it with its companion app. Start by downloading the
        </Text>
      </View>

      {/* Watch Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/watch.png")}
          style={styles.watchImage}
          resizeMode="contain"
        />
      </View>

      {/* Dots Indicator */}
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Dashboard")} // Replace with your navigation logic
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Black background
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    marginTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: "#ccc", // Light gray text
    textAlign: "left",
    lineHeight: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  watchImage: {
    width: 200,
    height: 285,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#BAFF29", // Neon green for active dot
  },
  inactiveDot: {
    backgroundColor: "#333", // Dark gray for inactive dot
  },
  nextButton: {
    backgroundColor: "#BAFF29", // Neon green button
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 10,
    marginBottom: 30,
  },
  nextButtonText: {
    fontSize: 16,
    color: "#000", // Black text
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SmartWatchScreenpair;
