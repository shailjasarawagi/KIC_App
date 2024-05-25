import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabItem = ({ label, onPress, isActive }) => (
 <TouchableOpacity onPress={onPress} style={isActive ? styles.activeTab : styles.tab}>
  <Text>{label}</Text>
 </TouchableOpacity>
);

const CustomTabs = ({ children, initialActiveIndex = 0 }) => {
 const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

 const handleTabPress = (index) => {
  setActiveIndex(index);
 };

 const tabs = React.Children.map(children, (child, index) => (
  <TabItem
   key={index}
   label={child.props.label}
   onPress={() => handleTabPress(index)}
   isActive={index === activeIndex}
  />
 ));

 return (
  <View style={styles.container}>
   <View style={styles.tabs}>{tabs}</View>
   {children[activeIndex]}
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 tabs: {
  flexDirection: 'row',
 },
 tab: {
  flex: 1,
  padding: 10,
  alignItems: 'center',
 },
 activeTab: {
  flex: 1,
  padding: 10,
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
 },
});

export default CustomTabs;