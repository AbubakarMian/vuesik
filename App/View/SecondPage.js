import React from "react";
import {View,Text, Dimensions,StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

var {width,height} = Dimensions.get('window');



export default class SecondPage extends React.Component{

    render(){
        return(
            <View style={[{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column',}]}>
                <Text style={{fontWeight:'bold',marginBottom:20,}}> Next Page</Text>
                <TouchableOpacity
                onPress={()=> this.props.navigation.navigate('FirstPage')}
                >
                  <Text>Goto First Page</Text>
                </TouchableOpacity>
            </View>
        );
    }
}