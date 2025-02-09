import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  StyleSheet,
} from "react-native";

type Message = {
  id: string;
  text: string;
  sent: boolean;
  time: string;
};

const ChatView = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hello!", sent: true, time: "09:30" },
    { id: "2", text: "Hi there!", sent: false, time: "09:31" },
    { id: "3", text: "How are you?", sent: false, time: "09:32" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: String(messages.length + 1),
        text: newMessage,
        sent: true,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages([message, ...messages]);
      setNewMessage("");
    }
  };

  const bg = { uri: '../../../assets/images/BG.png' };

  return (
    <ImageBackground style={styles.background} source={bg}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={item.sent ? styles.sentMessage : styles.receivedMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageTime}>{item.time}</Text>
          </View>
        )}
        inverted
      />
      <View style={styles.messageInputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage} disabled={!newMessage.trim()}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  messageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: "#fff",
  },
  sendButton: {
    padding: 12,
    backgroundColor: "#007bff",
    borderRadius: 8,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 8,
    margin: 4,
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#a1a1a1",
    padding: 8,
    borderRadius: 8,
    margin: 4,
  },
  messageText: {
    color: "#fff",
  },
  messageTime: {
    fontSize: 12,
    color: "#ccc",
    marginTop: 4,
  },
});

export default ChatView;