import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
        
     
        backgroundColor:'#fff',
        flexDirection:'column',
        width:width,
        height:height,
      },
      Container:{
          paddingHorizontal:20,
      },
      Row:{
          flexDirection:'row',
          marginTop:20
      },
      RoundImageView:{
          flex:1,
      },
      RoundImage:{
        height:60,
        width:60
      },
      ContenView:{
        flexDirection:'column',
        flex:3,
        justifyContent:'center',
        
      },
      HeadingTxt:{
          color:'purple',
          fontWeight:'bold'
      },
      DescriptionTxt:{
          color:'#aaa',
          fontWeight:'bold',
          fontSize:8
      },
      FollowView:{
        
           flex:1
      },
      FollowBtnView:{
        backgroundColor:'purple',
        paddingHorizontal:5,
        paddingVertical:5,
        borderRadius:5,
      },
      FollowBtnTex:{
        color:'#fff',fontSize:10
      }

})



