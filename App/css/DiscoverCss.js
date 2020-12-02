import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";
import { color } from "react-native-reanimated";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
        paddingTop:100,
        backgroundColor:'#fff',
        flexDirection:'column',
        height:height,
        width:width,
      },
      TopBarRow:{
          marginTop:30,
          marginBottom:10,
          flexDirection:'row',
          position:'relative',
          justifyContent:'center',
          width:width,
          alignItems:'center',

      },
      TopBarRowIconView:{
          position:'absolute',
          left: 5,
       
          width:'10%'  
      },
      TopBarRowSearchBarView:{
        width:'70%', 
        backgroundColor:'#aaaa',
        borderRadius:5,
        height:30,
        flexDirection:'row',
        paddingHorizontal:10,
        alignItems:'center',
      

    },
      TopBarRowSearchView:{
        width:'15%', 
        position:'absolute',
        right: 10,
       
    },
   
    TopBarRowSearchText:{
        color:'purple',
        textAlign:'right'
       }
})



