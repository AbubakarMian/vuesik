import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import InboxDropdown from '../View/components/InboxDropdown';
import Follow from '../View/Follow';

var {width, height} = Dimensions.get('window');

export default class Inbox extends React.Component {

  render() {
    this.state = {
      country: 'inbox'
  }
    return (
      <View style={{flex:1}}>
        {/* <InboxDropdown heading="Inbox"  props={this.props}/> */}
        <DropDownPicker
    items={[
        {label: 'Inbox', value: 'inbox', },
        {label: 'Likes My Likes', value: 'like',},
        {label: 'Comments / My Comments', value: 'comments'},
        {label: 'Mentions', value: 'mentions'},
        {label: 'Followers / Following', value: 'follow'},
    ]}
    defaultValue={this.state.country}
    containerStyle={{height: 30}}
    style={{backgroundColor: '#fafafa',}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => this.setState({
        country: item.value
    })}
    
/>
<Follow />
      </View> 
    );
  }
}
