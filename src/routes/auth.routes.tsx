/* eslint-disable prettier/prettier */
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import SignIn from '../screens/signin';

const { Navigator, Screen } = createStackNavigator();


export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}
            >
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>

    );
}