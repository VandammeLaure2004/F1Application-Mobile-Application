// DriverScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, FlatList } from 'react-native';

const DriverScreen = ({ navigation }) => {
  const [driverId, setDriverId] = useState('');
  const [driverData, setDriverData] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://ergast.com/api/f1/drivers/${driverId}.json`);
      const data = await response.json();

      if (data.MRData.DriverTable.Drivers.length > 0) {
        const driver = data.MRData.DriverTable.Drivers[0];
        setDriverData([{
          id: driver.driverId,
          firstName: driver.givenName,
          lastName: driver.familyName,
        }]);
        setDriverId('');
      } else {
        Alert.alert('Driver not found', 'No driver found with the given ID');
      }
    } catch (error) {
      console.error('Error fetching driver data:', error);
      Alert.alert('Error', 'An error occurred while fetching driver data');
    }
  };

  const handleDriverPress = (driverId) => {
    // Navigeer naar de detailpagina en geef de driverId door
    navigation.navigate('Detail', { driverId });
  };

  return (
    <View style={styles.container}>
      <Text>Voer Driver in:</Text>
      <TextInput
        style={styles.input}
        value={driverId}
        onChangeText={setDriverId}
        placeholder="Driver ID"
      />
      <Button title="Zoeken" onPress={handleSearch} />

      <FlatList
        data={driverData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.driverItem}>
            <Text>{`${item.firstName} ${item.lastName}`}</Text>
            <Button
              title="Bekijk details"
              onPress={() => handleDriverPress(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%',
  },
  driverItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
});

export default DriverScreen;
