import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
var {width, height} = Dimensions.get('window');

export default class Inbox extends React.Component {
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

    console.log('Itms !!!!!!!!!!!',item);
    // this.setState({
    //   value: item.value,
    // })
    console.log('props',this.props)
    if(item.value == 'likes' ){
      this.props.navigation.navigate('Likes', {props:this.props});
    }
    else if(item.value == 'myinbox' ){
      
      this.props.navigation.navigate('Inbox');
    }
    else if(item.value == 'comments' ){
      this.props.navigation.navigate('Comments');
    }
    else if(item.value == 'mentions' ){
      this.props.navigation.navigate('Mentions');
    }
    else if(item.value == 'follow'){
      this.props.navigation.navigate('Follows');
    }
  }
  render() {
    console.log('value !!!!!!!',this.state.value);
    return (
      <View >
        <DropDownPicker 
          style={{marginTop: 20, height: 90, borderRadius: 50}}
          containerStyle={{height:50,}}
          items={[
            {label: 'My Inbox', value: 'myinbox'},
            {label: 'Likes / My Likes', value: 'likes'},
            {label: 'Comments / My Comments', value: 'comments'},
            {label: 'Mentions', value: 'mentions'},
            {label: 'Follow / Following', value: 'follow'},
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
          defaultValue={'myinbox'}
          onChangeItem={(item) =>
            this.changeItem(item)
          }
          labelStyle={
              {
                  fontWeight:'bold',
                  fontSize:12,
                  alignItems:'flex-start',
                  justifyContent:'flex-start',
                  height:20,

              }
          }
        />
       
      </View>
    );
  }
}
