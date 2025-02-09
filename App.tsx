// App.tsx
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Preferences, Profile, Location } from "./my-app/src/Models/Profile";
import { PreferencesView } from "./my-app/src/Components/PreferencesView";
import { MainView } from "./my-app/src/Components/MainView"
import { ChatMenuView } from "./my-app/src/Components/ChatMenuView";
import FooterView from "./my-app/src/Components/FooterView";

// Example user data
const BLOO: Location = {
  latitude: 0,
  longitude: 0,
  city: "Bloomington",
};
const PAUL: Location = {
  latitude: 0,
  longitude: 0,
  city: "St. Paul",
};
const MPLS: Location = {
  latitude: 0,
  longitude: 0,
  city: "Minneapolis",
};
const ROCH: Location = {
  latitude: 0,
  longitude: 0,
  city: "Rochester",
};
const DULU: Location = {
  latitude: 0,
  longitude: 0,
  city: "Duluth",
};
const BURN: Location = {
  latitude: 0,
  longitude: 0,
  city: "Burnsville",
};

const open: Preferences = {
  minRiders: 1,
    maxRiders: 0,
    minAge: 0,
    maxAge: 0,
    verification: false,
    genderPreferences: [],
    maxExtraTime: 0,
}

const currUser: Profile = {
  image: "10.jpg",
  preferences: open,
  name: "Lebron",
  age: 40,
  gender: "He/Him",
  verification: true,
  up: 120,
  down: 5,
  ratings: [],
  origin: BURN,
  destinations: [MPLS, PAUL]
}

const exampleUsers: Profile[] = [
  {
    image: "../../assets/icon.png",
    preferences: open,
    name: "John Doe",
    age: 28,
    gender: "He/Him",
    verification: true,
    up: 120,
    down: 5,
    ratings: [],
    origin: ROCH,
    destinations: [MPLS, BLOO],
  },
  {
    image: "../../assets/example_profiles/2.jpg",
    preferences: open,
    name: "Jane Smith",
    age: 25,
    gender: "She/Her",
    verification: false,
    up: 90,
    down: 10,
    ratings: [],
    origin: PAUL,
    destinations: [MPLS, DULU],
  },
  {
    image: "../../assets/example_profiles/3.jpg",
    preferences: open,
    name: "Alice Johnson",
    age: 30,
    gender: "She/Her",
    verification: true,
    up: 200,
    down: 15,
    ratings: [],
    origin: BLOO,
    destinations: [PAUL,MPLS],
  },
];

// Main App component
const App = () => {
  const [users, setUsers] = useState(exampleUsers);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openChats, setOpenChats] = useState<Profile[]>([]);
  const [activeTab, setActiveTab] = useState<"chats" | "main" | "settings">("main");
  const [currentUser, setCurrentUser] = useState<Profile | null>(null);

    const handlePreferencesChange = (updatedPreferences: Preferences) => {
    setCurrUser((prev) => ({
      ...prev,
      preferences: updatedPreferences,
    }));
  };

  const handleSwipeLeft = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleSwipeRight = () => {
    const swipedUser = users[currentIndex];
    setOpenChats((prev) => [...prev, swipedUser]);
    handleSwipeLeft();
  };

  const handleOpenChat = (user: Profile) => {
    setCurrentUser(user);
    setActiveTab("chats");
  };

  const handleBack = () => {
    setCurrentUser(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      {activeTab === "main" ? (
        <MainView 
          users={users} 
          currentIndex={currentIndex} 
          handleSwipeLeft={handleSwipeLeft} 
          handleSwipeRight={handleSwipeRight} 
          currUser={currUser} // Pass currUser to MainView
          setCurrentUser={setCurrentUser}
        />
      ) : activeTab === "chats" ? (
        <ChatMenuView
          openChats={openChats}
          handleOpenChat={handleOpenChat}
          currentUser={currentUser}
          handleBack={handleBack}
        />
      ) : activeTab === "settings" ? (
        <View style={styles.settingsContainer}>
          <PreferencesView/>
        </View>
      ) : null}
      <FooterView activeTab={activeTab} onTabPress={setActiveTab} />
    </SafeAreaView>
  );
};

// Styles (Mostly unchanged, you might want to adjust based on MainView/ChatMenuView)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  settingsContainer: { // Keep this in App.tsx
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;