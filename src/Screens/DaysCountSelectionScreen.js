import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DaysCountSelectionScreen = ({ navigation, route }) => {
 const handleDaysCountSelection = (count) => {
  navigation.navigate('DaysSelection', { daysCount: count, program: route.params.program });
 };

 return (
  <View style={styles.container}>
   <Text style={styles.title}>Select Days per Week:</Text>
   <View style={styles.daysCountContainer}>
    {[1, 2, 3, 4, 5, 6, 7].map((count) => (
     <TouchableOpacity
      key={count}
      style={styles.countButton}
      onPress={() => handleDaysCountSelection(count)}
     >
      <Text>{count}</Text>
     </TouchableOpacity>
    ))}
   </View>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 20,
  justifyContent: 'center',
  alignItems: 'center',
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
});

export default DaysCountSelectionScreen;