import React from "react";
import {View,Text,ScrollView, Dimensions,StyleSheet, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../css/PreferencesCss";
import ToggleSwitch from 'toggle-switch-react-native';
var {width,height} = Dimensions.get('window');



export default class Preferences extends React.Component{

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
                        <Text style={{fontWeight:'bold',fontSize:15}}>Preferences</Text>
                    </View>
                </View>
                <ScrollView style={[{},styles.MainContainer]}>
            
          
                    <View style={[{borderBottomColor:'#fff'},styles.Container]}>
                      <View>
                        <Text style={[{},styles.Heading]}>THUMBNAIL PHOTOS</Text>
                      </View>
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 Animated thumbnails
                             </Text>
                         </View>
                         <View style={[{},styles.ToggleView]}>
                         <ToggleSwitch
                            isOn={true}
                            onColor="purple"
                            offColor="darkblue"
                            //   label="Example label"
                            labelStyle={{color: 'black', fontWeight: '900'}}
                            size="mediam"
                            onToggle={false}
                            />
                         </View> 
                      </View>
                      
  
            
            
             
                    </View>
                    <View style={[{borderBottomColor:'#fff'},styles.Container]}>
                      <View>
                        <Text style={[{},styles.Heading]}>LANGUAGES</Text>
                      </View>
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 Video Languages
                             </Text>
                         </View>
                         <View style={[{},styles.ToggleView]}>
                           <TouchableOpacity>
                               <Text style={{color:'#aaa'}}>English</Text>
                           </TouchableOpacity>
                         </View> 
                      </View>
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 App Languages
                             </Text>
                         </View>
                         <View style={[{},styles.ToggleView]}>
                           <TouchableOpacity>
                               <Text style={{color:'#aaa'}}>English</Text>
                           </TouchableOpacity>
                         </View> 
                      </View>
                      
  
            
            
             
                    </View>
                </ScrollView>
            </View>
        );
    }
}