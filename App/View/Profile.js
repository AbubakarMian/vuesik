import React from "react";
import {
Platform,
  Dimensions,
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
 

} from "react-native";
import LinearGradient from "react-native-linear-gradient";


const isAndroid = Platform.OS == 'android';
import styles from '../css/ProfileCss';

var {width,height} = Dimensions.get('window');


  export default class UserProfile extends React.Component{
      render(){
          return(
            <View style={[{},styles.center]}>
            <View style={[{},styles.displayView]}>
              <View style={{flexDirection:'row',alignSelf:'center',flex:1,alignItems:'center'}}>
                  <View style={{}}>
                      <Image
                      style={{height:100,width:80,flexDirection:'row',alignSelf:'center',alignItems:'center'}}
      
                      source={require('../images/icons/profile-24.png')}
                      >
                      </Image>
                      <Text style={{fontWeight:'bold',alignSelf:'center'}}>Tampa Curhat Beats</Text>
                      <Text style={{alignSelf:'center',marginBottom:20}}>1307 Videos</Text>
                      <TouchableOpacity style={{backgroundColor:'darkblue'}}>
                          <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column',justifyContent:'center'}}>
                            <Image
                            source={require('../images/icons/icon-25.png')}
                            styles={{height:16,width:8,marginTop:5,marginBottom:5,marginLeft:10,}}
                            >

                            </Image>
                            </View>
                            <View style={{flexDirection:'column'}}>
                              <Text style={{color:'#fff',marginLeft:5,marginTop:7,textAlign:'center',justifyContent:'center',textAlignVertical:'center', marginRight:5,fontSize:8}}> Add to Favorites Song</Text>
                            </View>
                          </View>
                      </TouchableOpacity>
                  </View>
                 
                  
              </View>
       
            </View>
        
          <ScrollView style={[styles.gridView]}>
 
 <View style={[styles.gridRow]}>
   <View style={[styles.gridColumn1]}>
       <ImageBackground
        style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-28.jpg')}
       >
         <Text style={[styles.gridColumnRating]}>
           24.8k
         </Text>
         <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
       </ImageBackground>     
     </View>
     <View style={[styles.gridColumn2]}>
       <ImageBackground
       style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-29.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
           24.8k
         </Text>
         <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
       </ImageBackground>     
     </View>
     <View style={[styles.gridColumn3]}>
       <ImageBackground
       style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-30.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
           24.8k
         </Text>
         <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
       </ImageBackground>     
     </View>
 </View>
 <View style={[styles.gridRow]}>
   <View style={[styles.gridColumn1]}>
       <ImageBackground
          style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-31.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
           24.8k
         </Text>
         <Image

         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
       </ImageBackground>     
     </View>
     <View style={[styles.gridColumn2]}>
       <ImageBackground
           style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-32.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
           24.8k
         </Text>
         <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >
           

         </Image>
       </ImageBackground>     
     </View>
     <View style={[styles.gridColumn3]}>
       <ImageBackground
          style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-33.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
           24.8k
         </Text>
         <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
       </ImageBackground>     
     </View>
 </View>
 <View style={[styles.gridRow]}>
 <View style={[styles.gridColumn1]}>
       <ImageBackground
          style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-34.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
           24.8k
         </Text>
         <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
            
       </ImageBackground>
            
     </View>
     <View style={[{position:'relative'},styles.gridColumn2]}>
       <ImageBackground
           style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-35.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
           24.8k
         </Text>
         <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >
           
         </Image>
         
       </ImageBackground>     
     </View>
     <View style={[styles.gridColumn3]}>
       <ImageBackground
          style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-36.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
           24.8k
         </Text>
         <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
            
       </ImageBackground>
            
     </View>
     
 </View>
 <View style={[styles.gridRow]}>
 <View style={[styles.gridColumn1]}>
       <ImageBackground
          style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-34.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
           24.8k
         </Text>
         <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
            
       </ImageBackground>
            
     </View>
     <View style={[{position:'relative'},styles.gridColumn2]}>
       <ImageBackground
           style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-35.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
           24.8k
         </Text>
         <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >
           
         </Image>
         
       </ImageBackground>     
     </View>
     <View style={[styles.gridColumn3]}>
       <ImageBackground
          style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-36.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
           24.8k
         </Text>
         <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
            
       </ImageBackground>
            
     </View>
     
 </View>
 
</ScrollView>
        <View style={{position:'absolute',bottom:30,}}>
         
         <TouchableOpacity>
         <LinearGradient
           start={{ x: 0.2, y: 0.25 }} end={{ x: 0.7, y: 1.0 }}
           colors={['#2e3192','#800080', '#93278f']}
           style={{ flexDirection:'row', borderRadius:50,paddingLeft:25,paddingRight:25,paddingBottom:10,paddingTop:5,alignSelf:'center',marginRight:30}} 
          >
           <View>
           <Image
           source={require('../images/icons/icon-26.png')}
           style={{height:20,width:10,}}
           >

           </Image>
           </View>
          <View style={{marginLeft:10}}>
          <Text style={{color:"#fff"}}>Create Vidio</Text>
          </View>
          </LinearGradient>
         </TouchableOpacity>
        </View>
         
        </View>
          )
      }
  }  