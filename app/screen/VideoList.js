import React from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: "1",
    thumbnail: "https://via.placeholder.com/300/FF0000",
    duration: "0:17",
    timestamp: "11:52 pm",
  },
  {
    id: "2",
    thumbnail: "https://via.placeholder.com/300/00FF00",
    duration: "0:17",
    timestamp: "11:52 pm",
  },
  {
    id: "3",
    thumbnail: "https://via.placeholder.com/300/0000FF",
    duration: "0:17",
    timestamp: "11:52 pm",
  },
  {
    id: "4",
    thumbnail: "https://via.placeholder.com/300/FFFF00",
    duration: "0:17",
    timestamp: "11:52 pm",
  },
  {
    id: "5",
    thumbnail: "https://via.placeholder.com/300/FF00FF",
    duration: "0:17",
    timestamp: "11:52 pm",
  },
  {
    id: "6",
    thumbnail: "https://via.placeholder.com/300/00FFFF",
    duration: "0:17",
    timestamp: "11:52 pm",
  },
];

const VideoList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      {/* Play Button */}
      <TouchableOpacity style={styles.playButton}>
        <AntDesign name="play" size={30} color="#FFF" />
      </TouchableOpacity>
      {/* Duration */}
      <View style={styles.durationContainer}>
        <AntDesign name="videocamera" size={12} color="#FFF" />
        <Text style={styles.durationText}>{item.duration}</Text>
      </View>
      {/* Timestamp */}
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // 2 columns grid layout
        columnWrapperStyle={styles.row} // Style for row alignment
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Background color to match design
    paddingHorizontal: 10, // Padding for the container
    padding: 10,
  },
  row: {
    justifyContent: "space-between", // Space between columns
    marginBottom: 10, // Adds vertical spacing between rows
  },
  card: {
    position: "relative",
    backgroundColor: "#222",
    borderRadius: 10,
    overflow: "hidden",
    width: "48%", // Ensures proper spacing in the grid
    aspectRatio: 1, // Ensures the card is a square
    marginBottom: 10, // Vertical gap between cards
  },
  thumbnail: {
    width: "100%",
    height: "100%",
  },
  playButton: {
    position: "absolute",
    top: "40%",
    left: "40%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  durationContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  durationText: {
    color: "#FFF",
    fontSize: 12,
    marginLeft: 5,
  },
  timestamp: {
    position: "absolute",
    bottom: 10,
    right: 10,
    color: "#FFF",
    fontSize: 12,
  },
});

export default VideoList;
