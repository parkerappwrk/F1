import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import RaceStyle from "./RaceInfoStyle";
import { circuitFlags, circuitImages } from '../../constant';
import { formatTime, getDateYearNumFormat } from '../../helper';

const RaceInfoScreen = ({route, navigation}) => {
    const [routeState, setRouteState] = useState(route.params.curcuitID);
    const { width, height } = Dimensions.get('window');
    
    return (
        <ScrollView style={{width, height}}>
            <View style={RaceStyle.detailScreen}>
                <View style={RaceStyle.headerRow}>
                    <TouchableOpacity style={RaceStyle.backBtn} onPress={() => navigation.goBack()}>
                        <Image style={RaceStyle.backImage} source={require ('../../assets/images/arrow.png')} />    
                    </TouchableOpacity>
                    <Image style={RaceStyle.rightImageLogo} source={require ('../../assets/images/F1-logo.png')} />
                </View>
                <View style={RaceStyle.circuitBanner}>
                    <Image style={RaceStyle.raceCircuitFlag} source={circuitImages[routeState?.Circuit?.circuitId]} />
                    <Text style={RaceStyle.raceCircuitName}>{routeState.Circuit.circuitName}</Text>
                </View>
                <View style={RaceStyle.circuitNameInfo}>
                    <Image style={RaceStyle.raceCountryFlag} source={circuitFlags[routeState?.Circuit?.circuitId]} />
                    <View style={RaceStyle.circuitCountry}>
                        <Text style={RaceStyle.contryName}>{routeState.Circuit.Location.country}</Text>
                        <Text style={RaceStyle.raceName}>{routeState.raceName}</Text>
                    </View>
                </View>
                <View style={RaceStyle.circuitRaceInfo}>
                    <View style={RaceStyle.circuitRaceInnner}>
                        <View style={RaceStyle.RaceSchudleBox}>
                            <Text style={RaceStyle.schduleTitle}>Race</Text>
                            <View style={RaceStyle.raceTime}>
                                <Text style={RaceStyle.raceDateTime}>{getDateYearNumFormat(routeState.date, 2)}</Text>
                                <Text style={RaceStyle.raceDateTime}>{formatTime(routeState.time)}</Text>
                            </View>
                        </View>
                        <View style={RaceStyle.RaceSchudleBox}>
                            <Text style={RaceStyle.schduleTitle}>Qualifying</Text>
                            <View style={RaceStyle.raceTime}>
                                <Text style={RaceStyle.raceDateTime}>{getDateYearNumFormat(routeState.Qualifying.date, 2)}</Text>
                                <Text style={RaceStyle.raceDateTime}>{formatTime(routeState.Qualifying.time)}</Text>
                            </View>
                        </View>
                        {routeState.ThirdPractice ? (
                            <React.Fragment>
                                <View style={RaceStyle.RaceSchudleBox}>
                                    <Text style={RaceStyle.schduleTitle}>Practice 3</Text>
                                    <View style={RaceStyle.raceTime}>
                                        <Text style={RaceStyle.raceDateTime}>{getDateYearNumFormat(routeState.ThirdPractice.date, 2)}</Text>
                                        <Text style={RaceStyle.raceDateTime}>{formatTime(routeState.ThirdPractice.time)}</Text>
                                    </View>
                                </View>
                            </React.Fragment>
                        ) : (   <React.Fragment>
                                <View style={RaceStyle.RaceSchudleBox}>
                                    <Text style={RaceStyle.schduleTitle}>Sprint</Text>
                                    <View style={RaceStyle.raceTime}>
                                        <Text style={RaceStyle.raceDateTime}>{getDateYearNumFormat(routeState.Sprint.date, 2)}</Text>
                                        <Text style={RaceStyle.raceDateTime}>{formatTime(routeState.Sprint.time)}</Text>
                                    </View>
                                </View>
                            </React.Fragment>
                        )}
                        <View style={RaceStyle.RaceSchudleBox}>
                            <Text style={RaceStyle.schduleTitle}>Practice 2</Text>
                            <View style={RaceStyle.raceTime}>
                                <Text style={RaceStyle.raceDateTime}>{getDateYearNumFormat(routeState.SecondPractice.date, 2)}</Text>
                                <Text style={RaceStyle.raceDateTime}>{formatTime(routeState.SecondPractice.time)}</Text>
                            </View>
                        </View>
                        <View style={RaceStyle.RaceSchudleBox}>
                            <Text style={RaceStyle.schduleTitle}>Practice 1</Text>
                            <View style={RaceStyle.raceTime}>
                                <Text style={RaceStyle.raceDateTime}>{getDateYearNumFormat(routeState.FirstPractice.date, 2)}</Text>
                                <Text style={RaceStyle.raceDateTime}>{formatTime(routeState.FirstPractice.time)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default RaceInfoScreen;