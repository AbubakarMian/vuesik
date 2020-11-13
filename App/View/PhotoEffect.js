import React from "react";
import {View,Text, Dimensions,StyleSheet, ImageBackground,Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../css/PhotoEffectCSS";
var {width,hight} = Dimensions.get('window');


export default class PhotoEffect extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../images/icons/bgPhotoEffect.jpg')}
                >
                <View style={{position:'relative',height:hight,width:width}}>
                   <View
                   style={[{},styles.TopBar]}>
                      <View style={[{},styles.TopBarImageViw]}>
                          <TouchableOpacity>
                              <Image
                              style={[{},styles.TopbarImg]}
                              source={require('../images/icons/icon-camera.png')}
                              >
                                          
                              </Image>
                              <Text style={[{},styles.TopbarImgText]}>Flip</Text>  
                          </TouchableOpacity>
                      </View> 
                      <View style={[{},styles.TopBarImageViw]}>
                          <TouchableOpacity>
                              <Image
                              style={[{},styles.TopbarImg]}
                              source={require('../images/icons/speed-07.png')}
                              >

                              </Image>
                              <Text style={[{},styles.TopbarImgText]}>Speed</Text>
                          </TouchableOpacity>
                      </View> 
                      <View style={[{},styles.TopBarImageViw]}>
                          <TouchableOpacity>
                              <Image
                              style={[{},styles.TopbarImg]}
                              source={require('../images/icons/filter-08.png')}
                              >

                              </Image>
                              <Text style={[{},styles.TopbarImgText]}>Filters</Text>
                          </TouchableOpacity>
                      </View> 
                      <View style={[{},styles.TopBarImageViw]}>
                          <TouchableOpacity>
                              <Image
                              style={[{},styles.TopbarImg]}
                              source={require('../images/icons/timer-09.png')}
                              >

                              </Image>
                              <Text style={[{},styles.TopbarImgText]}>Timer</Text>
                          </TouchableOpacity>
                      </View> 
                      <View style={[{},styles.TopBarImageViw]}>
                          <TouchableOpacity>
                              <Image
                              style={[{},styles.TopbarImg]}
                              source={require('../images/icons/flash-10.png')}
                              >

                              </Image>
                              <Text style={[{},styles.TopbarImgText]}>Flash</Text>
                          </TouchableOpacity>
                      </View> 

                         <View style={[{},styles.TopBarImageViw]}>
                          <TouchableOpacity>
                              <Image
                              style={[{},styles.TopbarImg]}
                              source={require('../images/icons/beauty.png')}
                              >

                              </Image>
                              <Text style={[{},styles.TopbarImgText]}>Beauty</Text>
                          </TouchableOpacity>
                      </View> 
                      <View style={[{},styles.TopBarImageViw]}>
                          <TouchableOpacity>
                              <Image
                              style={[{},styles.TopbarImg]}
                              source={require('../images/icons/sound-12.png')}
                              >

                              </Image>
                              <Text style={[{},styles.TopbarImgText]}>Sound</Text>
                          </TouchableOpacity>
                      </View>                              
                   </View>
                   <View
                   style={[{},styles.BottomBar]}>
                      <View style={[{},styles.BottomBarImageViw]}>
                          <TouchableOpacity>
                              <Image
                              style={[{},styles.TopbarImg]}
                              source={require('../images/icons/effects-13.png')}
                              >
                                          
                              </Image>
                              <Text style={[{},styles.TopbarImgText]}>Effects</Text>  
                          </TouchableOpacity>
                      </View> 
                      <View style={[{},styles.BottomBarImageViw]}>
                          <TouchableOpacity>
                              <Image
                              style={[{},styles.TopbarImg]}
                              source={require('../images/icons/capture-15.png')}
                              >

                              </Image>
                          </TouchableOpacity>
                      </View> 
                      <View style={[{},styles.BottomBarImageViw]}>
                          <TouchableOpacity>
                              <Image
                              style={[{},styles.TopbarImg]}
                              source={require('../images/icons/upload-14.png')}
                              >

                              </Image>
                              <Text style={[{},styles.TopbarImgText]}>Upload</Text>
                          </TouchableOpacity>
                      </View>                                   
                   </View>
                </View>

                </ImageBackground>
            </View>
        );
    }
}