import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../css/TopUserCss';
var {width, height} = Dimensions.get('window');

export default class TopUser extends React.Component {
  render() {
    return (
      <View style={[{}, styles.center]}>
        <View style={[{}, styles.TopBar]}>
          <View style={[{}]}>
            <TouchableOpacity>
              <Image
                style={{height: 20, width: 30}}
                source={require('../images/icons/backarrow-36.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={[{}, styles.TopBarSharImageView]}>
            <TouchableOpacity>
              <Image
                style={{height: 20, width: 30}}
                source={require('../images/icons/icon-22.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[{}, styles.InfoSection]}>
          <View>
            <TouchableOpacity>
              <Image
                style={{width: width / 3, height: width / 3, marginRight: 10}}
                source={require('../images/icons/bighashtag.png')}></Image>
            </TouchableOpacity>
          </View>
          <View>
            <View>
              <Text style={[{},styles.InfoSectionHeading]}>#wwe</Text>
            </View>
            <View>
              <Text>11.1B views</Text>
            </View>
            <View style={{position: 'absolute', bottom: 0,}}>
              <TouchableOpacity>
                <View style={{flexDirection:'row',backgroundColor:'darkblue',borderRadius:1,alignItems:'center',paddingHorizontal:15,paddingVertical:5}}>
                <View>
                  <Image
                    style={{width:  15, height: 22}}
                    source={require('../images/icons/icon-25.png')}></Image>
                </View>
                <View style={{width:100,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#fff',fontSize:12}}>
                        Add to Favorites
                    </Text>
                </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView style={[{},styles.ScrollContainer]}>
        <View style={[{flexDirection:'row'},styles.GridRow]}>
                <View style={[{},styles.GridColumn]}>
                  <TouchableOpacity>
                  <Image
                  style={{height:'100%',width:'100%'}}
                  source={require('../images/icons/profile-14.png')}
                  >

                  </Image>
                  </TouchableOpacity>
                </View>
                <View style={[{},styles.GridColumn]}>
                <TouchableOpacity>
                <Image
                  style={{height:'100%',width:'100%'}}
                  source={require('../images/icons/profile-15.jpg')}
                  >

                  </Image>
                </TouchableOpacity>
                </View>
                <View style={[{},styles.GridColumn]}>
                  <TouchableOpacity>
                  <Image
                  style={{height:'100%',width:'100%'}}
                  source={require('../images/icons/profile-16.jpg')}
                  >

                  </Image>
                  </TouchableOpacity>
                </View>
                
            </View>
            <View style={[{flexDirection:'row'},styles.GridRow]}>
                <View style={[{},styles.GridColumn]}>
                  <TouchableOpacity>
                  <Image
                  style={{height:'100%',width:'100%'}}
                  source={require('../images/icons/profile-17.jpg')}
                  >

                  </Image>
                  </TouchableOpacity>
                </View>
                <View style={[{},styles.GridColumn]}>
                <TouchableOpacity>
                <Image
                  style={{height:'100%',width:'100%'}}
                  source={require('../images/icons/profile-18.jpg')}
                  >

                  </Image>
                </TouchableOpacity>
                </View>
                <View style={[{},styles.GridColumn]}>
                  <TouchableOpacity>
                  <Image
                  style={{height:'100%',width:'100%'}}
                  source={require('../images/icons/profile-19.jpg')}
                  >

                  </Image>
                  </TouchableOpacity>
                </View>
                
            </View>
            <View style={[{flexDirection:'row'},styles.GridRow]}>
                <View style={[{},styles.GridColumn]}>
                  <TouchableOpacity>
                  <Image
                  style={{height:'100%',width:'100%'}}
                  source={require('../images/icons/profile-20.jpg')}
                  >

                  </Image>
                  </TouchableOpacity>
                </View>
                <View style={[{},styles.GridColumn]}>
                <TouchableOpacity>
                <Image
                  style={{height:'100%',width:'100%'}}
                  source={require('../images/icons/profile-21.jpg')}
                  >

                  </Image>
                </TouchableOpacity>
                </View>
                <View style={[{},styles.GridColumn]}>
                  <TouchableOpacity>
                  <Image
                  style={{height:'100%',width:'100%'}}
                  source={require('../images/icons/profile-22.jpg')}
                  >

                  </Image>
                  </TouchableOpacity>
                </View>
                
            </View>
            <View style={[{flexDirection:'row'},styles.GridRow]}>
                <View style={[{},styles.GridColumn]}>
                  <TouchableOpacity>
                  <Image
                  style={{height:'100%',width:'100%'}}
                  source={require('../images/icons/profile-23.jpg')}
                  >

                  </Image>
                  </TouchableOpacity>
                </View>
                <View style={[{},styles.GridColumn]}>
                <TouchableOpacity>
                <Image
                  style={{height:'100%',width:'100%'}}
                  source={require('../images/icons/profile-24.jpg')}
                  >

                  </Image>
                </TouchableOpacity>
                </View>
                <View style={[{},styles.GridColumn]}>
                  <TouchableOpacity>
                  <Image
                  style={{height:'100%',width:'100%'}}
                  source={require('../images/icons/profile-25.jpg')}
                  >

                  </Image>
                  </TouchableOpacity>
                </View>
                
            </View>
        </ScrollView>
      </View>
    );
  }
}
