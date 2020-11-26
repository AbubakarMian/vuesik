import React from "react";
import {View,Text, Dimensions,StyleSheet,TouchableOpacity,Image,ScrollView} from "react-native";
import styles from "../css/DataSaverCss";
import ToggleSwitch from 'toggle-switch-react-native';
var {width,height} = Dimensions.get('window');



export default class MyVues extends React.Component{

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
                        <Text style={{fontWeight:'bold',fontSize:15}}>Push notification</Text>
                    </View>
                </View>
                <ScrollView style={[{},styles.MainContainer]}>
                  

                    <View style={[{},styles.Container]}>
                     
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 Data Saver
                             </Text>
                         </View>
                         <View style={[{},styles.ToggleView]}>
                         <ToggleSwitch
                            isOn={false}
                            onColor="purple"
                            offColor="darkblue"
                            //   label="Example label"
                            labelStyle={{color: 'black', fontWeight: '900'}}
                            size="mediam"
                            onToggle={false}
                            />
                         </View> 
                      </View>
                       <View>
                           <Text style={[{},styles.Paragraph]}>
                              Data Saver will reduce your cellular data usage. Videos
                              may be at a lower resolution or take longer to load. This

                              won't apply when you're on Wi-Fi.
                           </Text> 
                       </View>  
            
             
                    </View>
                
           
                </ScrollView>
            </View>
        );
    }
}