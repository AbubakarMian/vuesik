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
        return(
         <TouchableWithoutFeedback onLongPress={()=>this.setState({vidioActionModal:true})}>
         <View style={styles.center}>
        
            <View style={{}}>
                     <ImageBackground
                      
                     style={{width:width,height:height}}
                     source={require('../images/icons/MyVuesbg.jpg')}
                     >
                     <View style={styles.viewBottom}>
                        <View style={styles.viewBottomRow}>
                           <View style={styles.viewBottomColumn1}>
                              <View >
                                  <Text style={styles.viewBottomColumn1username}>@waleed.huxain</Text>
                                  <Text style={styles.viewBottomColumn1xt}>
                                      Lorem ispam dolor sit ametn consectetur agimus. Immo vero, inquit,
                                      ad beatissime ad bete vero sats, #akcen #lidia #buble
                                  </Text>
                                  
                              </View>
                              <View style={{marginRight:20, flexDirection:'row'}}>
                              
                                <TouchableOpacity style={{marginTop:10,marginBottom:10}}>
                                 <Image
                                 style={[{borderRadius:5,height:40,width:40,marginBottom:10},]}
                                 source={require('../images/icons/icon-28.png')}
                                 >
                                 </Image>
                                              
                                </TouchableOpacity>
                                <Text style={{
                                   fontWeight:"bold",
                                   fontSize:10,
                                   color:'#fff',textAlignVertical:'center',marginLeft:10}}>
                                   Akcent ft Lidia Buble-Akcent
                                 </Text>  
                              </View>
                           </View>
                           
                           <View style={[{position:'relative'},styles.viewBottomColumn2]}>
                         <View style={[{position:'absolute'}]}>
                              <View style={{right:10,top:80,}}>
                                <TouchableOpacity>
                                 <Image
                                 style={[{},styles.viewBottomColumn2RoundImg]}
                                 source={require('../images/icons/icon-32.png')}
                                 >
                                 </Image>
                                     
                                </TouchableOpacity>
                              </View>
                            
                           </View>
                           <View style={[{flexDirection:'column',position:'absolute',right:25,top:120},styles.viewBottomColumn2]}>
                              <View style={{}}>
                                <TouchableOpacity
                                 onPress={()=>this.setState({showModal:true})}
                                >
                                 <Image
                                 style={[{},styles.viewBottomColumn2RoundImg]}
                                 source={require('../images/icons/icon-31.png')}
                                 >
                                 </Image>            
                                </TouchableOpacity>
                              </View>
                            
                           </View>
                           <View style={[{flexDirection:'column',position:'absolute',top: 165,right:40},styles.viewBottomColumn2]}>
                              <View style={{}}>
                                <TouchableOpacity
                               
                                >
                                 <Image
                                 style={[{},styles.viewBottomColumn2RoundImg]}
                                 source={require('../images/icons/icon-30.png')}
                              
                                 >
                                 </Image>            
                                </TouchableOpacity>
                              </View>
                            
                           </View>
                           <View style={[{flexDirection:'column',position:'absolute',top: 200,right:60},styles.viewBottomColumn2]}>
                              <View style={{}}>
                                <TouchableOpacity
                               
                                >
                                 <Image
                                 style={[{},styles.viewBottomColumn2RoundImg]}
                                 source={require('../images/icons/icon-29.png')}
                              
                                 >
                                 </Image>            
                                </TouchableOpacity>
                              </View>
                            
                           </View>
                           {/* <View style={[{flexDirection:'column',position:'absolute',top:200,right:70},styles.viewBottomColumn2]}>
                              <View style={{}}>
                                <TouchableOpacity>
                                 <Image
                                 style={[{},styles.viewBottomColumn2RoundImg]}
                                 source={require('../images/icons/icon-29.png')}
                                 >
                                 </Image>            
                                </TouchableOpacity>
                              </View>
                            
                           </View> */}
                        
                           <View style={[{flexDirection:'column',position:'absolute',top: 230,right:100,marginBottom:10},styles.viewBottomColumn2]}>
                              <View style={{}}>
                                <TouchableOpacity>
                                 <Image
                                 style={[{},styles.viewBottomColumn2RoundImg]}
                                 source={require('../images/icons/icon-33.png')}
                                 >
                                 </Image>            
                                </TouchableOpacity>
                              </View>
                            
                           </View>
                         </View>
                           
                        </View>
                     </View>
                     </ImageBackground>
               </View>
               <Modal
                    isVisible={this.state.showModal}
                    onBackdropPress={()=>this.setState({showModal:false})}
                    style={{height:20,width:width-300,justifyContent:'center',
                    justifyContent:'center'}}>
                    <View style={{ height:250,width:width-50, justifyContent:'center',
                     alignItems:'center',borderRadius:10 }}>
                     <LinearGradient 
                                start={{ x: 0.2, y: 0.25 }} end={{ x: 0.7, y: 1.0 }}
                                colors={['#2e3192','#800080', '#93278f']}
                                style={{ marginLeft:10,padding: 10,opacity: 0.6, borderRadius: 5 , height:height-200,width:width}}>
                  <View>
                  <View style={[{},styles.mainROW]}>
                         <View style={[{},styles.mainROWColumn1]}>
                            
                         </View>
                         <View style={[{},styles.mainROWColumn2]}>
                            
                            <Text style={{ color:'#fff',textAlign:'center'}}>
                               350 comments
                            </Text>
                           
                         </View>
                         <View style={[{},styles.mainROWColumn3]}>
                            <TouchableOpacity>
                               <Text>x</Text>
                            </TouchableOpacity>

                        
                           
                         </View>

                        </View> 
                     <ScrollView style={{borderBottomWidth:2,borderBottomColor:'#fff'}}>
                   
                      
                 
                        <View style={[{},styles.mainROW]}>
                         <View style={[{},styles.mainROWColumn1]}>
                            <Image
                            style={{height:30,width:30,borderRadius:50}}
                            source={require('../images/icons/icon-30a.png')}
                            >

                            </Image>
                         </View>
                         <View style={[{},styles.mainROWColumn2]}>
                            <Text style={{ color:'#fff'}}>
                               wikki75
                            </Text>
                            <Text style={{ color:'#fff'}}>
                               this song never get bored chilling me.
                            </Text>
                            <Text style={{ color:'#fff'}}>
                               Love from Maldives
                            </Text>
                            <TouchableOpacity>
                            <Text style={{ color:'#fff'}}>
                               view replies
                            </Text>
                            </TouchableOpacity>
                         </View>
                         <View style={[{},styles.mainROWColumn3]}>
                            <Image
                            style={{height:20,width:20}}
                            source={require('../images/icons/heart-29.png')}
                            >

                            </Image>
                            <Text style={{ color:'#fff'}}>187</Text>
                         </View>

                        </View> 
                        <View style={[{},styles.mainROW]}>
                         <View style={[{},styles.mainROWColumn1]}>
                            <Image
                            style={{height:30,width:30,borderRadius:50}}
                            source={require('../images/icons/icon-30a.png')}
                            >

                            </Image>
                         </View>
                         <View style={[{},styles.mainROWColumn2]}>
                            <Text style={{ color:'#fff'}}>
                               wikki75
                            </Text>
                            <Text style={{ color:'#fff'}}>
                               this song never get bored chilling me.
                            </Text>
                            <Text style={{ color:'#fff'}}>
                               Love from Maldives
                            </Text>
                            <TouchableOpacity>
                            <Text style={{ color:'#fff'}}>
                               view replies
                            </Text>
                            </TouchableOpacity>
                         </View>
                         <View style={[{},styles.mainROWColumn3]}>
                            <Image
                            style={{height:20,width:20}}
                            source={require('../images/icons/heart-29.png')}
                            >

                            </Image>
                            <Text style={{ color:'#fff'}}>187</Text>
                         </View>

                        </View>
                        <View style={[{},styles.mainROW]}>
                         <View style={[{},styles.mainROWColumn1]}>
                            <Image
                            style={{height:30,width:30,borderRadius:50}}
                            source={require('../images/icons/icon-30a.png')}
                            >

                            </Image>
                         </View>
                         <View style={[{},styles.mainROWColumn2]}>
                            <Text style={{ color:'#fff'}}>
                               wikki75
                            </Text>
                            <Text style={{ color:'#fff'}}>
                               this song never get bored chilling me.
                            </Text>
                            <Text style={{ color:'#fff'}}>
                               Love from Maldives
                            </Text>
                            <TouchableOpacity>
                            <Text style={{ color:'#fff'}}>
                               view replies
                            </Text>
                            </TouchableOpacity>
                         </View>
                         <View style={[{},styles.mainROWColumn3]}>
                            <Image
                            style={{height:20,width:20}}
                            source={require('../images/icons/heart-29.png')}
                            >

                            </Image>
                            <Text style={{ color:'#fff'}}>187</Text>
                         </View>

                        </View>  
                        <View style={[{},styles.mainROW]}>
                         <View style={[{},styles.mainROWColumn1]}>
                            <Image
                            style={{height:30,width:30,borderRadius:50}}
                            source={require('../images/icons/icon-30a.png')}
                            >

                            </Image>
                         </View>
                         <View style={[{},styles.mainROWColumn2]}>
                            <Text style={{ color:'#fff'}}>
                               wikki75
                            </Text>
                            <Text style={{ color:'#fff',fontSize:10}}>
                               this song never get bored chilling me.
                            </Text>
                            <Text style={{ color:'#fff'}}>
                               Love from Maldives
                            </Text>
                            <TouchableOpacity>
                            <Text style={{ color:'#fff'}}>
                               view replies
                            </Text>
                            </TouchableOpacity>
                         </View>
                         <View style={[{},styles.mainROWColumn3]}>
                            <Image
                            style={{height:20,width:20}}
                            source={require('../images/icons/heart-29.png')}
                            >

                            </Image>
                            <Text style={{ color:'#fff'}}>187</Text>
                         </View>

                        </View> 
                     </ScrollView>
                     <View style={[{},styles.mainROW]}>
                       
                         <View style={[{},styles.mainROWColumn2]}>
                            
                            <Text style={{ color:'#fff'}}>
                               Add comments
                            </Text>
                           
                         </View>
                         <View style={[{},styles.mainROWColumn3]}>
                           <View style={{flexDirection:'row'}}>
                           <View style={{flex:1}}>
                           <TouchableOpacity>
                               <Image
                               style={{height:25,width:25}}
                               source={require('../images/icons/icon-31a.png')}
                               >

                               </Image>
                           
                            </TouchableOpacity>
                           </View>
                           <View style={{flex:1}}>
                           <TouchableOpacity>
                              
                               <Image
                               style={{height:25,width:25}}
                               source={require('../images/icons/icon-32a.png')}
                               >

                               </Image>
                            </TouchableOpacity>
                           </View>
                           </View>

                        
                           
                         </View>

                        </View> 
                  </View>
                              
                    
                        

                     </LinearGradient>           
                    </View> 
                    </Modal>
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
                    {/* Vidio Click Action  */}
                    <Modal
                    isVisible={this.state.SavingModal}
                    
                    onBackdropPress={() => this.setState({SavingModal:fals})}
                    style={{height:20,width:width-300,justifyContent:'center',
                    justifyContent:'center'}}>
                    <View style={{ height:250,width:width-50, justifyContent:'center',
                     alignItems:'center',borderRadius:10 }}>
                     <LinearGradient 
                                start={{ x: 0.2, y: 0.25 }} end={{ x: 0.8, y: 1.0 }}
                                colors={['#2e3192','#800080', '#93278f']}
                                style={{ marginLeft:10,padding: 10, borderRadius: 5 ,paddingHorizontal:30,height:150}}>
                  <View style={[{},VidioActionstyles.center]}>
                     
                   

               
                     <View style={{flexDirection:'column',paddingTop:20, }}>
                           <View style={{flex:1}}>
                       
                           <ProgressCircle
                              percent={75}
                              radius={50}
                              
                              borderWidth={2}
                              color="#fff"
                              shadowColor="#999"
                              bgColor="purple"
                              opacity={0.6}
                              marginBottom="10"
                              
                              
                        >
                              <Text style={{ fontSize: 20,fontWeight:'bold',color:'#fff' }}>{'75%'}</Text>
                        </ProgressCircle>

                           </View>
                             
                           </View>
                           <Text style={{alignSelf:'center',marginBottom:20,color:'#fff'}}>Saving</Text>
                                 
                     </View>
                     
                    
               
                              
                    
                        

                     </LinearGradient>           
                    </View> 
                    </Modal>
                    {/*  */}

                     {/* Like Modal  */}
                     <Modal
                    isVisible={this.state.LikeModal }
                    onBackdropPress={() => this.setState({LikeModal:false})}
                  
                    style={{height:20,width:width-300,justifyContent:'center',
                    justifyContent:'center'}}>
                    <View style={{ height:200,width:width-50, justifyContent:'center',
                     alignItems:'center',borderRadius:10 }}>
                     <LinearGradient 
                                start={{ x: 0.2, y: 0.25 }} end={{ x: 0.8, y: 1.0 }}
                                colors={['#2e3192','#800080', '#93278f']}
                                style={{ opacity: 0.5, borderRadius: 5 ,paddingHorizontal:30,height:120}}>
                  <View style={[{},VidioActionstyles.center]}>
                     
                   

               
                     <View style={{flexDirection:'column', }}>
                           <View style={{flex:1,justifyContent:'center'}}>
                              <Image
                              style={{height:40,width:40,alignSelf:'center'}}
                              source={require('../images/icons/like-28.png')}
                              >

                              </Image>
                              <Text style={{alignSelf:'center',color:'#fff',fontSize:10,marginTop:5}}>Add to Favorites</Text>
                           </View>
                             
                           </View>
                           
                                 
                     </View>
                     
                    
               
                              
                    
                        

                     </LinearGradient>           
                    </View> 
                    </Modal>
                    {/*  */}
                    
                    {/* Same Videos Modal  */}
                    <Modal
                    isVisible={this.state.SameVideosModal}
                    onBackdropPress={() => this.setState({SameVideosModal:false})}
                    style={{height:20,width:width-300,justifyContent:'center',
                    justifyContent:'center'}}>
                    <View style={{ height:200,width:width-50, justifyContent:'center',
                     alignItems:'center',borderRadius:10 }}>
                     <LinearGradient 
                                start={{ x: 0.2, y: 0.25 }} end={{ x: 0.8, y: 1.0 }}
                                colors={['#2e3192','#800080', '#93278f']}
                                style={{ opacity: 0.5, borderRadius: 5 ,paddingHorizontal:30,height:120}}>
                  <View style={[{},VidioActionstyles.center]}>
                     
                   

               
                     <View style={{flexDirection:'column', }}>
                           <View style={{flex:1,justifyContent:'center'}}>
                              <Image
                              style={{height:40,width:40,alignSelf:'center'}}
                              source={require('../images/icons/dislike-27.png')}
                              >

                              </Image>
                              <Text style={{alignSelf:'center',color:'#fff',fontSize:10,marginTop:5}}>We will show fewer videos</Text>
                              <Text style={{alignSelf:'center',color:'#fff',fontSize:10,}}>like this from now</Text>
                           </View>
                             
                           </View>
                           
                                 
                     </View>
                     
                    
               
                              
                    
                        

                     </LinearGradient>           
                    </View> 
                    </Modal>
                    {/*  */}
                    
                    {/* Vidio Report Modal  */}
                    <Modal
                    isVisible={this.state.VidioReportModal}
                    onBackdropPress={() => this.setState({VidioReportModal:false})}
                    style={{height:20,width:width-300,justifyContent:'center',
                    justifyContent:'center'}}>
                    <View style={{ height:200,width:width-50, justifyContent:'center',
                     alignItems:'center',borderRadius:10 }}>
                     <LinearGradient 
                                start={{ x: 0.2, y: 0.25 }} end={{ x: 0.8, y: 1.0 }}
                                colors={['#2e3192','#800080', '#93278f']}
                                style={{ opacity: 0.5, borderRadius: 5 ,paddingHorizontal:30,height:120}}>
                  <View style={[{},VidioActionstyles.center]}>
                     
                   

               
                     <View style={{flexDirection:'column', }}>
                           <View style={{flex:1,justifyContent:'center'}}>
                              <Image
                              style={{height:40,width:40,alignSelf:'center'}}
                              source={require('../images/icons/vidioReport-26.png')}
                              >

                              </Image>
                              <Text style={{alignSelf:'center',color:'#fff',fontSize:10,marginTop:5}}>You'r Vidio has been</Text>
                              <Text style={{alignSelf:'center',color:'#fff',fontSize:10,}}>now reported</Text>
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