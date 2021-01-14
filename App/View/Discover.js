import * as React from 'react';
import { View, StyleSheet, Dimensions,Text,TouchableOpacity,Image, } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import Tabstyles from "../css/DiscoverCss";
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import TopTab from "../View/Tabs/DiscoverTabs/TopTab";
import HashTags from "../View/Tabs/DiscoverTabs/HashTagsTab";
import UsersTab from "../View/Tabs/DiscoverTabs/UsersTab";
import VideosTab from "../View/Tabs/DiscoverTabs/VideosTab";
import SoundsTab from '../View/Tabs/DiscoverTabs/SoundsTab';
import { color } from 'react-native-reanimated';


var {width,height} = Dimensions.get('window');
 
const initialLayout = { width: Dimensions.get('window').width };
 
export default function DiscoverTabs (props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Top' ,  navigation:props.navigation  },
    { key: 'second',  title: 'HASHTAGS' ,  navigation:props.navigation  },
    { key: 'third', title: 'USERS'  ,navigation:props.navigation },
    { key: 'fourth', title: 'VIDEOS'  ,navigation:props.navigation },
    { key: 'fifth', title: 'SOUNDS'  ,navigation:props.navigation },
  ]);
  const navigation=props.navigation
  const renderScene = SceneMap({
    first: TopTab,
    second: HashTags,
    third: UsersTab,
    fourth: VideosTab,
    fifth: SoundsTab,
    
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'purple' }} 
      style={{ backgroundColor: '#fff',}}
      labelStyle={{
        color:'darkblue',
        fontSize:8,
        fontWeight:'bold',
      
      }}
    
     
      
      
    />
  );
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
    <View style={[{},Tabstyles.TopBarRow]}>
                  <View style={[{},Tabstyles.TopBarRowIconView]}>
                    <TouchableOpacity>
                      <Image
                      style={{height:20,width:20}}
                      source={require('../images/icons/backarrow-36.png')}
                      >

                      </Image>
                    </TouchableOpacity>
                  </View>
                  <View style={[{},Tabstyles.TopBarRowSearchBarView]}>
                     <View>
                      <Image
                      style={{height:20,width:20}}
                      source={require('../images/icons/search.png')}
                      >

                      </Image>
                      </View>
                      <View>
                      <SearchInput 
                          onChangeText={(term) => { this.searchUpdated(term) }}
                    
                          style={[{width:width,height:50},]}
                          // icon={<Icons name="barcode-scan" size={100}/>}
                          placeholder="  Search........."
                          />
                      </View>
                     
                  </View>
                  <View style={[{},Tabstyles.TopBarRowSearchView]}>
                    <TouchableOpacity>
                      <Text style={[{},Tabstyles.TopBarRowSearchText]}>Search</Text>
                    </TouchableOpacity>
                  </View>
                </View>
    <View style={{flex:1}}>
      
      <TabView
      // navigation={props.navigation} 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
    </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});