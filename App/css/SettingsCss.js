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
          width:width,borderBottomWidth:1,
          paddingTop:20,
          paddingBottom:10,
          paddingLeft:10
      },
      containerView:{
          width:width-20,
          alignSelf:'center',
          paddingVertical:10,
          borderBottomWidth:1,
          borderBottomColor:'#aaa'
      },
      Heading:{
         color:'#aaaaaa',
         fontWeight:'bold'
      },
      Row:{
        flexDirection:'row',
        marginTop:10
      },
      IconImg:{
        height:30,
        width:30
      }

})



