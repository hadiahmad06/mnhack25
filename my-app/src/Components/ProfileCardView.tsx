// src/Models/ProfileCardView.tsx
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Profile } from "../Models/Profile";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

export const ProfileCard = ({ user }: { user: Profile }) => {
  if (!user) {
    return <Text style={styles.noDataText}>No profile data available.</Text>;
  }

  return (
    <View style={styles.cardContainer}>
      {/* Profile Image */}
      <View style={styles.imageContainer}>
        {user.image ? (
          <Image source={{ uri: user.image }} style={styles.profileImage} />
        ) : (
          <View style={styles.emptyImage}>
            <Text style={styles.emptyImageText}>No Image</Text>
          </View>
        )}
      </View>

      {/* Profile Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.username}>{user.name}</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Light gray background for the image area
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  emptyImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc", // Gray background for empty image
  },
  emptyImageText: {
    fontSize: 18,
    color: "#666",
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
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

export default ProfileCard;