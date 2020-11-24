import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
        paddingTop:20,
        alignItems: "center",
        textAlign: "center",
        backgroundColor:'#fff',
        flexDirection:'column',
        height:height,
        width:width,
      },

     TOpBar:{
        
         width:width,
         borderBottomWidth:1,
         borderBottomColor:'#000',
         flexDirection:'row',
         paddingVertical:10,
         paddingHorizontal:10
     },
     
     TopBarIcon:{
         height:20,width:20,
     },
     TopBarLabel:{
         fontWeight:'bold',
         alignSelf:'center',
         fontSize:20,
     },
     Row:{
        flexDirection:'row',
        paddingHorizontal:10,
        marginBottom:30
     },
     RowLabel:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
     },
     LabelFont:{
         fontWeight:'bold'
     },
     RowInput:{
        flex:1,
        alignItems:'flex-end'
     }

})



