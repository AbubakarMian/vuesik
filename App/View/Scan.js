import React from "react";
import {View,Text, Dimensions,StyleSheet} from "react-native";
import styles from "../css/ScanCss";
var {width,height} = Dimensions.get('window');



export default class Scan extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <Text>fg</Text>
            </View>
        );
    }
}