import { View, StatusBar, Dimensions, Image, Text, TouchableOpacity } from "react-native";
import HomeStyle from "./HomeStyle";
import DropShadow from "react-native-drop-shadow";

StatusBar.setHidden(true);

const HomeScreen = ({navigation}) => {
    const { width, height } = Dimensions.get('window');
    return (
        <View style={[HomeStyle.fullScreen, { width, height }]}>
            <View style={HomeStyle.centerLogoBox}>
                <Image style={HomeStyle.centerImageLogo} source={require ('../../assets/images/F1-logo.png')} />
            </View>
            <View style={HomeStyle.centerCarBox}>
                <Image style={HomeStyle.fullCarImage} source={require ('../../assets/images/2025-concept-car.jpg')} />
            </View>
            <Text style={HomeStyle.TagLine}>Pushing the Limit of Speed and Preceision</Text>
            <Text style={HomeStyle.SubTagLine}>When innovation meets the Ultimate racing thrills</Text>
            <View style={HomeStyle.MainButtonRow}>
                <TouchableOpacity style={HomeStyle.TouchMainButton} onPress={() => navigation.navigate('Main')}>
                    <View style={HomeStyle.MainButton}>
                        <Image style={HomeStyle.startBtnImg} source={require('../../assets/images/next.png')} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreen;