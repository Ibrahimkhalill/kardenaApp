import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Animated,
  Dimensions,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
const LogoutModal = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const slideAnim = React.useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;

  const openModal = () => {
    setVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: Dimensions.get("window").height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };

  return (
    <View>
      {/* Button to Open Modal */}
      <TouchableOpacity onPress={() => openModal()}>
        <View style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <MaterialIcons name="logout" size={20} color="#E91E63" />
          </View>
          <Text style={styles.menuText}>Log Out</Text>
          <Ionicons name="chevron-forward" size={20} color="#D7D7D7" />
        </View>
      </TouchableOpacity>

      {/* Bottom Sheet Modal */}
      <Modal
        transparent
        visible={visible}
        animationType="none"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay} onTouchEnd={closeModal} />
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Text style={styles.modalTitle}>Logout</Text>
          <Text style={styles.modalText}>Are you sure want to log out ?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  openButton: {
    backgroundColor: "#8E44AD",
    padding: 12,
    borderRadius: 8,
  },
  openButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#1E1E1E",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  modalText: {
    color: "#CDCDCD",
    fontSize: 14,
    marginBottom: 25,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "rgba(238, 230, 241, 1)",
    paddingVertical: 12,
    marginRight: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#8E44AD",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    flex: 1,
    backgroundColor: "#BAFF29",
    paddingVertical: 12,
    marginLeft: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1E1E1E",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    height: 55,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, .1)",
  },
  icon: {
    marginRight: 10,
  },
  menuText: {
    flex: 1,
    color: "#D7D7D7",
    fontSize: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1e1e1e",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  menuIcon: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 10,
    borderRadius: 10,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    marginLeft: 15,
  },
});

export default LogoutModal;
