import React from 'react';
import { Alert, Dimensions, FlatList, Image, Text, TouchableOpacity, View, useWindowDimensions  } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useState, useEffect, useMemo } from "react";
import StandingsStyle from './StandingsStyle';
import { constructorImages, constructorColor, DriverImages, constructorCars, circuitFlags } from '../../constant';

const Drivers = ({data}) => (
    <View style={StandingsStyle.tabColumView}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.Driver.driverId}
            renderItem={({ item }) => (
                <View style={StandingsStyle.driverRow}>
                    <View style={StandingsStyle.driverInnerBox}>
                        <View style={StandingsStyle.driverInfoBox}>
                            <Text style={StandingsStyle.driverPosition}>{item.position}</Text>
                            <View style={{...StandingsStyle.driverNameBox, borderLeftColor:constructorColor[item.Constructors[0].constructorId] }}>
                                <Text style={StandingsStyle.driverName}>{item.Driver.givenName}</Text>
                                <Text style={StandingsStyle.familyName}>{item.Driver.familyName}</Text>
                            </View>
                        </View>
                        <View style={StandingsStyle.driverImageBox}>
                            <Image style={StandingsStyle.driverImg} source={DriverImages[item?.Driver?.driverId]} />
                            <View style={StandingsStyle.driverPointBox}>
                                <Text style={StandingsStyle.driverPoints}>{item.points}</Text>
                                <Text style={StandingsStyle.pointsBox}>pts</Text>
                            </View>
                        </View>
                    </View>
                    <View style={StandingsStyle.constructorBox}>
                        <Text style={StandingsStyle.constructorName}>{item.Constructors[0].name}</Text>
                        <Image style={StandingsStyle.constructorImg} source={constructorImages[item.Constructors[0].constructorId]} />
                    </View>
                </View>
            )}
        />
    </View>
);
  
const Constructors = ({data}) => (
    <View style={StandingsStyle.tabColumView}>
        <FlatList
            data={data}
            keyExtractor={(item) => item?.Constructor?.constructorId}
            renderItem={({ item }) => (
                <View style={StandingsStyle.driverRow}>
                    <View style={StandingsStyle.driverInnerBox}>
                        <View style={StandingsStyle.driverInfoBox}>
                            <Text style={StandingsStyle.driverPosition}>{item?.position}</Text>
                            <View style={{...StandingsStyle.constructorNameBox, borderLeftColor:constructorColor[item?.Constructor?.constructorId] }}>
                                <View style={StandingsStyle.constructorImgBox}>
                                    <Image style={StandingsStyle.constructorImg} source={constructorImages[item?.Constructor?.constructorId]} />
                                </View>
                                <Text style={StandingsStyle.constructorName}>{item?.Constructor?.name}</Text>
                            </View>
                        </View>
                        <View style={StandingsStyle.driverImageBox}>
                            <Image style={StandingsStyle.constructorCarImg} source={constructorCars[item?.Constructor?.constructorId]} />
                            <View style={StandingsStyle.driverPointBox}>
                                <Text style={StandingsStyle.driverPoints}>{item?.points}</Text>
                                <Text style={StandingsStyle.pointsBox}>pts</Text>
                            </View>
                        </View>
                    </View>
                    <View style={StandingsStyle.constructorDriverBox}>
                        <Text style={StandingsStyle.constructorDriver}>{item?.Drivers[0]}</Text>
                        <Text style={StandingsStyle.constructorDriver}>, </Text>
                        <Text style={StandingsStyle.constructorDriver}>{item?.Drivers[1]}</Text>
                    </View>
                </View>
            )}
        />
    </View>
);
  
const RaceResult = ({data, navigation}) => (
    <View style={StandingsStyle.tabColumView}>
        <FlatList
            data={data}
            keyExtractor={(item) => item?.raceSeason}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('RaceResult', {results: item})}>
                    <View style={StandingsStyle.raceRowContainer}>
                        <View style={StandingsStyle.raceLocationRow}>
                            <Image style={StandingsStyle.raceCountryFlag} source={circuitFlags[item?.curcuitInfo?.Circuit?.circuitId]} />
                            <Text style={StandingsStyle.contryName}>{item?.curcuitInfo?.Circuit.Location.country}</Text>
                        </View>
                        <Text style={StandingsStyle.raceName}>{item?.curcuitInfo?.raceName}</Text>
                        <View style={StandingsStyle.raceWinnerRow}>
                            <View style={StandingsStyle.racePodiumBox}>
                                <Image style={StandingsStyle.driverOther} source={DriverImages[item[1]?.Driver?.driverId]} />
                                <Text style={{...StandingsStyle.winnername, borderLeftColor:constructorColor[item[1].Constructor.constructorId]}}>{item[1].Driver.code}</Text>
                            </View>
                            <View style={StandingsStyle.racePodiumBox}>
                                <Image style={StandingsStyle.driverFirst} source={DriverImages[item[0]?.Driver?.driverId]} />
                                <Text style={{...StandingsStyle.winnername, borderLeftColor:constructorColor[item[0].Constructor.constructorId]}}>{item[0].Driver.code}</Text>
                            </View>
                            <View style={StandingsStyle.racePodiumBox}>
                                <Image style={StandingsStyle.driverOther} source={DriverImages[item[2]?.Driver?.driverId]} />
                                <Text style={{...StandingsStyle.winnername, borderLeftColor:constructorColor[item[2].Constructor.constructorId]}}>{item[2].Driver.code}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    </View>
);

