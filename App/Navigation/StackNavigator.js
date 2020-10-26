import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../View/Home";
import SignIn from "../View/SignIn";
import Inbox from "../View/Inbox";
import Profile from "../View/Profile";
import Camera from "../View/Camera";
import Discover from "../View/Discover";
import SignInForm from "../View/SignInForm";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          
          headerShown:false,
          headerStyle: {
            backgroundColor: "#9AC4F8",
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen name="SignInForm" component={SignInForm} />
        <Stack.Screen name="SignIn" component={SignIn}  
        // options={({ route }) => ({
        //   tabBarVisible: this.getTabBarVisibility(route)
        // })}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }

  const HomeStackNavigator = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }
  const InboxStackNavigator = () => {
    return (
      <Stack.Navigator >
        
        <Stack.Screen name="Inbox" component={Inbox} />
      </Stack.Navigator>
    );
  }
  const DiscoverStackNavigator = () => {
    return (
      <Stack.Navigator >
        
        <Stack.Screen name="Discover" component={Discover} />
      </Stack.Navigator>
    );
  }
  const CameraStackNavigator = () => {
    return (
      <Stack.Navigator >
        
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    );
  }

  const ProfileStackNavigator = () => {
    return (
      <Stack.Navigator >
        
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }
 

export { MainStackNavigator , HomeStackNavigator , InboxStackNavigator ,DiscoverStackNavigator, CameraStackNavigator ,ProfileStackNavigator};