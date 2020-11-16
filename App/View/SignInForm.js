import React, { useState } from "react";
import Modal from 'react-native-modal';

import {
  Dimensions,
  Platform,Alert, View, Button, Text,TextInput,Image, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { State } from "react-native-gesture-handler";



var { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});


    

export default class SignInForm extends React.Component{

  constructor(props){
    super(props)
    this.state={
      showModal:false
    }
  }


  render(){
    return(
      <View style={[{backgroundColor:'#fff'}, styles.center ] }>
      <Modal
       isVisible={this.state.showModal}
      style={{height:100,width:width-100,justifyContent:'center',
      alignSelf:'center'}}>
      <View style={{ height:height-50,width:width-100,flex: 1, backgroundColor:'#fff',justifyContent:'center',
      alignItems:'center' }}>
        <Text>I am the modal content!</Text>
      </View> 
    </Modal>
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
                 
                 
                  onPress={()=>this.setState({showModal:true})}
                  onPress={() => this.props.navigation.navigate('Home')}
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
    );
  }
}










