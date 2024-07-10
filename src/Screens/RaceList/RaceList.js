import * as React from 'react';
import { Dimensions, Text, View, useWindowDimensions  } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useState } from "react";
import RaceStyle from './RaceListStyle';

const UpComingRace = () => (
    <View></View>
);
  
const PastRace = () => (
    <View></View>
);

const renderScene = SceneMap({
    upcoming: UpComingRace,
    past: PastRace,
});

const RaceList = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'upcoming', title: 'UpComing' },
        { key: 'past', title: 'Past' },
    ]);
    const { width, height } = Dimensions.get('window');

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