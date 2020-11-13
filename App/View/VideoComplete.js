import React from "react";
import {View,Text, Dimensions,StyleSheet, ImageBackground,Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../css/VideoCompleteCSS";
var {width,height} = Dimensions.get('window');

const style =StyleSheet.create({
    center:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#fff",
    },
});

export default class VideoComplete extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../images/icons/bgPhotoEffect.jpg')}
                >
                <View style={{height:height,width:width,position:'relative'}}>
                    <View style={{flexDirection:'row',top:'10%',justifyContent:'center'}}>
                        <View style={{}}>
                          <TouchableOpacity>
                              <View styles={{}}>
                                  <Image
                                  style={{marginHorizontal:10, height:40,width:40,alignSelf:'center'}}
                                  source={require('../images/icons/sound-09.png')}>

                                  </Image>
                                  <Text style={[{},styles.TopBarRoundImgTxt]}>Sound</Text>
                              </View>
                          </TouchableOpacity>

                        </View>
                        <View style={{}}>
                          <TouchableOpacity>
                              <View>
                                  <Image
                                  style={{marginHorizontal:10,height:40,width:40,alignSelf:'center'}}
                                  source={require('../images/icons/effect-08.png')}>

                                  </Image>
                                  <Text style={[{},styles.TopBarRoundImgTxt]}>Effect</Text>
            
                              </View>
                          </TouchableOpacity>

                        </View>
                        <View style={{}}>
                          <TouchableOpacity>
                              <View>
                                  <Image
                                  style={{marginHorizontal:10,height:40,width:40,alignSelf:'center'}}
                                  source={require('../images/icons/text-07.png')}>

                                  </Image>
                                  <Text style={[{},styles.TopBarRoundImgTxt]}>Text</Text>
                              </View>
                          </TouchableOpacity>

                        </View>
                        <View style={{}}>
                          <TouchableOpacity>
                              <View>
                                  <Image
                                  style={{marginHorizontal:10,height:40,width:40,alignSelf:'center'}}
                                  source={require('../images/icons/sticker-06.png')}>
                                  
                                  </Image>
                                  <Text style={[{},styles.TopBarRoundImgTxt]}>Sticker</Text>
                              </View>
                          </TouchableOpacity>

                        </View>


                    </View>
                    
                    <View style={{position:'absolute',top:'80%', left:'40%'}}>
                          <TouchableOpacity
                          onPress={() => this.props.navigation.navigate('Post')}
                          >
                              <View>
                                  <Image
                                  style={{marginHorizontal:10,height:40,width:40,alignSelf:'center'}}
                                  source={require('../images/icons/rightarrow-10.png')}>
                                  
                                  </Image>
                                  
                              </View>
                          </TouchableOpacity>

                        </View>
          
                </View>
                </ImageBackground>
            </View>
        );
    }
}