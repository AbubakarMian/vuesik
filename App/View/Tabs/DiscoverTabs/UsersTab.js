import React from "react";
import {View,Text, Dimensions,StyleSheet,Image} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../../css/TabsCSS/DiscoverTabsCSS/UsersTabCss";
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

export default class UsersTab extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                 <ScrollView>
                   <View style={[{},styles.GridRow]}>
                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-14.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>

                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-15.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>
                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-16.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>
                      
                      
                   </View>


                   <View style={[{},styles.GridRow]}>
                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-14.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>

                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-15.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>
                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-16.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>
                      
                      
                   </View>



                   <View style={[{},styles.GridRow]}>
                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-14.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>

                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-15.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>
                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-16.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>
                      
                      
                   </View>

                   <View style={[{},styles.GridRow]}>
                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-14.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>

                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-15.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>
                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-16.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>
                      
                      
                   </View>
                   <View style={[{},styles.GridRow]}>
                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-14.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>

                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-15.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>
                      <View style={[{},styles.GridColumn]}>
                        <View style={[{position:'absolute',top:5,right:5}]}>
                            <TouchableOpacity>
                                <Image
                                style={[{height:15,width:15}]}
                                source={require('../../../images/icons/close-17.png')}
                                >

                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={{height:60,width:60}}
                            source={require('../../../images/icons/circle-16.png')}
                            >

                            </Image>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnUserNameText]}>ali_rawal94</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnNameText]}>Ali Rawal</Text>
                        </View>
                        <View>
                            <Text style={[{},styles.GridColumnDesc]}>8.0M Followers | 583 Videos</Text>
                        </View>
                         <TouchableOpacity>
                           <View style={[{},styles.GridColumnBtnView]}>
                              <Text style={[{},styles.GridColumnBtnText]}>Follow</Text>
                          </View>
                         </TouchableOpacity>
                      </View>
                      
                      
                   </View>
                       
                 </ScrollView>
            </View>
        );
    }
}