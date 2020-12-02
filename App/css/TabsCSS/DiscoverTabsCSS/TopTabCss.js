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
      UserSection:{
          flexDirection:'column',          
      },

      UserSectionHeader:{
          flexDirection:'row',
          position:'relative',
          paddingHorizontal:10,
      },
      UserSectionHeaderUsers:{
         color:'purple',
         fontWeight:'bold',
      },
      UserSectionHeaderSeemoreView:{
          position:'absolute',
          right:10,
         

      },
      UserSectionHeaderSeemoreViewRow:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },

      UserSectionUserProfile:{
          flexDirection:'row',
          padding: 10,
      },
      UserSectionUserProfileHeading:{
          fontWeight:'bold'
      },
      UserSectionUserProfileDesc:{
          color:'#aaa',
          fontSize:10
      },
      UserSectionScrollView:{
        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:10,
      },
      UserSectionScrollViewCard:{
          height:150,
          width:width/3,
          flexDirection:'column',
          position:'relative',
          marginHorizontal:5,
      },
      UserSectionScrollViewCardRatigView:{
           position:'absolute',
           right:5,
           top:5,
      },
      UserSectionScrollViewCardRatigText:{
          color:'#fff',
          fontWeight:'bold'
      },
      VideosSection:{
          flexDirection:'column'
      },
      VideosSectionHeading:{
          fontWeight:'bold',
          marginLeft:10,
          marginBottom:10,
      },
      VideosSectionVideoCard:{
        position:'relative',  
        height:250,
        width:width/2,
        
      }
          
      
      
}) 



