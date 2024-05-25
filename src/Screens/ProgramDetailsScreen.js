import React, { useState, useEffect } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

const ProgramDetailsScreen = ({ navigation, route }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'Overview', title: 'Overview' },
    { key: 'Schedule', title: 'Schedule' },
  ]);
  const [enrolled, setEnrolled] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const renderScheduleItem = ({ item, index }) => (
    <View style={styles.scheduleCard}>
      <Text style={styles.weekText}>Week {Math.floor(index / 3) + 1}</Text>
      <Text style={styles.dayText}>{item.day}</Text>
      <Text style={styles.workoutText}>{item.workout}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  );

  let program = route.params.program
  useEffect(() => {
    if (route.params?.selectedDays) {
      setEnrolled(true);
      setSchedule(route.params.selectedDays);
    }
  }, [route.params?.selectedDays]);

  const FirstRoute = () => (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Text style={styles.programSectionText}>{route.params?.program?.name}</Text>
        <Text style={styles.programDescription}>
          This beginner program will help you perfect your form, master the basics and reach your goals. Designed as a progressive program it will guide you forward as you complete each workout.
        </Text>
      </View>
      <Button title="Enroll" style={{}} onPress={() => navigation.navigate('DaysCountSelection', { setEnrolled, setSchedule, program })}></Button>
    </ScrollView>
  );

  const SecondRoute = () => (
    <ScrollView>
      <View style={[{ flex: 1 }]}>
        {enrolled ? (
          <FlatList
            data={schedule}
            renderItem={renderScheduleItem}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={<Text style={styles.headerText}>Your Schedule:</Text>}
          />
        ) : (
          <Text>Please enroll in a program to see the schedule.</Text>
        )}
      </View>
    </ScrollView>
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'Overview':
        return <FirstRoute />;
      case 'Schedule':
        return <SecondRoute />;
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      onTabLongPress={(scene) => {
        const { route } = scene;
        props.jumpTo(route.key);
      }}
      indicatorStyle={"#2877BD"}
      style={{ backgroundColor: 'white' }}
      renderLabel={({ route, focused }) => (
        <Text style={{ fontFamily: "Inter-Medium", color: focused ? 'black' : 'gray', textTransform: 'none' }}>{route.title}</Text>
      )}
    />
  );

  return (
    <>
      <TouchableOpacity onPress={() => { }} style={styles.main}>
        <Text style={{ ...styles.text, paddingHorizontal: 16 }} >Program Details</Text>
      </TouchableOpacity>
      <Image source={require("../assets/images/workout.jpg")} style={styles.image} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 8,
    backgroundColor: "#2877BD",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: '#ffffff',
    fontFamily: "Inter-SemiBold",
    lineHeight: 24,
  },
  programSectionText: {
    fontSize: 16,
    marginBottom: 10,
    padding: 16,
  },
  programDescription: {
    marginBottom: 20,
    padding: 16,
  },
  image: {
    height: 200,
    borderRadius: 8,
    width: 350,
    paddingVertical: 12,
    marginVertical: 12,
    marginHorizontal: 20,
  },
  scheduleItem: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default ProgramDetailsScreen;
