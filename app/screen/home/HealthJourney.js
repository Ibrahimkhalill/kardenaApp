import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import AnimatedButton from "../component/AnimatedButton";

const HealthJourney = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/welcome.jpg")} // Replace with your background image path
        style={styles.backgroundImage}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Start Your Daily Health Journey
          </Text>
          <Text style={styles.headerSubtitle}>
            Start your fitness journey with our app's guidance and support.
          </Text>
        </View>

        {/* Health Card */}
        <View style={styles.healthCard}>
          <Image
            source={require("../../assets/health.png")} // Replace with your health image path
            style={styles.images}
          />
        </View>

        {/* Let's Start Button */}
        <AnimatedButton navigation={navigation} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Ensures the image covers the entire screen
    resizeMode: "cover", // Makes the image stretch to fill the view
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  images: {
    height: 270,
    width: 270,
  },
  header: {
    marginTop: 30,
    marginBottom: 20,
  },
  headerTitle: {
    width: "60%",
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  headerSubtitle: {
    width: "80%",
    fontSize: 14,
    color: "#ccc",
    lineHeight: 22,
  },
  healthCard: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
  },
});

export default HealthJourney;
