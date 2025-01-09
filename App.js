import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { StyleSheet, Platform } from "react-native";

import { AuthProvider, useAuth } from "./app/screen/component/Auth";
import Home from "./app/screen/home";
import ChatScreen from "./app/screen/ChatScreen";
import VideoList from "./app/screen/VideoList";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="home"
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="chatscreen" component={ChatScreen} />
      <Stack.Screen name="Video" component={VideoList} />
    </Stack.Navigator>
  );
}

function AppContent() {
  return <AuthStack />;
}

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppContent />
        </NavigationContainer>
        <StatusBar style="light" backgroundColor="#0F0F0F" />
      </SafeAreaProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: Platform.OS === "white" ? StatusBar.currentHeight : 0,
  },
});
