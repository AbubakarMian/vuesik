import React from "react";
import {View,Text, Dimensions,StyleSheet,Image,ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../css/FreeUpSpaceCss";
var {width,height} = Dimensions.get('window');



export default class FreeUpSpace extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <View style={{flexDirection:'row',width:width,paddingHorizontal:20,borderBottomWidth:1,paddingBottom:20}}>
                    <View style={{flex:1}}>
                        <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('Settings')}
                        >
                        <Image
                        style={{width:30,height:20}}
                        source={require('../images/icons/backarrow-36.png')}
                        >

                        </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:2}}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>Free Up Space</Text>
                    </View>
                </View>
                <ScrollView style={[{},styles.MainContainer]}>
                
                    <View style={[{borderBottomWidth:1,},styles.Container]}>
                     
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 Cache:0.0MB
                             </Text>
                         </View>
                         <View style={[{},styles.clearView]}>
                          <TouchableOpacity>
                          <Text style={[{},styles.Clear]}> CLEAR </Text>
                          </TouchableOpacity>
                         </View> 
                      </View>
                      <View>
                          <Text style={[{},styles.Paragraph]}>
                              Clear your cache to free up space. This won't  affect your
                              VueSik experience 
                          </Text>
                      </View>
                    
  
            
            
             
                    </View>
                    <View style={[{borderBottomColor:'#fff'},styles.Container]}>
                     
                     <View style={[{},styles.Row]}>
                        <View>
                            <Text style={[{},styles.Label]}>
                                Downloads: 0.0MB
                            </Text>
                        </View>
                        <View style={[{},styles.clearView]}>
                         <TouchableOpacity>
                         <Text style={[{},styles.Clear]}> CLEAR </Text>
                         </TouchableOpacity>
                        </View> 
                     </View>
                     <View>
                         <Text style={[{},styles.Paragraph]}>
                             Downloads may include effects, filters, stickers, and virtual
                             gifts downloaded in your app. You'll able to download them again 
                             if you need them. 
                         </Text>
                     </View>
                   
 
           
           
            
                   </View>
                </ScrollView>
            </View>
        );
    }
}