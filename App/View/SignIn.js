import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity,Image,Dimensions } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
var { width, height } = Dimensions.get('window');

const SignIn = ({ navigation }) => {
    console.log('navigation ', navigation)
  return (
    <View style={{flex:1}}>

                        <View style={{alignSelf:'center', marginTop:30}}>
                            <Text style={{textAlign:'center', width:width -90,fontWeight: 'bold', fontSize:30}}>
                                Log in To VueSik
                            </Text>
                            
                        </View>
                        <View style={{alignSelf:'center', marginTop:10}}>
                            <Text style={{textAlign:'center',width:width -90, color:'#808080'}}>
                                    Manage your account, check notifications,comment on videos, and more .
                            </Text>
                        </View>
                    <View style={{marginTop:30,alignSelf:'center'}}>
                            
                            <View style={{marginTop:10, width:width -50 }}>
                                <LinearGradient
                                    start={{ x: 0.2, y: 0.25 }} end={{ x: 0.7, y: 1.0 }}
                                    colors={['#2e3192','#800080', '#93278f']}
                                    style={{ padding: 10, borderRadius: 5 , height:45}}>
                                    <TouchableOpacity
                                        style={{flexDirection:'row' ,}}
                                        onPress={() => navigation.navigate('Home')}>
                                   
                                            <Image
                                                style={{ 
                                                width: 25,
                                                height: 25}}
                                                source={require('../images/icons/user-icon.png')}
                                            />
                                            <View>
                                            <Text style={{color:'#fff' ,marginHorizontal:100}} >
                                                Email
                                            </Text>
                                            </View>

                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                           
                            <View style={{marginTop:10, width:width -50 }}>
                                <LinearGradient
                                    start={{ x: 0.3, y: 0.35 }} end={{ x: 0.7, y: 1.0 }}
                                    locations={[0.1, 0.8, 0.6]}
                                    colors={['#2e3192', '#93278f']}
                                    style={{ padding: 10, borderRadius: 5 ,height:45}}>
                                    <TouchableOpacity
                                        style={{flexDirection:'row' ,}}
                                        onPress={() => navigation.navigate('SignUp')}>
                                    
                                           <Image
                                                style={{ 
                                                width: 25,
                                                height: 25}}
                                                source={require('../images/icons/facebook-icon.png')}
                                            />
                                        <Text style={{color:'#fff', marginHorizontal:80}} >
                                        Continue with Facebook
                                    </Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                          
                            <View style={{marginTop:10, width:width -50 }}>
                                <LinearGradient
                                    start={{ x: 0.3, y: 0.35 }} end={{ x: 0.7, y: 1.0, height:45 }}
                                    locations={[0.1, 0.8, 0.6]}
                                    colors={['#2e3192', '#93278f']}
                                    style={{ padding: 10, borderRadius: 5 ,height:45}}>
                                    <TouchableOpacity
                                        style={{flexDirection:'row' ,}}
                                        onPress={() => navigation.navigate('SignUp')}>
                                             <Image
                                                style={{ 
                                                width: 25,
                                                height: 25}}
                                                source={require('../images/icons/gmail-icon.png')}
                                            />
                                    
                                        <Text style={{color:'#fff', marginHorizontal:80}} >
                                        Continue with Google
                                    </Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>

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
                                        Don't have an account?
                                    </Text>
                                    <Text style={{fontSize:17,color:'#93278f', fontWeight:'bold'}}>
                                        Sign up
                                    </Text>
                              </View>
                    </View>
                        
            </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default SignIn;