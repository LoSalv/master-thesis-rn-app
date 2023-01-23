import { SafeAreaView } from "react-native-safe-area-context";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from 'react';
import React from 'react';

export default function ImageScreen({ route, navigation }) {
    const { uri } = route.params;
    const images = [{ props: { source: uri } }]

    const [imageSizes, setSize] = useState([500, 500]);

    function zoom() {
        console.log(imageSizes[0]);
        switch (imageSizes[1]) {
            case 350:
                setSize([200, 200])
                break;

            case 200:
                setSize([500, 500])
                break;

            case 500:
                setSize([350, 350])
                break;
        }
    }

    const styles = StyleSheet.create({
        image: {
            width: imageSizes[0],
            height: imageSizes[1],
        },
    });

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => zoom()}>
                <Image source={uri} style={styles.image} />
            </TouchableOpacity>
        </SafeAreaView >
    );


}




