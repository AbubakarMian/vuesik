import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
        paddingTop:30,
      
        backgroundColor:'#fff',
        flexDirection:'column',
        height:height,
        width:width,
      },
      MainContainer:{
        paddingHorizontal:20
      },
      Container:{
        borderBottomWidth:1,
        borderBottomColor:'#aaa',
        paddingVertical:10
      },
      Heading:{
        color:'#aaa',
        fontWeight:'bold',
      },
      Row:{
          flexDirection:'row',
          width: width,
          position:'relative',
          marginVertical:10
      },
      Label:{
         fontWeight:'bold'
      },
      ToggleView:{
        position:'absolute',right:40
      }
})



