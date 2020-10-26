
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, InboxStackNavigator,HomeStackNavigator,DiscoverStackNavigator ,CameraStackNavigator, ProfileStackNavigator  } from "./StackNavigator";
import { View,Text } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    
       <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Discover" component={DiscoverStackNavigator} />
      <Tab.Screen name="+" component={CameraStackNavigator} />
      <Tab.Screen name="Inbox" component={InboxStackNavigator} />
      <Tab.Screen name="Me" component={ProfileStackNavigator} />
    </Tab.Navigator>
    

  );
};

export { BottomTabNavigator};