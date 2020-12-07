import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
var {width, height} = Dimensions.get('window');

export default class InboxDropdown extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
              value: '',
              // items=[
              //     {label: 'Item 1', value: 'item1'},
              //     {label: 'Item 2', value: 'item2', selected: true, disabled: true},
              // ]
          }
    
          this.controller;
      }
    
    changeItem(item){
        console.log('navigation',this.props.props.route.name);
        
        this.setState({
            country: item.value
            // this.controller.selectItem('uk');
        })
      
        if(item.value == 'Likes' ){
            this.props.props.navigation.navigate('Likes' ,{props:this.props});
        }
        else if(item.value == 'Inbox' ){
          
            this.props.props.navigation.navigate('Inbox',{props:this.props});
        }
        else if(item.value == 'Comments' ){
            this.props.props.navigation.navigate('Comments',{props:this.props});
        }
        else if(item.value == 'Mentions' ){
            this.props.props.navigation.navigate('Mentions',{props:this.props});
        }
        else if(item.value == 'Follow'){
            this.props.props.navigation.navigate('Follow',{props:this.props});
        }
      }
  
    render() {
      
    return (
      <View>
        <DropDownPicker
        
          style={{marginTop: 20, height: 90, borderRadius: 50}}
          containerStyle={{height: 50}}
          items={[
            {label: 'Inbox', value: 'Inbox'},
            {label: 'Likes', value: 'Likes'},
            {label: 'Comments', value: 'Comments'},
            {label: 'Mentions', value: 'Mentions'},
            {label: 'Follow', value: 'Follow'},
          ]}
          // items={this.state.items}
          //   placeholder="Select an item"
          controller={(instance) => (this.controller = instance)}
          onChangeList={(items, callback) => {
            this.setState(
              {
                items, // items: items
              },
              callback,
            );
          }}
          defaultValue={this.props.props.route.name}
          onChangeItem={(item) => this.changeItem(item)}
          labelStyle={{
            fontWeight: 'bold',
            fontSize: 12,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            height: 20,
          }}
        />
      </View>
    );
  }
}
