import React from "react";
import {View,Text, Dimensions,StyleSheet,Image,ScrollView} from "react-native";
import {  TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../../css/TabsCSS/FollowTabCSS/FollowingTabCss";

var {width,height} = Dimensions.get('window');


export default class RecommendedTab extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
              <ScrollView style={[{},styles.Container]}>
                 <View style={[{},styles.Row]}>
                   <View style={[{},styles.RoundImageView]}>
                       <TouchableOpacity>
                       <Image
                       style={[{},styles.RoundImage]}
                       source={require('../../../images/icons/circle-image-14.png')}
                       >

                       </Image>
                       </TouchableOpacity>
                   </View>
                   <View style={[{},styles.ContenView]}>
                       <View>
                           <Text style={[{},styles.HeadingTxt]}>Kinamcpherson3036</Text>
                       </View>
                       <View>
                           <Text style={[{},styles.DescriptionTxt]}>Likes your video. 6 weeks ago</Text>
                       </View>
                   </View>
                   <View style={[{},styles.FollowView]}>
                       <TouchableOpacity>
                           <View style={[{},styles.FollowBtnView]}>
                               <Text style={[{},styles.FollowBtnTex]}>Follow</Text>
                           </View>
                       </TouchableOpacity>
                   </View>
                 </View>
                 <View style={[{},styles.Row]}>
                   <View style={[{},styles.RoundImageView]}>
                       <TouchableOpacity>
                       <Image
                       style={[{},styles.RoundImage]}
                       source={require('../../../images/icons/circle-image-15.png')}
                       >

                       </Image>
                       </TouchableOpacity>
                   </View>
                   <View style={[{},styles.ContenView]}>
                       <View>
                           <Text style={[{},styles.HeadingTxt]}>Irmapatel7892</Text>
                       </View>
                       <View>
                           <Text style={[{},styles.DescriptionTxt]}>Likes your comment. 2 weeks ago</Text>
                       </View>
                   </View>
                   <View style={[{},styles.FollowView]}>
                       <TouchableOpacity>
                           <View style={[{},styles.FollowBtnView]}>
                               <Text style={[{},styles.FollowBtnTex]}>Follow</Text>
                           </View>
                       </TouchableOpacity>
                   </View>
                 </View>
                 <View style={[{},styles.Row]}>
                   <View style={[{},styles.RoundImageView]}>
                       <TouchableOpacity>
                       <Image
                       style={[{},styles.RoundImage]}
                       source={require('../../../images/icons/circle-image-16.png')}
                       >

                       </Image>
                       </TouchableOpacity>
                   </View>
                   <View style={[{},styles.ContenView]}>
                       <View>
                           <Text style={[{},styles.HeadingTxt]}>Read-my-picture1888</Text>
                       </View>
                       <View>
                           <Text style={[{},styles.DescriptionTxt]}>Likes your video. 2 minutes ago</Text>
                       </View>
                   </View>
                   <View style={[{},styles.FollowView]}>
                       <TouchableOpacity>
                           <View style={[{},styles.FollowBtnView]}>
                               <Text style={[{},styles.FollowBtnTex]}>Follow</Text>
                           </View>
                       </TouchableOpacity>
                   </View>
                 </View>
                 <View style={[{},styles.Row]}>
                   <View style={[{},styles.RoundImageView]}>
                       <TouchableOpacity>
                       <Image
                       style={[{},styles.RoundImage]}
                       source={require('../../../images/icons/circle-image-17.png')}
                       >

                       </Image>
                       </TouchableOpacity>
                   </View>
                   <View style={[{},styles.ContenView]}>
                       <View>
                           <Text style={[{},styles.HeadingTxt]}>Seansimon2376</Text>
                       </View>
                       <View>
                           <Text style={[{},styles.DescriptionTxt]}>Likes your comment. 1 hour ago</Text>
                       </View>
                   </View>
                   <View style={[{},styles.FollowView]}>
                       <TouchableOpacity>
                           <View style={[{},styles.FollowBtnView]}>
                               <Text style={[{},styles.FollowBtnTex]}>Follow</Text>
                           </View>
                       </TouchableOpacity>
                   </View>
                 </View>
                 <View style={[{},styles.Row]}>
                   <View style={[{},styles.RoundImageView]}>
                       <TouchableOpacity>
                       <Image
                       style={[{},styles.RoundImage]}
                       source={require('../../../images/icons/circle-16.png')}
                       >

                       </Image>
                       </TouchableOpacity>
                   </View>
                   <View style={[{},styles.ContenView]}>
                       <View>
                           <Text style={[{},styles.HeadingTxt]}>Stephensonkim7831</Text>
                       </View>
                       <View>
                           <Text style={[{},styles.DescriptionTxt]}>Likes your video. 1 year ago</Text>
                       </View>
                   </View>
                   <View style={[{},styles.FollowView]}>
                       <TouchableOpacity>
                           <View style={[{},styles.FollowBtnView]}>
                               <Text style={[{},styles.FollowBtnTex]}>Follow</Text>
                           </View>
                       </TouchableOpacity>
                   </View>
                 </View>
                 <View style={[{},styles.Row]}>
                   <View style={[{},styles.RoundImageView]}>
                       <TouchableOpacity>
                       <Image
                       style={[{},styles.RoundImage]}
                       source={require('../../../images/icons/circle-image-18.png')}
                       >

                       </Image>
                       </TouchableOpacity>
                   </View>
                   <View style={[{},styles.ContenView]}>
                       <View>
                           <Text style={[{},styles.HeadingTxt]}>Jenifer6311</Text>
                       </View>
                       <View>
                           <Text style={[{},styles.DescriptionTxt]}>Likes your comment. 2 weeks ago</Text>
                       </View>
                   </View>
                   <View style={[{},styles.FollowView]}>
                       <TouchableOpacity>
                           <View style={[{},styles.FollowBtnView]}>
                               <Text style={[{},styles.FollowBtnTex]}>Follow</Text>
                           </View>
                       </TouchableOpacity>
                   </View>
                 </View>
            </ScrollView>
            </View>
            
        );
    }
}