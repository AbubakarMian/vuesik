import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
        paddingTop:30,
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
        flex: 5,
      },
      TopBarHeadingTxt: {
        fontWeight: 'bold',
      },
      MainContainer:{
          paddingHorizontal:20,
          paddingVertical:20,
      
      },
      Card:{
        height:'80%',
        alignSelf:'center',
        marginBottom:'50%',
        backgroundColor:'#fff',
        width: width-50,
        borderRightWidth:3,
        borderBottomWidth:3,
        borderColor:'#aaaa',
        borderLeftWidth:1,
        borderTopWidth:1,
        shadowColor:'red',
        shadowOpacity:1,
        shadowOpacity: 0.8,
        shadowOffset: { width: 5, height: 5 },
        padding: 10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        
      },
      Paragraph:{
        color:'#aaa',
        // textAlign:'center',
        fontSize:12,
        marginVertical:20,
        
      },
})



