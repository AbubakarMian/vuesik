import React from "react";
import {View,Text,Image, Dimensions,TouchableOpacity, StyleSheet, ImageBackground} from "react-native";
import styles from "../css/FindFriendsCss";
import SearchInput, { createFilter } from 'react-native-search-filter';

// import Icons from "../../node_modules/react-native-vector-icons/index"
var {width,height} = Dimensions.get('window');



export default class FindFriends extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          searchTerm: '',
         
        }
        
      }
      searchUpdated(term) {
        this.setState({ searchTerm: term })
        
      }
    
    render(){
        return(
            <View style={[{},styles.center]}>
            
             <View style={{width:'100%',paddingHorizontal:10}}>
             <View style={{flexDirection:'row',paddingVertical:10,justifyContent:'center',alignItems:'center',position:'relative'}}>
               <View style={{position:'absolute',left:0}}>
                 <TouchableOpacity
                 onPress={()=>this.props.navigation.navigate('EditProfile')}
                 >
                   <Image
                   style={{height:20,width:30}}
                   source={require('../images/icons/backarrow-36.png')}
                   >

                   </Image>
                 </TouchableOpacity>
               </View>
               <View style={{alignItems:'center',width:width}}>
                 <Text style={{fontWeight:'bold'}}>Find Friends</Text>
               </View>
             </View>
             <View style={{width:'100%',flexDirection:'row',paddingHorizontal:10,height:40, backgroundColor:'#e5e3e3',width:'100%',borderRadius:3,}}>
               <View style={{justifyContent:'center'}}>
                   <Image
                    source={require('../images/icons/search.png')}
                    style={{height:15,width:15}}
                   >

                   </Image>
               </View>
               <View>
               <SearchInput 
                onChangeText={(term) => { this.searchUpdated(term) }}
           
                style={[{width:width,},]}
                // icon={<Icons name="barcode-scan" size={100}/>}
                placeholder="  Search........."
                />
               </View>
             </View>
              <TouchableOpacity>
              <View style={{width:'100%',flexDirection:'row',marginVertical:10,position:'relative'}}>
                   <View>
                       <Image
                         style={{height:30,width:30,marginRight:10}}
                         source={require('../images/icons/invitefreind-26.png')}
                       >

                       </Image>
                   </View>
                   <View style={{justifyContent:'center'}}>
                       <Text style={{fontSize:12}}>Invite friend</Text>
                   </View>
                   <View style={{justifyContent:'center',position:'absolute',right:0,bottom:0}}>
                       <Image
                       style={{height:15,width:15}}
                       source={require('../images/icons/lessthen-24.png')}
                       >

                       </Image>
                   </View>
                </View> 
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{width:'100%',flexDirection:'row',marginVertical:10,position:'relative'}}>
                   <View>
                       <Image
                         style={{height:30,width:30,marginRight:10}}
                         source={require('../images/icons/call-icon-27.png')}
                       >

                       </Image>
                   </View>
                   <View style={{justifyContent:'center'}}>
                       <Text style={{fontSize:12}}>Find contacts</Text>
                   </View>
                   <View style={{justifyContent:'center',position:'absolute',right:0,bottom:0}}>
                       <Image
                       style={{height:15,width:15}}
                       source={require('../images/icons/lessthen-24.png')}
                       >

                       </Image>
                   </View>
                </View> 
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{width:'100%',flexDirection:'row',marginVertical:10,position:'relative'}}>
                   <View>
                       <Image
                         style={{height:30,width:30,marginRight:10}}
                         source={require('../images/icons/facebook-icon-25.png')}
                       >

                       </Image>
                   </View>
                   <View style={{justifyContent:'center'}}>
                       <Text style={{fontSize:12}}>Find Facebook friends</Text>
                   </View>
                   <View style={{justifyContent:'center',position:'absolute',right:0,bottom:0}}>
                       <Image
                       style={{height:15,width:15}}
                       source={require('../images/icons/lessthen-24.png')}
                       >

                       </Image>
                   </View>
                </View> 
              </TouchableOpacity>
             </View>  
            </View>
        );
    }
}