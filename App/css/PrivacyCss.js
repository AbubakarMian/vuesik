import React from 'react';

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';

var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  center: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
    height: height,
    width: width,
  },
  TopBar: {
    paddingHorizontal: 20,
    width: width,
    borderBottomWidth: 1,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  TopBarIcon: {
    flex: 1,
  },
  TopBarHeading: {
    flex: 1,
  },
  TopBarHeadingTxt: {
    fontWeight: 'bold',
  },
  Container: {
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    width: width,
  },
  Heading: {
    fontWeight: 'bold',
    color: '#aaa',
    width: width,
    paddingVertical: 10,
  },
  Row: {
    flexDirection: 'row',
    position: 'relative',
    width: width,
    paddingVertical: 10,
    marginRight:20
  },
  Header: {
    fontWeight: 'bold',
  },
  action: {
    position: 'absolute',
    right: 20,
  },
  actionText: {
    color: '#aaa',
    fontSize: 18,
  },
  Paragraph: {
    fontSize: 10,
    color: '#aaa',
    paddingVertical: 10,

    marginRight: 20,
  },
});
