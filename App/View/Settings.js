import React from "react";
import {View,Text, Dimensions,StyleSheet,Image, ScrollView, TouchableOpacity} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import Modal from 'react-native-modal';
import styles from "../css/SettingsCss";
import ModalStyles from "../css/moadals/logoutModalCss";
import LinearGradient from 'react-native-linear-gradient';
var {width,height} = Dimensions.get('window');



export default class Settings extends React.Component{
    constructor(props){
        super(props)
        this.state={
          logoutModal:false,
          tabBarVisible:false
        }
      }
      componentWillMount(){
        this.props.navigation.dangerouslyGetParent().setOptions({
          tabBarVisible: this.state.tabBarVisible
        });
          }
    render(){
        return(
            <View style={[{},styles.center]}>
                <View style={[{},styles.TopRow]}>
                    <View style={{flex:1}}>
                      <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('EditProfile')}
                      >
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
                    <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('Privacy')}
                    >
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
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('MyQrCode')}
                    >
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
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('PushNotification')}
                    >
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
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Preferences')}
                    >
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
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('DigitalWellbeing')}
                    >
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
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('FreeUpSpace')}
                    >
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
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('DataSaver')}
                    >
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
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('HelpFaqs')}
                    >
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
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('TermsOfUse')}
                    >
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
                  
                    <TouchableOpacity
                    onPress={()=>this.setState({logoutModal:true})}
                    >
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
                <Modal
                    isVisible={this.state.logoutModal}
                    onBackdropPress={() => this.setState({logoutModal:false})}
                    >
                    <LinearGradient 
                        start={{ x: 0.1, y: 0.25 }} end={{ x: 0.7, y: 1.0 }}
                        colors={['#2e3192','#800080', '#93278f']}
                        style={{borderRadius:5,justifyContent:'center',alignItems:'center'}}
                        >
                    <View style={[{},ModalStyles.MainContainer]}>
                       <View>
                           <Text style={[{},ModalStyles.Heading]}>Save login Credentials?</Text>
                       </View>
                       <View>
                           <Text style={[{},ModalStyles.Paragraph]}>Save your Credentials so next time</Text>
                       </View>
                       <View>
                           <Text style={[{},ModalStyles.Paragraph]}>your can login faster.</Text>
                       </View>
                       <View style={{flexDirection:'row',marginVertical:10}}>
                           <TouchableOpacity
                           onPress={()=>this.setState({logoutModal:false})}
                            onPress={()=>this.props.navigation.navigate('SignIn')}
                           >
                           <View style={[{marginRight:10,paddingHorizontal:20,},ModalStyles.btnView]}>
                               
                                   <Text>Not now</Text>
                               
                           </View>
                           </TouchableOpacity>
                           <TouchableOpacity
                            onPress={()=>this.setState({logoutModal:false})}
                            onPress={()=>this.props.navigation.navigate('SignIn')}
                           >
                           <View style={[{paddingHorizontal:30,},ModalStyles.btnView]}>
                               
                                   <Text>Save</Text>
                              
                           </View>
                           </TouchableOpacity>
                       </View>
                    </View>
                    </LinearGradient> 
                    </Modal>
            </View>
        );
    }
}