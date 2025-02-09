// src/Models/ProfileCard.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Profile } from "../Models/Profile";

export const ProfileCard = ({ user }: { user: Profile }) => {
  if (!user) {
    return <Text style={styles.noDataText}>No profile data available.</Text>;
  }

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.username}>Username: {user.name}</Text>
      <Text style={styles.detailText}>Age: {user.age}</Text>
      <Text style={styles.detailText}>Gender: {user.gender}</Text>
      <Text
        style={[
          styles.verificationText,
          user.verification ? styles.verified : styles.notVerified,
        ]}
      >
        {user.verification ? "Verified" : "Not Verified"}
      </Text>
      <Text style={styles.ratingsHeader}>Ratings</Text>
      <Text style={styles.upvotes}>👍 {user.up} Upvotes</Text>
      <Text style={styles.downvotes}>👎 {user.down} Downvotes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    maxWidth: "90%", // Adjust as needed
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
    padding: 16,
    marginTop: 16,
    alignSelf: "center", // Center the card horizontally
  },
  noDataText: {
    color: "gray",
    textAlign: "center",
    marginTop: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a202c", // Gray-900 equivalent
    marginBottom: 8,
  },
  detailText: {
    fontSize: 16,
    color: "#4a5568", // Gray-600 equivalent
    marginBottom: 4,
  },
  verificationText: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
  },
  verified: {
    color: "green",
  },
  notVerified: {
    color: "red",
  },
  ratingsHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    color: "#1a202c", // Gray-900 equivalent
  },
  upvotes: {
    color: "green",
    marginTop: 4,
  },
  downvotes: {
    color: "red",
    marginTop: 4,
  },
});