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


const isAndroid = Platform.OS == 'android';
import styles from '../css/SimilerAcountsCss';

var { width, height } = Dimensions.get('window');


export default class SimilerAcounts extends React.Component {
  render() {
    return (
      <View style={[{},styles.center]}>
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
                <Text style={{ color:'#800080',fontWeight:'bold',alignSelf:'center' }}>40k</Text>
                <Text>Following</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[{},styles.displayFollowing]}>
                <Text style={{color:'#800080', fontWeight:'bold',alignSelf:'center' }}>1.10M</Text>
                <Text>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[{},styles.displayFollowing]}>
                <Text style={{color:'#800080', fontWeight:'bold',alignSelf:'center',alignItems:'center' }}>17.3M</Text>
                <Text style={{alignSelf:'center',alignItems:'center'}}>Likes</Text>
            </TouchableOpacity>
            
            
           
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',marginRight:20}}>
        <TouchableOpacity style={{borderWidth:8,backgroundColor:'purple',color:'#fff', borderRadius:50,paddingLeft:20,paddingRight:20,borderColor:'purple',borderLeftColor:'darkblue'}}>
                  <View>
                    <Text styles={{color:'#ffff',fontSize:5}}>Follow</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:5,borderWidth:8,borderRadius:50,borderColor:'darkblue',borderLeftColor:'darkblue'}}>
                    <Image
                    source={require('../images/icons/icon-51.png')}
                    style={{ 
                        height:2,width:2,backgroundColor:'darkblue',borderRadius:50,
                        paddingRight:10,paddingLeft:10,paddingTop:10,paddingBottom:10}}></Image>
                </TouchableOpacity>
        
        </View>  
        

       

        
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:10,marginRight:20}}>
        <TouchableOpacity style={{borderWidth:8,borderRadius:50,borderColor:'darkblue',borderLeftColor:'darkblue'}}>
                    <Image 
                    source={require('../images/icons/facebook.png')}
                    style={{ 
                        height:5,width:5,backgroundColor:'darkblue',borderRadius:50,
                        paddingRight:10,paddingLeft:10,paddingTop:10,paddingBottom:10}}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:5,borderWidth:8,borderRadius:50,borderColor:'darkblue',borderLeftColor:'darkblue'}}>
                    <Image 
                    source={require('../images/icons/icon-51.png')}
                    style={{ 
                        height:5,width:5,backgroundColor:'darkblue',borderRadius:50,
                        paddingRight:10,paddingLeft:10,paddingTop:10,paddingBottom:10}}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:5,borderWidth:8,borderRadius:50,borderColor:'darkblue',borderLeftColor:'darkblue'}}>
                    <Image 
                    source={require('../images/icons/twitter.png')}
                    style={{ 
                        height:5,width:5,backgroundColor:'darkblue',borderRadius:50,
                        paddingRight:10,paddingLeft:10,paddingTop:10,paddingBottom:10}}></Image>
                </TouchableOpacity>
        </View>    
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <View style={{}}>
                  <Text style={{textAlign:'center',fontSize:10}}>No matter what your physical apppearence</Text>
                  <Text style={{textAlign:'center',fontSize:10}}>when you have kindness in your heart.</Text>
                  <Text style={{textAlign:'center',marginBottom:10,fontSize:10}}>you're the most beutifull person in world</Text>
            </View>
          
          
        </View>
        <View>
          <View styles={[{},styles.cardViewHeading]}> 
          <Text style={{color:'purple',fontWeight:'500',marginLeft:10,marginBottom:5}}>Silmiler account for you</Text>
          </View>
            <View style={[{paddingHorizontal:10},styles.cardViewRow]}>
              <View style={[{},styles.cardViewColumn]}>
                 <TouchableOpacity style={{alignSelf:'flex-end',right:10}}>
                   <Text>x</Text>
                 </TouchableOpacity>
                 <Image
                 source={require('../images/icons/image-28.jpg')}
                 style={{
                   height:50,width:50,borderRadius:50
                 }}
                 >

                 </Image>
                 <Text style={{fontSize:10}}>
                    ali_rawal94
                 </Text>
                 <Text style={{fontSize:8,color:'#9e9c9c'}}>
                    Ali Rawal
                 </Text>
                 <TouchableOpacity>
                   <Text style={{fontSize:10,backgroundColor:'purple',color:'#fff',paddingHorizontal:25,paddingVertical:2,borderRadius:3,marginBottom:10}}>Follow</Text>
                 </TouchableOpacity>
              </View>
              <View style={[{},styles.cardViewColumn]}>
                 <TouchableOpacity style={{alignSelf:'flex-end',right:10}}>
                   <Text>x</Text>
                 </TouchableOpacity>
                 <Image
                 source={require('../images/icons/image-28.jpg')}
                 style={{
                   height:50,width:50,borderRadius:50
                 }}
                 >

                 </Image>
                 <Text style={{fontSize:10}}>
                    ali_rawal94
                 </Text>
                 <Text style={{fontSize:8,color:'#9e9c9c'}}>
                    Ali Rawal
                 </Text>
                 <TouchableOpacity>
                   <Text style={{fontSize:10,backgroundColor:'purple',color:'#fff',paddingHorizontal:25,paddingVertical:2,borderRadius:3,marginBottom:10}}>Follow</Text>
                 </TouchableOpacity>
              </View>
              <View style={[{},styles.cardViewColumn]}>
                 <TouchableOpacity style={{alignSelf:'flex-end',right:10}}>
                   <Text>x</Text>
                 </TouchableOpacity>
                 <Image
                 source={require('../images/icons/image-28.jpg')}
                 style={{
                   height:50,width:50,borderRadius:50
                 }}
                 >

                 </Image>
                 <Text style={{fontSize:10}}>
                    ali_rawal94
                 </Text>
                 <Text style={{fontSize:8,color:'#9e9c9c'}}>
                    Ali Rawal
                 </Text>
                 <TouchableOpacity>
                   <Text style={{fontSize:10,backgroundColor:'purple',color:'#fff',paddingHorizontal:25,paddingVertical:2,borderRadius:3,marginBottom:10}}>Follow</Text>
                 </TouchableOpacity>
              </View>
              
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
     24.8k
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
     24.8k
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
     24.8k
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
     24.8k
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
     24.8k
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
     24.8k
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
     24.8k
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
     24.8k
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
     24.8k
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
     24.8k
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
     24.
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