import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
        paddingTop:10,
        backgroundColor:'#fff',
        flexDirection:'column',
        width:width,
        height:height,
      },
      Row:{
         paddingHorizontal:10,
        //  marginVertical:10,
         flexDirection:'row',
         position:'relative',
         width:width,

      },
      ImageView:{
        position:'relative',
      },
      ImageViewPlay:{
        height:30,
        width:30,
        position:'absolute',
        top:20,
        right:20
      },
      ContentheadingTex:{
        fontWeight:'bold',
        fontSize:12,
       
      },
      ContentDescTex:{
         color:'#aaaa',
         marginTop:5,
      },
      RatingView:{
        position:'absolute',
        right:20,
        bottom:2
      },
      RatingText:{
          color:'#aaaa',
          marginVertical:10
      }
      
}) 



