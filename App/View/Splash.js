import React from "react";
import {View,Text, Dimensions,StyleSheet, ImageBackground,Image} from "react-native";

var {width,height} = Dimensions.get('window');

const style =StyleSheet.create({
    center:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    
 
    },
});

export default class SplashScreen extends React.Component{

    render(){
        return(
            <View style={[{flexDirection:'column',justifyContent:'center',alignItems:'center'}, style.center]}>
                <ImageBackground
                source={require('../images/icons/bg.jpg')}
                style={{height:height,width:width}}
                >
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:10,paddingVertical:10}}>
                        <Image
                        source={require('../images/icons/logo.png')}
                          style={{width:120,height:100,}}
                        >

                        </Image>
                    </View>
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                        <Image
                        source={require('../images/icons/logo2.png')}
                        style={{height:300,width:300}}
                        >

                        </Image>
                    </View>


                </ImageBackground>
            </View>
        );
    }
}