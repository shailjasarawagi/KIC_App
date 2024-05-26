import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const initialActivities = [
 { id: '1', name: 'Cardio', scheduledDate: new Date(Date.now() - 86400000), completed: false, skipped: false },
 { id: '2', name: 'Strength', scheduledDate: new Date(), completed: false, skipped: true },
 { id: '3', name: 'Yoga', scheduledDate: new Date(Date.now() + 86400000), completed: false, skipped: false },
];

export default function ScheduleScreen() {
 const [activities, setActivities] = useState(initialActivities);

 useEffect(() => {
  const now = new Date();
  const updatedActivities = activities.map(activity => {
   if (activity.scheduledDate < now && !activity.completed) {
    return { ...activity, skipped: true };
   }
   return activity;
  });
  setActivities(updatedActivities);
 }, []);

 const handleCompleteActivity = (activityId) => {
  const now = new Date();
  const updatedActivities = activities.map(activity => {
   if (activity.id === activityId) {
    return { ...activity, completed: true };
   }
   if (activity.scheduledDate < now && !activity.completed && activity.id !== activityId) {
    return { ...activity, skipped: true };
   }
   return activity;
  });
  setActivities(updatedActivities);
 };

 return (
  <View style={styles.container}>
   <FlatList
    data={activities}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
     <View style={styles.activityItem}>
      <Text>{item.name}</Text>
      <Text>{item.scheduledDate.toDateString()}</Text>
      <Text>{item.completed ? 'Completed' : item.skipped ? 'Skipped' : 'Pending'}</Text>
      {!item.completed && !item.skipped && (
       <Button title="Complete" onPress={() => handleCompleteActivity(item.id)} />
      )}
     </View>
    )}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 16,
 },
 activityItem: {
  padding: 16,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
 },
});