import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import MyViews from "../View/MyVues";
import Following from "../View/Following";

 
const SecondRoute = () => (
  <Following/>
);
 
const initialLayout = { width: Dimensions.get('window').width };
 
export default function TabViewExample (props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Following' ,navigation:props.navigation  },
    { key: 'second', title: 'My Views'  ,navigation:props.navigation },
  ]);
  const navigation=props.navigation
  const renderScene = SceneMap({
    first: Following,
    second: MyViews,
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