import * as React from 'react';
import { View, StyleSheet, Dimensions,TouchableOpacity,Image,Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import MyViews from "../View/MyVues";
import VideosTab from "../View/Tabs/FavoritesTabs/VideosTab";
import HashTagsTab from "../View/Tabs/FavoritesTabs/HashTagsTab";
import SoundsTab from "../View/Tabs/FavoritesTabs/SoundsTab";
import EffectsTab from "../View/Tabs/FavoritesTabs/EffectsTab";





var {width,height} = Dimensions.get('window');
const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample (props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
 

    { key: 'first', title: 'VIDEOS', navigation:props.navigation  },
    { key: 'second', title: 'HASHTA'  ,navigation:props.navigation },
    { key: 'third', title: 'SOUNDS',navigation:props.navigation},
    { key: 'fourth', title: 'EFFECTS',navigation:props.navigation},
  
   
  ]);

  
  const navigation=props.navigation
  
  const renderScene = SceneMap({
    first: VideosTab,
    second: HashTagsTab,
    third: SoundsTab,
    fourth: EffectsTab,
  });
  
  return (

   
    <TabView
      // navigation={props.navigation} 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{marginTop:50}}
     
    />

    
  );
}
 
