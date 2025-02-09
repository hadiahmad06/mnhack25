// ChatMenuView.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Profile } from "../Models/Profile";
import ChatView from "./ChatView";


interface ChatMenuViewProps {
  openChats: Profile[];
  handleOpenChat: (user: Profile) => void;
  currentUser: Profile | null;
  handleBack: () => void;
}

export const ChatMenuView: React.FC<ChatMenuViewProps> = ({ openChats, handleOpenChat, currentUser, handleBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatListContainer}>
          <Text style={styles.chatListTitle}>Open Chats</Text>
          {openChats.map((user, index) => (
            <TouchableOpacity
              key={index}
              style={styles.chatListItem}
              onPress={() => handleOpenChat(user)}
            >
              <Text style={styles.chatListText}>{user.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      {currentUser && ( // Conditionally render ChatView and Back button
        <View style={styles.chatContainer}>
          <ChatView />
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>Back to Chats</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    padding: 16,
  },
  chatListContainer: {
    flex: 1,
    padding: 16,
  },
  chatListTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  chatListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  chatListText: {
    fontSize: 16,
  },
  backButton: {
    padding: 12,
    backgroundColor: "#007bff",
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 16,
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ChatMenuView;