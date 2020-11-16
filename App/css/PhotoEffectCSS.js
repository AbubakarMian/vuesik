import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";

var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        backgroundColor:'#fff',
        height:height,
        width:width,
      },
     TopBar:{
        alignSelf:'stretch',
        flexDirection:'row',
        marginTop:height/20,
     },
     TopBarImageViw:{
         flex: 1,
         alignItems:'center'
     }, 
     TopbarImg:{
         height:40,
         width:40
     },
     TopbarImgText:{
        color:'#fff',
        alignSelf:'center'
     },
     BottomBarImageViw:{
        flex: 1,
        alignItems:'center',
        alignSelf:'baseline',
    }, 
     BottomBar:{
        flexDirection:'row',
        alignSelf:'baseline',
        position:'absolute',
        bottom:height/5
     }
})



