// src/Profile.ts

export type Gender = 'male' | 'female' | 'nb' | 'other';

export interface Preferences {
  minRiders: number;
  maxRiders: number; // 0 means no preference

  minAge: number;
  maxAge: number; // 0 means no preference

  verification: boolean;
  genderPreferences: { gender: Gender; preferred: boolean }[];

  maxExtraTime?: number; // Optional
}

export interface Rating {
  change: boolean; // false for down, true for up
}

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
}

export interface Profile {
  verification: boolean;

  ratings: Rating[]; // Upvotes/Downvotes are handled within ratings
  up: number; // This should be derived from ratings
  down: number; // This should be derived from ratings

  name: string;
  origin: Location;
  destinations: Location[];

  age: number;
  gender: Gender;
}

// A function to get upvotes and downvotes from ratings
export const getUpDownVotes = (ratings: Rating[]) => {
  const up = ratings.filter(rating => rating.change).length;
  const down = ratings.filter(rating => !rating.change).length;
  return { up, down };
};