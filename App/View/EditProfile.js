import React from "react";
import {
  Platform,
  Dimensions,
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,

} from "react-native";

import Icon from "../../node_modules/react-native-vector-icons/FontAwesome5";
import ThreeTabs from "../View/ThreeTabs";
import { Directions,  } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import RootTagContext from "react-native/Libraries/ReactNative/RootTagContext";
import Home from "../View/Home"
import styles from "../css/EditProfileCSS"
const isAndroid = Platform.OS == 'android'
var { width, height } = Dimensions.get('window');
import Video from 'react-native-video';

  export default class EditProfile extends React.Component{
    componentWillMount() {
    //   this.props.navigation.dangerouslyGetParent().setOptions({
    //     tabBarVisible: this.state.tabBarVisible
    //   });
  
     
      
    }; 
  
      render(){
       
      
          return(
            <View style={[{},styles.center]}>
             <View style={{flexDirection:'row',width:width,paddingHorizontal:10,borderBottomWidth:1,alignItems:'center',justifyContent:'center',paddingBottom:10}}>
             <View style={{flex:1, alignSelf:'flex-start'}}>
               <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('FindFriends')}
               >
                <Image
                source={require('../images/icons/adduser-24.png')}
                style={{height:30,width:30}}
                >

                </Image>
               </TouchableOpacity>
             </View>
             <View style={{flex:4, justifyContent:'center',alignSelf:'center'}}>
               <Text style={{textAlign:'center',alignSelf:'center',}}>aukhan15</Text>
             </View>
             
             <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
             <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Settings')}
               >
                <Image
                source={require('../images/icons/settings-23.png')}
                style={{height:30,width:5,marginRight:10}}
                >

                </Image>
               </TouchableOpacity>
            </View>
            </View>
            
           
            
            <View style={[{},styles.displayView]}>
           
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                <View>
                  <Image
                  style={[styles.displayImgLogo]}
                  source={require('../images/icons/icon-24.png')}
                  >
                  </Image>
               
                  </View>
                </TouchableOpacity>
                  <TouchableOpacity style={[{},styles.displayFollowing]}>
                      <Text style={{ color:'#800080',fontWeight:'bold',fontSize:20,alignSelf:'center' }}>2</Text>
                      <Text>Following</Text>
                    
                

                  </TouchableOpacity>
                  <TouchableOpacity style={[{},styles.displayFollowing]}>
                      <Text style={{color:'#800080', fontWeight:'bold',fontSize:20,alignSelf:'center' }}>0</Text>
                      <Text>Followers</Text>
                  
                  </TouchableOpacity>
                  <TouchableOpacity style={[{},styles.displayFollowing]}>
                      <Text style={{color:'#800080', fontWeight:'bold',fontSize:20,alignSelf:'center',alignItems:'center' }}>3</Text>
                      <Text style={{alignSelf:'center',alignItems:'center'}}>Likes</Text>
                  </TouchableOpacity>
                  
                  
                 
              </View>
              <View style={{flexDirection:'row',marginTop:10,marginBottom:5, justifyContent:'center',}}>
              <TouchableOpacity 
              onPress={()=>this.props.navigation.navigate('CustomizeProfle')}
              >
                        <View style={{backgroundColor:'purple',paddingVertical:6,paddingHorizontal:20,borderRadius:50}}>
                          <Text style={{color:'#fff',fontSize:10}}>EditProfile</Text>
                         
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity 
                      onPress={()=>this.props.navigation.navigate('Favorites')}
                      style={{marginHorizontal:10}}>
                          <Image
                          source={require('../images/icons/icon-23.png')}
                          style={{ alignSelf:'center',
                              height:25,width:25,
                              }}></Image>
                      </TouchableOpacity>
              
              </View>  
              

             

              
             
              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <View style={{}}>
                        <Text style={{textAlign:'center',fontSize:10}}>No matter what your physical apppearence</Text>
                        <Text style={{textAlign:'center',fontSize:10}}>when you have kindness in your heart.</Text>
                        <Text style={{textAlign:'center',fontSize:10}}>you're the most beutifull person in world</Text>
                  </View>
                
              </View>
              
              
            </View>
     
            <ScrollView style={[styles.gridView]}>
 
<ThreeTabs/>
 
</ScrollView>  
           
        </View>
          )
      }
  }  