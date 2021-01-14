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
import { Directions,  } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import RootTagContext from "react-native/Libraries/ReactNative/RootTagContext";
import Home from "../View/Home"
const isAndroid = Platform.OS == 'android'
var { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    center: {
      flex: 1,
      paddingTop:50,
      alignItems: "center",
      textAlign: "center",
      backgroundColor:'#fff'
    },
    displayView:{
     
      flex:1,
      height:'40%',
      width:width,
      borderBottomWidth:1
    },
    displayImgLogo: {
      
      height:80,
      width:80,
      marginHorizontal:10,
      borderRadius:50
      
    },
    displayFollowing:{
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        paddingLeft:5,
        paddingRight:5,
        height:50,
        marginTop:20,
        marginLeft:10,
        borderWidth:2,
        borderColor:'#800080'
        
    },
    displayImgDesc:{
      textAlign:'center',
      fontSize:5
    },
  
    displayImgAddBtn:{
      paddingVertical:5,
      flexDirection:'row',
      backgroundColor:'darkblue',
      justifyContent:'center',
      alignItems:'center',
      width:170,
      alignSelf:'center',
      borderRadius:5
    },
    displayImgAddBtnTxt:{
      color:'#fff',
      fontSize:12,
      alignSelf:'center',
   
      paddingLeft:5,
      flexDirection:'column',
      flex:4,
      
    },
    displayImgAddBtnIcon:{
      height:30,
      width:20,
      marginLeft:5,
      flexDirection:'column'
    },
    gridView:{
      width:width,
      height:'60%',
      flex:2,
      
    },
    gridRow:{
      width:width,
      height:150,
      flexDirection:'row',
  
     
    },
    gridColumn1:{

      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      flex:1
    },
    gridColumn2:{
      
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      flex:1
  
    },
    gridColumn3:{
     
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      flex:1
    },
    gridColumnImg:{
      height:70,
      width:70,
      marginLeft:40,
      marginTop:25
    },
    gridColumnRating:{
      color:'#fff',
      fontWeight:'bold',
      textAlign:'right',
      marginRight:30,
      marginTop:5
    }
  
    
  });
  export default class Profile extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        tabBarVisible: true,
      };
    }
    // componentWillMount() {
    //   this.props.navigation.dangerouslyGetParent().setOptions({
    //     tabBarVisible: this.state.tabBarVisible
    //   });
    // };
    
      render(){
        console.log('here',this.props.route.params.likes)
        // console.log(ownerId)
          return(
            <View style={[{},styles.center]}>

            {/* <Text>fdg</Text> */}
            
            <View style={[{},styles.displayView]}>
              <View style={{flexDirection:'row'}}>
                  <View>
                  <Image
                  style={[styles.displayImgLogo]}
                  source={require('../images/icons/profile-24.png')}
                  >
                  </Image>
                  <Text style={{textAlign:'center'}}>...</Text>
                  </View>
                  <TouchableOpacity style={[{},styles.displayFollowing]}>
                      <Text style={{ color:'#800080',fontWeight:'bold',fontSize:20,alignSelf:'center' }}>{this.props.route.params.likes +4 ?? 0}</Text>
                      <Text>Following</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[{},styles.displayFollowing]}>
                      <Text style={{color:'#800080', fontWeight:'bold',fontSize:20,alignSelf:'center' }}>{this.props.route.params.likes +2 ?? 0}</Text>
                      <Text>Followers</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[{},styles.displayFollowing]}>
                      <Text style={{color:'#800080', fontWeight:'bold',fontSize:20,alignSelf:'center',alignItems:'center' }}>{this.props.route.params.likes +10 ?? 0}</Text>
                      <Text style={{alignSelf:'center',alignItems:'center'}}>Likes</Text>
                  </TouchableOpacity>
                  
                  
                 
              </View>
              <View style={{flexDirection:'row',justifyContent:'center',marginRight:20}}>
              <TouchableOpacity style={{borderWidth:8, borderRadius:50,paddingLeft:30,paddingRight:30,borderColor:'purple',borderLeftColor:'purple',backgroundColor:'purple'}}>
                        <View>
                          <Text style={{color:'#ffff'}}>Follow</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{}}>
                          <Image
                          source={require('../images/icons/downaerow-25.png')}
                          style={{ 
                              height:40,width:40,marginLeft:10,
                              }}></Image>
                      </TouchableOpacity>
              
              </View>  
              

             

              
              <View style={{flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:10,marginRight:20}}>
              <TouchableOpacity style={{marginRight:10,marginLeft:10}}>
                          <Image 
                          source={require('../images/icons/facebook-24.png')}
                          style={{ 
                              height:40,width:40,
                              }}></Image>
                      </TouchableOpacity>
                      <TouchableOpacity style={{marginRight:10}}>
                          <Image 
                          source={require('../images/icons/instegram-23.png')}
                          style={{ 
                              height:40,width:40,
                              }}></Image>
                      </TouchableOpacity>
                      <TouchableOpacity style={{marginRight:10}}>
                          <Image 
                          source={require('../images/icons/twitter-22.png')}
                          style={{ 
                              height:40,width:40,
                              }}></Image>
                      </TouchableOpacity>
              </View>    
              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <View style={{}}>
                        <Text style={{textAlign:'center',fontSize:12}}>No matter what your physical apppearence</Text>
                        <Text style={{textAlign:'center',fontSize:12}}>when you have kindness in your heart.</Text>
                        <Text style={{textAlign:'center',marginBottom:10,fontSize:12}}>you're the most beutifull person in world</Text>
                  </View>
                
              </View>
              
              
            </View>
            <View styles={{flexDirection:'row'}}>
 

 </View>
            <ScrollView style={[styles.gridView]}>
 
 <View style={[styles.gridRow]}>

   <View style={[styles.gridColumn1]}>
       <ImageBackground
        style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-28.jpg')}
       >
         <Text style={[styles.gridColumnRating]}>
         {this.props.route.params.likes +18 ?? 0}
         </Text>
         <TouchableOpacity>
       <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
       </TouchableOpacity>
       </ImageBackground>     
     </View>
     <View style={[styles.gridColumn2]}>
       <ImageBackground
       style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-29.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
          {this.props.route.params.likes +11 ?? 0}
         </Text>
         <TouchableOpacity>
       <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
       </TouchableOpacity>
       </ImageBackground>     
     </View>
     <View style={[styles.gridColumn3]}>
       <ImageBackground
       style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-30.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
          {this.props.route.params.likes +24 ?? 0}
         </Text>
         <TouchableOpacity>
       <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
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
       source={require('../images/icons/image-31.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
          {this.props.route.params.likes +33 ?? 0}
         </Text>
         <TouchableOpacity>
       <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
       </TouchableOpacity>
       </ImageBackground>     
     </View>
     <View style={[styles.gridColumn2]}>
       <ImageBackground
           style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-32.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
          {this.props.route.params.likes +5 ?? 0}
         </Text>
         <TouchableOpacity>
       <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
       </TouchableOpacity>
       </ImageBackground>     
     </View>
     <View style={[styles.gridColumn3]}>
       <ImageBackground
          style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-33.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
          {this.props.route.params.likes +22 ?? 0}
         </Text>
         <TouchableOpacity>
       <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
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
       source={require('../images/icons/image-34.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
          {this.props.route.params.likes +38 ?? 0}
         </Text>
         <TouchableOpacity>
       <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
       </TouchableOpacity>
            
       </ImageBackground>
            
     </View>
     <View style={[{position:'relative'},styles.gridColumn2]}>
       <ImageBackground
           style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-35.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
          {this.props.route.params.likes +77 ?? 0}
         </Text>
         <TouchableOpacity>
       <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
       </TouchableOpacity>
         
       </ImageBackground>     
     </View>
     <View style={[styles.gridColumn3]}>
       <ImageBackground
          style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-36.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
          {this.props.route.params.likes + 34 ?? 0}
         </Text>
         <TouchableOpacity>
       <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
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
       source={require('../images/icons/image-34.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
          {this.props.route.params.likes +43 ?? 0}
         </Text>
         <TouchableOpacity>
       <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
       </TouchableOpacity>
            
       </ImageBackground>
            
     </View>
     <View style={[{position:'relative'},styles.gridColumn2]}>
       <ImageBackground
           style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-35.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
          {this.props.route.params.likes +35 ?? 0}
         </Text>
        <TouchableOpacity>
        <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >
           
         </Image>
        </TouchableOpacity>

         
       </ImageBackground>     
     </View>
     <View style={[styles.gridColumn3]}>
       <ImageBackground
          style={{width: '100%', height: '100%'}}
       source={require('../images/icons/image-36.jpg')}
       >
          <Text style={[styles.gridColumnRating]}>
          {this.props.route.params.likes + 51 ?? 0}
         </Text>
       <TouchableOpacity>
       <Image
         style={[styles.gridColumnImg]}
         source={require('../images/icons/icon-27.png')}
         >

         </Image>
       </TouchableOpacity>
            
       </ImageBackground>
            
     </View>
     
 </View>
 
</ScrollView>  
           
        </View>
          )
      }
  }  