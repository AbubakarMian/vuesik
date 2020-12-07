
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, InboxStackNavigator,HomeStackNavigator,DiscoverStackNavigator ,CameraStackNavigator, ProfileStackNavigator  } from "./StackNavigator";
import { View,Text, Image } from "react-native";
import UserProfile from "../View/UserProfile";

import Profile from "../View/Profile";
import Icon from "../../node_modules/react-native-vector-icons/FontAwesome5";
import EditProfile from "../View/EditProfile";

import SignIn from '../View/SignIn';
const Tab = createBottomTabNavigator();


MainStackNavigator.navigationOptions = ({ navigation }) => {
console.log('MainStackNavigator.navigationOptions');
  return false;

  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if ( routeName == 'ProductDetails' ) {
      tabBarVisible = false
  }

  return {
      tabBarVisible,
  }
}

const BottomTabNavigator = () => {
  console.log('MainStackNavigator',MainStackNavigator);
  return (
    
       <Tab.Navigator
          
       tabBarOptions={{
        
        labelStyle: { textTransform: "none",fontSize:10,backgroundColor:'#000'  },
        activeBackgroundColor:'#000',
        inactiveBackgroundColor:'#000',
        activeTintColor:'#fff',
        
    }}
    
    // options={{tabBarVisible=false}}
    
       >
      <Tab.Screen name="Home" component={MainStackNavigator}  options={{ tabBarVisible:false}}/>
      {/* <Tab.Screen options={{ tabBarVisible:false}} name="SignIn" component={SignIn} /> */}
      <Tab.Screen name="Discover" component={DiscoverStackNavigator} />
      <Tab.Screen name="+" component={CameraStackNavigator} />
      <Tab.Screen  options={{ tabBarVisible:true}} name="Inbox" component={InboxStackNavigator} />
      <Tab.Screen name="Me" component={EditProfile} />
    </Tab.Navigator>
    

  );
};

export { BottomTabNavigator};