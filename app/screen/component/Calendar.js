import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundSVG from "../../assets/calendar.svg"; // Import your SVG file

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("2025-01-02");
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const year = 2025;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const renderDays = (monthIndex) => {
    const days = [];
    const totalDays = daysInMonth(year, monthIndex);
    for (let i = 1; i <= totalDays; i++) {
      const date = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(
        i
      ).padStart(2, "0")}`;
      days.push(
        <TouchableOpacity
          key={i}
          style={[
            styles.dateItem,
            selectedDate === date && styles.selectedDate,
          ]}
          onPress={() => setSelectedDate(date)}
        >
          <Text
            style={[
              styles.dateText,
              selectedDate === date && styles.selectedDateText,
            ]}
          >
            {i}
          </Text>
        </TouchableOpacity>
      );
    }
    return days;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* SVG Background */}
      <BackgroundSVG
        style={StyleSheet.absoluteFillObject} // Make it cover the entire screen
        preserveAspectRatio="none"
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            setCurrentMonthIndex(
              currentMonthIndex > 0 ? currentMonthIndex - 1 : currentMonthIndex
            )
          }
        >
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{`${year} Year`}</Text>
        <TouchableOpacity
          onPress={() =>
            setCurrentMonthIndex(
              currentMonthIndex < 11 ? currentMonthIndex + 1 : currentMonthIndex
            )
          }
        >
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Days of the Week */}
      <View style={styles.weekDays}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <Text key={index} style={styles.weekDayText}>
            {day}
          </Text>
        ))}
      </View>

      {/* Month and Dates */}
      <FlatList
        data={[{ key: months[currentMonthIndex] }]}
        keyExtractor={(item) => item.key}
        renderItem={() => (
          <View>
            <Text style={styles.monthName}>{months[currentMonthIndex]}</Text>
            <View style={styles.datesContainer}>
              {renderDays(currentMonthIndex)}
            </View>
          </View>
        )}
      />
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
    marginHorizontal: 20,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  weekDays: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  weekDayText: {
    fontSize: 14,
    color: "#aaa",
    textAlign: "center",
    flex: 1,
  },
  monthName: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  datesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 20,
  },
  dateItem: {
    width: "13%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  dateText: {
    fontSize: 14,
    color: "#fff",
  },
  selectedDate: {
    backgroundColor: "#BAFF29",
    borderRadius: 20,
  },
  selectedDateText: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default Calendar;
