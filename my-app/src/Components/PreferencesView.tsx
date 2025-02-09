// src/Components/PreferencesForm.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, Platform } from "react-native";
import { Gender, Preferences } from "../Models/Profile";
import { Formik } from 'formik'; // For form handling and validation
import * as Yup from 'yup'; // For validation schema

interface GenderPreference {
  gender: Gender;
  preferred: boolean;
}

const genderOptions: Gender[] = ["male", "female", "nb", "other"];

const validationSchema = Yup.object().shape({
  minRiders: Yup.number().integer().min(0, "Min riders must be at least 0").required("Required"),
  maxRiders: Yup.number().integer().min(0, "Max riders must be at least 0").nullable(), // Allow null for no preference
  minAge: Yup.number().integer().min(0, "Min age must be at least 0").required("Required"),
  maxAge: Yup.number().integer().min(0, "Max age must be at least 0").nullable(), // Allow null for no preference
  maxExtraTime: Yup.number().integer().min(0, "Max extra time must be at least 0").nullable(), // Allow null for no preference
});


export const PreferencesForm: React.FC<{ prefs: Preferences; onSave: (prefs: Preferences) => void }> = ({
  prefs,
  onSave,
}) => {


  return (
    <Formik
      initialValues={{
        minRiders: prefs.minRiders.toString(),
        maxRiders: prefs.maxRiders ? prefs.maxRiders.toString() : '',
        minAge: prefs.minAge.toString(),
        maxAge: prefs.maxAge ? prefs.maxAge.toString() : '',
        verification: prefs.verification,
        genderPreferences: genderOptions.map(gender => ({ 
            gender, 
            preferred: prefs.genderPreferences?.find(pref => pref.gender === gender)?.preferred || false 
        })),
        maxExtraTime: prefs.maxExtraTime ? prefs.maxExtraTime.toString() : '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const preferences: Preferences = {
          minRiders: parseInt(values.minRiders, 10),
          maxRiders: values.maxRiders ? parseInt(values.maxRiders, 10) : 0, // Handle empty string as 0
          minAge: parseInt(values.minAge, 10),
          maxAge: values.maxAge ? parseInt(values.maxAge, 10) : 0, // Handle empty string as 0
          verification: values.verification,
          genderPreferences: values.genderPreferences,
          maxExtraTime: values.maxExtraTime ? parseInt(values.maxExtraTime, 10) : 0, // Handle empty string as 0
        };
        onSave(preferences);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Set Your Preferences</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label} htmlFor="minRiders">Min Riders:</Text>
            <TextInput
              style={[styles.input, touched.minRiders && errors.minRiders && styles.errorInput]}
              keyboardType="numeric"
              id="minRiders"
              onChangeText={handleChange('minRiders')}
              onBlur={handleBlur('minRiders')}
              value={values.minRiders}
            />
            {touched.minRiders && errors.minRiders && (
              <Text style={styles.errorText}>{errors.minRiders}</Text>
            )}
          </View>

          {/* ... (Other input groups - similar structure as minRiders) */}

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Gender Preferences:</Text>
            {genderOptions.map((gender) => (
              <TouchableOpacity
                key={gender}
                style={styles.genderOption}
                onPress={() => setFieldValue('genderPreferences', values.genderPreferences.map(g =>
                  g.gender === gender ? { ...g, preferred: !g.preferred } : g
                ))}
                accessible={true}
                accessibilityRole="button"
                aria-label={`Toggle preference for ${gender} gender`}
              >
                <Text style={styles.genderText}>{gender}</Text>
                <View style={styles.checkbox}>
                  {values.genderPreferences.find((g) => g.gender === gender)?.preferred && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* ... (Max Extra Time input group) */}

          <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
            <Text style={styles.saveButtonText}>Save Preferences</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  // ... (Existing styles)
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default PreferencesForm;