import React from "react";
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {View,Text, Dimensions,StyleSheet,Image,TouchableOpacity} from "react-native";

var {width,height} = Dimensions.get('window');



export default class SignUpModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            
        }
    };   
    
    toggleModal=()=>{
        let modal_state = this.state.showModal;
     
        this.setState({showModal: !modal_state})
      }

  
    render(){
        return(
            <View
          style={{
            flexDirection: 'row',
            width: width,
            paddingHorizontal: 10,
            paddingVertical: 20,
            borderBottomWidth: 1,
            backgroundColor:'#fff'
          }}>
          
          <Modal
            isVisible={this.state.showModal}
            onBackdropPress={this.toggleModal}
            style={{
              height: 20,
              width: width - 300,
              justifyContent: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 250,
                width: width - 50,
                 
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <LinearGradient
                start={{x: 0.2, y: 0.25}}
                end={{x: 0.7, y: 1.0}}
                colors={['#2e3192', '#800080', '#93278f']}
                style={{height: 250, width: width - 100, borderRadius: 10}}>
                <View
                  style={{
                    marginTop: 20,
                    height: 100,
                    width: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Image
                    style={{
                      flex: 1,
                      width: 100,
                      height: 100,
                    }}
                    source={require('../../images/icons/ModalEnvelope.png')}></Image>
                </View>

                <Text
                  style={{
                    fontSize: 20,
                    flex: 5,
                    color: '#fff',
                    marginHorizontal: 10,
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  A varification link has been
                </Text>

                <Text
                  style={{
                    fontSize: 20,
                    flex: 5,
                    color: '#fff',
                    marginBottom: 50,
                    marginHorizontal: 10,
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  sent on Your email.
                </Text>
              </LinearGradient>
            </View>
          </Modal>

        </View>
        );
    }
}