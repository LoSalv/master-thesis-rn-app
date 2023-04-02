import { Image, View, StyleSheet, TouchableHighlight, FlatList } from "react-native";
import React from 'react';

const data = [
    { uri: require('../../assets/image.jpg') },
    { uri: require('../../assets/image1.png') },
    { uri: require('../../assets/image2.png') },
    { uri: require('../../assets/image.jpg') },
    { uri: require('../../assets/image1.png') },
    { uri: require('../../assets/image2.png') },
    { uri: require('../../assets/image.jpg') },
    { uri: require('../../assets/image1.png') },
    { uri: require('../../assets/image2.png') },
    { uri: require('../../assets/image.jpg') },
    { uri: require('../../assets/image1.png') },
    { uri: require('../../assets/image2.png') },
    { uri: require('../../assets/image.jpg') },
    { uri: require('../../assets/image1.png') },
    { uri: require('../../assets/image2.png') },
    { uri: require('../../assets/image.jpg') },
    { uri: require('../../assets/image1.png') },
    { uri: require('../../assets/image2.png') },
    { uri: require('../../assets/image.jpg') },
    { uri: require('../../assets/image1.png') },
    { uri: require('../../assets/image2.png') }
];

export default function ImageTab(props) {

    return (
        <FlatList data={data}
            numColumns={3}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => {
                return <View style={styles.inner}>
                    <TouchableHighlight
                        onPress={() => {
                            props.navigation.navigate("Image", { uri: item.uri })
                        }}>
                        <Image source={item.uri}
                            style={styles.image}
                            resizeMode={"contain"} />
                    </TouchableHighlight>
                </View >
            }}>
        </FlatList>
    );
}

const styles = StyleSheet.create({
    column: {
        margin: 20,
    },
    inner: {
        flexDirection: "row",
        marginRight: 0
    },
    image: {
        width: 137,
        height: 137,
    },
    textFont: {
        fontSize: 12,
    },
});