import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
const Home = ({ navigation }) => {
  return (
    <View >
      <Text>This is the home screen</Text>
      {/* <TouchableOpacity
       
       onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
      >
          <Text>
              adjflkhkjg
          </Text>
          </TouchableOpacity> */}
          
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

export default Home;