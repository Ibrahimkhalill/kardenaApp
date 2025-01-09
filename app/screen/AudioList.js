import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Svg, { Rect } from "react-native-svg";
import VoiceMessagePlayer from "./component/VoiceMessagePlayer";
import AudioPlayer from "./component/AudioPlayer";

const AudioList = () => {
  const data = [
    { id: "1", day: "Sunday", duration: "0:15" },
    { id: "2", day: "Monday", duration: "0:15" },
    { id: "3", day: "Monday", duration: "0:15" },
    { id: "4", day: "Monday", duration: "0:15" },
    { id: "5", day: "Monday", duration: "0:15" },
  ];

  const renderItem = ({ item, index }) => (
    <View style={styles.audioItem}>
      <AudioPlayer />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 5,
  },
  audioItem: {
    backgroundColor: "#244a37",
    marginBottom: 25,
    borderRadius: 4,
  },
  dayText: {
    color: "#FFF",
    fontSize: 14,
    marginBottom: 5,
  },
  audioContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 10,
  },
  playButton: {
    width: 40,
    height: 40,
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  waveform: {
    flex: 1,
  },
  durationText: {
    color: "#FFF",
    fontSize: 14,
    marginLeft: 10,
  },
});

export default AudioList;
