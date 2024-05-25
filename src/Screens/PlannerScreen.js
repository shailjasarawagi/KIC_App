import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const PlannerScreen = ({ enrolledProgram }) => {
 const [activityLogs, setActivityLogs] = useState([]);
 const [futureSchedules, setFutureSchedules] = useState([]);

 useEffect(() => {
  // Fetch activity logs and future schedules based on the enrolled program
  // This can be done using API calls to your backend
  const fetchPlannerData = async () => {
   // Simulated data for demonstration purposes
   const logs = await fetchActivityLogs();
   const schedules = await fetchFutureSchedules();
   setActivityLogs(logs);
   setFutureSchedules(schedules);
  };

  fetchPlannerData();
 }, [enrolledProgram]);

 const fetchActivityLogs = async () => {
  // Fetch activity logs from the backend
  return [
   { date: '2024-05-20', activity: 'Morning Yoga' },
   { date: '2024-05-21', activity: 'Afternoon Run' },
   // Additional activity logs
  ];
 };

 const fetchFutureSchedules = async () => {
  // Fetch future schedules from the backend
  return [
   { date: '2024-05-22', activity: 'Gym Session' },
   { date: '2024-05-23', activity: 'Swimming' },
   // Additional future schedules
  ];
 };
 const renderActivityLogItem = ({ item }) => (
  <View style={styles.card}>
   <Text style={styles.activityId}>Activity Name: {item.activity}</Text>
   <Text style={styles.completedAt}>Completed At: {item.date}</Text>
  </View>
 );

 const renderFutureLogItem = ({ item }) => (
  <View style={styles.card}>
   <Text style={styles.activityId}> Activity Name: {item.activity}</Text>
   <Text style={styles.completedAt}>Schedule At: {item.date}</Text>
  </View>
 );
 return (
  <View style={styles.container}>
   <Text style={styles.sectionTitle}>Activity Logs:</Text>
   <FlatList
    data={activityLogs}
    keyExtractor={(item) => item._id}
    renderItem={renderActivityLogItem}
   />
   <Text style={styles.sectionTitle}>Future Schedules:</Text>
   <FlatList
    data={futureSchedules}
    keyExtractor={(item) => item._id}
    renderItem={renderFutureLogItem}
   />
  </View>
 );
};



const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 16,
 },
 heading: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 16,
 },
 card: {
  backgroundColor: '#fff',
  padding: 16,
  marginBottom: 16,
  borderRadius: 8,
  elevation: 3, // for shadow on Android
  shadowColor: '#000', // for shadow on iOS
  shadowOpacity: 0.3,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
 },
 activityId: {
  fontSize: 16,
  marginBottom: 8,
 },
 completedAt: {
  fontSize: 14,
  color: '#666',
 },
 sectionTitle: {
  marginBottom: 16
 }
});

export default PlannerScreen;
