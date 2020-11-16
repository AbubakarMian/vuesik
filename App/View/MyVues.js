import React from "react";

import {View,Text,Image, Dimensions,StyleSheet,
    ImageBackground,TouchableOpacity,Touchable,TouchableWithoutFeedback,TouchableHighlight, Button} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styles from '../css/MyVuesCss';
import VidioActionstyles from '../css/VidioActionModalCSS';
import Modal from 'react-native-modal';
import { ScrollView } from "react-native-gesture-handler";
import * as Progress from 'react-native-progress';
import ProgressCircle from 'react-native-progress-circle';
var {width,height} = Dimensions.get('window');
const percentage = 66;


export default class MyVues extends React.Component{
   constructor(props){
      super(props)
      this.state={
        showModal:false,
        vidioActionModal:false,
        SavingModal:false,
        LikeModal:false,
        VidioReportModal:false,
        SameVideosModal:false

      }
    }
    render(){
       console.log('get myvue props',this.props)
        return(
         <TouchableWithoutFeedback onLongPress={()=>this.setState({vidioActionModal:true})}>
         <View style={{height:height,width:width}}>
         <ImageBackground
         source={require('../images/icons/MyVuesbg.jpg')}
         style={{height:height,width:width}}
         >
         <View style={{width:width,height:height,}}>
         <View style={{height:height,width:width,position:'relative'}}>
         <View style={{position:'absolute',top:340,left:'90%'}}>
                <View >
                   <TouchableOpacity
                   onPress={() => this.props.route.navigation.navigate('UserProfile')}
                   >
                      <View>
                      <Image
                         style={[{height:30,width:30}]}
                         source={require('../images/icons/icon-32.png')}
                       >
                       </Image> 
                      </View>
                   </TouchableOpacity>
                </View>
            </View>
            <View style={{position:'absolute',top:380,left:'86%'}}>
                <View >
                   <TouchableOpacity
                   onPress={()=>this.setState({showModal:true})}
                   >
                      <View>
                      <Image
                         style={[{height:30,width:30}]}
                         source={require('../images/icons/icon-31.png')}
                       >
                       </Image> 
                      </View>
                   </TouchableOpacity>
                </View>
            </View>
         <View style={{position:'absolute',top:410,left:'80%'}}>
                <View >
                   <TouchableOpacity>
                      <View>
                      <Image
                         style={[{height:30,width:30}]}
                         source={require('../images/icons/icon-30.png')}
                       >
                       </Image> 
                      </View>
                   </TouchableOpacity>
                </View>
            </View>
         <View style={{position:'absolute',top:440,left:'72%'}}>
                <View >
                   <TouchableOpacity>
                      <View>
                      <Image
                         style={[{height:30,width:30}]}
                         source={require('../images/icons/icon-29.png')}
                       >
                       </Image> 
                      </View>
                   </TouchableOpacity>
                </View>
            </View>
            <View style={{position:'absolute',top:460,left:'60%'}}>
                <View >
                   <TouchableOpacity>
                      <View>
                      <Image
                         style={[{height:30,width:30}]}
                         source={require('../images/icons/icon-33.png')}
                       >
                       </Image> 
                      </View>
                   </TouchableOpacity>
                </View>
            </View>
         </View>
         </View>
        
         
      
         </ImageBackground>
         {/* Vidio Click Action  */}
         <Modal
                    isVisible={this.state.vidioActionModal}
                  //   onBackdropPress={() => this.setState({vidioActionModal:false})}
                    style={{height:20,width:width-300,justifyContent:'center',
                    justifyContent:'center'}}>
                    <View style={{ height:250,width:width-50, justifyContent:'center',
                     alignItems:'center',borderRadius:10 }}>
                     <LinearGradient 
                                start={{ x: 0.2, y: 0.25 }} end={{ x: 0.8, y: 1.0 }}
                                colors={['#2e3192','#800080', '#93278f']}
                                style={{ marginLeft:10,padding: 10, borderRadius: 5 , height:200,width:width-140}}>
                  <View style={[{},VidioActionstyles.center]}>
                  <View style={{ marginHorizontal:30,marginTop:20 }}>
 
              
          </View>
             
                     <View style={{flexDirection:'row',paddingBottom:5,paddingTop:5, borderBottomWidth:1,borderBottomColor:"#fff"}}>
                           <View style={{flex:1}}>
                                 <Image
                                 style={{height:30,width:30,borderRadius:50}}
                                 source={require('../images/icons/save-22.png')}
                                 >
                                 
                                 </Image>
                           </View>
                           <View style={{flex:4}}>
                          
                      
                           
                           
                           
                           <View>
                           <Text style={{color:'#fff',textAlignVertical:'center',fontSize:12,marginTop:5}}  >Save Vidio</Text>
                           
                           </View>
                        
                           </View>      
                     </View>
                    
                     <View style={{flexDirection:'row',paddingBottom:5,paddingTop:5, borderBottomWidth:1,borderBottomColor:"#fff"}}>
                           <View style={{flex:1}}>
                                 <Image
                                 style={{height:30,width:30,borderRadius:50}}
                                 source={require('../images/icons/favorites-23.png')}
                                 >
                                 
                                 </Image>
                           </View>
                        
                           <View style={{flex:4}}>
                           
                           <Text style={{color:'#fff',textAlignVertical:'center',fontSize:12,marginTop:5}}  >Add TO Favorites</Text>
                          
                           </View> 
                          
                     </View>
                    
                     <View style={{flexDirection:'row',paddingBottom:5,paddingTop:5, borderBottomWidth:1,borderBottomColor:"#fff"}}>
                           <View style={{flex:1}}>
                                 <Image
                                 style={{height:30,width:30,borderRadius:50}}
                                 source={require('../images/icons/notInterested-24.png')}
                                 >
                                 
                                 </Image>
                           </View>
                           <View style={{flex:4}}>
                           <Text style={{color:'#fff',textAlignVertical:'center',fontSize:12,marginTop:5}}  >Not interested</Text>
                           </View>      
                     </View>
                     <View style={{flexDirection:'row',paddingBottom:5,paddingTop:5, }}>
                           <View style={{flex:1}}>
                                 <Image
                                 style={{height:30,width:30,borderRadius:50}}
                                 source={require('../images/icons/report-25.png')}
                                 >
                                 
                                 </Image>
                           </View>
                           <View style={{flex:4}}>
                           <Text style={{color:'#fff',textAlignVertical:'center',fontSize:12,marginTop:5}}  >Report</Text>
                           </View>      
                     </View>
                     
                    
                  </View>
                              
                    
                        

                     </LinearGradient>           
                    </View> 
                    </Modal>
                    {/*  */}
         </View>
         </TouchableWithoutFeedback> 
        );
    }
}