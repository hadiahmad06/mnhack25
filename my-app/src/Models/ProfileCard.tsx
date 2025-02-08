// src/Models/ProfileCard.tsx
import React from "react";
import { Profile } from "./Profile";

export const ProfileCard = ({ user }: { user: Profile }) => {
  if (!user) return <p className="text-gray-500">No profile data available.</p>;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 mt-6">
      <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
      <p className="text-gray-600">Age: {user.age}</p>
      <p className="text-gray-600">Gender: {user.gender}</p>
      <p className={`text-sm font-semibold mt-2 ${user.verification ? "text-green-600" : "text-red-600"}`}>
        {user.verification ? "Verified" : "Not Verified"}
      </p>
      <h3 className="text-lg font-semibold mt-4">Ratings</h3>
      <p className="text-green-600">👍 {user.up} Upvotes</p>
      <p className="text-red-600">👎 {user.down} Downvotes</p>
    </div>
  );
};