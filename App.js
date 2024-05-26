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
import { Provider } from 'react-redux';
import rootReducer from './src/store/reducer/index';
import { thunk } from 'redux-thunk';
import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import ScheduleScreen from './src/Screens/ScheduleScreen';
const Stack = createStackNavigator();

const composeEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="Program" component={ProgramSelectionScreen} />
        <Stack.Screen name="Schedule Screen" component={ScheduleScreen} />
        <Stack.Screen name="ProgramDetails" component={ProgramDetailsScreen} />
        <Stack.Screen name="PlannerScreen" component={PlannerScreen} />
        <Stack.Screen name="DaysCountSelection" component={DaysCountSelectionScreen} />
        <Stack.Screen name="DaysSelection" component={DaysSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

const styles = StyleSheet.create({
})

export default App;