const Standings = ({navigation}) => {
    let allDriverJSON = [];
    const currentYear = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    if(month < 10){
        month = '0'+month;
    }
    if(date < 10){
        date = '0'+date;
    }
    const currentDate = new Date().getFullYear()+'-'+month+'-'+date;
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [driverStandings, setDriverStandings] = useState([]);
    const [constructorsStandings, setConstructorsStandings] = useState([]);
    const [resultStandings, setResultStandings] = useState([]);
    const [allRaceData, setAllRaceData] = useState([]);
    const [allRaceCount, setAllRaceCount] = useState(0);
    const [routes] = useState([
        { key: 'drivers', title: 'Drivers' },
        { key: 'constructors', title: 'Constructors' },
        { key: 'raceresult', title: 'Race Result' },
    ]);
    const { width, height } = Dimensions.get('window');

    let AllRandomArr = [];
    const getNewRandom = () => {
        let getRandom = Math.floor(Math.random() * 5000);
        if(AllRandomArr.indexOf(getRandom) > -1){
            getNewRandom();
        } else {
            AllRandomArr.push(getRandom);
            return getRandom;
        }
    }

    const getRaceList = async () => {
        try {
            const response = await fetch(`https://ergast.com/api/f1/${currentYear}.json`);
            const data = await response.json();
            const raceCircuits = data.MRData.RaceTable.Races;
            setAllRaceData(raceCircuits);
            getDriverStandings();
        } catch (error) {
            Alert.alert("Error", `Failed to fetch results for race`);
            getDriverStandings();
        }
    }

    const getDriverStandings = () => {
        fetch('https://ergast.com/api/f1/'+currentYear+'/driverStandings.json').then(response => response.json()).then(data => {
            allDriverJSON = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            setDriverStandings(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
            getConstructorStandings();
        }).catch(error => {
            getConstructorStandings();
            Alert.alert("Error", "Failed to fetch driver standings");
        });
    }

    const getConstructorStandings = () => {
        fetch('https://ergast.com/api/f1/'+currentYear+'/constructorStandings.json').then(response => response.json()).then(data => {
            let getConstructors = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
            getConstructors.map((item) => {
                item.Drivers = [];
                allDriverJSON.map((dItem) => {
                    if(item.Constructor.constructorId == dItem.Constructors[0].constructorId){
                        item.Drivers.push(dItem.Driver.familyName);
                    }
                });
                setConstructorsStandings((prev) => [...prev, item]);
            });
        }).catch(error => {
            Alert.alert("Error", "Failed to fetch constructor standings");
        });
    }

    const getRaceResults = async (race, allRaceData) => {
        try {
            const response = await fetch(`https://ergast.com/api/f1/${currentYear}/${race}/results.json`);
            const data = await response.json();
            const raceResult = data.MRData.RaceTable.Races[0].Results;
            raceResult.raceSeason = race;
            raceResult.curcuitInfo = allRaceData[race - 1];
            return raceResult;
        } catch (error) {
            Alert.alert("Error", `Failed to fetch results for race ${race}`);
            return null;
        }
    }

    const storeRaceResults = async (raceCount) => {
        const results = [];
        for (let race = 1; race <= raceCount; race++) {
            const result = await getRaceResults(race, allRaceData);
            if (result) results.push(result);
        }
        setResultStandings(results);
    }

    const memoizedResultStandings = useMemo(() => resultStandings, [resultStandings]);

    const renderScene = SceneMap({
        drivers: () => <Drivers data={driverStandings} />,
        constructors: () => <Constructors data={constructorsStandings} />,
        raceresult: () => <RaceResult data={memoizedResultStandings} navigation={navigation} />,
    });

    useEffect(() => {
        setResultStandings([]);
        if(allRaceData.length){
            const completedRaces = allRaceData.filter(race => new Date(race.date) <= new Date()).length;
            setAllRaceCount(completedRaces);
        }
    }, [allRaceData]);

    useEffect(() => {
        if(allRaceCount > 0){
            storeRaceResults(allRaceCount);
        }
    }, [allRaceCount]);

    useEffect(() => {
        setResultStandings([]);
        setAllRaceData([])
        setDriverStandings([])
        setConstructorsStandings([]);
        getRaceList();
    }, []);

    return (
        <View style={{ width, height }}>
            <View style={StandingsStyle.headerRow}>
                <Text style={StandingsStyle.sectionTitle}>Standings</Text>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={props => 
                    <TabBar 
                    {...props}
                    inactiveColor={'#DDD'}
                    activeColor={'#FFF'}
                    indicatorStyle={{ backgroundColor: '#FFF' }}
                    renderLabel={({ route }) => (
                        <View>
                            <Text style={{fontSize: 13, textAlign: 'center', fontFamily: 'Formula1-Regular',
                            color: route.key === props.navigationState.routes[props.navigationState.index].key ? '#FFF' : '#CCC'}}>
                                {route.title}
                            </Text>
                        </View>
                    )}
                    style={{backgroundColor: '#FF1E00'}}/>
                }
            />
        </View>
    );
};

export default Standings;