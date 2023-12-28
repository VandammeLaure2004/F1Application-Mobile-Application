// SettingsScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, Switch, Picker, StyleSheet, Button } from 'react-native';
import { ThemeContext, LanguageContext } from '../context';


const Setting = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
    toggleTheme();
  };

  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dark Mode:</Text>
      <Switch value={isDarkMode} onValueChange={handleThemeToggle} />

      <Text style={styles.label}>Language:</Text>
      <Picker
        selectedValue={language}
        onValueChange={handleLanguageChange}
        style={styles.picker}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Nederlands" value="nl" />
      </Picker>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
  },
  picker: {
    width: 200,
  },
});

export default Setting;
