import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const DaysSelectionScreen = ({ route, navigation }) => {
 const { daysCount } = route.params;
 const [selectedDays, setSelectedDays] = useState([]);

 const toggleDaySelection = (day) => {
  if (selectedDays.includes(day)) {
   setSelectedDays(selectedDays.filter((d) => d !== day));
  } else if (selectedDays.length < daysCount) {
   setSelectedDays([...selectedDays, day]);
  } else {
   Alert.alert('Selection Limit', `You can only select ${daysCount} days`);
  }
 };

 const handleConfirmSelection = () => {
  if (selectedDays.length === daysCount) {
   navigation.navigate('ProgramDetails', { selectedDays, program: route.params.program });
  } else {
   Alert.alert('Incomplete Selection', `Please select exactly ${daysCount} days`);
  }
 };

 return (
  <View style={styles.container}>
   <Text style={styles.title}>Select Specific Days:</Text>
   <View style={styles.daysContainer}>
    {daysOfWeek.map((day) => (
     <TouchableOpacity
      key={day}
      style={[styles.dayButton, selectedDays.includes(day) && styles.selectedDay]}
      onPress={() => toggleDaySelection(day)}
     >
      <Text>{day}</Text>
     </TouchableOpacity>
    ))}
   </View>
   <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmSelection}>
    <Text style={styles.confirmButtonText}>Confirm Selection</Text>
   </TouchableOpacity>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 20,
 },
 title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
 },
 daysContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginBottom: 20,
 },
 dayButton: {
  padding: 10,
  margin: 5,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
 },
 selectedDay: {
  backgroundColor: '#99ff99',
 },
 confirmButton: {
  backgroundColor: '#007bff',
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 8,
  alignItems: 'center',
 },
 confirmButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
 },
});

export default DaysSelectionScreen;