import * as React from 'react';
import { Dimensions, Text, View, useWindowDimensions  } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useState } from "react";
import StandingsStyle from './StandingsStyle';

const Drivers = () => (
    <View></View>
);
  
const Constructors = () => (
    <View></View>
);
  
const RaceResult = () => (
    <View></View>
);

const renderScene = SceneMap({
    drivers: Drivers,
    constructors: Constructors,
    raceresult: RaceResult,
});

const Standings = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'drivers', title: 'UpComing' },
        { key: 'constructors', title: 'Constructors' },
        { key: 'raceresult', title: 'Race Result' },
    ]);
    const { width, height } = Dimensions.get('window');

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
                            <Text style={{fontSize: 12, textAlign: 'center', fontFamily: 'Formula1-Regular',
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