import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./Screens/Home/HomeScreen";
import ProfileScreen from "./Screens/Profile/ProfileScreen";
import MainScreen from './Screens/Main/MainScreen';
import RaceInfoScreen from './Screens/RaceInfo/RaceInfoScreen';
import DriverInfo from './Screens/DriverInfo/DriverInfo';
import RaceResults from './Screens/RaceResults/RaceResults';

const Stack = createNativeStackNavigator();

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="RaceDetails"
                    component={RaceInfoScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="RaceResult"
                    component={RaceResults}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Profile"
                    component={ProfileScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen name="DriverDetails" component={DriverInfo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Main;