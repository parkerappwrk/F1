import { Alert, Button, Dimensions, ScrollView, Switch, Text, Touchable, TouchableOpacity, View } from "react-native";
import ProfileStyle from "./ProfileStyle";
import { useEffect, useState } from "react";

const ProfileScreen = () => {
    const { width, height } = Dimensions.get('window');
    const scrollHeight = height - 100;
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={{ width, height }}>
            <View style={ProfileStyle.headerRow}>
                <Text style={ProfileStyle.headerTitle}>Profile</Text>
            </View>
            <ScrollView style={{...ProfileStyle.scrollContainer, maxHeight: scrollHeight}}>
                <View style={ProfileStyle.sectionBox}>
                    <Text style={ProfileStyle.sectionTitle}>Personal Information</Text>
                    <View style={ProfileStyle.inputBox}>
                        <Text style={ProfileStyle.inputLabel}>Name</Text>
                        <Text style={ProfileStyle.inputValue}>Parker S</Text>
                    </View>
                    <View style={ProfileStyle.inputBox}>
                        <Text style={ProfileStyle.inputLabel}>Birthday</Text>
                        <Text style={ProfileStyle.inputValue}>15/11/1992</Text>
                    </View>
                    <View style={ProfileStyle.inputBox}>
                        <Text style={ProfileStyle.inputLabel}>Country of residence</Text>
                        <Text style={ProfileStyle.inputValue}>India</Text>
                    </View>
                    <View style={ProfileStyle.inputBox}>
                        <Text style={ProfileStyle.inputLabel}>Email address</Text>
                        <Text style={ProfileStyle.inputValue}>parker.s@appwrk.com</Text>
                    </View>
                </View>
                <View style={ProfileStyle.sectionBox}>
                    <Text style={ProfileStyle.sectionTitle}>My Subscription</Text>
                    <View style={ProfileStyle.inputBox}>
                        <Text style={ProfileStyle.inputLabel}>Subscription amount</Text>
                        <Text style={ProfileStyle.inputValue}>$3.99</Text>
                    </View>
                    <View style={ProfileStyle.inputBox}>
                        <Text style={ProfileStyle.inputLabel}>Next payment date</Text>
                        <Text style={ProfileStyle.inputValue}>08/19/2024</Text>
                    </View>
                    <View style={ProfileStyle.cancelSubsBox}>
                        <Text style={ProfileStyle.cancelSubs}>Cancel Subscription</Text>
                    </View>
                </View>
                <View style={ProfileStyle.sectionBox}>
                    <Text style={ProfileStyle.sectionTitle}>Settings</Text>
                    <View style={ProfileStyle.notificationRow}>
                        <Text style={ProfileStyle.notificationText}>Push Notification</Text>    
                        <Switch
                            trackColor={{false: '#CCC', true: '#FF8581'}}
                            thumbColor={isEnabled ? '#FF1E00' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        /> 
                    </View>
                </View>
                <View style={ProfileStyle.sectionBox}>
                    <TouchableOpacity>
                        <Text style={ProfileStyle.logoutBtn}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default ProfileScreen;