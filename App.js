import React, { useState } from 'react';
import { Button, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProgramDetailsScreen from './src/Screens/ProgramDetailsScreen';
import EnrollmentScreen from './src/Screens/EnrollmentScreen';
import DaysSelectionScreen from './src/Screens/DaysSelectionScreen';
import DaysCountSelectionScreen from './src/Screens/DaysCountSelectionScreen';
import BottomTabs from './src/navigation/BottomTabBar/BottomTabBar';
import PlannerScreen from './src/Screens/PlannerScreen';
import ProgramSelectionScreen from './src/Screens/ProgramSelection';

const Stack = createStackNavigator();


const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabs} />
      <Stack.Screen name="Program" component={ProgramSelectionScreen} />

      <Stack.Screen name="ProgramDetails" component={ProgramDetailsScreen} />
      <Stack.Screen name="PlannerScreen" component={PlannerScreen} />
      <Stack.Screen name="DaysCountSelection" component={DaysCountSelectionScreen} />
      <Stack.Screen name="DaysSelection" component={DaysSelectionScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
})

export default App;
