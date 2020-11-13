import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
      
        alignItems: "center",
        textAlign: "center",
        height:height,
        width:width,
        
      },
      mainScreen:{
        flexDirection:'column',
        height:height,
        width:width,
      },
      topArea:{
        flexDirection:'column',      
        alignItems: "center",
        textAlign: "center",
        justifyContent:'center',
        flex:2,
      },
      topAreaHeading:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
      },
      topAreaDesc:{
         color:'#fff'
      },
      topAreaProfileIMG:{
        height:70,
        width:70,
        marginTop:30,
        borderRadius:50,
      },
      topAreaProfileName:{
        color:'#fff',
        marginTop:10,
        fontWeight:'bold',
      },
      topAreaUserName:{
        color:'#fff',
        marginTop:10,
        fontWeight:'500',
        marginBottom:10,
      
      },
      topAreaFollowBtn:{
        color:'#fff',
        marginLeft:50,
         marginRight:50,
         marginTop:8,
         marginBottom:8,
         fontSize:10,
      },
      bottomArea:{
        flex:1,
        width:width,
        
      },
      bottomAreaCol2Row:{
        flexDirection:'row',      
       
        flex:1,
        borderRightWidth:2,
      },
      bottomAreaCol2RowCol1:{
        flexDirection:'row',
        flex: 1,
        borderRightWidth:2,
      },
      bottomAreaCol2RowCol2:{
        flexDirection:'row',
        flex: 1,
        borderTopWidth:2,
        borderTopColor:'#000',
      }
     
})



