import { Dimensions, Text, View } from "react-native";
import NewsStyle from "./NewsStyle";

const News = () => {
    const { width, height } = Dimensions.get('window');
    return (
        <View style={{ width, height }}>
            <View style={NewsStyle.headerRow}>
                <Text style={NewsStyle.sectionTitle}>News</Text>
            </View>
        </View>
    );
};

export default News;