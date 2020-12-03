import React from "react";
import { View, Button,Dimensions, Text,TextInput, StyleSheet,Alert, TouchableOpacity,TouchableHighlight,Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker'

import Modal from 'react-native-modal';

var { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#fff",
      height:height,
    },
  });


  export default class SignUpForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
          showModal:false
        }
      }

      render(){
          return(
            <View style={{height:height,width:width}}>
             <View style={{flexDirection:'row',width:width,paddingHorizontal:10,paddingVertical:10,borderBottomWidth:1,marginTop:10}}>
             <View style={{flex:1, alignSelf:'flex-start'}}>
               <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('FindFriends')}
               >
                <Image
                source={require('../images/icons/backarrow-36.png')}
                style={{height:30,width:30}}
                >

                </Image>
               </TouchableOpacity>
             </View>
             <View style={{flex:4, justifyContent:'center',alignSelf:'center'}}>
               <Text style={{textAlign:'center',alignSelf:'center',fontWeight:'bold'}}>Sign Up</Text>
             </View>
             
             <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
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
            <View style={[{backgroundColor:'#fff'},styles.center]}
            >
           
              
                
                    <View style={{ flexDirection:"row",marginHorizontal:20 }}>
                    <TextInput
                        style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:5,backgroundColor:'#fff' }}
                        
                        placeholder={"First Name"}/>
                    <TextInput
                        style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft:5,borderRadius:5,backgroundColor:'#fff'}}
                    
                        placeholder={"Last Name"}/>    
                        
                    </View>

                    <View style={{ flexDirection:"row",marginHorizontal:20,marginTop:10,borderWidth:1,borderColor:'gray',  borderRadius:5 }}>
                        <TextInput
                        style={{ flex:1, height:40,backgroundColor:'#fff'}}
                        placeholder={"UserName"}
                        />
                        <Image style={{
                                    
                                    marginTop:10,
                                    width:20,
                                    height:20 }}
                                    source={ require('../images/icons/check.png') }></Image>
                    </View>

                    <View style={{ flexDirection:"row",marginHorizontal:20,borderRadius:5,marginTop:10, borderColor:'gray',borderWidth: 1}}>
                        <DatePicker
                            style={{ flex:1,borderWidth:0,borderColor:"#fff" }}
                        />
                    </View>
                    <View style={{ flexDirection:"row",marginHorizontal:20,marginTop:10 }}>
                        <TextInput
                        style={{ flex:1, height:40,borderColor:'gray', borderWidth:1, borderRadius:5,backgroundColor:'#fff'}}
                        placeholder={"Email"}
                        />
                    </View>
                    <View style={{ flexDirection:"row",marginHorizontal:20,marginTop:10 }}>
                        <TextInput
                        style={{ flex:1, height:40,borderColor:'gray', borderWidth:1, borderRadius:5,backgroundColor:'#fff'}}
                        placeholder={"Password"}
                        />
                    </View>
                    <View style={{ flexDirection:"row",marginHorizontal:20,marginTop:10 }}>
                        <TextInput
                        style={{ flex:1, height:40,borderColor:'gray', borderWidth:1, borderRadius:5,backgroundColor:'#fff'}}
                        placeholder={"Confirm Password"}
                        />
                    </View>
                    <View style={{ flexDirection:"row",marginHorizontal:20,marginTop:20 }}>
                        <Text style={{color:"gray" }}>
                            By Continuing, you agree to VueSik's,
                        </Text>
                        <Text style={{color:"#000", fontWeight:'bold' }}>
                            Term of Use
                        </Text>
                    </View>
                    <View style={{ flexDirection:"row",marginHorizontal:20 }}>
                        <Text style={{color:"gray" }}>
                            and confirm that you have read VueSik's
                        </Text>
                        
                    </View>
                    <View style={{ flexDirection:"row"}}>
                        <Text style={{color:"#000",fontWeight:'bold' }}>
                            Privacy Policy
                        </Text>
                        
                    </View>
                    <View style={{ marginHorizontal:30,marginTop:20 }}>
                            <LinearGradient 
                                start={{ x: 0.2, y: 0.25 }} end={{ x: 0.7, y: 1.0 }}
                                colors={['#2e3192','#800080', '#93278f']}
                                style={{ padding: 10, borderRadius: 30 , height:50,width:200}}>
                                
                                <TouchableOpacity style={{ flexDirection:"row"}} 
                                        onPress={()=>this.setState({showModal:true})}
                                    >
                                <Image style={{
                                    flex:1,
                                    width:30,
                                    height:30 }}
                                    source={ require('../images/icons/lessthen.png') }></Image>
                                    <Text style={{ flex:5, color:"#fff",marginHorizontal:10,textAlignVertical:'center',textAlign:'center',fontWeight:'bold'}}>Sign up</Text>
                                </TouchableOpacity>
                                
                            </LinearGradient>
                        </View>

                    <Modal
                    isVisible={this.state.showModal}
                    onBackdropPress={() => this.setState({showModal:false})}
                    style={{height:20,width:width-300,justifyContent:'center',
                    justifyContent:'center'}}>
                    <View style={{ height:250,width:width-50, backgroundColor:'#fff',justifyContent:'center',
                     alignItems:'center',borderRadius:10 }}>
                    <LinearGradient 
                        start={{ x: 0.2, y: 0.25 }} end={{ x: 0.7, y: 1.0 }}
                        colors={['#2e3192','#800080', '#93278f']}
                        style={{height:250,width:width-50,borderRadius:10 }}>
                    {/* <View style={{ height:30,width:width, paddingLeft:20}}>
                         <TouchableOpacity
                         onPress={()=>this.setState({showModal:false})}
                         style={{ height:30,width:30}}
                         >
                             <Text 
                              
                             style={{marginRight:10,marginTop:5,color:'#fff'}}>X</Text>
                         </TouchableOpacity>
                     </View>          */}
             
                    
                     <View style={{
                                    marginTop:20,height:100,width:200, justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                                       
                     <Image style={{
                                    flex:1,
                                    width:100,
                                    height:100 }}
                                    source={ require('../images/icons/ModalEnvelope.png') }></Image>
                     </View>
                   
                     <Text style={{ fontSize:20, flex:5, color:"#fff",marginHorizontal:10,textAlignVertical:'center',textAlign:'center',fontWeight:'bold'}}>
                          A varification link has been 
                          
                          </Text>
                        
                      <Text style={{ fontSize:20, flex:5,color:"#fff",marginBottom:50,marginHorizontal:10,textAlignVertical:'center',textAlign:'center',fontWeight:'bold'}}>
                      sent on Your email. 
                          </Text> 
                    
             
                  
              </LinearGradient>
                    </View> 
                    </Modal>
            
        </View> 
        </View>
          );
      }
  }








// const SignUpForm =({navogation}) =>{
//     return (
        
//     )
// }


  
//   export default SignUpForm;