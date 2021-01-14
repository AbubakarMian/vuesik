import React from "react";
import {View,Text, Dimensions,StyleSheet,Image,TouchableOpacity} from "react-native";

var {width,height} = Dimensions.get('window');



export default class Header extends React.Component{

    render(){
        return(
            <View
          style={{
            flexDirection: 'row',
            width: width,
            paddingHorizontal: 10,
            paddingVertical:20,
            borderBottomWidth: 1,
            backgroundColor:'#fff'
          }}>
          <View style={{flex: 1, alignSelf: 'flex-start',backgroundColor:'#fff'}}>
            <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('SignUp')}>
              <Image
                source={require('../../images/icons/backarrow-36.png')}
                style={{height: 20, width: 20}}></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 4, justifyContent: 'center', alignSelf: 'center',}}>
            <Text
              style={{
                textAlign: 'center',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              Sign Up
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
            // onPress={()=>this.props.navigation.navigate('Settings')}
            >
              {/* <Image
                source={require('../images/icons/settings-23.png')}
                style={{height:30,width:5,marginRight:10}}
                >

                </Image> */}
            </TouchableOpacity>
          </View>
        </View>
        );
    }
}