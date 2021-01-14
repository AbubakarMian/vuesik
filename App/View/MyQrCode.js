import React from "react";
import {View,Text,Image, Dimensions,StyleSheet,TouchableOpacity} from "react-native";
import styles from "../css/MyQrCodeCss";
var {width,height} = Dimensions.get('window');



export default class MyQrCode extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
              <View style={{flexDirection:'row',width:width,paddingHorizontal:20,borderBottomWidth:1,paddingBottom:20}}>
                    <View style={{flex:1}}>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Settings')}
                    >
                        <Image
                        style={{width:30,height:20}}
                        source={require('../images/icons/backarrow-36.png')}
                        >

                        </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:2}}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>My VueSik Code</Text>
                    </View>
                </View>
                <View>
                    <Image
                    style={{height:200,width:200,marginTop:50}}
                    source={require('../images/icons/qrcode.png')}
                    >

                    </Image>
                </View>
                <View style={{marginTop:10,marginBottom:50}}>
                    <Text style={{fontSize:30,fontWeight:'bold'}}>aukhan15</Text>
                </View>
                <View>
                    <Text style={{color:'#aaa',fontSize:10}}>Scan ViewSik's Code to follow me</Text>
                </View>
                <View>
                    <Image
                    source={require('../images/icons/logoqr.png')}
                    style={{width:150,height:40,marginTop:30}}
                    >

                    </Image>
                </View>
                <View>
                    <Text style={{fontSize:10,marginTop:20}}>Please use the latest version of our app to scan the  code.</Text>
                </View>
            </View>
        );
    }
}