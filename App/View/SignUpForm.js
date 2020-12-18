import React from 'react';
import SignUpModal from "../View/modals/SignUpModal";
import {
  View,
  Button,
  Dimensions,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
import Header from '../View/components/Header';

import {Constants} from "../View/components/Constant";
var {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    height: height,
  },
});

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      Firstname:'',Lastname:'',Username:'',Dob:'',Email:'',Password:'',ConfirmPassword:'',
      showModal:false
    };
  }
    componentDidMount(){

      this.RegisterUser();
    };


    RegisterUser=()=>{

    

     
      var formData = new FormData();
      var Firstname=this.state.Firstname;
      var Lastname=this.state.Lastname;
      var Username=this.state.Username;
      var Dob=this.state.Dob;
      var Email=this.state.Email;
      var Password=this.state.Password;
      var ConfirmPassword=this.state.ConfirmPassword;
      
      formData.append('firstname', this.state.Firstname);
      formData.append('lastname', this.state.Lastname);
      formData.append('username', this.state.Username);
      formData.append('dob', this.state.Dob);
      formData.append('email', this.state.Email);
      formData.append('Password', this.state.Password);
      formData.append('confirmpassword', this.state.ConfirmPassword);

      let postData = {
        
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
           Authorization: 'TW9iaWxlIENsaWVudElEOiBUVzlpYVd4bElFTnNhV1Z1ZEVsRU9pQjJkV1Z6YVdzdFlYQndMV',
           'Authorization-secure': 'TW9iaWxlIENsaWVudElEOiBUVzlpYVd4bElFTnNhV1Z1ZEVsRU9pQjJkV1Z6YVdzdFlYQndMV',
           'client-id' : 'vuesik-app-mobile',
          
          
        },
        body: formData,
      };
      
      
     return fetch('https://c478c8f55647.ngrok.io/vuesik/public/api/signup',postData)
        .then(response => response.text())
        .then(responseJson => {
          console.log('responseJson !!!!!!!!!!',responseJson);
          if (responseJson.status === true) {
             
            this.setState({
                  access_token: responseJson.response.access_token,
              });
              this.props.setUser(this.state);
              this.props.navigation.navigate('Home')
          } else {
              // this.refs.PopUp.setModal(true, responseJson.error.message);
            
          }
        })
        .catch(error => {
          console.log("error", error)  
        });
    };






      // if (this.state.email.trim() === '') {
      //   this.refs.PopUp.setModal(true, 'Please Enter valid Input');
      //   return;
      // }
    

  

  shoVarificationModal=()=>{
    this.refs.verificationModal.toggleModal();
    
  }


  render() {
    return (
      
      <View style={{height: height, width: width}}>
        
        <Header/>
        <SignUpModal ref='verificationModal' {...this.props}  />
        {/* toggleModal={this.toggleModal} */}
        <View style={[{backgroundColor: '#fff'}, styles.center]}>
          <View style={{flexDirection: 'row', marginHorizontal: 20}}>
            <TextInput
              style={{
                flex: 1,
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: '#fff',
              }}
              placeholder={'First Name'}
            />
            <TextInput
              style={{
                flex: 1,
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginLeft: 5,
                borderRadius: 5,
                backgroundColor: '#fff',
              }}
              placeholder={'Last Name'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              marginTop: 10,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
            }}>
            <TextInput
              style={{flex: 1, height: 40, backgroundColor: '#fff'}}
              placeholder={'UserName'}
            />
            <Image
              style={{
                marginTop: 10,
                width: 20,
                height: 20,
              }}
              source={require('../images/icons/check.png')}></Image>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              borderRadius: 5,
              marginTop: 10,
              borderColor: 'gray',
              borderWidth: 1,
            }}>
            <DatePicker
              style={{flex: 1, borderWidth: 0, borderColor: '#fff'}}
              date={this.state.Dob}
              onDateChange={(date) => {this.setState({Dob: date})}}
            />
          </View>
          <View
            style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
            <TextInput
              style={{
                flex: 1,
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: '#fff',
              }}
              placeholder={'Email'}
            />
          </View>
          <View
            style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
            <TextInput
              style={{
                flex: 1,
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: '#fff',
              }}
              placeholder={'Password'}
            />
          </View>
          <View
            style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
            <TextInput
              style={{
                flex: 1,
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: '#fff',
              }}
              placeholder={'Confirm Password'}
            />
          </View>
          <View
            style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 20}}>
            <Text style={{color: 'gray'}}>
              By Continuing, you agree to VueSik's,
            </Text>
            <Text style={{color: '#000', fontWeight: 'bold'}}>Term of Use</Text>
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 20}}>
            <Text style={{color: 'gray'}}>
              and confirm that you have read VueSik's
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontWeight: 'bold'}}>
              Privacy Policy
            </Text>
          </View>
          <View style={{marginHorizontal: 30, marginTop: 20}}>
            <LinearGradient
              start={{x: 0.2, y: 0.25}}
              end={{x: 0.7, y: 1.0}}
              colors={['#2e3192', '#800080', '#93278f']}
              style={{padding: 10, borderRadius: 30, height: 50, width: 200}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                // onPress={this.shoVarificationModal}
                // onPress={RegisterUser}
                >
                  {/* refs.verificationModal.toggleModal */}
                <Image
                  style={{
                    flex: 1,
                    width: 30,
                    height: 30,
                  }}
                  source={require('../images/icons/lessthen.png')}></Image>
                <Text
                  style={{
                    flex: 5,
                    color: '#fff',
                    marginHorizontal: 10,
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

         
        </View>
      </View>
    );
  }
}

