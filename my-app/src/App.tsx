// src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import AuthService from './Services/AuthService';
import { ProfileCard } from './Models/ProfileCard';

const App: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleSignOut = async () => {
    await AuthService.signOut();
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {user ? (
        <div>
          <h1>Welcome, {user.displayName || 'User'}!</h1>
          <ProfileCard user={{ name: user.displayName || '', age: 25, gender: 'male', verification: true, ratings: [], up: 5, down: 2, origin: { latitude: 0, longitude: 0 }, destinations: [], }} />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h1>Please Sign In</h1>
          <button onClick={() => AuthService.signIn('user@example.com', 'password')}>Sign In</button>
        </div>
      )}
    </div>
  );
};

export default App;