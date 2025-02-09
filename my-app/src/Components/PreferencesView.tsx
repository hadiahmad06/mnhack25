// src/Components/PreferencesView.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { Preferences } from "../Models/Profile";
import Slider from "@react-native-community/slider";

interface PreferencesFormProps {
  prefs: Preferences;
  onSave: (updatedPrefs: Preferences) => void;
}
values
const PreferencesForm: React.FC<PreferencesFormProps> = ({ prefs, onSave }) => {
  const [preferences, setPreferences] = useState(prefs);

  const handleInputChange = (field: keyof Preferences, value: any) => {
    setPreferences({ ...preferences, [field]: value });
  };

  const handleGenderChange = (value: string) => {
    const currentGenderPrefs = [...preferences.genderPreferences];
    if (currentGenderPrefs.includes(value)) {
      const newGenderPrefs = currentGenderPrefs.filter(gender => gender !== value)
      setPreferences({ ...preferences, genderPreferences: newGenderPrefs });
    } else {
      currentGenderPrefs.push(value);
      setPreferences({ ...preferences, genderPreferences: currentGenderPrefs });
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Min Riders:</Text>
      <Slider
        minimumValue={1}
        maximumValue={10}
        step={1}
        value={preferences.minRiders}
        onValueChange={(value) => handleInputChange('minRiders', value)}
      />
      <Text>{preferences.minRiders}</Text>

      <Text style={styles.label}>Max Riders (0 for unlimited):</Text>
      <Slider
        minimumValue={0}
        maximumValue={20}
        step={1}
        value={preferences.maxRiders === 0 ? 0 : preferences.maxRiders || 1}
        onValueChange={(value) => handleInputChange('maxRiders', value)}
      />
      <Text>{preferences.maxRiders === 0 ? "Unlimited" : preferences.maxRiders}</Text>


      <Text style={styles.label}>Min Age:</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={preferences.minAge}
        onValueChange={(value) => handleInputChange('minAge', value)}
      />
      <Text>{preferences.minAge}</Text>

      <Text style={styles.label}>Max Age (0 for unlimited):</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={preferences.maxAge === 0 ? 0 : preferences.maxAge || 1}
        onValueChange={(value) => handleInputChange('maxAge', value)}
      />
      <Text>{preferences.maxAge === 0 ? "Unlimited" : preferences.maxAge}</Text>

      <Text style={styles.label}>Verification Required:</Text>
      <Switch
        value={preferences.verification}
        onValueChange={(value) => handleInputChange('verification', value)}
      />

      <Text style={styles.label}>Gender Preferences:</Text>
      <View>
        <Button 
          title={preferences.genderPreferences.includes('male') ? 'Unselect Male' : 'Select Male'}
          onPress={() => handleGenderChange('male')}
          type="outline"
          style={styles.genderButton}
        />
        <Button 
          title={preferences.genderPreferences.includes('female') ? 'Unselect Female' : 'Select Female'}
          onPress={() => handleGenderChange('female')}
          type="outline"
          style={styles.genderButton}
        />
        <Button 
          title={preferences.genderPreferences.includes('other') ? 'Unselect Other' : 'Select Other'}
          onPress={() => handleGenderChange('other')}
          type="outline"
          style={styles.genderButton}
        />
      </View>

      <Text style={styles.label}>Max Extra Time:</Text>
      <Slider
        minimumValue={0}
        maximumValue={60}
        step={5}
        value={preferences.maxExtraTime}
        onValueChange={(value) => handleInputChange('maxExtraTime', value)}
      />
      <Text>{preferences.maxExtraTime} minutes</Text>

      <Button title="Save Preferences" onPress={() => onSave(preferences)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  genderButton: {
    marginVertical: 5,
  }
});

export default PreferencesForm;