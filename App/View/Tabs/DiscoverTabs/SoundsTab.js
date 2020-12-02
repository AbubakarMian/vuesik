import React from "react";
import {View,Text, Dimensions,StyleSheet, Image,ScrollView} from "react-native";
import {  TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../../css/TabsCSS/DiscoverTabsCSS/SoundsTabCss";
var {width,height} = Dimensions.get('window');


export default class SoundsTab extends React.Component{

    render(){
        return(
            <ScrollView style={[{},styles.center]}>
                 <View style={[{},styles.Row]}>
                 <TouchableOpacity>
                    <View style={[{},styles.ImageView]}>
                        <Image
                        style={{height:70,width:70,borderRadius:5}} 
                        source={require('../../../images/icons/image-31.jpg')}
                        >

                        </Image>
                        <Image
                        style={[{},styles.ImageViewPlay]}
                        source={require('../../../images/icons/icon-27.png')}
                        >

                        </Image>
                    </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:10}}>
                        <View style={{flexDirection:'column',}}>
                           <View>
                               <Text style={[{},styles.ContentheadingTex]}>Voices (Randy Orton ) [feat. Rev Theory] </Text>
                           </View>
                           <View>
                               <Text style={[{},styles.ContentDescTex]}>WWE</Text>
                           </View>
                           <View style={{}}>
                               <Text style={[{},styles.RatingText]}>01:00</Text>
                           </View>
                        </View>
                    </View>
                    <View style={[{},styles.RatingView]}>
                        <Text style={[{},styles.RatingText]}>11.1k</Text>
                    </View>
                 </View>
                 <View style={[{},styles.Row]}>
                 <TouchableOpacity>
                    <View style={[{},styles.ImageView]}>
                        <Image
                        style={{height:70,width:70,borderRadius:5}} 
                        source={require('../../../images/icons/image-28.jpg')}
                        >

                        </Image>
                        <Image
                        style={[{},styles.ImageViewPlay]}
                        source={require('../../../images/icons/icon-27.png')}
                        >

                        </Image>
                    </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:10}}>
                        <View style={{flexDirection:'column',}}>
                           <View>
                               <Text style={[{},styles.ContentheadingTex]}>Satisfy</Text>
                           </View>
                           <View>
                               <Text style={[{},styles.ContentDescTex]}> Imran Khan </Text>
                           </View>
                           <View style={{}}>
                               <Text style={[{},styles.RatingText]}>01:00</Text>
                           </View>
                        </View>
                    </View>
                    <View style={[{},styles.RatingView]}>
                        <Text style={[{},styles.RatingText]}>269.3k</Text>
                    </View>
                 </View>
                 <View style={[{},styles.Row]}>
                 <TouchableOpacity>
                    <View style={[{},styles.ImageView]}>
                        <Image
                        style={{height:70,width:70,borderRadius:5}} 
                        source={require('../../../images/icons/image-29.jpg')}
                        >

                        </Image>
                        <Image
                        style={[{},styles.ImageViewPlay]}
                        source={require('../../../images/icons/icon-27.png')}
                        >

                        </Image>
                    </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:10}}>
                        <View style={{flexDirection:'column',}}>
                           <View>
                               <Text style={[{},styles.ContentheadingTex]}>WWE</Text>
                           </View>
                           <View>
                               <Text style={[{},styles.ContentDescTex]}>Last Boyz</Text>
                           </View>
                           <View style={{}}>
                               <Text style={[{},styles.RatingText]}>01:00</Text>
                           </View>
                        </View>
                    </View>
                    <View style={[{},styles.RatingView]}>
                        <Text style={[{},styles.RatingText]}>3124</Text>
                    </View>
                 </View>
                 <View style={[{},styles.Row]}>
                 <TouchableOpacity>
                    <View style={[{},styles.ImageView]}>
                        <Image
                        style={{height:70,width:70,borderRadius:5}} 
                        source={require('../../../images/icons/image-16.png')}
                        >

                        </Image>
                        <Image
                        style={[{},styles.ImageViewPlay]}
                        source={require('../../../images/icons/icon-27.png')}
                        >

                        </Image>
                    </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:10}}>
                        <View style={{flexDirection:'column',}}>
                           <View>
                               <Text style={[{},styles.ContentheadingTex]}>WWE</Text>
                           </View>
                           <View>
                               <Text style={[{},styles.ContentDescTex]}>BigDwayne</Text>
                           </View>
                           <View style={{}}>
                               <Text style={[{},styles.RatingText]}>01:00</Text>
                           </View>
                        </View>
                    </View>
                    <View style={[{},styles.RatingView]}>
                        <Text style={[{},styles.RatingText]}>806</Text>
                    </View>
                 </View>
                <View style={{width:'70%',borderBottomWidth:1,alignSelf:'flex-end',marginRight:10,borderBottomColor:'#aaa',marginBottom:5}}>
                   <TouchableOpacity>
                       <View style={{flexDirection:'row'}}>
                       <Image
                       style={{height:10,width:12,marginTop:5,marginRight:10}}
                       source={require('../../../images/icons/arrow-22.png')}
                       >

                       </Image>
                       <Text style={[{color:'#aaa',marginBottom:10}]}>1 matched sounds</Text>
                       </View>
                   </TouchableOpacity>   
                </View>
                <View style={[{},styles.Row]}>
                 <TouchableOpacity>
                    <View style={[{},styles.ImageView]}>
                        <Image
                        style={{height:70,width:70,borderRadius:5}} 
                        source={require('../../../images/icons/image-33.jpg')}
                        >

                        </Image>
                        <Image
                        style={[{},styles.ImageViewPlay]}
                        source={require('../../../images/icons/icon-27.png')}
                        >

                        </Image>
                    </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:10}}>
                        <View style={{flexDirection:'column',}}>
                           <View>
                               <Text style={[{},styles.ContentheadingTex]}>WWE</Text>
                           </View>
                           <View>
                               <Text style={[{},styles.ContentDescTex]}>Bahrawy Bek</Text>
                           </View>
                           <View style={{}}>
                               <Text style={[{},styles.RatingText]}>01:00</Text>
                           </View>
                        </View>
                    </View>
                    <View style={[{},styles.RatingView]}>
                        <Text style={[{},styles.RatingText]}>366</Text>
                    </View>
                 </View>
                 <View style={[{},styles.Row]}>
                 <TouchableOpacity>
                    <View style={[{},styles.ImageView]}>
                        <Image
                        style={{height:70,width:70,borderRadius:5}} 
                        source={require('../../../images/icons/square-19.png')}
                        >

                        </Image>
                        <Image
                        style={[{},styles.ImageViewPlay]}
                        source={require('../../../images/icons/icon-27.png')}
                        >

                        </Image>
                    </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:10}}>
                        <View style={{flexDirection:'column',}}>
                           <View>
                               <Text style={[{},styles.ContentheadingTex]}>The Second Coming</Text>
                           </View>
                           <View>
                               <Text style={[{},styles.ContentDescTex]}>WWE and CFO</Text>
                           </View>
                           <View style={{}}>
                               <Text style={[{},styles.RatingText]}>01:00</Text>
                           </View>
                        </View>
                    </View>
                    <View style={[{},styles.RatingView]}>
                        <Text style={[{},styles.RatingText]}>366</Text>
                    </View>
                 </View>
                 <View style={[{},styles.Row]}>
                 <TouchableOpacity>
                    <View style={[{},styles.ImageView]}>
                        <Image
                        style={{height:70,width:70,borderRadius:5}} 
                        source={require('../../../images/icons/image-32.jpg')}
                        >

                        </Image>
                        <Image
                        style={[{},styles.ImageViewPlay]}
                        source={require('../../../images/icons/icon-27.png')}
                        >

                        </Image>
                    </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:10}}>
                        <View style={{flexDirection:'column',}}>
                           <View>
                               <Text style={[{},styles.ContentheadingTex]}>Sky's the Limit (Remix)</Text>
                           </View>
                           <View>
                               <Text style={[{},styles.ContentDescTex]}>WWE and CFO</Text>
                           </View>
                           <View style={{}}>
                               <Text style={[{},styles.RatingText]}>01:00</Text>
                           </View>
                        </View>
                    </View>
                    <View style={[{},styles.RatingView]}>
                        <Text style={[{},styles.RatingText]}>366</Text>
                    </View>
                 </View>
                 <View style={[{},styles.Row]}>
                 <TouchableOpacity>
                    <View style={[{},styles.ImageView]}>
                        <Image
                        style={{height:70,width:70,borderRadius:5}} 
                        source={require('../../../images/icons/square-21.png')}
                        >

                        </Image>
                        <Image
                        style={[{},styles.ImageViewPlay]}
                        source={require('../../../images/icons/icon-27.png')}
                        >

                        </Image>
                    </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:10}}>
                        <View style={{flexDirection:'column',}}>
                           <View>
                               <Text style={[{},styles.ContentheadingTex]}>WWE</Text>
                           </View>
                           <View>
                               <Text style={[{},styles.ContentDescTex]}>Lorchrisondabeat</Text>
                           </View>
                           <View style={{}}>
                               <Text style={[{},styles.RatingText]}>01:00</Text>
                           </View>
                        </View>
                    </View>
                    <View style={[{},styles.RatingView]}>
                        <Text style={[{},styles.RatingText]}>366</Text>
                    </View>
                 </View>

                
            </ScrollView>
        );
    }
}