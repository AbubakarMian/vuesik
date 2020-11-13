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
        marginTop:height/10,
        justifyContent:'center'
     },
      
     TopbarImg:{
         height:10,
         width:width-40
     },
     
     BottomBarImageViwBig:{
        // flex: 4,
        alignItems:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    BottombarImgBig:{
        height:70,
        width:70,
        alignSelf:'center'
        
    }, 
    BottomBarImageViwSmall:{
        // flex: 1,
        alignItems:'center',
        alignSelf:'flex-end',
    },
    BottombarImgsmall:{
        height:30,
        width:30,
        alignSelf:'flex-end'
        
    }, 
     BottomBar:{
        flexDirection:'row',
        alignSelf:'baseline',
        position:'absolute',
        bottom:-450,
     }
})



