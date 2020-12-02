import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
        paddingTop:30,
   
        textAlign: "center",
        backgroundColor:'#fff',
        flexDirection:'column',
        height:height,
        width:width,
      },
      TopBar:{
          flexDirection:'row',
          position:'relative',
          width:width,
          paddingHorizontal: 10,
      },

      TopBarSharImageView:{
          position:'absolute',
          right:10,
      },
      InfoSection:{
          flexDirection:'row',
          width:width,
          height:width/3,
          marginTop:30,

          paddingHorizontal:20,
          position:'relative',
          
      },
      InfoSectionHeading:{
          fontWeight:'bold',

      },
     
      ScrollContainer:{
          marginTop:30,
          width:width
      },
      GridRow:{
        flex:1,
        flexDirection:'row',
        width:width
   
       
    },
      GridColumn:{
          height:width/3+50,
          width: width/3,

          borderWidth:1,
          borderColor:'#fff'
      }
})



