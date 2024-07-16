import React from 'react';
import { Image, Text, Touchable, View } from "react-native";
import RaceStyle from "./RaceInfoStyle";

const RaceInfoScreen = ({route}) => {
    return (
        <View style={RaceStyle.detailScreen}>
            <View style={RaceStyle.headerRow}>
                <Touchable style={RaceStyle.backBtn}>
                    <Image style={RaceStyle.backImage} source={require ('../../assets/images/arrow.png')} />    
                </Touchable>
                <Image style={RaceStyle.rightImageLogo} source={require ('../../assets/images/F1-logo.png')} />
            </View>
            <Text style={RaceStyle.routeName}>{route.params.curcuitID}</Text>
        </View>
    );
};

export default RaceInfoScreen;