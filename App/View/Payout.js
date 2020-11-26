import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../css/PayoutCss';

var {width, height} = Dimensions.get('window');

export default class Payout extends React.Component {
  
  
    render() {
    return (
      <View style={[{}, styles.center]}>
        <View style={[{}, styles.TopBar]}>
          <View style={[{}, styles.TopBarIcon]}>
            <TouchableOpacity>
              <Image
                source={require('../images/icons/backarrow-36.png')}
                style={[{height: 20, width: 20}]}></Image>
            </TouchableOpacity>
          </View>
          <View style={[{}, styles.TopBarHeading]}>
            <Text style={[{}, styles.TopBarHeadingTxt]}>Payout</Text>
          </View>
        </View>
        <View style={[{},styles.MainContainer]}>
            <View>
                <Text style={[{},styles.Heading]}>CURRENT BALANCE</Text>
            </View>
      
        </View>
        <View style={{paddingHorizontal:20,flexDirection:'row'}}>
            <View>
                <TouchableOpacity>
                    <Image
                    style={{height:50,width:50}}
                    source={require('../images/icons/icon-28.png')}
                    >

                    </Image>
                </TouchableOpacity>
            </View>
            <View style={[{},styles.Desc]}>
                <Text style={[{},styles.DescText]}>10,000 USD Dollar</Text>
            </View>
        </View>
        <View style={[{},styles.MainContainer]}>
            <View>
                <Text style={[{},styles.Heading]}>TOTAL PAIDOUT</Text>
            </View>
             <View style={[{},styles.DATAtable]}>
                  <View style={[{},styles.DATAtableRow]}>
                     <View style={[{},styles.DATAtableCol]}>
                         <Text style={{fontWeight:'bold',fontSize:15,marginHorizontal:10}}>Paid Date</Text>
                     </View>
                     <View style={[{},styles.DATAtableCol]}>
                        <Text style={{fontWeight:'bold',fontSize:15,marginHorizontal:10}}>Paid Amount
                        </Text>
                     </View>
                  </View>
                  <View style={[{},styles.DATAtableRow]}>
                     <View style={[{},styles.DATAtableCol]}>
                         <Text>22/10/2020</Text>
                     </View>
                     <View style={[{},styles.DATAtableCol]}>
                        <Text>$100
                        </Text>
                     </View>
                  </View>
                  <View style={[{},styles.DATAtableRow]}>
                     <View style={[{},styles.DATAtableCol]}>
                         <Text>13/10/2020</Text>
                     </View>
                     <View style={[{},styles.DATAtableCol]}>
                        <Text>$200
                        </Text>
                     </View>
                  </View>
             </View>
        
         
        </View>
      </View>
    );
  }
}
