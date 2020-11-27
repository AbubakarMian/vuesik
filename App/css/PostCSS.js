import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
       
        // alignItems: "center",
        // textAlign: "center",
        backgroundColor:'#fff',
        // paddingRight:10,
      },
      MainView:{
        height:height,
        width:width,
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'column',
      },
      MainViewCol1:{
        flex: 2,
        borderBottomWidth:1,
        borderBottomColor:'#c9c7c7',
        paddingVertical:10,
      
      },
      MainViewCol2:{
        flex: 3,
        // borderBottomWidth:2,
        // paddingVertical:10
      },
      Col2Txt:{
        color:'#c9c7c7',
        paddingHorizontal:5,
        marginTop:5,
        fontSize:12,
        justifyContent:'center',
        
      },
      MainViewCol3:{
        flex: 2,
        borderBottomWidth:2,
        alignItems:'baseline',
        // flexDirection:'row'
      },
      MainViewCol1Row:{
        flex: 1,
        flexDirection:'row',
      
      },
      MainViewCol1RowDesc:{
        flex: 2,
        
        justifyContent:'center',
        alignItems:'center'
      },
      MainViewCol1RowDescTXT:{
        left:0,
        color:'#0e5af2',
        paddingHorizontal:10,
        fontWeight:'bold',
        //  marginBottom:10,
        fontSize:10
      },
      MainViewCol1RowDescBtnTXT:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:8,
        marginBottom:5,
        paddingHorizontal:10,
        marginTop:3,
        borderRadius:1,
        
      },
      MainViewCol1RowPost:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        
      },
      MainViewCol1RowPostBtn:{
        paddingHorizontal:10,
        paddingVertical:3,
        marginRight:10,borderRadius:5,
        alignSelf:'flex-start'
      },

                // Modal

      MOdalMainView:{
          justifyContent:'center',
          alignItems:'center',
          paddingVertical:20
      },
      MOdalTxtDesc:{
        color:'#fff',
        fontSize:10
      },          
})



