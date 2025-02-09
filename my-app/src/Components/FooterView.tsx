// src/Components/FooterView.tsx
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons

type FooterViewProps = {
  activeTab: "chats" | "main" | "settings";
  onTabPress: (tab: "chats" | "main" | "settings") => void;
};

const FooterView = ({ activeTab, onTabPress }: FooterViewProps) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabPress("chats")}
      >
        <Ionicons
          name="chatbubbles"
          size={30} // Increased icon size
          color={activeTab === "chats" ? "#007bff" : "#888"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabPress("main")}
      >
        <View style={styles.mainTabCircle}>
          <Ionicons
            name="home"
            size={30} // Increased icon size
            color={activeTab === "main" ? "#007bff" : "#888"}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabPress("settings")}
      >
        <Ionicons
          name="settings"
          size={30} // Increased icon size
          color={activeTab === "settings" ? "#007bff" : "#888"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingVertical: 15,
    height: 70, // Set a fixed height for the footer
  },
  tab: {
    alignItems: "center",
  },
  mainTabCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
});

export default FooterView;