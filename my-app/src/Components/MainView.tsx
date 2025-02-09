// MainView.tsx
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-deck-swiper";
import { ProfileCard } from "./ProfileCardView";
import { Profile } from "../Models/Profile";

interface MainViewProps {
  users: Profile[];
  currentIndex: number;
  handleSwipeLeft: () => void;
  handleSwipeRight: () => void;
  currUser: Profile;
  setCurrentUser: React.Dispatch<React.SetStateAction<Profile | null>>;
}

export const MainView: React.FC<MainViewProps> = ({ users, currentIndex, handleSwipeLeft, handleSwipeRight, currUser, setCurrentUser }) => {
  const { height } = Dimensions.get("window");

  return (
    <View style={[styles.swiperContainer, { maxHeight: height - 0 }]}> {/* Replace 100 with actual Footer height */}
      <Swiper
        cards={users}
        renderCard={(card) => <ProfileCard user={card} />}
        onSwipedLeft={handleSwipeLeft}
        onSwipedRight={handleSwipeRight}
        cardIndex={currentIndex}
        stackSize={3}
        infinite
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
  );
};

const styles = StyleSheet.create({
  swiperContainer: {
    flex: 1,
  },
});

export default MainView;