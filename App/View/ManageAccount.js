import React from "react";
import {View,Text, Dimensions,StyleSheet,Image} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../css/ManageAccountCss";
var {width,height} = Dimensions.get('window');



export default class ManageAccount extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <View style={[{},styles.TOpBar]}>
                    <View style={[{},styles.Label]}>
                        <TouchableOpacity
                         onPress={()=>this.props.navigation.navigate('Settings')}
                        >
                            <View>
                            <Image
                                style={[{},styles.TopBarIcon]}
                                source={require('../images/icons/backarrow-36.png')}
                                >

                                </Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[{flex:1}]}>
                        <Text style={[{},styles.TopBarLabel]}>Manage account</Text>
                    </View>

                </View>

                <View style={[{},styles.Row]}>
                    <View style={[{},styles.RowLabel]}>
                        <Text style={[{},styles.LabelFont]}>Phone Number</Text>
                    </View>
                    <View style={[{},styles.RowInput]}>
                        <TextInput>+92******889</TextInput>
                    </View>
                </View>
                <View style={[{},styles.Row]}>
                    <View style={[{},styles.RowLabel]}>
                        <Text style={[{},styles.LabelFont]}>Email</Text>
                    </View>
                    <View style={[{},styles.RowInput]}>
                        {/* <TextInput>+92******889</TextInput> */}
                    </View>
                </View>
                <View style={[{},styles.Row]}>
                    <View style={[{},styles.RowLabel]}>
                        <Text style={[{},styles.LabelFont]}>Password</Text>
                    </View>
                    <View style={[{},styles.RowInput]}>
                        {/* <TextInput>+92******889</TextInput> */}
                    </View>
                </View>
            </View>
        );
    }
}