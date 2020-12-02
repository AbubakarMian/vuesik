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
        <View style={[{},styles.TopRow]}>
                    <View style={{flex:1}}>
                      <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('MyVues')}
                      >
                      <Image
                        source={require('../images/icons/backarrow-36.png')}
                        style={{height:20,width:20}}
                        >

                        </Image>
                      </TouchableOpacity>
                    </View>
                    <View style={{position:'absolute',right:10}}>
                        <TouchableOpacity>
                        <Image
                        style={{height:30,width:30}}
                        source={require('../images/icons/icon-22.png')}
                        >

                        </Image>
                        </TouchableOpacity>

                    </View>
                  
                </View>
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
        <TouchableOpacity style={{borderWidth:1,backgroundColor:'purple',color:'#fff', borderRadius:50,paddingHorizontal:40,borderColor:'purple',justifyContent:'center'}}>
                  <View style={{alignSelf:'center'}}>
                    <Text style={{color:'#ffff',fontSize:10}}>Follow</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:5,}}>
                    <Image 
                    source={require('../images/icons/downaerow-25.png')}
                    style={{ 
                        height:40,width:40,}}></Image>
                </TouchableOpacity>
        
        </View>  
        

       

        
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:10,marginRight:20}}>
        <TouchableOpacity style={{marginLeft:5,}}>
                    <Image 
                    source={require('../images/icons/facebook-24.png')}
                    style={{ 
                        height:40,width:40,}}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:5,}}>
                    <Image 
                    source={require('../images/icons/instegram-23.png')}
                    style={{ 
                        height:40,width:40,}}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:5,}}>
                    <Image 
                    source={require('../images/icons/twitter-22.png')}
                    style={{ 
                        height:40,width:40,}}></Image>
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