import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
       
        alignItems: "center",
        textAlign: "center",
        backgroundColor:'#fff'
      },
      TopRow:{
        flexDirection:'row',
        // width:width,borderBottomWidth:1,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10
    },
      displayView:{
     
        flex:2.5,
        width:width,
        borderBottomWidth:1
      },
      displayImgLogo: {
        
        height:50,
        width:50,
        marginHorizontal:10,
        borderRadius:50
        
      },
      displayFollowing:{
          fontSize:8,
          fontWeight:'bold',
          textAlign:'center',
          paddingLeft:5,
          paddingRight:5,
          height:40,
          marginTop:10,
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
        width:150,
        alignSelf:'center',
        borderRadius:5
      },
      displayImgAddBtnTxt:{
        color:'#fff',
        fontSize:10,
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

      // 


    cardViewRow:{
      width:width,
      height:120,
      flexDirection:'row',
    },
    cardViewColumn:{
   
    
      height: 120,
      width:70,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      flex:1,
      backgroundColor:'#efeaea',
      marginHorizontal:5,
      marginHorizontal:5,
      borderRadius:3
    },
    cardViewHeading:{
      marginLeft:20,
      marginLeft:10,
    },
  
      // 
      gridView:{
        flex:2,
        width:width,
      },
      gridRow:{
        width:width,
        height:120,
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
        height:40,
        width:40,
        alignSelf:'center',
        top:20
        
      },
      gridColumnRating:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'right',
        marginRight:30,
        marginTop:5
      }
                                        

      
})



