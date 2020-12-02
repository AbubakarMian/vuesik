import React from "react";
import {View,Text, Dimensions,StyleSheet, Image, ImageBackground,} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../../css/TabsCSS/DiscoverTabsCSS/TopTabCss"; 
var {width,hight} = Dimensions.get('window');

const style =StyleSheet.create({
    center:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#fff",
    },
});

export default class TopTab extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <View style={[{},styles.UserSection]}>
                <View style={[{},styles.UserSectionHeader]}>
                    <View>
                       <Text style={[{},styles.UserSectionHeaderUsers]}>USERS</Text>
                    </View>
                    <View style={[{},styles.UserSectionHeaderSeemoreView]}>
                       <TouchableOpacity>
                       <View style={[{},styles.UserSectionHeaderSeemoreViewRow]}>
                           <View>
                               <Text>See more</Text>
                           </View>
                           <View style={{alignItems:'center',justifyContent:'center'}}>
                               <Image
                               style={{height:15,width:15}}
                               source={require('../../../images/icons/lessthen-24.png')}
                               >

                               </Image>
                           </View>
                       </View>
                       </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                // onPress={() => this.props.navigation.push('TopUser')}
               
                >
                <View style={[{},styles.UserSectionUserProfile]}>
                  
                  <View>
                      <View>
                          <Image
                          style={{height:50,width:50,marginRight:10}}
                          source={require('../../../images/icons/DiscoveUserCircle-14.png')}
                          >

                          </Image>
                      </View>
                  </View>
                  <View>
                      <View>
                        <Text style={[{},styles.UserSectionUserProfileHeading]}>wwe</Text>
                      </View>
                      <View>
                          <Text style={[{},styles.UserSectionUserProfileDesc]}>WWE</Text>
                      </View>
                      <View>
                          <Text style={[{},styles.UserSectionUserProfileDesc]}>8.0M Followers 583 Videos</Text>
                      </View>
                  </View>
              </View>
                </TouchableOpacity>
                <ScrollView 
                horizontal={true}
                style={[{},styles.UserSectionScrollView]}>
                   <View style={{flexDirection:'row'}}>
                      <View style={[{borderRadius:50},styles.UserSectionScrollViewCard]}>
                         <ImageBackground
                         style={{height:'100%',width:'100%',borderRadius:50}}
                         source={require('../../../images/icons/image-15.png')}
                         >
                         <View style={[{},styles.UserSectionScrollViewCardRatigView]}>
                             <Text style={[{},styles.UserSectionScrollViewCardRatigText]}>24.8K</Text>
                         </View>
                         </ImageBackground>
                      </View>
                      <View style={[{},styles.UserSectionScrollViewCard]}>
                         <ImageBackground
                         style={{height:'100%',width:'100%',}}
                         source={require('../../../images/icons/image-16.png')}
                         >
                         <View style={[{},styles.UserSectionScrollViewCardRatigView]}>
                             <Text style={[{},styles.UserSectionScrollViewCardRatigText]}>24.8K</Text>
                         </View>
                         </ImageBackground>
                      </View>
                      <View style={[{},styles.UserSectionScrollViewCard]}>
                         <ImageBackground
                         style={{height:'100%',width:'100%',}}
                         source={require('../../../images/icons/image-29.jpg')}
                         >
                         <View style={[{},styles.UserSectionScrollViewCardRatigView]}>
                             <Text style={[{},styles.UserSectionScrollViewCardRatigText]}>24.8K</Text>
                         </View>
                         </ImageBackground>
                      </View>
                      <View style={[{},styles.UserSectionScrollViewCard]}>
                         <ImageBackground
                         style={{height:'100%',width:'100%',}}
                         source={require('../../../images/icons/image-16.png')}
                         >
                         <View style={[{},styles.UserSectionScrollViewCardRatigView]}>
                             <Text style={[{},styles.UserSectionScrollViewCardRatigText]}>24.8K</Text>
                         </View>
                         </ImageBackground>
                      </View>
                      <View style={[{},styles.UserSectionScrollViewCard]}>
                         <ImageBackground
                         style={{height:'100%',width:'100%',}}
                         source={require('../../../images/icons/image-29.jpg')}
                         >
                         <View style={[{},styles.UserSectionScrollViewCardRatigView]}>
                             <Text style={[{},styles.UserSectionScrollViewCardRatigText]}>24.8K</Text>
                         </View>
                         </ImageBackground>
                      </View>
                      <View style={[{},styles.UserSectionScrollViewCard]}>
                         <ImageBackground
                         style={{height:'100%',width:'100%',}}
                         source={require('../../../images/icons/image-15.png')}
                         >
                         <View style={[{},styles.UserSectionScrollViewCardRatigView]}>
                             <Text style={[{},styles.UserSectionScrollViewCardRatigText]}>24.8K</Text>
                         </View>
                         </ImageBackground>
                      </View>
            
                      
                   </View>
                   
                </ScrollView>
                <View style={[{},styles.VideosSection]}>
                    <View>
                        <Text style={[{},styles.VideosSectionHeading]}>VIDEOS</Text>
                    </View>
                   <ScrollView 
                   horizontal={true}
                   style={{flexDirection:'row'}}>
                   <View>
                        <View style={[{},styles.VideosSectionVideoCard]}>
                            <ImageBackground
                            style={{height:'100%',width:'100%'}}
                            source={require('../../../images/icons/image-33.jpg')}
                            >
                             <View style={[{},styles.UserSectionScrollViewCardRatigView]}>
                             <View>
                                <Text style={[{},styles.UserSectionScrollViewCardRatigText]}>24.8K</Text>
                             </View>
                             <View style={{position:'absolute',top:100,right:50,}}>
                                 <TouchableOpacity>
                                     <Image
                                     style={{height:70,width:70,}} 
                                     source={require('../../../images/icons/icon-27.png')}
                                     >

                                     </Image>
                                 </TouchableOpacity>
                             </View>
                         </View>
                            </ImageBackground>
                        </View>
                    </View>
                  
                    <View>
                        <View style={[{},styles.VideosSectionVideoCard]}>
                            <ImageBackground
                            style={{height:'100%',width:'100%'}}
                            source={require('../../../images/icons/image-35.jpg')}
                            >
                             <View style={[{},styles.UserSectionScrollViewCardRatigView]}>
                             <View>
                                <Text style={[{},styles.UserSectionScrollViewCardRatigText]}>24.8K</Text>
                             </View>
                             <View style={{position:'absolute',top:100,right:50,}}>
                                 <TouchableOpacity>
                                     <Image
                                     style={{height:70,width:70,}} 
                                     source={require('../../../images/icons/icon-27.png')}
                                     >

                                     </Image>
                                 </TouchableOpacity>
                             </View>
                         </View>
                            </ImageBackground>
                        </View>
                    </View>
                    <View>
                        <View style={[{},styles.VideosSectionVideoCard]}>
                            <ImageBackground
                            style={{height:'100%',width:'100%'}}
                            source={require('../../../images/icons/image-33.jpg')}
                            >
                             <View style={[{},styles.UserSectionScrollViewCardRatigView]}>
                             <View>
                                <Text style={[{},styles.UserSectionScrollViewCardRatigText]}>24.8K</Text>
                             </View>
                             <View style={{position:'absolute',top:100,right:50,}}>
                                 <TouchableOpacity>
                                     <Image
                                     style={{height:70,width:70,}} 
                                     source={require('../../../images/icons/icon-27.png')}
                                     >

                                     </Image>
                                 </TouchableOpacity>
                             </View>
                         </View>
                            </ImageBackground>
                        </View>
                    </View>
                   </ScrollView>
                   <View>
                       <View>
                           <Text style={{fontWeight:'bold',marginLeft:10}}>SOUNDS</Text>
                       </View>
                   </View>
                    
                </View>  
             </View>
            </View>
        );
    }
}