import React from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";

const data = [
  {
    id: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-ZDo6dn0xY3dzUY7oInTwNNjk6ugbnlp-w&s",
  },
  {
    id: "2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-aVSwyC837TC1jX1MU851UgmO1l5clhqFA&s",
  },
  {
    id: "3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAcQK0E1dBdD4VZd5GccLrtlE3jyBKsfnRw&s",
  },
  {
    id: "4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-aVSwyC837TC1jX1MU851UgmO1l5clhqFA&s",
  },
  {
    id: "5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVE48Lu5SA84tJJyjLX1gPfuGg2tJR_JXCw&s",
  },
  {
    id: "6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-aVSwyC837TC1jX1MU851UgmO1l5clhqFA&s",
  },
  {
    id: "7",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3kkPLgaCGbBGiUXJR2xgUZDkwlMmtqdZYQ&s",
  },
  {
    id: "8",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-aVSwyC837TC1jX1MU851UgmO1l5clhqFA&s",
  },
  {
    id: "9",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaR2D9K2yAvAJpoqn0SMt1CHSRrziLietBPQ&s",
  },
];

const ImagesList = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover" // Ensures the image covers the container
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3} // Display 3 columns in the grid
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    justifyContent: "space-between", // Space between items in a row
    marginBottom: 10, // Space between rows
  },
  imageContainer: {
    width: "30%", // Ensures the grid layout with space
    aspectRatio: 1, // Makes the container square
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImagesList;
