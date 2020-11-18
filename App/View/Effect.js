import React from "react";
import {View,Text, Dimensions,StyleSheet, ImageBackground,Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../css/EffectCSS";
import * as Progress from 'react-native-progress';
var {width,height} = Dimensions.get('window');


export default class Effect extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../images/icons/bgPhotoEffect.jpg')}
                >

               <View style={{position:'relative',top:'10%',alignItems:'center'}}>
                  <View style={{position:'absolute',
                  }}>

                <Progress.Bar progress={0.3} width={width-20} height={5} color="#7c049e" />

                  </View>
                </View>
                <View style={{position:'relative',left:'80%',top:'90%'}}>
                  <View style={{position:'absolute',
                  }}>

                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('VideoComplete')}
                >
                <Image
                  style={{height:30,width:30}}
                  source={require('../images/icons/Effecttick.png')}
                  >

                  </Image>
                </TouchableOpacity>

                  </View>
                </View>
                <View style={{position:'relative',left:'40%',top:'85%'}}>
                  <View style={{position:'absolute',
                  }}>

                 <TouchableOpacity>
                 <Image
                  style={{height:70,width:70}}
                  source={require('../images/icons/Capturebutton.png')}
                  >

                  </Image>
                 </TouchableOpacity>

                  </View>
                </View>
               
                </ImageBackground>
            </View>
        );
    }
}