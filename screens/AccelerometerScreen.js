import {
    Button,
    SafeAreaView,
    StatusBar,
    Text,
    View,
} from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { useState } from 'react';
import React from 'react';

//code snippet from https://docs.expo.dev/versions/latest/sdk/accelerometer/

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription] = useState(null);

    const [average, setAverage] = useState(null);
    const [times, setTimes] = useState([]);

    let time;

    const _subscribe = () => {
        setSubscription(
            Accelerometer.addListener(accelerometerData => {
                newTime = new Date().getTime();
                duration = newTime - time;
                time = newTime;
                setTimes(oldTimes => [...oldTimes, duration]);
                console.log(times);
                console.log(duration);
                setData(accelerometerData);
            })
        );
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        Accelerometer.removeAllListeners();
        setSubscription(null);
    };

    const _runTask = () => {
        console.log("Run Task")
        time = new Date().getTime();
        Accelerometer.setUpdateInterval(0);
        _subscribe();
    };

    const _stopTask = () => {
        _unsubscribe();

        let _average = 0;
        let _max = 0;
        let _min = 10000;
        console.log("###########");
        times.forEach(element => {
            console.log(element)
            if (element < _min) _min = element;
            if (element > _max) _max = element;
            _average += element;
        });

        _average /= times.length;

        setAverage(_average);
    };

    const { x, y, z } = data;

    return (
        <SafeAreaView >
            <StatusBar />
            <View>
                <Text>Accelerometer: [{round(x)}, {round(y)}, {round(z)}]</Text>
                <View style={{ flexDirection: "column" }}>
                    <Button onPress={_runTask} title={"Start Task"} />

                    <Button onPress={_stopTask} title={"Stop Task"} />
                    <Text>{"Average time between measurements: " + average}</Text>
                </View>
            </View>
        </SafeAreaView >
    );

    function round(x) { return x.toPrecision(5); }
};

export default HomeScreen