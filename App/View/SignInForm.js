import React, { useState } from "react";
import Modal from 'react-native-modal';

import {
  Dimensions,
  Platform,Alert, View, Button, Text,TextInput,Image, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { State } from "react-native-gesture-handler";
var { width, height } = Dimensions.get('window');


var { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height:height,
    width:width,
    backgroundColor:'#fff'
  },
});


    

export default class SignInForm extends React.Component{

  constructor(props){
    super(props)
    this.state={
      showModal:false,
      tabBarVisible:false,
      Email: 'aukhan10@gmail.com',
      Password: '123',
    }
  

  }
  componentWillMount(){
    this.props.navigation.dangerouslyGetParent().setOptions({
      tabBarVisible: this.state.tabBarVisible
    });
      }
  

static navigationOptions = {
    header: true,
};

  SignInRequest =() => {
    if (this.state.email === '') {
      Alert.alert('Please Enter valid Input');
      this.refs.PopUp.setModal(true, 'Please Enter valid Input');
      return;
    }

    if(this.state.Password === '')
    {
      // Alert.alert('dfs')''
    }

    

    var formData = new FormData();
    formData.append('email', this.state.Email);
    formData.append('password', this.state.Password);

    let postData = {

      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: 'TW9iaWxlIENsaWVudElEOiBUVzlpYVd4bElFTnNhV1Z1ZEVsRU9pQjJkV1Z6YVdzdFlYQndMV',
        'Authorization-secure': 'TW9iaWxlIENsaWVudElEOiBUVzlpYVd4bElFTnNhV1Z1ZEVsRU9pQjJkV1Z6YVdzdFlYQndMV',
        'client-id': 'vuesik-app-mobile',


      },
      body: formData,
    };


    fetch('http://development.hatinco.com/vuesik_backend/public/api/login', postData)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === true) {
          this.setState({
            access_token: responseJson.response.access_token,
          });
          this.props.navigation.navigate('MyVues');
        }
        else {
          
         
        }
      })
      .catch(error => {
        Alert.alert("Invalid email or password!")
        console.log(error)
      });
  };

  render(){
    return(
      <View style={{height:height,}}>
        <View style={{flexDirection:'row',width:width,paddingHorizontal:10,borderBottomWidth:1,paddingBottom:10,backgroundColor:'#fff'}}>
             <View style={{flex:1, alignSelf:'flex-start'}}>
               <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('SignIn')}
               >
                <Image
                source={require('../images/icons/backarrow-36.png')}
                style={{height:30,width:30}}
                >

                </Image>
               </TouchableOpacity>
             </View>
             <View style={{flex:4, justifyContent:'center',alignSelf:'center'}}>
               <Text style={{textAlign:'center',alignSelf:'center',fontWeight:'bold'}}>Log In</Text>
             </View>
             
             <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
             <TouchableOpacity>
                
               </TouchableOpacity>
            </View>
            </View>
      <View style={[{backgroundColor:'#fff',height:height,width:width,}, styles.center ] }>
     <View style={{ flexDirection:"row",marginHorizontal:20,marginTop:10, }}>
          <TextInput
           style={{ flex:1, height:40,borderColor:'gray', borderWidth:1, borderRadius:5,backgroundColor:'#fff'}}
           placeholder={"Email"}
           onChangeText={text => this.setState({ Email: text })}
          />
      </View>
      <View style={{ flexDirection:"row",marginHorizontal:20,marginTop:10 }}>
          <TextInput
           style={{ flex:1, height:40,borderColor:'gray', borderWidth:1, borderRadius:5,backgroundColor:'#fff'}}
           placeholder={"Password"}
           onChangeText={text => this.setState({ Password: text })}
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
                     
                  <TouchableOpacity
                 
               
                  onPress={() => this.SignInRequest()}
                  style={{ flexDirection:"row"}}>
                    
                  <Image style={{
                      flex:1,
                      width:30,
                      height:30 }}
                      source={ require('../images/icons/lessthen.png') }></Image>
                      <Text style={{ flex:5, color:"#fff",marginHorizontal:10,textAlignVertical:'center',textAlign:'center',fontWeight:'bold'}}>Sign In</Text>
                   
                  </TouchableOpacity>
                  
              </LinearGradient>
          </View>
</View>
</View> 
    );
  }
}










