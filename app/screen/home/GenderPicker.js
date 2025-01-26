import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GenderPicker = ({ isVisible, setIsVisible }) => {
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
  };

  return (
    <View style={styles.container}>
      {/* Floating Modal */}
      {isVisible && (
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Gender</Text>

          {/* Date Picker Layout */}
          <View style={styles.pickerContainer}>
            <TouchableOpacity>
              <Text style={styles.gender_header}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.selectedItem}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.gender_header}>Other</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.confirmButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirm}
            >
              <Text style={styles.confirmButtonText}>Ok</Text>
            </TouchableOpacity>
          </View>

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
    zIndex: 2,
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
  button: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  pickerContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 25,
    alignItems: "center",
    gap: 10,
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
    fontSize: 19,
    fontWeight: "bold",
  },
  gender_header: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  confirmButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "30%",
    marginBottom: 10,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 20,
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

export default GenderPicker;
