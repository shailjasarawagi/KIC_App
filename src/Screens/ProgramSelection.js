// ProgramSelectionScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ProgramSelectionScreen = ({ navigation, route }) => {
 const dummyPrograms = [
  {
   _id: '1',
   name: 'Program 1',
   description: 'Description for Program 1',
   daysPerWeek: 3,
   activityIds: ['activityId1', 'activityId2'],
  },
  {
   _id: '2',
   name: 'Program 2',
   description: 'Description for Program 2',
   daysPerWeek: 4,
   activityIds: ['activityId1', 'activityId2', 'activityId3', 'activityId4'],
  },
  {
   _id: '3',
   name: 'Program 3',
   description: 'Description for Program 3',
   daysPerWeek: 1,
   activityIds: ['activityId1', 'activityId2', 'activityId3',],

  },
 ];

 const handleSelectProgram = (program) => {
  navigation.navigate('ProgramDetails', { program: program })
 };

 return (
  <View style={styles.container}>
   <Text style={styles.heading}>Select a Program</Text>
   <FlatList
    data={dummyPrograms}
    keyExtractor={(item) => item._id.toString()}
    renderItem={({ item }) => (
     <TouchableOpacity
      style={styles.programItem}
      onPress={() => handleSelectProgram(item)}
     >
      <Text style={styles.programName}>{item.name}</Text>
      <Text style={styles.programDescription}>{item.description}</Text>
      <Text style={styles.selectionText}>
       {item.daysPerWeek} Days Per Week
      </Text>
     </TouchableOpacity>
    )}
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
 programItem: {
  padding: 16,
  backgroundColor: '#e0e0e0',
  marginBottom: 16,
  borderRadius: 8,
 },
 programName: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 8,
 },
 programDescription: {
  fontSize: 16,
 },
});

export default ProgramSelectionScreen;
