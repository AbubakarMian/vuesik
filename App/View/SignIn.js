import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity,Image,Dimensions } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { SET_USER, LOGOUT_USER } from '../redux/constants/index';
var { width, height } = Dimensions.get('window');




const style =StyleSheet.create({
    center:{
        flex: 1,
       
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#fff",
    },
});

const navigationOptions = {header:null}
 class SignIn extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password:'',
            message: '',
            user: '',
            access_token:'',
            tabBarVisible:true
        }
    }
onPress=()=>{
    this.props.navigation.dangerouslyGetParent().setOptions({
        tabBarVisible: this.state.tabBarVisible
      });
}




    render(){
        console.log('props !!!!!!!!!!!',this.props)
        return(
            <View style={{flex:1,marginTop:50}}>

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
                           
                           
                  
                <View style={{ marginHorizontal:30,marginTop:20 }}>
                    <LinearGradient 
                        start={{ x: 0.2, y: 0.25 }} end={{ x: 0.7, y: 1.0 }}
                        colors={['#2e3192','#800080', '#93278f']}
                        style={{ padding: 10, borderRadius: 30 , height:50}}>
                           
                        <TouchableOpacity 
                        // onPress={this.onPress}
                        onPress={() => this.props.navigation.navigate('SignInForm')}
                        style={{ flexDirection:"row" }}>
                        
                        <Image style={{
                            marginLeft:10,
                            width:30,
                            height:30 }}
                            source={ require('../images/icons/user-icon.png') }>
                        </Image> 
                        <Text style={{ flex:4, textAlign:'center',alignSelf:'center', color:'#fff' }}>Email</Text>
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
                                  <TouchableOpacity
                                  onPress={() => this.props.navigation.navigate('SignUp')}
                                  >
                                  <Text style={{fontSize:17,color:'#93278f', fontWeight:'bold'}}>
                                        Sign up
                                    </Text>
                                  </TouchableOpacity>
                              </View>
                    </View>
                        
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
      user: state.userReducer,
    //   screen: state.screen
    }
  };
  function mapDispatchToProps(dispatch) {
    return {
      setUser: (value) => dispatch({ type: SET_USER ,value:value}),
      logoutUser: () => dispatch({ type: LOGOUT_USER })
    }
  };
  export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
