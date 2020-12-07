import React from "react";
import {
    Platform,
    View, 
    Button, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    Image,
    Dimensions
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
var { width, height } = Dimensions.get('window');


export default class MyVues extends React.Component{

    render(){
        return(
            <View style={{ flex:1,backgroundColor:"#ffffff",paddingHorizontal:10, paddingTop:100,paddingBottom:50, width:width}}>
            <Text style={{ textAlign:'center',fontWeight:'bold', fontSize:30 }}>SignUp for Vuesik</Text>
            <View style={{ marginHorizontal:30,marginTop:20 }}>
                <LinearGradient 
                    start={{ x: 0.2, y: 0.25 }} end={{ x: 0.7, y: 1.0 }}
                    colors={['#2e3192','#800080', '#93278f']}
                    style={{ padding: 10, borderRadius: 30 , height:50}}>
                       
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('SignUpForm')}
                    style={{ flexDirection:"row" }}>
                    
                    <Image style={{
                        marginLeft:10,
                        width:30,
                        height:30 }}
                        source={ require('../images/icons/mail.png') }>
                    </Image> 
                    <Text style={{ marginHorizontal:50, textAlign:'center',alignSelf:'center', color:'#fff' }}>Use My Email</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <View style={{ marginHorizontal:30,marginTop:20 }}>
                <LinearGradient 
                    start={{ x: 0.2, y: 0.25 }} end={{ x: 0.7, y: 1.0 }}
                    colors={['#2e3192','#800080', '#93278f']}
                    style={{ padding: 10, borderRadius: 30 , height:50}}>
                       
                    <TouchableOpacity style={{ flexDirection:"row" }}>
                    
                    <Image style={{
                        marginLeft:10,
                        width:30,
                        height:30 }}
                        source={ require('../images/icons/google.png') }>
                    </Image> 
                    <Text style={{ flex:4, textAlign:'center',alignSelf:'center', color:'#fff' }}>Continue with Google</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <View style={{ marginHorizontal:30,marginTop:20 }}>
                <LinearGradient 
                    start={{ x: 0.2, y: 0.25 }} end={{ x: 0.7, y: 1.0 }}
                    colors={['#2e3192','#800080', '#93278f']}
                    style={{ padding: 10, borderRadius: 30 , height:50}}>
                       
                    <TouchableOpacity style={{ flexDirection:"row" }}>
                    
                    <Image style={{
                        marginLeft:10,
                        width:30,
                        height:30 }}
                        source={ require('../images/icons/facebook.png') }>
                    </Image> 
                    <Text style={{ flex:4, textAlign:'center',alignSelf:'center', color:'#fff' }}>Continue with Facebook</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <View style={{ marginHorizontal:30,marginTop:20 }}>
                <LinearGradient 
                    start={{ x: 0.2, y: 0.25 }} end={{ x: 0.7, y: 1.0 }}
                    colors={['#2e3192','#800080', '#93278f']}
                    style={{ padding: 10, borderRadius: 30 , height:50}}>
                       
                    <TouchableOpacity style={{ flexDirection:"row" }}>
                    
                    <Image style={{
                        marginLeft:10,
                        width:30,
                        height:30 }}
                        source={ require('../images/icons/apple.png') }>
                    </Image> 
                    <Text style={{ flex:4, textAlign:'center',alignSelf:'center', color:'#fff' }}>Continue with Apple</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <View style={{ marginHorizontal:30,marginTop:20 }}>
                <LinearGradient 
                    start={{ x: 0.2, y: 0.25 }} end={{ x: 0.7, y: 1.0 }}
                    colors={['#2e3192','#800080', '#93278f']}
                    style={{ padding: 10, borderRadius: 30 , height:50}}>
                       
                    <TouchableOpacity style={{ flexDirection:"row" }}>
                    
                    <Image style={{
                        marginLeft:10,
                        width:30,
                        height:30 }}
                        source={ require('../images/icons/twitter.png') }>
                    </Image> 
                    <Text style={{  flex:4, textAlign:'center',alignSelf:'center', color:'#fff' }}>Continue with Twitter</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <View style={{position:'absolute',bottom:0 , width:width -40 , marginLeft:20}}>
                <View
                        style={{
                            borderBottomColor: '#808080',
                            borderBottomWidth: 1,
                        }}
                        />
                          <View style={{flexDirection:'row', marginTop:20 ,marginBottom:10 ,justifyContent:'center'}}>
                                <Text style={{fontSize:17, }}>
                                    Already have an account?
                                </Text>
                              <TouchableOpacity
                              onPress={() => this.props.navigation.navigate('SignIn')}
                              >
                              <Text style={{fontSize:17,color:'#93278f', fontWeight:'bold'}}>
                                    SignIn
                                </Text>
                              </TouchableOpacity>
                          </View>
                </View>

        </View>
        );
    }
}

