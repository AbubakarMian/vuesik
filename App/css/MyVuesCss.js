import React from "react";

import {View,Text, Dimensions,StyleSheet, ImageBackground} from "react-native";

var {width,height} = Dimensions.get('window');

export default StyleSheet.create({
 
        center: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          color:"#fff",
          paddingBottom:'10%'
        },

      
        viewBottom:{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
           
        },
        viewBottomRow:{
            height:300,
            width:width,
            flexDirection:'row',
            color:'#fff',
        },
        viewBottomColumn1:{
            paddingTop:50,
            flex:1,
            flexDirection:'column',
            justifyContent:'flex-end',
            marginBottom:20,
            marginLeft:10
         
        },
        viewBottomColumn2s:{
            paddingTop:50,
            flex:1,
            flexDirection:'column',
         
        },
        viewBottomColumn1username:{
            
            color:'#fff',
            fontWeight:'bold',
            fontSize:12,
            marginLeft:10,
            marginTop:10,
        },
        viewBottomColumn1xt:{
            color:'#fff',
            fontWeight:'bold',
            fontSize:8,
            marginLeft:10,
            marginTop:10,
        },
        viewBottomColumn2:{
            flexDirection:'column',
            flex:1,
            height:200,
            width:width,
            flexDirection:'row',
            color:'#fff',
            justifyContent:'flex-end',
        },
        
        viewBottomColumn2RoundImg:{
            width: 40,
            height: 40,
            borderRadius:50,
            marginBottom:10,
           
    
        },



        // Modal

        mainROW:{
            flexDirection:'row',
            flex: 1,
            height:70,
            width:width,
            marginTop:5,
            marginBottom:10,
           
        },

        mainROWColumn1:{
            flex: 1,
            height:50,
           
        },
        mainROWColumn2:{
            flex: 4,
            height:70,
            fontSize:10,
            justifyContent:'flex-end',
            alignContent:'flex-end',
        },
        mainROWColumn3:{
            flex: 1,
            height:70,
            justifyContent:'flex-end',
            alignContent:'flex-end',
            
        }

       
                                    

      
})

