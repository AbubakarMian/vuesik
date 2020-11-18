import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import MyViews from "../View/MyVues";
import GridTab from "../View/Tabs/EditProfile/GridTab";
import FavoritesTab from "../View/Tabs/EditProfile/FavoritesTab";
import ThreeTabs from "../View/ThreeTabs";
import Icon from "../../node_modules/react-native-vector-icons/FontAwesome5";
import BlockTab from './Tabs/EditProfile/BlockTab';

 
// const SecondRoute = () => (
//   <GridTab/>
// );
 
const initialLayout = { width: Dimensions.get('window').width };
 
export default function TabViewExample (props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '#' ,  navigation:props.navigation  },
    { key: 'second', title: 'Favorites'  ,navigation:props.navigation },
    { key: 'third', title: 'Private'  ,navigation:props.navigation },
  ]);
  const navigation=props.navigation
  const renderScene = SceneMap({
    first: GridTab,
    second: FavoritesTab,
    third: BlockTab,
    
  });
  
  return (
    <TabView
      // navigation={props.navigation} 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});