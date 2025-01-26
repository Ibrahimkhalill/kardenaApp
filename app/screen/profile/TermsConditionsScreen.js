import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowButton from "../component/ArrowButton";

const TermsConditionsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ArrowButton />
        <Text style={styles.headerTitle}>TERMS & CONDITIONS</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}

        {/* Last Update Date */}
        <Text style={styles.updateDate}>last update 4 october 2024</Text>

        {/* Terms Content */}
        <Text style={styles.paragraph}>
          Welcome To Kardena Fitness App! By Accessing Or Using Our App, You
          Agree To The Terms Outlined On This Page. Please Take A Moment To
          Review Our Policies To Ensure A Safe And Seamless Experience. Your
          Health And Privacy Are Our Priority.
        </Text>

        {/* Terms Sections */}
        <Text style={styles.sectionTitle}>
          1. User Account And Responsibility
        </Text>
        <Text style={styles.sectionContent}>
          By Creating An Account On The Kardena Fitness App, You Agree To
          Provide Accurate And Up-To-Date Information. You Are Responsible For
          Maintaining The Confidentiality Of Your Account And For All Activities
          Under Your Account.
        </Text>

        <Text style={styles.sectionTitle}>2. Health Information</Text>
        <Text style={styles.sectionContent}>
          The App Provides Health Data For Informational Purposes Only. Always
          Consult With A Healthcare Professional Before Making Any Decisions
          Related To Your Fitness And Health Based On The Data Provided By The
          App.
        </Text>

        <Text style={styles.sectionTitle}>3. Data Privacy</Text>
        <Text style={styles.sectionContent}>
          We Value Your Privacy. Your Personal Data Will Be Used In Accordance
          With Our Privacy Policy, And We Will Take All Necessary Steps To
          Ensure Your Data Is Protected From Unauthorized Access.
        </Text>

        <Text style={styles.sectionTitle}>4. Third-Party Integrations</Text>
        <Text style={styles.sectionContent}>
          The Kardena Fitness App May Integrate With Third-Party Services And
          Devices (E.G., Wearable Devices). You Agree To The Terms Of Those
          Services When Using Such Integrations And Acknowledge That Kardena Is
          Not Responsible For Any Issues Arising From Third-Party Services.
        </Text>

        <Text style={styles.sectionTitle}>5. Termination Of Access</Text>
        <Text style={styles.sectionContent}>
          We Reserve The Right To Suspend Or Terminate Your Access To The App If
          You Violate These Terms & Conditions. You May Also Close Your Account
          At Any Time, But Any Data Associated With Your Account May Be Retained
          According To Our Privacy Policy.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 10,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  updateDate: {
    fontSize: 14,
    color: "#BAFF29",
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 14,
    color: "#aaa",
    lineHeight: 20,
    textAlign: "justify",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
  },
  sectionContent: {
    fontSize: 14,
    color: "#aaa",
    lineHeight: 20,
    textAlign: "justify",
    marginTop: 10,
  },
});

export default TermsConditionsScreen;
