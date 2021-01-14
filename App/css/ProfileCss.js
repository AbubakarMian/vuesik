import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";


var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
               
    center: {
        flex: 1,
       
        alignItems: "center",
        textAlign: "center",
        backgroundColor:'#fff',
        flexDirection:'column',
      },
      TopRow:{
        flexDirection:'row',
        // width:width,borderBottomWidth:1,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10
    },
      displayView:{
     
        height:'40%',
        width:width,
        borderBottomWidth:1,
 
        
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
        flex:5,
        
      },
      displayImgAddBtnIcon:{
        height:30,
        width:20,
        marginLeft:5,
        flexDirection:'column'
      },
      gridView:{
        flex:3,
        height: '60%',
        width:width,
      },
      gridRow:{
        width:width,
        height:130,
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
        height:60,
        width:60,
        marginLeft:40,
        marginTop:25
      },
      gridColumnRating:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'right',
        marginRight:15,
        marginTop:5
      }
                                        

      
})



