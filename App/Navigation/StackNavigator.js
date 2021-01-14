import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../View/Splash';

import Home from '../View/Home';
import SignIn from '../View/SignIn';
import Inbox from '../View/Inbox';

import Camera from '../View/Camera';
import Discover from '../View/Discover';
import DeepArScreen from '../../src/screens/HomeScreen';
import SignInForm from '../View/SignInForm';
import SignUpForm from '../View/SignUpForm';
import SignUp from '../View/SignUp';
import MyVues from '../View/MyVues';
import UserProfile from '../View/UserProfile';
import Profile from '../View/Profile';
import SimilerAcounts from '../View/SimilerAcounts';
import PhotoEffect from '../View/PhotoEffect';
import Effect from '../View/Effect';
import VideoComplete from '../View/VideoComplete';
// import VidioClickAction from "../View/VidioClickAction";
import Following from '../View/Following';
import Post from '../View/Post';
import EditProfile from '../View/EditProfile';
import CustomizeProfle from '../View/CustomizeProfile';
import FindFriends from '../View/FindFriends';
import Favorites from '../View/Favorites';
import Scan from '../View/Scan';
import Settings from '../View/Settings';
import ManageAccount from '../View/ManageAccount';
import Privacy from '../View/Privacy';
import Payout from '../View/Payout';
import PreviewScreen from '../../src/screens/PreviewScreen';
import MyQrCode from '../View/MyQrCode';
import PushNotification from '../View/PushNotification';
import Preferences from '../View/Preferences';
import DigitalWellbeing from '../View/DigitalWellbeing';
import FreeUpSpace from '../View/FreeUpSpace';
import DataSaver from '../View/DataSaver';
import HelpFaqs from '../View/Hel&Faqs';
import TermsOfUse from '../View/TermsOfUse';
import TopUser from '../View/TopUser';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
// import DiscoverTabs from "../View/Tabs/DiscoverTabs/DiscoverMain";
import Likes from '../View/Likes';
import Comments from '../View/Comments';
import Mentions from '../View/Mentions';
import Follow from '../View/Follow';
import { create } from 'react-test-renderer';
import iconSet from 'react-native-vector-icons/FontAwesome5';
const Stack = createStackNavigator()

const MainStackNavigator = ({ navigation, route }) => {
  
  return (

    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#9AC4F8',
        },
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}
      navigationOptions={{ tabBarVisible: false }}
    >
    
      <Stack.Screen
        name="SignIn" component={SignIn}
      />
      <Stack.Screen  name="DeepArScreen" component={DeepArScreen} />
      <Stack.Screen name="Likes" component={Likes} />
      <Stack.Screen name="Follow" component={Follow} />
      <Stack.Screen name="Mentions" component={Mentions} />
      <Stack.Screen name="Comments" component={Comments} />

      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="TopUser" component={TopUser} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="TermsOfUse" component={TermsOfUse} />
      <Stack.Screen name="HelpFaqs" component={HelpFaqs} />
      <Stack.Screen name="DataSaver" component={DataSaver} />
      <Stack.Screen name="FreeUpSpace" component={FreeUpSpace} />
      <Stack.Screen name="DigitalWellbeing" component={DigitalWellbeing} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="PushNotification" component={PushNotification} />
      <Stack.Screen name="MyQrCode" component={MyQrCode} />
      <Stack.Screen name="Payout" component={Payout} />

      <Stack.Screen name="Privacy" component={Privacy} />

      <Stack.Screen name="ManageAccount" component={ManageAccount} />

      <Stack.Screen name="FindFriends" component={FindFriends} />
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="CustomizeProfle" component={CustomizeProfle} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignInForm" component={SignInForm} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpForm" component={SignUpForm} />

      <Stack.Screen name="Following" component={Following} />
      <Stack.Screen name="VideoComplete" component={VideoComplete} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Effect" component={Effect}  />
      <Stack.Screen name="PhotoEffect" component={PhotoEffect} />
      <Stack.Screen name="MyVues" component={MyVues} />
      <Stack.Screen name="SimilerAcounts" component={SimilerAcounts} />

      <Stack.Screen name="Profile" component={Profile} />

      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

const HomeStackNavigator = (navigation, route) => {
  // if(route.state && route.state.index > 5){
  //   navigation.setOptions({tabBarVisible:true})
  // }
  // else{
  //   navigation.setOptions({tabBarVisible:true})
  // }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
const InboxStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DeepArScreen"
        component={Inbox}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const DiscoverStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DeepAr"
        component={Discover}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CameraStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DeepArScreen"
        component={DeepArScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  HomeStackNavigator,
  InboxStackNavigator,
  DiscoverStackNavigator,
  CameraStackNavigator,
  ProfileStackNavigator,
};
