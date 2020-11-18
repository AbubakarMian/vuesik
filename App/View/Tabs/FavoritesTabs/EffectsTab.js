import React from "react";
import {View,Text, Dimensions,StyleSheet} from "react-native";
import styles from "../../../css/TabsCSS/FavoritesTabs/EffectsTabCss";
var {width,height} = Dimensions.get('window');



export default class EffectsTab extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <Text>Effects</Text>
            </View>
        );
    }
}