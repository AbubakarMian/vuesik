import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Grid,
  Row,
  Col,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
// import { TouchableOpacity } from "react-native-gesture-handler";
import ToggleSwitch from 'toggle-switch-react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ColorPicker, TriangleColorPicker} from 'react-native-color-picker';
import styles from '../css/PostCSS';
import Modal from 'react-native-modal';
import {TextInput} from 'react-native-gesture-handler';
var {width, height} = Dimensions.get('window');

const ModalStyles=StyleSheet.create({
    center: {
        flex: 1,
        paddingTop:50,
        alignItems: "center",
        textAlign: "center",
        backgroundColor:'#fff',
        flexDirection:'column',
        height:height,
        width:width,
      },
      MainContainer:{
        width:width-40,
        height:250,
         
        borderRadius:5, 
        alignSelf:'center',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
      },
      Heading:{
          color:"#fff",
          fontWeight:'bold',
          fontSize:20,
      },
      Paragraph:{
          color:'#fff',
          fontSize:12,
      },
      btnView:{
          backgroundColor:'#fff',
          
          paddingVertical:6,
          borderRadius:5,
         
      }
})
export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PostModal: false,
    };
  }
  render() {
    return (
      <View style={[{}, styles.center]}>
        <View
          style={{
            flexDirection: 'row',
            width: width,
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            paddingBottom: 20,
            justifyContent:'center'
          }}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('VideoComplete')}>
              <Image
                style={{width: 30, height: 20}}
                source={require('../images/icons/backarrow-36.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1.25,alignSelf:'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              Post
            </Text>
          </View>
        </View>
        <ScrollView style={[{}, styles.MainView]}>
          <View style={[{}, styles.MainViewCol1]}>
            <View style={[{}, styles.MainViewCol1Row]}>
              <View style={[{}, styles.MainViewCol1RowDesc]}>
                <View>
                  <TextInput
                    multiline={true}
                    style={[{marginTop: 20}, styles.MainViewCol1RowDescTXT]}>
                    Your account is public and public videos will be visible to
                    everyone.
                  </TextInput>
                </View>
                <View>
                  <View>
                    <TextInput
                      multiline={true}
                      style={[{}, styles.MainViewCol1RowDescTXT]}>
                      Your account is public and public videos will be visible
                      to everyone.
                    </TextInput>
                  </View>
                </View>
                <View>
                  <TriangleColorPicker
                    onColorSelected={(color) =>
                      alert(`Color selected: ${color}`)
                    }
                    style={{
                      width: 50,
                      height: 50,
                      marginLeft: 10,
                      marginBottom: 10,
                      marginTop: 10,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <View
                      style={[
                        {backgroundColor: 'darkblue'},
                        styles.MainViewCol1RowPostBtn,
                      ]}>
                      <Text style={[{}, styles.MainViewCol1RowDescBtnTXT]}>
                        #Hashtags
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        {backgroundColor: 'purple'},
                        styles.MainViewCol1RowPostBtn,
                      ]}>
                      <Text style={[{}, styles.MainViewCol1RowDescBtnTXT]}>
                        @friends
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[{}, styles.MainViewCol1RowPost]}>
                <View>
                  <View>
                    <Image
                      style={{height: 90, width: 70}}
                      source={require('../images/icons/bgPostImage.jpg')}></Image>
                  </View>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                    }}>
                    <TouchableOpacity>
                      <View>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 8,
                            textAlign: 'center',
                          }}>
                          Select Cover
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[{}, styles.MainViewCol2]}>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <View>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../images/icons/lock-06.png')}></Image>
              </View>
              <View style={{flex: 1}}>
                <Text style={[{}, styles.Col2Txt]}>
                  Who can view this video
                </Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={[{textAlign: 'right'}, styles.Col2Txt]}>
                  Public >{' '}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <View>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../images/icons/comments-07.png')}></Image>
              </View>
              <View style={{flex: 1}}>
                <Text style={[{}, styles.Col2Txt]}>Allow comments</Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <ToggleSwitch
                  isOn={true}
                  onColor="purple"
                  offColor="gray"
                  labelStyle={{color: 'black', fontWeight: '900'}}
                  size="small"
                  onToggle={(isOn) => console.log('changed to : ', isOn)}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <View>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../images/icons/duet-08.png')}></Image>
              </View>
              <View style={{flex: 1}}>
                <Text style={[{}, styles.Col2Txt]}>Allow Duet</Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <ToggleSwitch
                  isOn={true}
                  onColor="purple"
                  offColor="gray"
                  labelStyle={{color: 'black', fontWeight: '900'}}
                  size="small"
                  onToggle={(isOn) => console.log('changed to : ', isOn)}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <View>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../images/icons/stitch-09.png')}></Image>
              </View>
              <View style={{flex: 1}}>
                <Text style={[{}, styles.Col2Txt]}>Allow Stitch</Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <ToggleSwitch
                  isOn={true}
                  onColor="purple"
                  offColor="gray"
                  labelStyle={{color: 'black', fontWeight: '900'}}
                  size="small"
                  onToggle={(isOn) => console.log('changed to : ', isOn)}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <View>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../images/icons/save-10.png')}></Image>
              </View>
              <View style={{flex: 1}}>
                <Text style={[{}, styles.Col2Txt]}>Save video to device</Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <ToggleSwitch
                  isOn={true}
                  onColor="purple"
                  offColor="gray"
                  labelStyle={{color: 'black', fontWeight: '900'}}
                  size="small"
                  onToggle={(isOn) => console.log('changed to : ', isOn)}
                />
              </View>
            </View>
          </View>
          <View style={[{}, styles.MainViewCol3]}>
            <View>
              <Text style={[{}, styles.Col2Txt]}>Also share on:</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <TouchableOpacity>
                  <View>
                    <Image
                      style={{
                        height: 30,
                        width: 30,
                        marginTop: 10,
                        marginLeft: 10,
                      }}
                      source={require('../images/icons/instegrame-06.png')}></Image>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <View>
                    <Image
                      style={{
                        height: 30,
                        width: 30,
                        marginTop: 10,
                        marginLeft: 10,
                      }}
                      source={require('../images/icons/bell-07.png')}></Image>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <View>
                    <Image
                      style={{
                        height: 30,
                        width: 30,
                        marginTop: 10,
                        marginLeft: 10,
                      }}
                      source={require('../images/icons/facebook-08.png')}></Image>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <View>
                    <Image
                      style={{
                        height: 30,
                        width: 30,
                        marginTop: 10,
                        marginLeft: 10,
                      }}
                      source={require('../images/icons/msg-09.png')}></Image>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row', padding: 10}}>
              <View style={{flex: 1, marginRight: 10}}>
                <TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: 'darkblue',
                      borderRadius: 50,
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                    }}>
                    <View>
                      <Image
                        style={{height: 20, width: 20}}
                        source={require('../images/icons/draft-13.png')}></Image>
                    </View>
                    <View>
                      <Text style={{color: '#fff', marginLeft: 20}}>Draft</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => this.setState({PostModal: true})}>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: 'purple',
                      borderRadius: 50,
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                    }}>
                    <View>
                      <Image
                        style={{height: 20, width: 20}}
                        source={require('../images/icons/send-14.png')}></Image>
                    </View>
                    <View>
                      <Text style={{color: '#fff', marginLeft: 20}}>Post</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Post Modal  */}
        <Modal
          isVisible={this.state.PostModal}
          onBackdropPress={() => this.setState({logoutModal: false})}>
          <LinearGradient
            start={{x: 0.1, y: 0.25}}
            end={{x: 0.7, y: 1.0}}
            colors={['#2e3192', '#800080', '#93278f']}
            style={{
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={[{}, ModalStyles.MainContainer]}>
              <View>
                <Text style={[{}, ModalStyles.Heading]}>
                Post Vidio publicaly?
                </Text>
              </View>
              <View>
                <Text style={[{}, ModalStyles.Paragraph]}>
                Your account is public and your public
                </Text>
              </View>
              <View>
                <Text style={[{}, ModalStyles.Paragraph]}>
                videos will be visible to everyone.
                </Text>
              </View>
              <View>
                <Text style={[{marginTop:20}, ModalStyles.Paragraph]}>
                You can make this video private. or switch to
                </Text>
              </View>
              <View>
                <Text style={[{marginTop:20}, ModalStyles.Paragraph]}>
                a private account in your privacy settings.
                </Text>
              </View>
              
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <TouchableOpacity
                  onPress={() => this.setState({logoutModal: false})}
                  onPress={() => this.props.navigation.navigate('SignIn')}>
                  <View
                    style={[
                      {marginRight: 10, paddingHorizontal: 20},
                      ModalStyles.btnView,
                    ]}>
                    <Text>Cancel</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({logoutModal: false})}
                  onPress={() => this.props.navigation.navigate('SignIn')}>
                  <View style={[{paddingHorizontal: 30}, ModalStyles.btnView]}>
                    <Text>Post Now</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </Modal>
        {/*  */}
      </View>
    );
  }
}

{
  /* <View>
<Image
style={{height:40,width:40,alignSelf:'center'}}
source={require('../images/icons/Posttick-08.png')}
>

</Image>
</View>
<View>
<Text style={{alignSelf:'center',color:'#fff',fontSize:12,marginTop:5,fontWeight:'bold'}}>Post Vidio publicaly?</Text>
</View> 
<View>
<Text style={{alignSelf:'center',color:'#fff',fontSize:10,marginTop:5}}>Your account is public and your public</Text>
<Text style={{alignSelf:'center',color:'#fff',fontSize:10,}}>videos will be visible to everyone.</Text>
</View>
<View>
<Text style={{alignSelf:'center',color:'#fff',fontSize:10,marginTop:5}}>You can make this video private. or switch to</Text>
<Text style={{alignSelf:'center',color:'#fff',fontSize:10,}}>a private account in your privacy settings.</Text>
<View style={{flexDirection:'row',justifyContent:'center'}}>
              <TouchableOpacity
               onPress={() =>this.setState({PostModal:false}) }
                >
           <View style={{flexDirection:'row',paddingTop:2, justifyContent:'center'}}>
          
              <View>
              <Text
                   style={{
                     color: '#fff',
                     textAlignVertical: 'center',
                     fontSize: 8,
                     marginTop: 5,
                     marginLeft:5,
                     color:'purple',
                     backgroundColor:'#fff',
                     paddingVertical:2,
                     paddingHorizontal:14,
                     borderRadius:2,
                   }}>
                   Cancel
                 </Text>
              </View>
           </View>
        </TouchableOpacity>

        <TouchableOpacity
               onPress={() =>this.setState({PostModal:false})}
               onPress={()=>this.props.navigation.navigate('MyVues')}
                >
           <View style={{flexDirection:'row',paddingTop:2, justifyContent:'center',alignSelf:'center'}}>
          
              <View>
              <Text
                   style={{
                     color: '#fff',
                     textAlignVertical: 'center',
                     fontSize: 8,
                     marginTop: 5,
                     marginLeft:5,
                     color:'purple',
                     backgroundColor:'#fff',
                     paddingVertical:2,
                     paddingHorizontal:14,
                     borderRadius:2,
                   }}>
                   Post Now
                 </Text>
              </View>
           </View>
        </TouchableOpacity>
     
       
            </View>
</View>  */
}
