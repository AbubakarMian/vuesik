import React from "react";
import {View,Text, Dimensions,StyleSheet} from "react-native";

var {width,hight} = Dimensions.get('window');

const style =StyleSheet.create({
    center:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#fff",
    },
});

export default class MyVues extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <Text>fg</Text>
            </View>
        );
    }
}