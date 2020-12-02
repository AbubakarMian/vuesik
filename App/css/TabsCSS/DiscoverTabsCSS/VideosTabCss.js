import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
        // paddingTop:10,
        backgroundColor:'#fff',
        flexDirection:'column',
        width:width,
        height:height,
      },
      Grid:{
          width:width,
          height:height,
          flexDirection:'column'
      },
      GridRow:{
          flexDirection:'row'
      },
      GridColumn:{
          width:width/2,
          height:width-width/4,
          borderWidth:1,
          borderColor:'#fff',
          position:'relative',
      },
      GridColumnRatingView:{
          position:'absolute',
          top:10,
          right:10,
      },
      GridColumnRatingText:{
          color:'#fff',
          fontWeight:'bold',
      },
     
      
}) 



