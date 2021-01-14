import React from "react";
import {View,Text, Dimensions,StyleSheet,ImageBackground,TouchableOpacity,Image} from "react-native";
import styles from "../../../css/GridCSS";
import Video from 'react-native-video';
var {width,hight} = Dimensions.get('window');

const style =StyleSheet.create({
    center:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#fff",
    },
});

export default class GridTab extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
                 <View style={[styles.gridRow]}>

<View style={[styles.gridColumn1]}>
    <ImageBackground
     style={{width: '100%', height: '100%'}}
    source={require('../../../images/icons/image-28.jpg')}
    >
      <Text style={[styles.gridColumnRating]}>
        3
      </Text>
      <TouchableOpacity>
    <Image
      style={[styles.gridColumnImg]}
      source={require('../../../images/icons/icon-27.png')}
      >

      </Image>
    </TouchableOpacity>
    </ImageBackground>     
  </View>
  <View style={[styles.gridColumn2]}>
    <ImageBackground
    style={{width: '100%', height: '100%'}}
    source={require('../../../images/icons/image-29.jpg')}
    >
       <Text style={[styles.gridColumnRating]}>
        0
      </Text>
      <TouchableOpacity>
    <Image
      style={[styles.gridColumnImg]}
      source={require('../../../images/icons/icon-27.png')}
      >

      </Image>
    </TouchableOpacity>
    </ImageBackground>     
  </View>
  <View style={[styles.gridColumn3]}>
    <ImageBackground
    style={{width: '100%', height: '100%'}}
    source={require('../../../images/icons/image-30.jpg')}
    >
       <Text style={[styles.gridColumnRating]}>
        1
      </Text>
      <TouchableOpacity>
    <Image
      style={[styles.gridColumnImg]}
      source={require('../../../images/icons/icon-27.png')}
      >

      </Image>
    </TouchableOpacity>
    </ImageBackground>     
  </View>
</View>
<View style={[styles.gridRow]}>
<View style={[styles.gridColumn1]}>
    <ImageBackground
       style={{width: '100%', height: '100%'}}
    source={require('../../../images/icons/image-31.jpg')}
    >
       <Text style={[styles.gridColumnRating]}>
        5
      </Text>
      <TouchableOpacity>
    <Image
      style={[styles.gridColumnImg]}
      source={require('../../../images/icons/icon-27.png')}
      >

      </Image>
    </TouchableOpacity>
    </ImageBackground>     
  </View>
  <View style={[styles.gridColumn2]}>
    <ImageBackground
        style={{width: '100%', height: '100%'}}
    source={require('../../../images/icons/image-32.jpg')}
    >
       <Text style={[styles.gridColumnRating]}>
        4
      </Text>
      <TouchableOpacity>
    <Image
      style={[styles.gridColumnImg]}
      source={require('../../../images/icons/icon-27.png')}
      >

      </Image>
    </TouchableOpacity>
    </ImageBackground>     
  </View>
  <View style={[styles.gridColumn3]}>
    <ImageBackground
       style={{width: '100%', height: '100%'}}
    source={require('../../../images/icons/image-33.jpg')}
    >
       <Text style={[styles.gridColumnRating]}>
        24.8k
      </Text>
      <TouchableOpacity>
    <Image
      style={[styles.gridColumnImg]}
      source={require('../../../images/icons/icon-27.png')}
      >

      </Image>
    </TouchableOpacity>
    </ImageBackground>     
  </View>
</View>
<View style={[styles.gridRow]}>
<View style={[styles.gridColumn1]}>
    <ImageBackground
       style={{width: '100%', height: '100%'}}
    source={require('../../../images/icons/image-34.jpg')}
    >
       <Text style={[styles.gridColumnRating]}>
        24.8k
      </Text>
      <TouchableOpacity>
    <Image
      style={[styles.gridColumnImg]}
      source={require('../../../images/icons/icon-27.png')}
      >

      </Image>
    </TouchableOpacity>
         
    </ImageBackground>
         
  </View>
  <View style={[{position:'relative'},styles.gridColumn2]}>
    <ImageBackground
        style={{width: '100%', height: '100%'}}
    source={require('../../../images/icons/image-35.jpg')}
    >
       <Text style={[styles.gridColumnRating]}>
        24.8k
      </Text>
      <TouchableOpacity>
    <Image
      style={[styles.gridColumnImg]}
      source={require('../../../images/icons/icon-27.png')}
      >

      </Image>
    </TouchableOpacity>
      
    </ImageBackground>     
  </View>
  <View style={[styles.gridColumn3]}>
    <ImageBackground
       style={{width: '100%', height: '100%'}}
    source={require('../../../images/icons/image-36.jpg')}
    >
       <Text style={[styles.gridColumnRating]}>
        24.8k
      </Text>
      <TouchableOpacity>
    <Image
      style={[styles.gridColumnImg]}
      source={require('../../../images/icons/icon-27.png')}
      >

      </Image>
    </TouchableOpacity>
    </ImageBackground>
         
  </View>
  
</View>
<View style={[styles.gridRow]}>
<View style={[styles.gridColumn1]}>
    <ImageBackground
       style={{width: '100%', height: '100%'}}
    source={require('../../../images/icons/image-34.jpg')}
    >
       <Text style={[styles.gridColumnRating]}>
        24.8k
      </Text>
      <TouchableOpacity>
    <Image
      style={[styles.gridColumnImg]}
      source={require('../../../images/icons/icon-27.png')}
      >

      </Image>
    </TouchableOpacity>
         
    </ImageBackground>
         
  </View>
  <View style={[{position:'relative'},styles.gridColumn2]}>
    <ImageBackground
        style={{width: '100%', height: '100%'}}
    source={require('../../../images/icons/image-35.jpg')}
    >
       <Text style={[styles.gridColumnRating]}>
        24.8k
      </Text>
     <TouchableOpacity>
     <Image
      style={[styles.gridColumnImg]}
      source={require('../../../images/icons/icon-27.png')}
      >
        
      </Image>
     </TouchableOpacity>

      
    </ImageBackground>     
  </View>
  <View style={[styles.gridColumn3]}>
    <ImageBackground
       style={{width: '100%', height: '100%'}}
    source={require('../../../images/icons/image-36.jpg')}
    >
       <Text style={[styles.gridColumnRating]}>
        24.
      </Text>
    <TouchableOpacity>
    <Image
      style={[styles.gridColumnImg]}
      source={require('../../../images/icons/icon-27.png')}
      >

      </Image>
    </TouchableOpacity>
         
    </ImageBackground>
         
  </View>
  
</View>
            </View>
        );
    }
}