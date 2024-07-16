import { Dimensions, Text, View } from "react-native";
import ProfileStyle from "./ProfileStyle";

const ProfileScreen = () => {
    const { width, height } = Dimensions.get('window');

    return (
        <View style={{ width, height }}>
            <View style={ProfileStyle.headerRow}>
                <Text style={ProfileStyle.sectionTitle}>Profile</Text>
            </View>
        </View>
    );
};

export default ProfileScreen;