import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../css/TermsOfUseCss';
var {width, height} = Dimensions.get('window');

export default class MyVues extends React.Component {
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
            <Text style={[{}, styles.TopBarHeadingTxt]}>
              Terms of Use/Privacy Policy
            </Text>
          </View>
        </View>
        <View style={[{},styles.MainContainer]}>
           <View style={[{},styles.Card]}>
               <ScrollView>
                   <View>
                    <Text style={[{},styles.Paragraph]}>
                        As a global community that thrives on
                        Creativity and expression, It's important
                        that users feel safe and comfortable in
                        this community. Our politics and tools are
                        developed to promote a positive and safe
                        environment for our community. and we
                        trust that users will respected and utilize
                        these measures to keep ViewSik's fun
                        and welcoming for everyone.
                    </Text>
                   </View>
                   <View>
                    <Text style={[{},styles.Paragraph]}>
                        As a global community that thrives on
                        Creativity and expression, It's important
                        that users feel safe and comfortable in
                        this community. Our politics and tools are
                        developed to promote a positive and safe
                        environment for our community. and we
                        trust that users will respected and utilize
                        these measures to keep ViewSik's fun
                        and welcoming for everyone.
                    </Text>
                   </View>
                   <View>
                    <Text style={[{},styles.Paragraph]}>
                        As a global community that thrives on
                        Creativity and expression, It's important
                        that users feel safe and comfortable in
                        this community. Our politics and tools are
                        developed to promote a positive and safe
                        environment for our community. and we
                        trust that users will respected and utilize
                        these measures to keep ViewSik's fun
                        and welcoming for everyone.
                    </Text>
                   </View>
               </ScrollView>
           </View>
        </View>
      </View>
    );
  }
}
