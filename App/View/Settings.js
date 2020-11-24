import React from "react";
import {View,Text, Dimensions,StyleSheet,Image, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../css/SettingsCss";
var {width,height} = Dimensions.get('window');



export default class Settings extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <View style={[{},styles.TopRow]}>
                    <View style={{flex:1}}>
                      <TouchableOpacity>
                      <Image
                        source={require('../images/icons/backarrow-36.png')}
                        style={{height:20,width:20}}
                        >

                        </Image>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex:2}}>
                        <Text style={{fontWeight:'bold'}}>Settings</Text>
                    </View>
                  
                </View>
                <ScrollView style={{width:width}}>
                  <View style={[{},styles.containerView]}>
                     <View>
                         <Text style={[{},styles.Heading]}>ACCOUNT</Text>
                     </View>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('ManageAccount')}
                    >
                    <View style={[{},styles.Row]}>
                        <View>
                            <Image
                            style={[{},styles.IconImg]}
                            source={require('../images/icons/user-23.png')}
                            >

                            </Image>
                        </View>
                        <View style={{justifyContent:'center',paddingLeft:10}}>
                            <Text>Manage account</Text>
                        </View>
                     </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={[{},styles.Row]}>
                        <View>
                            <Image
                            style={[{},styles.IconImg]}
                            source={require('../images/icons/privacy-24.png')}
                            >

                            </Image>
                        </View>
                        <View style={{justifyContent:'center',paddingLeft:10}}>
                            <Text>Privacy</Text>
                        </View>
                     </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={[{},styles.Row]}>
                        <View>
                            <Image
                            style={[{},styles.IconImg]}
                            source={require('../images/icons/barcode-26.png')}
                            >

                            </Image>
                        </View>
                        <View style={{justifyContent:'center',paddingLeft:10}}>
                            <Text>My VueSik Code</Text>
                        </View>
                     </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={[{},styles.Row]}>
                        <View>
                            <Image
                            style={[{},styles.IconImg]}
                            source={require('../images/icons/share-27.png')}
                            >

                            </Image>
                        </View>
                        <View style={{justifyContent:'center',paddingLeft:10}}>
                            <Text>Share My Profile</Text>
                        </View>
                     </View>                     
                    </TouchableOpacity>
               
      
                  </View>
                  <View style={[{},styles.containerView]}>
                     <View>
                         <Text style={[{},styles.Heading]}>CONTENT</Text>
                     </View>
                    <TouchableOpacity>
                    <View style={[{},styles.Row]}>
                        <View>
                            <Image
                            style={[{},styles.IconImg]}
                            source={require('../images/icons/notification-28.png')}
                            >

                            </Image>
                        </View>
                        <View style={{justifyContent:'center',paddingLeft:10}}>
                            <Text>Push notification</Text>
                        </View>
                     </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={[{},styles.Row]}>
                        <View>
                            <Image
                            style={[{},styles.IconImg]}
                            source={require('../images/icons/preference-29.png')}
                            >

                            </Image>
                        </View>
                        <View style={{justifyContent:'center',paddingLeft:10}}>
                            <Text>Preferences</Text>
                        </View>
                     </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={[{},styles.Row]}>
                        <View>
                            <Image
                            style={[{},styles.IconImg]}
                            source={require('../images/icons/digitalwellbeing-30.png')}
                            >

                            </Image>
                        </View>
                        <View style={{justifyContent:'center',paddingLeft:10}}>
                            <Text>Digital Wellbeing</Text>
                        </View>
                     </View>
                    </TouchableOpacity>
                  
               
      
                  </View>
                  <View style={[{},styles.containerView]}>
                     <View>
                         <Text style={[{},styles.Heading]}> CACHE AND CELLULAR DATA</Text>
                     </View>
                    <TouchableOpacity>
                    <View style={[{},styles.Row]}>
                        <View>
                            <Image
                            style={[{},styles.IconImg]}
                            source={require('../images/icons/delete-31.png')}
                            >

                            </Image>
                        </View>
                        <View style={{justifyContent:'center',paddingLeft:10}}>
                            <Text>Free up space</Text>
                        </View>
                     </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={[{},styles.Row]}>
                        <View>
                            <Image
                            style={[{},styles.IconImg]}
                            source={require('../images/icons/datasaver-32.png')}
                            >

                            </Image>
                        </View>
                        <View style={{justifyContent:'center',paddingLeft:10}}>
                            <Text>Data Saver</Text>
                        </View>
                     </View>
                    </TouchableOpacity>
                  
                
               
      
                  </View>
                  <View style={[{},styles.containerView]}>
                     <View>
                         <Text style={[{},styles.Heading]}>SUPPORT</Text>
                     </View>
                    <TouchableOpacity>
                    <View style={[{},styles.Row]}>
                        <View>
                            <Image
                            style={[{},styles.IconImg]}
                            source={require('../images/icons/helpdesk-33.png')}
                            >

                            </Image>
                        </View>
                        <View style={{justifyContent:'center',paddingLeft:10}}>
                            <Text>Help & FAQs</Text>
                        </View>
                     </View>
                    </TouchableOpacity>
              
      
                  </View>
                  <View style={[{},styles.containerView]}>
                     <View>
                         <Text style={[{},styles.Heading]}>ABOUT</Text>
                     </View>
                    <TouchableOpacity>
                    <View style={[{},styles.Row]}>
                        <View>
                            <Image
                            style={[{},styles.IconImg]}
                            source={require('../images/icons/terms-34.png')}
                            >

                            </Image>
                        </View>
                        <View style={{justifyContent:'center',paddingLeft:10}}>
                            <Text>Terms of Use/Privacy Policy</Text>
                        </View>
                     </View>
                    </TouchableOpacity>
              
      
                  </View>
                  <View style={[{},styles.containerView]}>
                  
                    <TouchableOpacity>
                    <View style={[{},styles.Row]}>
                        <View>
                            <Image
                            style={[{},styles.IconImg]}
                            source={require('../images/icons/logout-35.png')}
                            >

                            </Image>
                        </View>
                        <View style={{justifyContent:'center',paddingLeft:10}}>
                            <Text>Logout</Text>
                        </View>
                     </View>
                    </TouchableOpacity>
              
      
                  </View>
                </ScrollView>
            </View>
        );
    }
}