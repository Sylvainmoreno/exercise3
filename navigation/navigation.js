import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/HomeScreen';
import MovieScreen from '../src/screens/MovieScreen';
import CastScreen from '../src/screens/CastScreen';

const StackHomeScreen = createNativeStackNavigator();
function Home() {
  return (
    <StackHomeScreen.Navigator screenOptions={{headerShown: false}}>
      <StackHomeScreen.Screen name="HomeScreen" component={HomeScreen} />
    </StackHomeScreen.Navigator>
  );
}

const StackMovieScreen = createNativeStackNavigator();
function Movie() {
  return (
    <StackHomeScreen.Navigator screenOptions={{headerShown: false}}>
      <StackHomeScreen.Screen name="MovieScreen" component={MovieScreen} />
    </StackHomeScreen.Navigator>
  );
}

const StackCastScreen = createNativeStackNavigator();
function Cast() {
  return (
    <StackCastScreen.Navigator screenOptions={{headerShown: false}}>
      <StackCastScreen.Screen name="CastScreen" component={CastScreen} />
    </StackCastScreen.Navigator>
  );
}

const StackFulll = createNativeStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <StackFulll.Navigator initialRouteName="FulllFlix">
        <StackFulll.Screen
          name="FulllFlix"
          component={Home}
          screenOptions={{headerShown: false}}
        />
        <StackFulll.Screen
          name="Movie Details"
          component={Movie}
          screenOptions={{headerShown: true}}
        />
        <StackFulll.Screen
          name="Cast List"
          component={Cast}
          screenOptions={{headerShown: true}}
        />
      </StackFulll.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
