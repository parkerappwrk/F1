import { Button, View, StatusBar, Dimensions, Image, Text, TouchableOpacity } from "react-native";
import MainStyle from "./MainStyle";
import ProfileScreen from "../Profile/ProfileScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import News from "../News/News";
import RaceList from "../RaceList/RaceList";
import Standings from "../Standings/Standings";

StatusBar.setHidden(true);
const Tab = createBottomTabNavigator();

const MainScreen = () => {
    const { width, height } = Dimensions.get('window');
    return (
        <View style={[MainStyle.fullScreen, { width, height }]}>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#FF1E00',
                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                }}
            >
                <Tab.Screen
                    name="News"
                    component={News}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name="newspaper-variant" color={focused? '#FF1E00': '#AAA'} size={25} />
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="RaceList"
                    component={RaceList}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name="racing-helmet" color={focused? '#FF1E00': '#AAA'} size={25} />
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="Standings"
                    component={Standings}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name="podium" color={focused? '#FF1E00': '#AAA'} size={25} />
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name="home" color={focused? '#FF1E00': '#AAA'} size={25} />
                        ),
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        </View>
    );
};

export default MainScreen;