import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
        paddingTop:50,
        backgroundColor:'#fff',
        flexDirection:'column',
        height:height,
        width:width,
      },
      TopBar: {
        paddingHorizontal: 20,
        width: width,
        borderBottomWidth: 1,
        paddingVertical: 10,
        flexDirection: 'row',
      },
      TopBarIcon: {
        flex: 1,
      },
      TopBarHeading: {
        flex: 1,
      },
      TopBarHeadingTxt: {
        fontWeight: 'bold',
      },
      MainContainer:{
          paddingHorizontal:20,
          paddingVertical:20,
      },
      Heading:{
        color:'#aaa',
        fontWeight:'bold',
        fontSize:20
      },
      Desc:{
        justifyContent:'center',
        paddingHorizontal:10
      },
      DescText:{
        fontSize:15,
        fontWeight:'700'
      },
      DATAtable:{
 
          justifyContent:'center',
          alignItems:'center',
          marginHorizontal:50,
          marginTop:30,
      
          flexDirection:'column',
          flex: 1,
   
      },
      DATAtableRow:{
          flexDirection:'row',
          flex: 1,
          justifyContent:'center',
          alignItems:'center',
          marginTop:20
          
      },
      DATAtableCol:{
          flex: 1,
          alignItems:'center',
          alignItems:'center',
          borderWidth:1,
          borderColor:'#aaa',
            
      },
      DATAtableColHeading:{
          flex: 1,
          fontWeight:'bold',
          justifyContent:'center',
          alignSelf:'center'
      }

}) 



