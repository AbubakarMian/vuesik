import React from "react";
import {View,Text, Dimensions,StyleSheet} from "react-native";
import styles from "../../../css/TabsCSS/FavoritesTabs/HashTagsTabCss";
var {width,height} = Dimensions.get('window');



export default class VideosTab extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <Text>Add item to Favorites to use or find it later</Text>
            </View>
        );
    }
}