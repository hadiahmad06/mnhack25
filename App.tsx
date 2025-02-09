import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import Swiper from "react-native-deck-swiper";
import { ProfileCard } from "./my-app/src/Components/ProfileCard";
import { Profile, Location } from "./my-app/src/Models/Profile";
import ChatView from "./my-app/src/Components/ChatView";

// Example user data
const LA: Location = {
  latitude: 0,
  longitude: 0,
  address: "5128, Washington Ave",
};

const exampleUsers: Profile[] = [
  {
    name: "John Doe",
    age: 28,
    gender: "male",
    verification: true,
    up: 120,
    down: 5,
    ratings: [],
    origin: LA,
    destinations: [LA],
  },
  {
    name: "Jane Smith",
    age: 25,
    gender: "female",
    verification: false,
    up: 90,
    down: 10,
    ratings: [],
    origin: LA,
    destinations: [LA],
  },
  {
    name: "Alice Johnson",
    age: 30,
    gender: "female",
    verification: true,
    up: 200,
    down: 15,
    ratings: [],
    origin: LA,
    destinations: [LA],
  },
];

// Main App component
const App = () => {
  const [users, setUsers] = useState(exampleUsers);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [currentUser, setCurrentUser] = useState<Profile | null>(null);

  const handleSwipeLeft = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Reset to the first user if we reach the end
      setCurrentIndex(0);
    }
  };

  const handleSwipeRight = () => {
    setCurrentUser(users[currentIndex]);
    setShowChat(true);
  };

  const handleBack = () => {
    setShowChat(false);
    setCurrentUser(null);
    handleSwipeLeft(); // Move to the next user after closing the chat
  };

  return (
    <SafeAreaView style={styles.container}>
      {showChat && currentUser ? (
        <View style={styles.chatContainer}>
          <ChatView />
          <Button title="Back to Swipe" onPress={handleBack} />
        </View>
      ) : (
        <View style={styles.swiperContainer}>
          <Swiper
            cards={users}
            renderCard={(card) => <ProfileCard user={card} />}
            onSwipedLeft={handleSwipeLeft}
            onSwipedRight={handleSwipeRight}
            cardIndex={currentIndex}
            stackSize={3}
            infinite // Loop through users
            backgroundColor="transparent"
            cardVerticalMargin={0}
            cardHorizontalMargin={0}
            overlayLabels={{
              left: {
                title: "NOPE",
                style: {
                  label: {
                    backgroundColor: "red",
                    borderColor: "red",
                    color: "white",
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    marginTop: 30,
                    marginLeft: -30,
                  },
                },
              },
              right: {
                title: "CHAT",
                style: {
                  label: {
                    backgroundColor: "green",
                    borderColor: "green",
                    color: "white",
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    marginTop: 30,
                    marginLeft: 30,
                  },
                },
              },
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  swiperContainer: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    padding: 16,
  },
});

export default App;