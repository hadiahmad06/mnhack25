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
  image: "https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/player-page/2024-2025/2425_PlayerPage_Headshot_1920x2304_James_LeBron.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/800px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
    preferences: open,
    name: "The Goat",
    age: 40,
    gender: "Him.",
    verification: true,
    up: 120,
    down: 5,
    ratings: [],
    origin: ROCH,
    destinations: [MPLS, BLOO],
  },
  {
    image: "https://media.npr.org/assets/img/2024/03/03/ap24063160825614-9d604c3b01e95a989b89bed8184091ab0c967ef3.jpg",
    preferences: open,
    name: "Lebron James",
    age: 40,
    gender: "He/Him",
    verification: true,
    up: 4397,
    down: 10,
    ratings: [],
    origin: PAUL,
    destinations: [MPLS, DULU],
  },
  {
    image: "https://www.usab.com/imgproxy/KnQWx9iFYyACozUo58mGmx6dnvNqzv3SJZfTOyKgh6U/rs:fit:3000:0:0:g:ce/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMDkvMDI1NTQ0YzgtNjgzYS00ZWJjLThhYTAtYTdjOTFmZTU3ODhjLmpwZw.png",
    preferences: open,
    name: "Kevin Durant",
    age: 36,
    gender: "He/Him",
    verification: true,
    up: 200,
    down: 15,
    ratings: [],
    origin: BLOO,
    destinations: [PAUL,MPLS],
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Luka_Doncic_2021_%28cropped%29.jpg",
    preferences: open,
    name: "Luka Dončić",
    age: 30,
    gender: "He/Him",
    verification: false,
    up: 3,
    down: 1,
    ratings: [],
    origin: BLOO,
    destinations: [PAUL,MPLS],
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D5603AQFoLnHC1fsqjQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720151833611?e=2147483647&v=beta&t=Kd4Sjq2G6aRIX7PwCAnu14fsTveFZuUlxaus7Is2Lho",
    preferences: open,
    name: "Yucheng Chen",
    age: 18,
    gender: "He/Him",
    verification: true,
    up: 1,
    down: 0,
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
          <PreferencesView 
          user={currUser}
          onPreferencesChange={handlePreferencesChange}
          />
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