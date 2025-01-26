import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowButton from "../component/ArrowButton";

const GeneralSettingScreen = ({ navigation }) => {
  const [settings, setSettings] = useState({
    temperature: "°C",
    distance: "KM",
    height: "CM",
    weight: "KG",
    bloodGlucose: "mg/dL",
  });

  const toggleSetting = (key, option1, option2) => {
    setSettings((prev) => ({
      ...prev,
      [key]: prev[key] === option1 ? option2 : option1,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ArrowButton />
        <Text style={styles.headerTitle}>GENERAL SETTING</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      {/* Settings */}
      <View style={styles.settingsContainer}>
        {/* Temperature */}
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>TEMPERATURE</Text>
          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                settings.temperature === "°C" && styles.activeToggle,
              ]}
              onPress={() => toggleSetting("temperature", "°C", "F")}
            >
              <Text
                style={[
                  styles.toggleText,
                  settings.temperature === "°C" && styles.activeToggleText,
                ]}
              >
                °C
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                settings.temperature === "F" && styles.activeToggle,
              ]}
              onPress={() => toggleSetting("temperature", "°C", "F")}
            >
              <Text
                style={[
                  styles.toggleText,
                  settings.temperature === "F" && styles.activeToggleText,
                ]}
              >
                F
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Distance */}
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>DISTANCE</Text>
          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                settings.distance === "KM" && styles.activeToggle,
              ]}
              onPress={() => toggleSetting("distance", "KM", "MILES")}
            >
              <Text
                style={[
                  styles.toggleText,
                  settings.distance === "KM" && styles.activeToggleText,
                ]}
              >
                KM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                settings.distance === "MILES" && styles.activeToggle,
              ]}
              onPress={() => toggleSetting("distance", "KM", "MILES")}
            >
              <Text
                style={[
                  styles.toggleText,
                  settings.distance === "MILES" && styles.activeToggleText,
                ]}
              >
                MILES
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Height */}
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>HEIGHT</Text>
          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                settings.height === "CM" && styles.activeToggle,
              ]}
              onPress={() => toggleSetting("height", "CM", "INCHES")}
            >
              <Text
                style={[
                  styles.toggleText,
                  settings.height === "CM" && styles.activeToggleText,
                ]}
              >
                CM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                settings.height === "INCHES" && styles.activeToggle,
              ]}
              onPress={() => toggleSetting("height", "CM", "INCHES")}
            >
              <Text
                style={[
                  styles.toggleText,
                  settings.height === "INCHES" && styles.activeToggleText,
                ]}
              >
                INCHES
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Weight */}
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>WEIGHT</Text>
          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                settings.weight === "KG" && styles.activeToggle,
              ]}
              onPress={() => toggleSetting("weight", "KG", "LB")}
            >
              <Text
                style={[
                  styles.toggleText,
                  settings.weight === "KG" && styles.activeToggleText,
                ]}
              >
                KG
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                settings.weight === "LB" && styles.activeToggle,
              ]}
              onPress={() => toggleSetting("weight", "KG", "LB")}
            >
              <Text
                style={[
                  styles.toggleText,
                  settings.weight === "LB" && styles.activeToggleText,
                ]}
              >
                LB
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Blood Glucose */}
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>BLOOD GLUCOSE</Text>
          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                settings.bloodGlucose === "mg/dL" && styles.activeToggle,
              ]}
              onPress={() => toggleSetting("bloodGlucose", "mg/dL", "mmol/L")}
            >
              <Text
                style={[
                  styles.toggleText,
                  settings.bloodGlucose === "mg/dL" && styles.activeToggleText,
                ]}
              >
                mg/dL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                settings.bloodGlucose === "mmol/L" && styles.activeToggle,
              ]}
              onPress={() => toggleSetting("bloodGlucose", "mg/dL", "mmol/L")}
            >
              <Text
                style={[
                  styles.toggleText,
                  settings.bloodGlucose === "mmol/L" && styles.activeToggleText,
                ]}
              >
                mmol/L
              </Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  settingsContainer: {
    marginHorizontal: 20,
    backgroundColor: "rgba(24, 25, 28, 1)",
    marginTop: 70,
    borderRadius: 10,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(64, 64, 64, 1)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  settingLabel: {
    fontSize: 16,
    color: "#fff",
  },
  toggleContainer: {
    flexDirection: "row",
  },
  toggleButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#333",
    borderRadius: 5,
    marginLeft: 10,
  },
  activeToggle: {
    backgroundColor: "#BAFF29",
  },
  toggleText: {
    fontSize: 14,
    color: "#aaa",
  },
  activeToggleText: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default GeneralSettingScreen;
