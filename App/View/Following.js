import React from "react";
import {View,Text, Dimensions,StyleSheet, ImageBackground,Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../css/FollowingCss";
import LinearGradient from 'react-native-linear-gradient';
var {width,hight} = Dimensions.get('window');



export default class Following extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
               <ImageBackground
               style={{width: '100%', height: '100%'}}
               source={require('../images/icons/bgFOllowing.jpg')}
               >
            {/* //    <View style={{justifyContent:'center',alignContent:'center'}}>
            //      <View>
            //          <Text>Featured Creaters</Text>
            //      </View>
            //      <View>
            //          <Text style={{fontSize:10,color:'#fff'}}>Follow an account to see thier latest videos hers.</Text>
            //      </View>
            //    </View> */}

            <View style={[{},styles.mainScreen]}>
                <View style={[{},styles.topArea]}>
                    <View>
                        <Text style={[{},styles.topAreaHeading]}>Featured Creaters</Text>
                    </View>
                    <View>
                        <Text style={[{},styles.topAreaDesc]}>
                            Follow an account to see their latest videos her.
                        </Text>
                    </View>
                    <View>
                        <Image
                        source={require('../images/icons/profileFollowing.png')}
                        style={[{},styles.topAreaProfileIMG]}
                        >

                        </Image>
                    </View>
                    <View>
                        <Text style={[{},styles.topAreaProfileName]}>Noman Tanveer</Text>
                    </View>
                    <View>
                        <Text style={[{},styles.topAreaUserName]}>@alnoordiary</Text>
                    </View>
                    <View>
                    <LinearGradient 
                        start={{ x: 0.2, y: 0.25 }} end={{ x: 0.7, y: 1.0 }}
                        colors={['#2e3192','#800080', '#93278f']}>
                           
                        <TouchableOpacity>
                      
                        <Text style={[{},styles.topAreaFollowBtn]}>Follow</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    </View>
                </View>
                <View style={[{},styles.bottomArea]}>
                     <View style={[{},styles.bottomAreaCol2Row]}>
                        <View styles={[{},styles.bottomAreaCol2RowCol1]}>
                            <Text>daf</Text>
                        </View>
                        <View styles={[{},styles.bottomAreaCol2RowCol2]}>
                            <View styles={[{},styles.bottomAreaCol2Row]}>
                               <Text>df</Text>
                            </View>
                        </View>
                     </View>
                </View>
            </View>

               </ImageBackground>
            </View>
        );
    }
}