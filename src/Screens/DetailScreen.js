// DetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const DetailScreen = ({ route }) => {
  const { driverId } = route.params;
  const [driverInfo, setDriverInfo] = useState(null);

  useEffect(() => {
    // API URL voor het ophalen van driverinformatie
    const apiUrl = `http://ergast.com/api/f1/drivers/${driverId}.json`;

    // Doe een API-verzoek om driverinformatie op te halen
    axios.get(apiUrl)
      .then(response => {
        const data = response.data.MRData.DriverTable.Drivers[0];
        setDriverInfo(data);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, [driverId]);

  if (!driverInfo) {
    return (
      <View>
        <Text>Laden...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require(`../images/${driverId}.png`)} style={styles.image} />
      <Text>Voornaam: {driverInfo.givenName}</Text>
      <Text>Achternaam: {driverInfo.familyName}</Text>
      <Text>Driver nummer: {driverInfo.permanentNumber}</Text>
      <Text>Geboortedatum: {driverInfo.dateOfBirth}</Text>
      <Text>Nationaliteit: {driverInfo.nationality}</Text>
    </View>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default DetailScreen;
