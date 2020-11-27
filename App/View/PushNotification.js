import React from "react";
import {View,ScrollView, Text,Image, Dimensions,StyleSheet,TouchableOpacity} from "react-native";
import styles from "../css/PushNotificationCss";
import ToggleSwitch from 'toggle-switch-react-native';
var {width,height} = Dimensions.get('window');



export default class PushNotification extends React.Component{

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
                      <View>
                        <Text style={[{},styles.Heading]}>INTERACTIONS</Text>
                      </View>
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 Likes
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
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                             Comments
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
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 New followers
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
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 Mentions
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

                    <View style={[{},styles.Container]}>
                      <View>
                        <Text style={[{},styles.Heading]}>MESSAGES</Text>
                      </View>
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 Direct messages
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
                    <View style={[{},styles.Container]}>
                      <View>
                        <Text style={[{},styles.Heading]}>VIDEO UPDATES</Text>
                      </View>
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 Videos from accounts ou follow
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
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 Videos suggestion
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
                    <View style={[{},styles.Container]}>
                      <View>
                        <Text style={[{},styles.Heading]}>LIVE</Text>
                      </View>
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 Livestreams from accounts you follow
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
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 Recommended broadcasts
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
                        <Text style={[{},styles.Heading]}>Other</Text>
                      </View>
                      <View style={[{},styles.Row]}>
                         <View>
                             <Text style={[{},styles.Label]}>
                                 Customized updates and more
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
                </ScrollView>
            </View>
        );
    }
}