import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProgramDetailsScreen from '../../Screens/ProgramDetailsScreen';
import PlannerScreen from '../../Screens/PlannerScreen';
import ProgramSelectionScreen from '../../Screens/ProgramSelection';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = props => {

 return (
  <Tab.Navigator
   initialRouteName="Home"
   activeColor="black"
   inactiveColor="gray"
   shifting={false}
   barStyle={{
    backgroundColor: "white",
   }}

  >
   <Tab.Screen
    name="Home"
    component={ProgramSelectionScreen}
    options={{
     tabBarLabel:
      <Text  >Home</Text>
     ,
    }}
   />
   <Tab.Screen
    name="Planner"
    component={PlannerScreen}
    options={{
     tabBarLabel: <Text  >Planner</Text>
    }}
   />
   {/* <Tab.Screen
    name="Scan"
    component={ProgramDetailsScreen}
    options={{
     tabBarLabel: <Text>Profile</Text>
    }}
   /> */}

  </Tab.Navigator >
 );
};




export default BottomTabs;
