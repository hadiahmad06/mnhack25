// src/Models/ProfileCardView.tsx
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Profile } from "../Models/Profile";
// Get screen dimensions
const { width, height } = Dimensions.get("window");

export const ProfileCard = ({bottomMargin, user}: {bottomMargin: number, user: Profile }) => {
  if (!user) {
    return <Text style={styles.noDataText}>No profile data available.</Text>;
  }

  return (
    <View style={styles.cardContainer}>
      {/* Profile Image */}
      <View style={styles.imageContainer}>
        {user.image ? (
          <Image source={{uri: user.image}} style={styles.profileImage} />
        ) : (
          <View style={styles.emptyImage}>
            <Text style={styles.emptyImageText}>No Image</Text>
          </View>
        )}
      </View>

      {/* Profile Details */}
      <View style={[styles.detailsContainer, {justifyContent: "space-between", flexDirection: "column"}]}>
      <View style={{flexDirection: "column"}}>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Text style={styles.username}>{user.name}</Text>
          </View>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.upvotes}>▲ {user.up} </Text>
            <Text style={styles.downvotes}>{user.down} ▼</Text>
          </View>
        </View>
        <Text style={styles.detailText}>{user.gender}, {user.age}</Text>
      </View>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>From: {user.origin.city}</Text>
          <Text style={styles.locationText}>To: {user.destinations.map(dest => dest.city).join(" & ")}</Text>
        </View>
        <Text
          style={[
            styles.verificationText,
            user.verification ? styles.verified : styles.notVerified,
            {marginBottom: bottomMargin}]}
        >
          {user.verification ? "✓" : "⚠️ Unverified"}
        </Text>
          
        {user.down > user.up && <Text style = {styles.flag}>🚩</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  locationContainer: { // Style for the container
    marginTop: 8, // Add some spacing
},
locationText: {
  fontSize: 14,
  color: "#777", // A slightly lighter color
  marginBottom: 4, // Space between origin and destinations
},
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
    backgroundColor: "#f0f0f0",
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
    backgroundColor: "#ccc",
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
    color: "#1a202c",
    marginRight: 8,
  },
  detailText: {
    fontSize: 16,
    color: "#4a5568",
    marginTop: 4,
  },
  verificationText: {
    fontSize: 35,
    fontWeight: "600",
    marginBottom: 8,
    marginLeft: 9,
  },
  verified: {
    color: "green",
  },
  notVerified: {
    color: "#ffd300",
  },
  ratingsHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    color: "#1a202c",
  },
  upvotes: {
    fontSize: 24,
    color: "green",
    marginTop: 4,
    marginRight: 12,
  },
  downvotes: {
    fontSize: 24,
    color: "red",
    marginTop: 4,
  },
  flag: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
});

export default ProfileCard;