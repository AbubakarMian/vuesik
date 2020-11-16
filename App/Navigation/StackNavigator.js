import React from "react";
import { createStackNavigator } from "@react-navigation/stack";



import SplashScreen from "../View/Splash";


import Home from "../View/Home";
import SignIn from "../View/SignIn";
import Inbox from "../View/Inbox";

import Camera from "../View/Camera";
import Discover from "../View/Discover";
import SignInForm from "../View/SignInForm";
import SignUpForm from "../View/SignUpForm";
import SignUp from "../View/SignUp";
import MyVues from "../View/MyVues";
import UserProfile from "../View/UserProfile";
import Profile from "../View/Profile";
import SimilerAcounts from "../View/SimilerAcounts";
import PhotoEffect from "../View/PhotoEffect";
import Effect from "../View/Effect";
import VideoComplete from "../View/VideoComplete";
// import VidioClickAction from "../View/VidioClickAction";
import Following from "../View/Following";
import Post from "../View/Post";
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
                  <Stack.Screen name="SignIn" component={SignIn}/> 
                    <Stack.Screen name="Home" component={Home} />
     
                <Stack.Screen name="SignInForm" component={SignInForm}/>
                 <Stack.Screen name="SignUp" component={SignUp} />
                 <Stack.Screen name="SignUpForm" component={SignUpForm} />
              
           {/*  */}
           
           {/* <Stack.Screen name="Following" component={Following}/> */}
           <Stack.Screen name ="VideoComplete" component ={VideoComplete}/>
           <Stack.Screen name="Post" component={Post}/>
           <Stack.Screen name="Effect" component={Effect}/>
           <Stack.Screen name="PhotoEffect" component ={PhotoEffect}/>
           <Stack.Screen name= "MyVues" component={MyVues}/>
           <Stack.Screen name="SimilerAcounts" component={SimilerAcounts}/>
           <Stack.Screen name="UserProfile" component={UserProfile}/>
           <Stack.Screen name="Profile" component={Profile}/>
        

   
          
       

           <Stack.Screen name="Splash" component={SplashScreen}/>
        
         

        
           {/*  */}
       






       
        
    
        
     
     
    
 
 
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