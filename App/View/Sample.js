import React from "react";
import {View,Text, Dimensions,StyleSheet} from "react-native";

var {width,height} = Dimensions.get('window');



export default class MyVues extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <Text>fg</Text>
            </View>
        );
    }
}