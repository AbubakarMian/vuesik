import React from "react";
import {View,Text, Dimensions,StyleSheet,Image} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../../css/TabsCSS/DiscoverTabsCSS/HashTagTabCss";

var {width,hight} = Dimensions.get('window');


export default class TopTab extends React.Component{

    render(){
        return(
            <ScrollView style={[{},styles.center]}>
                 <View style={[{},styles.Container]}>
                 <ScrollView
                 horizontal={true}
                 style={{flexDirection:'row'}}
                 >
                 <View>
                     <TouchableOpacity>
                     <Image
                     source={require('../../../images/icons/image-15.png')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                     </TouchableOpacity>
                 </View>
                 <View>
                 <TouchableOpacity>
                     <Image
                     source={require('../../../images/icons/image-15.jpg')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                     </TouchableOpacity>
                 </View>
                 <View>
                 <TouchableOpacity>
                     <Image
                     source={require('../../../images/icons/image-16.jpg')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                     </TouchableOpacity>
                 </View>
                 <View>
                 <TouchableOpacity>
                     <Image
                     source={require('../../../images/icons/image-17.jpg')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                     </TouchableOpacity>
                 </View>
                 <View>
                 <TouchableOpacity>
                     <Image
                     source={require('../../../images/icons/image-18.jpg')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                     </TouchableOpacity>
                 </View>
     

                 </ScrollView>
                    <View style={[{},styles.Header]}>
                     <View>
                         <Image
                         style={{height:
                         30,width:30,}}
                         source={require('../../../images/icons/hashtag.png')}
                         >

                         </Image>
                        
                     </View>
                     <View style={[{},styles.HeaderContent]}>
                         <View>
                             <Text style={[{},styles.HeaderContentHeading]}>
                                 memoriesbringback
                             </Text>
                         </View> 
                         <View>
                             <Text style={[{},styles.HeaderContentDesc]}>
                                 Trending Hashtag
                             </Text>
                         </View> 
                     </View>
                     <View style={[{},styles.HeaderViewsBtnview]}>
                         <TouchableOpacity>
                             <View style={[{},styles.HeaderViewsBtnRow]}>
                                 <View>
                                     <Text style={[{},styles.HeaderViewsBtnRowText]}>13.8B views</Text>
                                 </View>
                                 <View>
                                     <Image
                                     style={{height:10,width:10,}}
                                     source={require('../../../images/icons/lessthen-24.png')}
                                     >

                                     </Image>
                                 </View>
                             </View>
                         </TouchableOpacity>
                     </View>

                    </View>
                 </View>
                 <View style={[{},styles.Container]}>
                 <ScrollView
                 horizontal={true}
                 style={{flexDirection:'row'}}
                 >
                 <View>
                 <TouchableOpacity>
                     <Image
                     source={require('../../../images/icons/image-18.jpg')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                     </TouchableOpacity>
                 </View>
                 <View>
                 <TouchableOpacity>
                     <Image
                     source={require('../../../images/icons/image-19.jpg')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                     </TouchableOpacity>
                 </View>
                 <View>
                 <TouchableOpacity>
                     <Image
                     source={require('../../../images/icons/image-20.jpg')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                     </TouchableOpacity>
                 </View>
                 <View>
                     <Image
                     source={require('../../../images/icons/image-17.jpg')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                 </View>
                 <View>
                     <Image
                     source={require('../../../images/icons/image-15.png')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                 </View>
     

                 </ScrollView>
                    <View style={[{},styles.Header]}>
                     <View>
                         <Image
                         style={{height:
                         30,width:30,}}
                         source={require('../../../images/icons/hashtag.png')}
                         >

                         </Image>
                        
                     </View>
                     <View style={[{},styles.HeaderContent]}>
                         <View>
                             <Text style={[{},styles.HeaderContentHeading]}>
                                 pkcricketfever
                             </Text>
                         </View> 
                         <View>
                             <Text style={[{},styles.HeaderContentDesc]}>
                                 Trending Hashtag
                             </Text>
                         </View> 
                     </View>
                     <View style={[{},styles.HeaderViewsBtnview]}>
                         <TouchableOpacity>
                             <View style={[{},styles.HeaderViewsBtnRow]}>
                                 <View>
                                     <Text style={[{},styles.HeaderViewsBtnRowText]}>13.8B views</Text>
                                 </View>
                                 <View>
                                     <Image
                                     style={{height:10,width:10,}}
                                     source={require('../../../images/icons/lessthen-24.png')}
                                     >

                                     </Image>
                                 </View>
                             </View>
                         </TouchableOpacity>
                     </View>

                    </View>
                 </View>
                 <View style={[{},styles.Container]}>
                 <ScrollView
                 horizontal={true}
                 style={{flexDirection:'row'}}
                 >
                 <View>
                 <TouchableOpacity>
                     <Image
                     source={require('../../../images/icons/image-18.jpg')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                     </TouchableOpacity>
                 </View>
                 <View>
                 <TouchableOpacity>
                     <Image
                     source={require('../../../images/icons/image-19.jpg')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                     </TouchableOpacity>
                 </View>
                 <View>
                 <TouchableOpacity>
                     <Image
                     source={require('../../../images/icons/image-20.jpg')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                     </TouchableOpacity>
                 </View>
                 <View>
                     <Image
                     source={require('../../../images/icons/image-17.jpg')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                 </View>
                 <View>
                     <Image
                     source={require('../../../images/icons/image-15.png')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                 </View>
     

                 </ScrollView>
                    <View style={[{},styles.Header]}>
                     <View>
                         <Image
                         style={{height:
                         30,width:30,}}
                         source={require('../../../images/icons/hashtag.png')}
                         >

                         </Image>
                        
                     </View>
                     <View style={[{},styles.HeaderContent]}>
                         <View>
                             <Text style={[{},styles.HeaderContentHeading]}>
                                 sportlover
                             </Text>
                         </View> 
                         <View>
                             <Text style={[{},styles.HeaderContentDesc]}>
                                 Trending Hashtag
                             </Text>
                         </View> 
                     </View>
                     <View style={[{},styles.HeaderViewsBtnview]}>
                         <TouchableOpacity>
                             <View style={[{},styles.HeaderViewsBtnRow]}>
                                 <View>
                                     <Text style={[{},styles.HeaderViewsBtnRowText]}>13.8B views</Text>
                                 </View>
                                 <View>
                                     <Image
                                     style={{height:10,width:10,}}
                                     source={require('../../../images/icons/lessthen-24.png')}
                                     >

                                     </Image>
                                 </View>
                             </View>
                         </TouchableOpacity>
                     </View>

                    </View>
                 </View>
                 <View style={[{},styles.Container]}>
                 <ScrollView
                 horizontal={true}
                 style={{flexDirection:'row'}}
                 >
                 <View>
                     <Image
                     source={require('../../../images/icons/image-15.png')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                 </View>
                 <View>
                     <Image
                     source={require('../../../images/icons/image-15.png')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                 </View>
                 <View>
                     <Image
                     source={require('../../../images/icons/image-15.png')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                 </View>
                 <View>
                     <Image
                     source={require('../../../images/icons/image-15.png')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                 </View>
                 <View>
                     <Image
                     source={require('../../../images/icons/image-15.png')}
                     style={{height:width/3,width:width/4,marginRight:2}}
                     >

                     </Image>
                 </View>
     

                 </ScrollView>
                    <View style={[{},styles.Header]}>
                     <View>
                         <Image
                         style={{height:
                         30,width:30,}}
                         source={require('../../../images/icons/hashtag.png')}
                         >

                         </Image>
                        
                     </View>
                     <View style={[{},styles.HeaderContent]}>
                         <View>
                             <Text style={[{},styles.HeaderContentHeading]}>
                                 memoriesbringback
                             </Text>
                         </View> 
                         <View>
                             <Text style={[{},styles.HeaderContentDesc]}>
                                 Trending Hashtag
                             </Text>
                         </View> 
                     </View>
                     <View style={[{},styles.HeaderViewsBtnview]}>
                         <TouchableOpacity>
                             <View style={[{},styles.HeaderViewsBtnRow]}>
                                 <View>
                                     <Text style={[{},styles.HeaderViewsBtnRowText]}>13.8B views</Text>
                                 </View>
                                 <View>
                                     <Image
                                     style={{height:10,width:10,}}
                                     source={require('../../../images/icons/lessthen-24.png')}
                                     >

                                     </Image>
                                 </View>
                             </View>
                         </TouchableOpacity>
                     </View>

                    </View>
                 </View>
            </ScrollView>
        );
    }
}