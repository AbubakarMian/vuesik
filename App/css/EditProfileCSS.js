import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
        paddingTop:50,
        alignItems: "center",
        textAlign: "center",
        backgroundColor:'#fff',
        flexDirection:'column',
      },
      displayView:{
        
     
        width:width,
        height:170,
     
        borderBottomWidth:1
      },
      displayImgLogo: {
        
        height:80,
        width:80,
        marginHorizontal:10,
        borderRadius:50
        
      },
      displayFollowing:{
          fontSize:16,
          fontWeight:'bold',
          textAlign:'center',
          paddingLeft:5,
          paddingRight:5,
          height:50,
          marginTop:20,
          marginLeft:10,
          borderWidth:2,
          borderColor:'#800080'
          
      },
      displayImgDesc:{
        textAlign:'center',
        fontSize:5
      },
    
      displayImgAddBtn:{
        paddingVertical:5,
        flexDirection:'row',
        backgroundColor:'darkblue',
        justifyContent:'center',
        alignItems:'center',
        width:170,
        alignSelf:'center',
        borderRadius:5
      },
      displayImgAddBtnTxt:{
        color:'#fff',
        fontSize:12,
        alignSelf:'center',
     
        paddingLeft:5,
        flexDirection:'column',
        flex:4,
        
      },
      displayImgAddBtnIcon:{
        height:30,
        width:20,
        marginLeft:5,
        flexDirection:'column'
      },
      gridView:{
        width:width,
        height:height-200,
        flex:3,
        
      },
      gridRow:{
        width:width,
        height:150,
        flexDirection:'row',
    
       
      },
      gridColumn1:{
    
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flex:1
      },
      gridColumn2:{
        
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flex:1
    
      },
      gridColumn3:{
       
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flex:1
      },
      gridColumnImg:{
        height:70,
        width:70,
        marginLeft:40,
        marginTop:25
      },
      gridColumnRating:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'right',
        marginRight:30,
        marginTop:5
      }                              

      
})





