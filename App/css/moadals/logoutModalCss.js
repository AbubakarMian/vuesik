import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
        paddingTop:50,
        alignItems: "center",
        textAlign: "center",
        backgroundColor:'#fff',
        flexDirection:'column',
        height:height,
        width:width,
      },
      MainContainer:{
        width:width-40,
        height:180,
         
        borderRadius:5, 
        alignSelf:'center',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
      },
      Heading:{
          color:"#fff",
          fontWeight:'bold',
          fontSize:20,
      },
      Paragraph:{
          color:'#fff',
          fontSize:12,
      },
      btnView:{
          backgroundColor:'#fff',
          
          paddingVertical:6,
          borderRadius:5,
         
      }
})



