import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const data = [
  { id: "1", name: "Www.Good.Com" },
  { id: "2", name: "Www.Good.Com" },
  { id: "3", name: "Www.Good.Com" },
  { id: "4", name: "Www.Good.Com" },
  { id: "5", name: "Www.Good.Com" },
];

const FileLinkList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {/* File Icon */}
      <View style={styles.iconContainer}>
        <FontAwesome name="file" size={24} color="#FFF" />
      </View>
      {/* File/Link Name */}
      <Text style={styles.fileName}>{item.name}</Text>
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

    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#242424",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#8A8A8A",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  fileName: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default FileLinkList;
