import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomDatePicker = ({ isVisible, setIsVisible }) => {
  const [selectedDate, setSelectedDate] = useState({
    year: 1989,
    month: "March",
    day: 3,
  });

  const years = [1987, 1988, 1989, 1990, 1991];
  const months = ["January", "February", "March", "April", "May"];
  const days = Array.from({ length: 5 }, (_, i) => i + 1);

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  const handleConfirm = () => {
    handleCloseModal();
    alert(
      `Selected Date: ${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`
    );
  };

  return (
    <View style={styles.container}>
      {/* Floating Modal */}
      {isVisible && (
       
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Birthday</Text>

            {/* Date Picker Layout */}
            <View style={styles.pickerContainer}>
              {/* Year Picker */}
              <View style={styles.pickerColumn}>
                {years.map((year) => (
                  <Text
                    key={year}
                    style={[
                      styles.pickerItem,
                      selectedDate.year === year && styles.selectedItem,
                    ]}
                    onPress={() =>
                      setSelectedDate((prev) => ({ ...prev, year }))
                    }
                  >
                    {year}
                  </Text>
                ))}
              </View>

              {/* Month Picker */}
              <View style={styles.pickerColumn}>
                {months.map((month) => (
                  <Text
                    key={month}
                    style={[
                      styles.pickerItem,
                      selectedDate.month === month && styles.selectedItem,
                    ]}
                    onPress={() =>
                      setSelectedDate((prev) => ({ ...prev, month }))
                    }
                  >
                    {month}
                  </Text>
                ))}
              </View>

              {/* Day Picker */}
              <View style={styles.pickerColumn}>
                {days.map((day) => (
                  <Text
                    key={day}
                    style={[
                      styles.pickerItem,
                      selectedDate.day === day && styles.selectedItem,
                    ]}
                    onPress={() =>
                      setSelectedDate((prev) => ({ ...prev, day }))
                    }
                  >
                    {day}
                  </Text>
                ))}
              </View>
            </View>

            {/* Confirm Button */}
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirm}
            >
              <Text style={styles.confirmButtonText}>Next</Text>
            </TouchableOpacity>

            {/* Close Button */}
          </View>
       
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: "100%",
    bottom: -10,
    left: 20,
    zIndex : 2
  },

  modalContainer: {
    backgroundColor: "#1e1e1e",
    borderRadius: 5,
    padding: 20,
    width: "100%",
    alignSelf: "center", // Center horizontally
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50, // Add space from the bottom
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#4F4F4F",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  pickerColumn: {
    flex: 1,
    alignItems: "center",
  },
  pickerItem: {
    color: "#ccc",
    fontSize: 16,
    marginVertical: 5,
  },
  selectedItem: {
    color: "#BAFF29",
    fontWeight: "bold",
  },
  confirmButton: {
    backgroundColor: "#BAFF29",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "50%",
    marginBottom: 10,
  },
  confirmButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    color: "#ccc",
    fontSize: 14,
  },
});

export default CustomDatePicker;
