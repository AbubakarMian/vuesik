import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";

var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
        center: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          color:"#fff",
        },
        MainView:{
          height:height,
          width:width,
          position:'relative',
        },
        TopBar:{
          flexDirection:'row',
          top:'10%',
          justifyContent:'center',
        },
        TopBarRoundImg:{
          marginHorizontal:10,
          height:40,
          width:40,
          alignSelf:'center',
        },
        TopBarRoundImgTxt:{
           color:'#fff',
           alignSelf:'center'
        },
        BottomCenterImaeView:{
          position:'absolute',
          top:'80%', 
          left:'40%',
        },

        BottomCenterImae:{
          marginHorizontal:10,
          height:40,
          width:40,
          alignSelf:'center'
        },
})

