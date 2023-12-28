import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Screens/HomeScreen';
import {DriverNavigator} from './DriverNavigator';
 

const Tab = createBottomTabNavigator();

const AppTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Driver" component={DriverNavigator} />  
        </Tab.Navigator>
      );
};

export default AppTabs;