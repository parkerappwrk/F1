import React, { useState } from "react";
import RaceStyle from './RaceResultsStyle'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const RaceResults = ({route, navigation}) => {
    const [routeResults, setRouteResults] = useState(route.params.results);
    const { width, height } = Dimensions.get('window');

    return (
        <View style={[RaceStyle.detailScreen, {width, height}]}>
            <View style={RaceStyle.headerRow}>
                <View style={RaceStyle.headerNavRow}>
                    <TouchableOpacity style={RaceStyle.backBtn} onPress={() => navigation.goBack()}>
                        <Image style={RaceStyle.backImage} source={require ('../../assets/images/arrow.png')} />    
                    </TouchableOpacity>
                    <Text style={RaceStyle.raceCircuitName}>{routeResults.curcuitInfo.raceName}</Text>
                </View>
                <View style={RaceStyle.headerTabRow}>
                    <Text style={RaceStyle.pos}>Pos</Text>
                    <Text style={RaceStyle.driveName}>Driver</Text>
                    <Text style={RaceStyle.time}>Time</Text>
                </View>
            </View>
            <View style={RaceStyle.driverDetailRow}>
                <FlatList 
                    data={routeResults}
                    keyExtractor={(item) => item.Driver.driverId}
                    renderItem={({ item }) => (
                        <View style={RaceStyle.driverPosRow}>
                            <Text style={RaceStyle.driverPos}>{item?.position}</Text>
                            <Text style={RaceStyle.driverFullName}>{item?.Driver?.givenName} {item?.Driver?.familyName}</Text>
                            <Text style={RaceStyle.totalTime}>{item?.Time?.time}</Text>
                        </View>
                    )}
                />            
            </View>
        </View>
    )
}

export default RaceResults;