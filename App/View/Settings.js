import React from "react";
import {View,Text, Dimensions,StyleSheet} from "react-native";
import styles from "../css/SettingsCss";
var {width,height} = Dimensions.get('window');



export default class Settings extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <View style={[{},styles.TopRow]}>
                    <View>
                        <Text>sdg</Text>
                    </View>
                    <View>
                        <Text>sdg</Text>
                    </View>
                    <View>
                        <Text>sdg</Text>
                    </View>
                </View>
            </View>
        );
    }
}