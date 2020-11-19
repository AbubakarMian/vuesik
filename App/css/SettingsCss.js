import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        backgroundColor:'#fff',
        flexDirection:'column',
        height:height,
        width:width,
      },
      TopRow:{
          flexDirection:'row',
          width:width
      }
})



