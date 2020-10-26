import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Profile screen</Text>
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

export default Profile;