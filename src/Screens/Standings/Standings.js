import React from 'react';
import { Alert, Dimensions, FlatList, Image, Text, View, useWindowDimensions  } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useState, useEffect } from "react";
import StandingsStyle from './StandingsStyle';
import { constructorImages, constructorColor } from '../../constant';

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
                        <View style={StandingsStyle.driverPointBox}>
                            <Text style={StandingsStyle.driverPoints}>{item.points}</Text>
                            <Text style={StandingsStyle.pointsBox}>pts</Text>
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
                        <View style={StandingsStyle.driverPointBox}>
                            <Text style={StandingsStyle.driverPoints}>{item?.points}</Text>
                            <Text style={StandingsStyle.pointsBox}>pts</Text>
                        </View>
                    </View>
                </View>
            )}
        />
    </View>
);
  
const RaceResult = ({data}) => (
    <View style={StandingsStyle.tabColumView}>

    </View>
);

const Standings = () => {
    const currentYear = new Date().getFullYear();
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [driverStandings, setDriverStandings] = useState([]);
    const [constructorsStandings, setConstructorsStandings] = useState([]);
    const [resultStandings, setResultStandings] = useState([]);
    const [routes] = useState([
        { key: 'drivers', title: 'Drivers' },
        { key: 'constructors', title: 'Constructors' },
        { key: 'raceresult', title: 'Race Result' },
    ]);
    const { width, height } = Dimensions.get('window');

    const getDriverStandings = () => {
        fetch('https://ergast.com/api/f1/'+currentYear+'/driverStandings.json').then(response => response.json()).then(data => {
            setDriverStandings(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
            getConstructorStandings();
        }).catch(error => {
            getConstructorStandings();
            Alert.alert("Error", "Failed to fetch driver standings");
        });
    }

    const getConstructorStandings = () => {
        fetch('https://ergast.com/api/f1/'+currentYear+'/constructorStandings.json').then(response => response.json()).then(data => {
            setConstructorsStandings(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
            getResultStandings();
        }).catch(error => {
            getResultStandings();
            Alert.alert("Error", "Failed to fetch constructor standings");
        });
    }

    const getResultStandings = () => {
        fetch('https://ergast.com/api/f1/'+currentYear+'/results.json').then(response => response.json()).then(data => {
            setResultStandings(data.MRData.RaceTable.Races);
        }).catch(error => {
            Alert.alert("Error", "Failed to Race results");
        });
    }

    const renderScene = SceneMap({
        drivers: () => <Drivers data={driverStandings} />,
        constructors: () => <Constructors data={constructorsStandings} />,
        raceresult: () => <RaceResult data={resultStandings} />,
    });

    useEffect(() => {
        getDriverStandings();
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