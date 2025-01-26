import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { StyleSheet, Platform } from "react-native";

// import { AuthProvider, useAuth } from "./app/screen/component/Auth";;
import WelcomeScreen from "./app/screen/WelcomeScreen";
import Login from "./app/screen/authentication/Login";
import Signup from "./app/screen/authentication/Signup";
import ForgotPassword from "./app/screen/authentication/ForgotPassword";
import OtpVerification from "./app/screen/authentication/OtpVerification";
import ResetPassword from "./app/screen/authentication/ResetPassword";
import PasswordChanged from "./app/screen/authentication/PasswordChanged";
import HealthGoals from "./app/screen/home/HealthGoals";
import HealthJourney from "./app/screen/home/HealthJourney";
import PersonalInformation from "./app/screen/home/PersonalInformation";
import HeightPicker from "./app/screen/home/HeightPicker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import WeightPicker from "./app/screen/home/WeightPicker";
import SmartWatchScreen from "./app/screen/dashboard/SmartWatchScreen";
import SmartWatchScreenpair from "./app/screen/dashboard/SmartWatchScreenpair";
import Dashboard from "./app/screen/dashboard/Dashboard";
import HealthDashboard from "./app/screen/dashboard/HealthDashboard";
import StepsScreen from "./app/screen/dashboard/StepsScreen";
import ProfileScreen from "./app/screen/profile/ProfileScreen";
import GeneralSettingScreen from "./app/screen/profile/GeneralSettingScreen ";
import FAQScreen from "./app/screen/profile/FAQScreen";
import HelpSupportScreen from "./app/screen/profile/HelpSupportScreen";
import TermsConditionsScreen from "./app/screen/profile/TermsConditionsScreen";
import DeviceConnectionScreen from "./app/screen/profile/DeviceConnectionScreen";
import NotFoundScreen from "./app/screen/profile/NotFoundScreen";
import SleepScreen from "./app/screen/dashboard/SleepScreen";
import HeartRateScreen from "./app/screen/dashboard/HeartRateScreen";
import SpO2Screen from "./app/screen/dashboard/SpO2Screen";
import BPScreen from "./app/screen/dashboard/BPScreen";
import Calendar from "./app/screen/component/Calendar";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="WelcomeScreen"
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
      <Stack.Screen name="HealthGoals" component={HealthGoals} />
      <Stack.Screen name="HealthJourney" component={HealthJourney} />
      <Stack.Screen name="HeightPicker" component={HeightPicker} />
      <Stack.Screen name="WeightPicker" component={WeightPicker} />
      <Stack.Screen name="SmartWatchScreen" component={SmartWatchScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="HealthDashboard" component={HealthDashboard} />
      <Stack.Screen name="StepsScreen" component={StepsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="FAQScreen" component={FAQScreen} />
      <Stack.Screen name="HelpSupportScreen" component={HelpSupportScreen} />
      <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} />
      <Stack.Screen name="SleepScreen" component={SleepScreen} />
      <Stack.Screen name="HeartRateScreen" component={HeartRateScreen} />
      <Stack.Screen name="SpO2Screen" component={SpO2Screen} />
      <Stack.Screen name="BPScreen" component={BPScreen} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen
        name="DeviceConnectionScreen"
        component={DeviceConnectionScreen}
      />
      <Stack.Screen
        name="TermsConditionsScreen"
        component={TermsConditionsScreen}
      />
      <Stack.Screen
        name="GeneralSettingScreen"
        component={GeneralSettingScreen}
      />
      <Stack.Screen
        name="SmartWatchScreenpair"
        component={SmartWatchScreenpair}
      />
      <Stack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
      />
    </Stack.Navigator>
  );
}

function AppContent() {
  return <AuthStack />;
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppContent />
        </NavigationContainer>
        <StatusBar style="light" backgroundColor="#000" />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: Platform.OS === "white" ? StatusBar.currentHeight : 0,
  },
});
