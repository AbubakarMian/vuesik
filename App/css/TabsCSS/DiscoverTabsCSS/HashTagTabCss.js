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
        paddingHorizontal:10,
        paddingVertical:10,
      },
      Container:{
          flexDirection:'column',
          paddingVertical:10,
          
      },

      Header:{
          flexDirection:'row',
          position:'relative',
          borderTopWidth:1,
          paddingTop:10,
          borderTopColor:'#aaaa',
          marginTop:10,
      },
      HeaderContent:{
          flexDirection:'column',
          paddingHorizontal: 10,
      },
      HeaderContentHeading:{
          color:'purple',
          fontSize:12,
          fontWeight:'bold',  
      },
      HeaderContentDesc:{
          fontSize:10,
          color:'#a6a6a6a6'
      },
      HeaderViewsBtnview:{
        position:'absolute',
        right:0,
        top:10,    
      },
      HeaderViewsBtnRow:{
        flexDirection:'row',
        backgroundColor:'darkblue',
        justifyContent:'center',
        borderRadius:5,
        padding:5,
        alignItems:'center',
      },
      HeaderViewsBtnRowText:{
        color:'#fff',
        fontSize:10,
        textAlign:'center',
        marginRight:5,
      }


      
}) 



