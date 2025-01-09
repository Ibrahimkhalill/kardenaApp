import React from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
const Home = ({navigation}) => {
  // Add an index to make keys unique
  const data = Array(8)
    .fill()
    .map((_, index) => ({
      id: index.toString(), // Use index as a unique key
      name: "Ferruccio Lamborghini",
      number: "96235-5278",
      message: 'Could You Clarify What You Mean By "Weak Name?"',
      time: "11:52 pm",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnzRc3zHGGI7Ns1cL1Y0IIzbi9g4-j7crccw&s", // Replace with actual image URL
    }));

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatRow} onPress={()=>navigation.navigate("chatscreen")}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatDetails}>
        <View>
          <View style={styles.header}>
            <Text style={styles.chatName}>{item.name}</Text>
            <Text style={styles.chatTime}>{item.time}</Text>
          </View>
          <Text style={styles.chatNumber}>{item.number}</Text>
          <Text style={styles.chatMessage} numberOfLines={1}>
            {item.message}
          </Text>
        </View>
        <MaterialIcons
          name="arrow-forward-ios"
          size={20}
          color="#04B616"
          style={styles.searchIcon}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <AntDesign
            name="search1"
            size={20}
            color="#777"
            style={styles.searchIcon}
          />

          <TextInput
            placeholder="Search"
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id} // Unique key for each item
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
    width: "98%",
  },
  searchContainer: {
    flexDirection: "row", // Align icon and input horizontally
    alignItems: "center", // Center vertically
    backgroundColor: "#222",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#4CAF50",
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 8, // Add spacing between icon and input
  },
  searchInput: {
    flex: 1, // Allow input to take up remaining space
    color: "#fff",
    paddingVertical: 10,
  },
  chatRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#242424",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatDetails: {
    display: "flex",
    flexDirection: "row",
    width: "78%",
    alignItems:"center"
  },
  chatName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  chatNumber: {
    color: "#bbb",
    fontSize: 12,
  },
  chatMessage: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 4,
  },
  chatTime: {
    color: "#777",
    fontSize: 12,
  },
});

export default Home;
