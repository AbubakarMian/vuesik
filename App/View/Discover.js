import React from "react";
import {
  Platform,
  Dimensions,
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Home from "../View/Home"
const isAndroid = Platform.OS == 'android'
var { width, height } = Dimensions.get('window');
const Discover = ({ navigation }) => {
  return (
    <View style={styles.center}>
     
     
     
      <View style={[{backgroundColor:'#000'},styles.center]}>

        <Text style={{paddingVertical:10,backgroundColor:"#fff",}}>dsdfsdfsd</Text>
        
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Discover;