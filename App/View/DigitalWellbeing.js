import React from "react";
import {View,Text, Dimensions,StyleSheet,TouchableOpacity,Image,ScrollView} from "react-native";
import styles from "../css/DigitalWellbeingCss";
var {width,height} = Dimensions.get('window');



export default class MyVues extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <View style={{flexDirection:'row', paddingHorizontal:20,borderBottomWidth:1,paddingBottom:10}}>
                    <View style={{flex:1,}}>
                      <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('Settings')}
                      >
                      <Image
                         style={{height:20,width:30}}
                         source={require('../images/icons/backarrow-36.png')}
                         >

                        </Image>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex:2}}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>Digital Wellbeing</Text>
                    </View>
                </View>
                <ScrollView style={[{},styles.MainContainer]}>
            
          
         
                    <View style={[{borderBottomColor:'#fff'},styles.Container]}>
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 Screen Time Management
                             </Text>
                         </View>
                         <View style={[{},styles.ToggleView]}>
                           <TouchableOpacity>
                               <Text style={{color:'#aaa'}}>On</Text>
                           </TouchableOpacity>
                         </View> 
                      </View>
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 Restricted Mode
                             </Text>
                         </View>
                         <View style={[{},styles.ToggleView]}>
                           <TouchableOpacity>
                               <Text style={{color:'#aaa'}}>On</Text>
                           </TouchableOpacity>
                         </View> 
                      </View>
                      
  
            
            
             
                    </View>
                </ScrollView>
            </View>
        );
    }
}