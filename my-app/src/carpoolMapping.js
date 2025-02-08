import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Profile } from "./Models";

const calculateRouteTime
  try {
    // OSRM expects coordinates as longitude,latitude.
    const url = `http://router.project-osrm.org/route/v1/driving/${start.longitude},${start.latitude};${end.longitude},${end.latitude}?overview=false`;
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.routes && data.routes.length > 0) {
      // duration is returned in seconds
      return data.routes[0].duration;
    } else {
      console.error('No route found');
      return null;
    }
  } catch (error) {
    console.error('Error calculating route time:', error);
    return null;
  }