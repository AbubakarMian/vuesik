import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../css/PrivacyCss';
import ToggleSwitch from 'toggle-switch-react-native';
var {width, height} = Dimensions.get('window');

export default class Privacy extends React.Component {

  render() {
    
    return (
      <View style={[{}, styles.center]}>
        <View style={[{}, styles.TopBar]}>
          <View style={[{}, styles.TopBarIcon]}>
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('Settings')}
            >
              <Image
                source={require('../images/icons/backarrow-36.png')}
                style={[{height: 20, width: 20}]}></Image>
            </TouchableOpacity>
          </View>
          <View style={[{}, styles.TopBarHeading]}>
            <Text style={[{}, styles.TopBarHeadingTxt]}>Privacy</Text>
          </View>
        </View>
        <ScrollView style={{marginHorizontal:10,}}>
          <View style={[{}, styles.Container]}>
            <View>
              <Text style={[{}, styles.Heading]}>DISCOVER</Text>
            </View>
            <View style={[{}, styles.Row]}>
              <View>
                <Text style={[{}, styles.Header]}>Make my Account Private</Text>
              </View>
              <View style={[{}, styles.action]}>
              <ToggleSwitch
                  isOn={false}
                  onColor="purple"
                  offColor="darkblue"
                //   label="Example label"
                  labelStyle={{color: 'black', fontWeight: '900'}}
                  size="mediam"
                  onToggle={false}
                />
              </View>
            </View>
            <View>
              <Text style={[{}, styles.Paragraph]}>
                Whith a private account, only users you approve can follow you
                and view your videos and likes. Your existing followers won't be
                affected.
              </Text>
            </View>
            <View style={[{}, styles.Row]}>
              <View>
                <Text style={[{}, styles.Header]}>
                  Suggest your account to others
                </Text>
              </View>
              <View style={[{}, styles.action]}>
              <ToggleSwitch
                  isOn={true}
                  onColor="purple"
                  offColor="darkblue"
                //   label="Example label"
                  labelStyle={{color: 'black', fontWeight: '900'}}
                  size="mediam"
                  onToggle={false}
                  
                />
              </View>
            </View>
            <View>
              <Text style={[{}, styles.Paragraph]}>
                Choose whether your profile can be suggested to users interested
                in accounts like yours.
              </Text>
            </View>
            <View style={[{}, styles.Row]}>
              <View>
                <Text style={[{}, styles.Header]}>Make my Account Private</Text>
              </View>
              <View style={[{}, styles.action]}>
                <TouchableOpacity>
                  <Text style={[{}, styles.actionText]}>Off</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>


          <View style={[{}, styles.Container]}>
            <View>
              <Text style={[{}, styles.Heading]}>AD AUTHORIZATION</Text>
            </View>
            <View style={[{}, styles.Row]}>
              <View>
                <Text style={[{}, styles.Header]}>Allow 3rd Party Ads</Text>
              </View>
              <View style={[{}, styles.action]}>
              <ToggleSwitch
                  isOn={false}
                  onColor="purple"
                  offColor="darkblue"
                //   label="Example label"
                  labelStyle={{color: 'black', fontWeight: '900'}}
                  size="mediam"
                  onToggle={false}
                />
              </View>
            </View>
            <View>
              <Text style={[{}, styles.Paragraph]}>
                Allow third-party advertisers to use your videos in ads. Ad
                authorization is only available to select creators.
              </Text>
            </View>
           
            
          </View>
          <View>
              <Text style={[{}, styles.Heading]}>MY SETTINGS</Text>
            </View>
          <View style={[{}, styles.Row]}>
              <View>
                <Text style={[{}, styles.Header]}>Send your direct messages</Text>
              </View>
              <View style={[{}, styles.action]}>
                <TouchableOpacity>
                  <Text style={[{}, styles.actionText]}>Friends</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[{}, styles.Row]}>
              <View>
                <Text style={[{}, styles.Header]}>ALLOW ON YOUR VIDEOS:</Text>
              </View>
              <View style={[{}, styles.action]}>
                <TouchableOpacity>
                  <Text style={[{}, styles.actionText]}></Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[{}, styles.Row]}>
              <View>
                <Text style={[{}, styles.Header]}>Download</Text>
              </View>
              <View style={[{}, styles.action]}>
                <TouchableOpacity>
                  <Text style={[{}, styles.actionText]}>On</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[{}, styles.Row]}>
              <View>
                <Text style={[{}, styles.Header]}>Stitch</Text>
              </View>
              <View style={[{}, styles.action]}>
                <TouchableOpacity>
                  <Text style={[{}, styles.actionText]}>Everyone</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[{}, styles.Row]}>
              <View>
                <Text style={[{}, styles.Header]}>Duet</Text>
              </View>
              <View style={[{}, styles.action]}>
                <TouchableOpacity>
                  <Text style={[{}, styles.actionText]}>Everyone</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[{ paddingBottom:100}, styles.Row]}>
              <View>
                <Text style={[{}, styles.Header]}>Stitch</Text>
              </View>
              <View style={[{}, styles.action]}>
                <TouchableOpacity>
                  <Text style={[{}, styles.actionText]}>Everyone</Text>
                </TouchableOpacity>
              </View>
            </View>
        </ScrollView>
      </View>
    );
  }
}
