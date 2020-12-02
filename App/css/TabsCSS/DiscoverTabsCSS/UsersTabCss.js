import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
        paddingTop:10,
        paddingHorizontal:6,
        backgroundColor:'#fff',
        flexDirection:'column',
        width:width,
        height:height,
      },
      GridRow:{
        flexDirection:'row'
      },
      GridColumn:{
        width:width/3-4,
        height:width/3+40,
        backgroundColor:'#e2e2e2',
        borderRadius:8,
        borderWidth:3,
        borderColor:'#fff',
        position:'relative',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      },
      GridColumnUserNameText:{
        fontSize:12,
        fontWeight:'bold',
      },
      GridColumnNameText:{
        fontSize:12,
        color:'#898585'
      },
      GridColumnDesc:{
        fontSize:6,
        color:'#898585'
      },
      GridColumnBtnView:{
        backgroundColor:'purple',
        paddingHorizontal:20,
        paddingVertical:2,
        borderRadius:2,
        marginTop:2
      },
      GridColumnBtnText:{
        color:'#fff',
        fontSize:10,
      }


}) 



