import React, { useEffect, useState } from "react";
import { Alert, Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";
import NewsStyle from "./NewsStyle";
import { getDateYearNumFormat } from "../../helper";

const News = () => {
    const { width, height } = Dimensions.get('window');
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        // fetch('https://newsdata.io/api/1/news?apikey=pub_48768ff48d07326f7e7656883f7e8d0a5443b&q=Formula%201&language=en&category=sports').then(response => response.json()).then(data => {
        //     setNewsData(data.results);
        // }).catch(error => {
        //     Alert.alert("Error", "Failed to fetch news data.");
        // });
    }, []);

    return (
        <View style={[NewsStyle.fullScreen, {width, height}]}>
            <View style={NewsStyle.headerRow}>
                <Text style={NewsStyle.sectionTitle}>News</Text>
            </View>
            <View style={NewsStyle.allContainer}>
                <FlatList
                    data={newsData}
                    keyExtractor={(item) => item.article_id}
                    renderItem={({ item }) => (
                        <View style={NewsStyle.newsBlock}>
                            {item.image_url !== null && item.image_url !== 'null' && item.image_url !== '' ? (
                                <View style={NewsStyle.newsImageBox}>
                                    <Image style={NewsStyle.newsImageBanner} resizeMode="cover" source={{url: item.image_url}} />
                                </View>
                            ) : null }
                            <Text style={NewsStyle.newsdate}>{getDateYearNumFormat(item.pubDate, 1)}</Text>
                            <Text style={NewsStyle.newsTitle}>{item.title}</Text>
                            <Text style={NewsStyle.newsDesc}>{item.description}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default News;