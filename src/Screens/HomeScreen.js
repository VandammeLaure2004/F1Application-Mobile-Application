// HomeScreen.js
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const handleSettingsPress = () => {
      navigation.navigate('Settings');
    };
  
    return (
      <View style={styles.container}>
        <Image source={require('../images/F1Logo.jpg')}
        style={styles.image}
        />
        <View style={styles.buttonContainer}>
            <Button title="Go to Settings" onPress={handleSettingsPress} color={'gray'} />
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 1005,
      height: 400,
      marginBottom: 20,
    },
    buttonContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      margin: 5,
      
    },
  });

export default HomeScreen;
