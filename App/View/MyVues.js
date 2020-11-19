import React from 'react';

import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  Touchable,
  TouchableWithoutFeedback,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../css/MyVuesCss';
import VidioActionstyles from '../css/VidioActionModalCSS';
import Modal from 'react-native-modal';
import {ScrollView} from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import ProgressCircle from 'react-native-progress-circle';
import {TouchableItem} from 'react-native-tab-view';

var {width, height} = Dimensions.get('window');
const percentage = 66;

const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

export default class MyVues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      vidioActionModal: false,
      SavingModal: false,
      LikeModal: false,
      VidioReportModal: false,
      SameVideosModal: false,
    };
  }
  render() {
    console.log('get myvue props', this.props);
    return (
      <TouchableWithoutFeedback
        onLongPress={() => this.setState({vidioActionModal: true})}>
        <View style={{height: height, width: width}}>
          <ImageBackground
            source={require('../images/icons/MyVuesbg.jpg')}
            
            style={{height: height, width: width}}>
            <View style={{width: width, height: height}}>
              <View
                style={{height: height, width: width, position: 'relative'}}>
                <View
                  style={{
                    position: 'absolute',
                    top: '62%',
                    left: '2%',
                    width: '50%',
                  }}>
                  <View>
                    <Text style={styles.viewBottomColumn1username}>
                      @waleed.huxain
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.viewBottomColumn1xt}>
                      Lorem ispam dolor sit ametn consectetur agimus. Immo vero,
                      inquit, ad beatissime ad bete vero sats, #akcen #lidia
                      #buble
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', width: width / 2 - 10}}>
                    <View>
                      <TouchableOpacity
                       onPress={() =>
                        this.props.navigation.navigate('Profile')
                      }
                        style={{marginTop: 10, marginBottom: 10}}>
                        <View>
                          <Image
                            style={[
                              {
                                borderRadius: 5,
                                height: 40,
                                width: 40,
                                marginBottom: 10,
                              },
                            ]}
                            source={require('../images/icons/icon-28.png')}></Image>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={{alignSelf: 'center'}}>
                      <Text
                        style={{
                          color: '#fff',
                          textAlignVertical: 'center',
                          marginLeft: 5,
                        }}>
                        Akcent ft Lidia Buble-Akcent
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{position: 'absolute', top: '60%', left: '90%'}}>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('UserProfile')
                      }>
                      <View>
                        <Image
                          style={[{height: 40, width: 40}]}
                          source={require('../images/icons/icon-32.png')}></Image>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{position: 'absolute', top: '65%', left: '86%'}}>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.setState({showModal: true})}>
                      <View>
                        <Image
                          style={[{height: 40, width: 40}]}
                          source={require('../images/icons/icon-31.png')}></Image>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{position: 'absolute', top: '70%', left: '80%'}}>
                  <View>
                    <TouchableOpacity>
                      <View>
                        <Image
                          style={[{height: 40, width: 40}]}
                          source={require('../images/icons/icon-30.png')}></Image>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{position: 'absolute', top: '75%', left: '72%'}}>
                  <View>
                    <TouchableOpacity onPress={onShare}>
                      <View>
                        <Image
                          style={[{height: 40, width: 40}]}
                          source={require('../images/icons/icon-29.png')}></Image>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{position: 'absolute', top: '80%', left: '60%'}}>
                  <View>
                    <TouchableOpacity
                   
                    >
                      <View>
                        <Image
                          style={[{height: 40, width: 40}]}
                          source={require('../images/icons/icon-33.png')}></Image>
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
            onBackButtonPress={() => this.setState({vidioActionModal: false})}

            style={{
              height: height/2,
              width: width/2,
              justifyContent: 'center',
              justifyContent: 'center',
              alignItems:'center'
            }}>
             <View style={{marginLeft:'50%'}}>
             <LinearGradient
                start={{x: 0.2, y: 0.25}}
                end={{x: 0.8, y: 1.0}}
                colors={['#2e3192', '#800080', '#93278f']}
                style={{
                  marginLeft: 10,
                  padding: 10,
                  borderRadius: 5,
                  height: 180,
                  width: width/2,
                
                }}>
                    <View style={{justifyContent:'center',}}>
            
                    <TouchableOpacity
                   onPress={() =>this.setState({vidioActionModal:false,SavingModal:true}) }
                    >
               <View style={{flexDirection:'row',borderBottomColor:'#fff',borderBottomWidth:1,paddingTop:2}}>
                  <View style={{marginBottom:5}}>
                  <Image
                     style={{height: 30, width: 30, borderRadius: 50}}
                     source={require('../images/icons/save-22.png')}>

                  </Image>
                  </View>
                  <View>
                  <Text
                       style={{
                         color: '#fff',
                         textAlignVertical: 'center',
                         fontSize: 12,
                         marginTop: 5,
                         marginLeft:5
                       }}>
                       Save Vidio
                     </Text>
                  </View>
               </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() =>this.setState({vidioActionModal:false,LikeModal:true}) }
            >
               <View style={{flexDirection:'row',borderBottomColor:'#fff',borderBottomWidth:1,paddingTop:2}}>
                  <View style={{marginBottom:5}}>
                  <Image
                     style={{height: 30, width: 30, borderRadius: 50}}
                     source={require('../images/icons/favorites-23.png')}>

                  </Image>
                  </View>
                  <View>
                  <Text
                       style={{
                         color: '#fff',
                         textAlignVertical: 'center',
                         fontSize: 12,
                         marginTop: 5,
                         marginLeft:5
                       }}>
                       Add To Favorites
                     </Text>
                  </View>
               </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() =>this.setState({vidioActionModal:false,SameVideosModal:true}) }
            >
               <View style={{flexDirection:'row',borderBottomColor:'#fff',borderBottomWidth:1,paddingTop:2}}>
                  <View style={{marginBottom:5}}>
                  <Image
                     style={{height: 30, width: 30, borderRadius: 50}}
                     source={require('../images/icons/notInterested-24.png')}>

                  </Image>
                  </View>
                  <View>
                  <Text
                       style={{
                         color: '#fff',
                         textAlignVertical: 'center',
                         fontSize: 12,
                         marginTop: 5,
                         marginLeft:5
                       }}>
                       Not Interested
                     </Text>
                  </View>
               </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() =>this.setState({vidioActionModal:false,VidioReportModal:true}) }
            >
               <View style={{flexDirection:'row',}}>
                  <View style={{marginBottom:10}}>
                  <Image
                     style={{height: 30, width: 30, borderRadius: 50}}
                     source={require('../images/icons/report-25.png')}>

                  </Image>
                  </View>
                  <View>
                  <Text
                       style={{
                         color: '#fff',
                         textAlignVertical: 'center',
                         fontSize: 12,
                         marginTop: 5,
                         marginLeft:5
                       }}>
                       Report
                     </Text>
                  </View>
               </View>
            </TouchableOpacity>
           
         </View>
                </LinearGradient>
           </View>
         </Modal>
          {/*  */}
          {/* showModal */}
          <Modal
            isVisible={this.state.showModal}
            onBackdropPress={() => this.setState({showModal: false})}
            style={{
              height: height,
              width: width,
              justifyContent: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: width,
                height: height / 2,
                backgroundColor: '#fff',
              }}>
              <LinearGradient
                start={{x: 0.2, y: 0.25}}
                end={{x: 0.7, y: 1.0}}
                colors={['#2e3192', '#800080', '#93278f']}
                style={{height: height, width: width}}>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{alignSelf: 'center', justifyContent: 'flex-end'}}>
                      <Text style={{color: '#fff'}}>350 comments</Text>
                    </View>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#fff', justifyContent: 'flex-end'}}>
                        x
                      </Text>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </Modal>



         
                    {/* Saving Moda */}
                    <Modal
                    isVisible={this.state.SavingModal}
                    
                    onBackdropPress={()=>this.setState({SavingModal:false})}
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
                  
                    style={{height:20,width:width-300,
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


