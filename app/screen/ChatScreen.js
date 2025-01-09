import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import VoiceMessagePlayer from "./component/VoiceMessagePlayer";
import { Video } from "expo-av";
import VideoList from "./VideoList";
import ImagesList from "./ImagesList";
import AudioList from "./AudioList";
import FileLinkList from "./component/FileLinkList";
import * as DocumentPicker from "expo-document-picker";

const ChatScreen = ({ navigation }) => {
  const [visiblePage, setVisiblePage] = useState("chat"); // Track which page to show
  const handleUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      });

      console.log("Result:", result); // Log the entire result

      if (!result.canceled) {
        const file = result.assets ? result.assets[0] : result;
        const fileName = file.name || "Unknown File";
        const fileUri = file.uri;

        console.log("File Name:", fileName);
        console.log("File URI:", fileUri);

        Alert.alert("File Selected", `File Name: ${fileName}`);
      } else {
        console.log("User canceled file picker.");
      }
    } catch (error) {
      console.error("Error picking file:", error);
    }
  };
  const renderVisiblePage = () => {
    switch (visiblePage) {
      case "video":
        return <VideoList />;
      case "audio":
        return <AudioList />;
      case "images":
        return <ImagesList />;
      case "chat":
        return (
          <ScrollView style={styles.messageContainer}>
            {[
              { id: 1, type: "text", text: "Hi there!", sender: "other" },
              {
                id: 2,
                type: "text",
                text: "Hello! How can I help you?",
                sender: "user",
              },
              {
                id: 3,
                type: "image",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GQS9166MDCo-__0ZqcKt4r9UbnqHLlOlvQ&s",
                sender: "other",
              },
              {
                id: 4,
                type: "file",
                fileName: "Document.pdf",
                fileSize: "2 MB",
                sender: "user",
              },
              {
                id: 5,
                type: "audio",
                audioUrl:
                  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                sender: "user",
              },
              {
                id: 6,
                type: "video",
                videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
                sender: "other",
              },
            ].map((message) => (
              <View
                key={message.id}
                style={[
                  styles.messageWrapper,
                  message.sender === "user"
                    ? styles.userMessage
                    : styles.otherUserMessage,
                ]}
              >
                {/* Render Message Types */}
                {message.type === "text" && (
                  <Text style={styles.messageText}>{message.text}</Text>
                )}
                {message.type === "image" && (
                  <Image
                    source={{ uri: message.image }}
                    style={styles.messageImage}
                  />
                )}
                {message.type === "file" && (
                  <View style={styles.fileMessage}>
                    <FontAwesome name="file" size={24} color="#4CAF50" />
                    <View style={styles.fileDetails}>
                      <Text style={styles.fileName}>{message.fileName}</Text>
                      <Text style={styles.fileSize}>{message.fileSize}</Text>
                    </View>
                  </View>
                )}
                {message.type === "audio" && (
                  <VoiceMessagePlayer source={message.audioUrl} />
                )}
                {message.type === "video" && (
                  <View style={styles.videoContainer}>
                    <Video
                      source={{ uri: message.videoUrl }} // Video URL from the message
                      style={styles.videoPlayer} // Custom styles for the video
                      resizeMode="contain" // Ensures the video scales proportionally
                      useNativeControls // Adds playback controls (play, pause, etc.)
                    />
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        );
      case "link":
        return <FileLinkList />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="#fff" />
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnzRc3zHGGI7Ns1cL1Y0IIzbi9g4-j7crccw&s",
            }} // Replace with actual avatar URL
            style={styles.avatar}
          />
          <View style={styles.headerDetails}>
            <Text style={styles.chatName}>Ferruccio Lamborghini</Text>
            <Text style={styles.chatNumber}>96235-5278</Text>
          </View>
        </View>
        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <View style={styles.actionButtonsfirst}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setVisiblePage("audio")}
            >
              <FontAwesome name="file-audio-o" size={20} color="#4CAF50" />
              <Text style={styles.buttonText}>Voice File</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setVisiblePage("video")}
            >
              <FontAwesome name="file-video-o" size={20} color="#4CAF50" />
              <Text style={styles.buttonText}>Video File</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setVisiblePage("link")}
          >
            <FontAwesome name="link" size={20} color="#4CAF50" />
            <Text style={styles.buttonText}>Link File</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setVisiblePage("images")}
          >
            <FontAwesome name="image" size={20} color="#4CAF50" />
            <Text style={styles.buttonText}>Image File</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setVisiblePage("chat")}
          >
            <FontAwesome name="comment" size={20} color="#4CAF50" />
            <Text style={styles.buttonText}>Chat File</Text>
          </TouchableOpacity>
        </View>
        {renderVisiblePage()}
        {/* Message Input */}
        <View style={styles.inputWrapper}>
          <TouchableOpacity onPress={handleUpload} style={styles.plusIcon}>
            <AntDesign name="plus" size={24} color="#4CAF50" />
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Type a message"
              placeholderTextColor="#777"
              style={styles.input}
            />
            <TouchableOpacity>
              <Feather name="send" size={24} color="#4CAF50" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 13,
    borderBottomColor: "#29502D",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  headerDetails: {
    flex: 1,
  },
  chatName: {
    color: "#ECECEC",
    fontSize: 18,
    fontWeight: "bold",
  },
  chatNumber: {
    color: "#959595",
    fontSize: 11,
  },
  actionButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButtonsfirst: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: "100%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: "30%",
    gap: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 5,
  },
  messageContainer: {
    flex: 1,
  },
  messageText: {
    color: "#fff",
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  dateText: {
    color: "#777",
    textAlign: "center",
    marginVertical: 10,
  },
  audioPlayer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  playIcon: {
    marginRight: 10,
  },
  audioBar: {
    flex: 1,
    height: 5,
    backgroundColor: "#555",
    borderRadius: 5,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  audioProgress: {
    width: "50%",
    height: "100%",
    backgroundColor: "#4CAF50",
  },
  audioTime: {
    color: "#777",
    fontSize: 12,
  },
  messageImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  linkMessage: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  linkText: {
    color: "#4CAF50",
    marginLeft: 10,
  },
  inputWrapper: {
    position: "relative", // Enables absolute positioning for the plus icon
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  plusIcon: {
    position: "absolute", // Keep it outside the input container
    left: 0, // Adjust position to your design
    zIndex: 1, // Ensure it stays on top
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    paddingVertical: 5,
    paddingLeft: 5, // Adds space for the plus icon
    paddingRight: 10,
    borderRadius: 10,
    marginLeft: 30, // Ensures the input starts after the plus icon
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingHorizontal: 10,
  },
  messageWrapper: {
    maxWidth: "70%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#244a37",
    borderBottomRightRadius: 0,
  },
  otherUserMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#333",
    borderBottomLeftRadius: 0,
  },
  messageText: {
    color: "#fff",
  },
  messageImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  fileMessage: {
    flexDirection: "row",
    alignItems: "center",

    padding: 10,
    borderRadius: 10,
  },
  fileDetails: {
    marginLeft: 10,
  },
  fileName: {
    color: "#fff",
    fontSize: 14,
  },
  fileSize: {
    color: "#aaa",
    fontSize: 12,
  },
  videoContainer: {
    width: 199,
    height: 110,
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#000",
  },
  videoPlayer: {
    height: "100%",
  },
});

export default ChatScreen;
