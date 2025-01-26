import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoutModal from "./LogoutModal";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <View style={styles.profileAvatar}>
            <Image
              source={require("../../assets/profile.png")} // Replace with your avatar image path
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="pencil" size={15} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>pappu</Text>
          <Text style={styles.profileEmail}>
            youremail@domain.com | +01 234 567 89
          </Text>
        </View>

        {/* Settings Options */}
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("DeviceConnectionScreen")}
          >
            <View style={styles.menuIcon}>
              <Ionicons name="settings-sharp" size={20} color="#0BAD73" />
            </View>
            <Text style={styles.menuText}>Device Setting</Text>
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("GeneralSettingScreen")}
          >
            <View style={styles.menuIcon}>
              <Ionicons name="cog" size={20} color="#4CAF50" />
            </View>
            <Text style={styles.menuText}>General Setting</Text>
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("FAQScreen")}
          >
            <View style={styles.menuIcon}>
              <FontAwesome5 name="question-circle" size={20} color="#FFD700" />
            </View>
            <Text style={styles.menuText}>FAQ</Text>
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("HelpSupportScreen")}
          >
            <View style={styles.menuIcon}>
              <MaterialIcons name="support-agent" size={20} color="#03A9F4" />
            </View>
            <Text style={styles.menuText}>Help & Support</Text>
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("TermsConditionsScreen")}
          >
            <View style={styles.menuIcon}>
              <Ionicons name="document-text" size={20} color="#FF5722" />
            </View>
            <Text style={styles.menuText}>Terms & Conditions</Text>
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </TouchableOpacity>
          <LogoutModal navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  profileContainer: {
    backgroundColor: "rgba(186, 253, 49, 0.1)",
    alignItems: "center",
    paddingVertical: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileAvatar: {
    position: "relative",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editButton: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "rgba(67, 67, 67, 1)",
    padding: 5,
    borderRadius: 20,
  },
  profileName: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 14,
    color: "#aaa",
    textAlign: "center",
    marginTop: 5,
  },
  menuContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
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

export default ProfileScreen;
