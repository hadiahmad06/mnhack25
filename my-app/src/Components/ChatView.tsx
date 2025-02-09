// src/Components/ChatView.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

// Message type definition
type Message = {
  id: string;
  text: string;
  sent: boolean;
  time: string;
};

// ChatView component
const ChatView = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hello!", sent: true, time: "09:30" },
    { id: "2", text: "Hi there!", sent: false, time: "09:31" },
    { id: "3", text: "How are you?", sent: false, time: "09:32" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: String(messages.length + 1),
        text: newMessage,
        sent: true,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <View style={styles.chatContainer}>
      <ScrollView style={styles.messagesList}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageBubble,
              message.sent ? styles.sentBubble : styles.receivedBubble,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
            <Text style={styles.messageTime}>{message.time}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.messageInputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
          disabled={!newMessage.trim()}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    padding: 16,
  },
  messagesList: {
    flex: 1,
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  sentBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#007bff",
  },
  receivedBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#e9ecef",
  },
  messageText: {
    fontSize: 16,
    color: "#fff",
  },
  messageTime: {
    fontSize: 12,
    color: "#ddd",
    marginTop: 4,
  },
  messageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
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
});

export default ChatView;
