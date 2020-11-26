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
          width:width,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
        paddingHorizontal:10,
        paddingHorizontal:20,
      },
      SearchContainer:{
            borderTopWidth:1,
            marginTop:10,
            width:width-30,
            borderTopColor:'#aaa',
            paddingVertical:10,            
      },
      SearchRow:{
          backgroundColor: '#d3d1d1',
          flexDirection:'row',
          alignItems:'center',
          paddingHorizontal:10,
          borderRadius:5,
      },
      Heading:{
          color:'#a5a5a5',
          fontWeight:'bold',
          marginVertical:10
      },
      ScrollViewContainer:{
          paddingHorizontal:20,
      },
      ScrollViewRow:{
          flexDirection:'row',
          position:'relative',
          width:width,
          paddingVertical:10,
      },
      ScrollViewRowImg:{
          position:'absolute',
          right:50
      }

    
})



