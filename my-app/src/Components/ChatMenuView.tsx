import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Profile } from "../Models/Profile";
import ChatView from "./ChatView";

interface ChatMenuViewProps {
  openChats: Profile[];
  handleOpenChat: (user: Profile) => void;
  currentUser: Profile | null;
  handleBack: () => void;
}

export const ChatMenuView: React.FC<ChatMenuViewProps> = ({ openChats, handleOpenChat, currentUser, handleBack }) => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleUserSelect = (user: Profile) => {
    handleOpenChat(user);
    slideIn();
  };

  const handleBackPress = () => {
    slideOut();
    setTimeout(handleBack, 300); // Wait for the animation to finish before calling handleBack
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.chatListContainer,
          {
            transform: [
              {
                translateX: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -1000], // Adjust the value based on your screen width
                }),
              },
            ],
          },
        ]}
      >
        <Text style={styles.chatListTitle}>Open Chats</Text>
        {openChats.map((user, index) => (
          <TouchableOpacity
            key={index}
            style={styles.chatListItem}
            onPress={() => handleUserSelect(user)}
          >
            <Text style={styles.chatListText}>{user.name}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
      {currentUser && (
        <Animated.View
          style={[
            styles.chatContainer,
            {
              transform: [
                {
                  translateX: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1000, 0], // Adjust the value based on your screen width
                  }),
                },
              ],
            },
          ]}
        >
          <ChatView />
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>Back to Chats</Text>
          </TouchableOpacity>
        </Animated.View>
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
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  chatListContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
    height: "100%",
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