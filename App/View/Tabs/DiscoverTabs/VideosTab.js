import React from "react";
import {View,Text, Dimensions,StyleSheet, ImageBackground,Image} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../../css/TabsCSS/DiscoverTabsCSS/VideosTabCss";
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

export default class VideosTab extends React.Component{

    render(){
        return(
            <ScrollView style={[{},styles.center]}>
                 <View style={[{},styles.Grid]}>
                   <View style={[{},styles.GridRow]}>
                     <TouchableOpacity>
                     <View style={[{},styles.GridColumn]}>
                          <ImageBackground
                          source={require('../../../images/icons/profile-15.jpg')}
                          style={{height:'100%'}}
                          >
                          <View style={[{},styles.GridColumnRatingView]}>
                              <Text style={[{},styles.GridColumnRatingText]}>24.8k</Text>
                          </View>
                           <View style={[{},]}>
                               <Image
                               style={{height:80,width:80,alignSelf:'center',top:width/4}}
                               source={require('../../../images/icons/icon-27.png')}
                               >

                               </Image>
                           </View>
                          </ImageBackground>
                      </View>
                     </TouchableOpacity>
                     <TouchableOpacity>
                     <View style={[{},styles.GridColumn]}>
                          <ImageBackground
                          source={require('../../../images/icons/profile-21.jpg')}
                          style={{height:'100%'}}
                          >
                          <View style={[{},styles.GridColumnRatingView]}>
                              <Text style={[{},styles.GridColumnRatingText]}>24.8k</Text>
                          </View>
                           <View style={[{},]}>
                               <Image
                               style={{height:80,width:80,alignSelf:'center',top:width/4}}
                               source={require('../../../images/icons/icon-27.png')}
                               >

                               </Image>
                           </View>
                          </ImageBackground>
                      </View>
                     </TouchableOpacity>
                   
                   </View>

                   <View style={[{},styles.GridRow]}>
                      <TouchableOpacity>
                      <View style={[{},styles.GridColumn]}>
                          <ImageBackground
                          source={require('../../../images/icons/profile-25.jpg')}
                          style={{height:'100%'}}
                          >
                          <View style={[{},styles.GridColumnRatingView]}>
                              <Text style={[{},styles.GridColumnRatingText]}>24.8k</Text>
                          </View>
                           <View style={[{},]}>
                               <Image
                               style={{height:80,width:80,alignSelf:'center',top:width/4}}
                               source={require('../../../images/icons/icon-27.png')}
                               >

                               </Image>
                           </View>
                          </ImageBackground>
                      </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <View style={[{},styles.GridColumn]}>
                          <ImageBackground
                          source={require('../../../images/icons/profile-20.jpg')}
                          style={{height:'100%'}}
                          >
                          <View style={[{},styles.GridColumnRatingView]}>
                              <Text style={[{},styles.GridColumnRatingText]}>24.8k</Text>
                          </View>
                           <View style={[{},]}>
                               <Image
                               style={{height:80,width:80,alignSelf:'center',top:width/4}}
                               source={require('../../../images/icons/icon-27.png')}
                               >

                               </Image>
                           </View>
                          </ImageBackground>
                      </View>
                      </TouchableOpacity>
                   
                   </View>
                   <View style={[{},styles.GridRow]}>
                      <TouchableOpacity>
                      <View style={[{},styles.GridColumn]}>
                          <ImageBackground
                          source={require('../../../images/icons/profile-14.png')}
                          style={{height:'100%'}}
                          >
                          <View style={[{},styles.GridColumnRatingView]}>
                              <Text style={[{},styles.GridColumnRatingText]}>24.8k</Text>
                          </View>
                           <View style={[{},]}>
                               <Image
                               style={{height:80,width:80,alignSelf:'center',top:width/4}}
                               source={require('../../../images/icons/icon-27.png')}
                               >

                               </Image>
                           </View>
                          </ImageBackground>
                      </View>
                      </TouchableOpacity>
                     <TouchableOpacity>
                     <View style={[{},styles.GridColumn]}>
                          <ImageBackground
                          source={require('../../../images/icons/profile-24.jpg')}
                          style={{height:'100%'}}
                          >
                          <View style={[{},styles.GridColumnRatingView]}>
                              <Text style={[{},styles.GridColumnRatingText]}>24.8k</Text>
                          </View>
                           <View style={[{},]}>
                               <Image
                               style={{height:80,width:80,alignSelf:'center',top:width/4}}
                               source={require('../../../images/icons/icon-27.png')}
                               >

                               </Image>
                           </View>
                          </ImageBackground>
                      </View>
                     </TouchableOpacity>
                   
                   </View>
            

                 </View>
            </ScrollView>
        );
    }
}