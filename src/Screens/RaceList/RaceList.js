import * as React from 'react';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View, useWindowDimensions  } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useState, useEffect, useMemo } from "react";
import RaceStyle from './RaceListStyle';
import { circuitFlags } from '../../constant';
import { getDateYearNumFormat, getNewRandom } from '../../helper';

const UpComingRace = ({data, navigation}) => (
    <View style={RaceStyle.tabColumView}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.upcomingRace}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('RaceDetails', {curcuitID: item})}>
                    <View style={RaceStyle.raceRowBox}>
                        <View style={RaceStyle.RaceDateBox}>
                            <Text style={RaceStyle.roundTitle}>Round {item.round}</Text>
                            <Text style={RaceStyle.raceDate}>Date: {getDateYearNumFormat(item.date, 2)}</Text>
                        </View>
                        <View style={RaceStyle.raceCircuitInfo}>
                            <View style={RaceStyle.raceCircuitBox}>
                                <Text style={RaceStyle.raceCircutName}>{item.Circuit.circuitName}</Text>
                                <Text style={RaceStyle.raceName}>{item.raceName}</Text>
                            </View>
                            <View style={RaceStyle.raceCircuitImg}>
                                <Image style={RaceStyle.raceCircuitFlag} source={circuitFlags[item?.Circuit?.circuitId]} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    </View>
);
  
const PastRace = ({data, navigation}) => (
    <View style={RaceStyle.tabColumView}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.pastRace}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('RaceDetails', {curcuitID: item})}>
                    <View style={RaceStyle.raceRowBox}>
                        <View style={RaceStyle.RaceDateBox}>
                            <Text style={RaceStyle.roundTitle}>Round {item.round}</Text>
                            <Text style={RaceStyle.raceDate}>Date: {getDateYearNumFormat(item.date, 2)}</Text>
                        </View>
                        <View style={RaceStyle.raceCircuitInfo}>
                            <View style={RaceStyle.raceCircuitBox}>
                                <Text style={RaceStyle.raceCircutName}>{item.Circuit.circuitName}</Text>
                                <Text style={RaceStyle.raceName}>{item.raceName}</Text>
                            </View>
                            <View style={RaceStyle.raceCircuitImg}>
                                <Image style={RaceStyle.raceCircuitFlag} source={circuitFlags[item?.Circuit?.circuitId]} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    </View>
);

const RaceList = ({navigation}) => {
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
    const [allRaceData, setAllRaceData] = useState([]);
    const [pastRaceList, setPastRaceList] = useState([]);
    const [upcomingRaceList, setUpComingRaceList] = useState([]);
    const [routes] = useState([
        { key: 'upcoming', title: 'UpComing' },
        { key: 'past', title: 'Past' },
    ]);
    const { width, height } = Dimensions.get('window');

    const renderScene = SceneMap({
        upcoming: () => <UpComingRace data={upcomingRaceList} navigation={navigation} />,
        past: () => <PastRace data={pastRaceList} navigation={navigation} />,
    });

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

    const getRaceList = () => {
        fetch('https://ergast.com/api/f1/'+currentYear+'.json').then(response => response.json()).then(data => {
            setAllRaceData(data.MRData.RaceTable.Races);
        }).catch(error => {
            
        });
    }

    useEffect(() => {
        if(allRaceData.length){
            allRaceData.map((item) => {
                if(currentDate > item.date){
                    item.pastRace = getNewRandom();
                    setPastRaceList((prev) => [...prev, item]);
                } else {
                    item.upcomingRace = getNewRandom();
                    setUpComingRaceList((prev) => [...prev, item]);
                }
            });
        }
    }, [allRaceData]);

    useEffect(() => {
        setPastRaceList([]);
        setUpComingRaceList([]);
        getRaceList();
    }, []);

    return (
        <View style={{ width, height }}>
            <View style={RaceStyle.headerRow}>
                <Text style={RaceStyle.sectionTitle}>Racing</Text>
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
                            <Text style={{fontSize: 14, textAlign: 'center', fontFamily: 'Formula1-Regular',
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

export default RaceList;