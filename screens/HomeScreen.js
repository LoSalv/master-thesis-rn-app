import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
} from 'react-native';

import React from 'react';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import Constants from 'expo-constants';
console.log("#############")
console.log(Constants.systemFonts);

const HomeScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Button
                        onPress={() => {
                            navigation.navigate('Accelerometer')
                        }}
                        disabled={false}
                        title={"Accelerometer"}
                    />
                    <Button
                        onPress={() => {
                            navigation.navigate('CPU')
                        }}
                        disabled={false}
                        title={"CPU"}
                    />
                    <Button
                        onPress={() => {
                            navigation.navigate('UI')
                        }}
                        disabled={false}
                        title={"GUI"}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen