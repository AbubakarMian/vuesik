import React from "react";
import {View,Text, Dimensions,StyleSheet,Image} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../css/CustomizeProfileCss";
var {width,hight} = Dimensions.get('window');



export default class CustomizeProfile extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <View style={[{},styles.ChangeLogoRow]}>
                    <View style={[{},styles.ChangeLogoImageView]}>
                      <TouchableOpacity>
                          <View>
                          <Image
                            source={require('../images/icons/icon-24.png')}
                            style={{height:60,width:60,alignSelf:'center'}}
                            >

                       </Image> 
                          </View>
                          <View>
                              <Text style={{fontSize:10,textAlign:'center',marginTop:10}}>Change photo</Text>
                          </View>
                      </TouchableOpacity> 
                    </View>
                    <View style={[{},styles.ChangeLogoVideoView]}>
                      <TouchableOpacity>
                          <View>
                          <Image
                            source={require('../images/icons/video-23.png')}
                            style={{height:60,width:60,alignSelf:'center'}}
                            >

                       </Image>
                       
                          </View>
                        <View>
                        <Text style={{fontSize:10,textAlign:'center',marginTop:20}}>Change video</Text> 
                        </View> 
                      </TouchableOpacity> 
                    </View>
                  
                </View>
              <View style={{borderBottomWidth:1,paddingVertical:30,paddingHorizontal:10}}>
              <View style={[{},styles.mROW]}>
                       <View style={[{alignItems:'baseline'},styles.mROWCol1]}>
                          <Text style={[{ alignSelf:'baseline',marginTop:15}]}>Name</Text>
                       </View>
                       <View style={[{},styles.mROWCol2]}>
                            <TouchableOpacity>
                              <View>
                              <TextInput style={{textAlign:'right', paddingRight:5,color:'#777575'}}>Waleed Hussain
                              <Image
                              style={{height:15,width:15}}
                              source={require('../images/icons/lessthen-24.png')}
                              >

                              </Image>
                              </TextInput>
                              </View>
                            </TouchableOpacity>
                       </View>
                    </View>
                    <View style={[{},styles.mROW]}>
                       <View style={[{alignItems:'baseline'},styles.mROWCol1]}>
                          <Text style={[{ alignSelf:'baseline',marginTop:15}]}>Username</Text>
                       </View>
                       <View style={[{},styles.mROWCol2]}>
                            <TouchableOpacity>
                              <View>
                              <TextInput style={{textAlign:'right', paddingRight:5,color:'#777575'}}>waleedhuxain
                              <Image
                              style={{height:15,width:15}}
                              source={require('../images/icons/lessthen-24.png')}
                              >

                              </Image>
                              </TextInput>
                              </View>
                            </TouchableOpacity>
                       </View>
                    </View>
                    <View style={[{},styles.mROW]}>
                       <View style={[{alignItems:'baseline'},styles.mROWCol1]}>
                          <Text style={[{ alignSelf:'baseline',marginTop:15}]}></Text>
                       </View>
                       <View style={[{},styles.mROWCol2]}>
                            <TouchableOpacity>
                              <View>
                              <TextInput style={{textAlign:'right', paddingRight:5,fontSize:10,color:'#777575'}}>vuesik.com/@waleedhuxain
                              <Image
                              style={{height:15,width:15}}
                              source={require('../images/icons/box-23.png')}
                              >

                              </Image>
                              </TextInput>
                              </View>
                            </TouchableOpacity>
                       </View>
                    </View>
                    <View style={[{},styles.mROW]}>
                       <View style={[{alignItems:'baseline'},styles.mROWCol1]}>
                          <Text style={[{ alignSelf:'baseline',marginTop:15}]}>Bio</Text>
                       </View>
                       <View style={[{},styles.mROWCol2]}>
                            <TouchableOpacity>
                              <View>
                              <TextInput style={{textAlign:'right', paddingRight:5,color:'#777575'}}>Add a bio to your profile
                              <Image
                              style={{height:15,width:15}}
                              source={require('../images/icons/lessthen-24.png')}
                              >

                              </Image>
                              </TextInput>
                              </View>
                            </TouchableOpacity>
                       </View>
                    </View>
              </View>
                    <View style={[{},styles.mROW]}>
                       <View style={[{alignItems:'baseline'},styles.mROWCol1]}>
                          <Text style={[{ alignSelf:'baseline',marginTop:15}]}>Instagram</Text>
                       </View>
                       <View style={[{},styles.mROWCol2]}>
                            <TouchableOpacity>
                              <View>
                              <TextInput style={{textAlign:'right', paddingRight:5,fontSize:12,color:'#777575'}}>Add intagram to your profile
                              <Image
                              style={{height:15,width:15}}
                              source={require('../images/icons/lessthen-24.png')}
                              >

                              </Image>
                              </TextInput>
                              </View>
                            </TouchableOpacity>
                       </View>
                    </View>
                    <View style={[{},styles.mROW]}>
                       <View style={[{alignItems:'baseline'},styles.mROWCol1]}>
                          <Text style={[{ alignSelf:'baseline',marginTop:15}]}>YouTube</Text>
                       </View>
                       <View style={[{},styles.mROWCol2]}>
                            <TouchableOpacity>
                              <View>
                              <TextInput style={{textAlign:'right', paddingRight:5,fontSize:12,color:'#777575'}}>Add YouTube to your profile
                              <Image
                              style={{height:15,width:15}}
                              source={require('../images/icons/lessthen-24.png')}
                              >

                              </Image>
                              </TextInput>
                              </View>
                            </TouchableOpacity>
                       </View>
                    </View>
                    
            </View>
        );
    }
}