import * as React from 'react';
import { View, StyleSheet, Dimensions,Text,TouchableOpacity,Image, } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import Tabstyles from "../css/DiscoverCss";
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import Followers from "./Tabs/FollowTabs/FollowersTab";
import Following from "../View/Tabs/FollowTabs/FollowingTab";
import Recommended from "../View/Tabs/FollowTabs/RecommendedTab";
import { color } from 'react-native-reanimated';


var {width,height} = Dimensions.get('window');
 
const initialLayout = { width: Dimensions.get('window').width };
 
export default function Follow (props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Followers' ,  navigation:props.navigation  },
    { key: 'second', title: 'Following' ,  navigation:props.navigation  },
    { key: 'third', title: 'Recommended' ,  navigation:props.navigation  },
    
  ]);
  const navigation=props.navigation
  const renderScene = SceneMap({
    first: Followers,
    second: Following,
    third: Recommended,
   
    
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'purple' }} 
      style={{ backgroundColor: '#fff',}}
      labelStyle={{
    
        fontSize:10,
        fontWeight:'bold',
        
      
      }}
      activeColor='purple'
      inactiveColor='darkblue'
      
    
    
     
      
      
    />
  );
  return (
    <View style={{flex:1}}>
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
      <TabView
      // navigation={props.navigation} 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
    </View>
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});