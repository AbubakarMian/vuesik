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
        height:height,
        width:width,

        
      },

      ChangeLogoRow:{
        paddingHorizontal:40,
        paddingVertical:20,
        flexDirection:'row'
   
      },
      ChangeLogoImageView:{
        marginHorizontal:10,
        flex: 1,
       
        
      },
      ChangeLogoVideoView:{
        marginHorizontal:10,
        flex: 1,
      },

      mROW:{
        height:40,
        width:width,
        flexDirection:'row',

      },
      mROWCol1:{
        fontSize:12,
    
        marginLeft:10,
        flex:1,
        
      },
      mROWCol1Text:{
        alignSelf:'baseline',
        marginTop:15
      },
      mROWCol2:{
        fontSize: 10,
        flex:1,
        justifyContent:'flex-end',
        alignSelf:'flex-end',
        

      }
      

     
})



