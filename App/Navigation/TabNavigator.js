
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, InboxStackNavigator,HomeStackNavigator,DiscoverStackNavigator ,CameraStackNavigator, ProfileStackNavigator  } from "./StackNavigator";
import { View,Text, Image } from "react-native";
import UserProfile from "../View/UserProfile";

import Profile from "../View/Profile";
import Icon from "../../node_modules/react-native-vector-icons/FontAwesome5";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    
       <Tab.Navigator
             
       tabBarOptions={{
       
       
        labelStyle: { textTransform: "none",fontSize:10,backgroundColor:'#000'  },
        activeBackgroundColor:'#000',
        inactiveBackgroundColor:'#000',
        activeTintColor:'#fff', 
           

    }}
    
       >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Discover" component={DiscoverStackNavigator} />
      <Tab.Screen name="+" component={CameraStackNavigator} />
      <Tab.Screen name="Inbox" component={InboxStackNavigator} />
      <Tab.Screen name="Me" component={Profile} />
    </Tab.Navigator>
    

  );
};

export { BottomTabNavigator};