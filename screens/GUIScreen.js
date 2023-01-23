import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListTab from './gui/ListTab.js';
import InputTab from './gui/InputTab.js';
import ImageTab from './gui/ImageTab';
import React from 'react';

const Tab = createBottomTabNavigator();

function GUIScreen({ navigation }) {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'List') {
                        iconName = focused
                            ? 'ios-list-circle'
                            : 'ios-list-outline';
                    } else if (route.name === 'Input') {
                        iconName = focused ? 'ios-text' : 'ios-text-outline';
                    } else if (route.name === 'Image') {
                        iconName = focused ? 'ios-image' : 'ios-image-outline';
                    }


                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                arActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
            >
                <Tab.Screen name="List" component={ListTab} />
                <Tab.Screen name="Input" component={InputTab} />
                <Tab.Screen
                    name="Image"
                    children={() => <ImageTab navigation={navigation} />}
                />
            </Tab.Navigator>
        </NavigationContainer >
    );
}


export default GUIScreen