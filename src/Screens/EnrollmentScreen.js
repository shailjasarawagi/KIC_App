import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, Alert } from 'react-native';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const EnrollmentScreen = ({ route, navigation }) => {
 const { setEnrolled } = route.params;

 const [daysCount, setDaysCount] = useState(0);
 const [selectedDays, setSelectedDays] = useState([]);

 const handleDaysCountSelection = (count) => {
  setDaysCount(count);
  setSelectedDays([]);
 };

 const toggleDaySelection = (day) => {
  if (selectedDays.includes(day)) {
   setSelectedDays(selectedDays.filter((d) => d !== day));
  } else if (selectedDays.length < daysCount) {
   setSelectedDays([...selectedDays, day]);
  } else {
   Alert.alert('Selection Limit', `You can only select ${daysCount} days`);
  }
 };

 const handleConfirmEnrollment = () => {
  if (selectedDays.length === daysCount) {
   setEnrolled(true);
   navigation.goBack();
  } else {
   Alert.alert('Incomplete Selection', `Please select exactly ${daysCount} days`);
  }
 };

 return (
  <View style={styles.container}>
   <Text style={styles.title}>Select Days per Week:</Text>
   <View style={styles.daysCountContainer}>
    {[1, 2, 3, 4, 5, 6, 7].map((count) => (
     <TouchableOpacity
      key={count}
      style={[styles.countButton, daysCount === count && styles.selectedCount]}
      onPress={() => handleDaysCountSelection(count)}
     >
      <Text>{count}</Text>
     </TouchableOpacity>
    ))}
   </View>
   <Text style={styles.subtitle}>Select Specific Days:</Text>
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
   <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmEnrollment}>
    <Text style={styles.confirmButtonText}>Confirm Enrollment</Text>
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
 daysCountContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginBottom: 20,
 },
 countButton: {
  padding: 10,
  margin: 5,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
 },
 selectedCount: {
  backgroundColor: '#99ff99',
 },
 subtitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
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

export default EnrollmentScreen;
