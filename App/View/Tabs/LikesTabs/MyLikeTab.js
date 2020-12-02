import React from "react";
import {View,Text, Dimensions,StyleSheet,Image,ScrollView} from "react-native";
import {  TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../../css/TabsCSS/LikesTabsCSS/MyLikesTabCss";

var {width,hight} = Dimensions.get('window');


export default class MyLikesTab extends React.Component{

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
                   <View style={[{},styles.SquerImageView]}>
                       <View>
                       <Image
                       style={[{},styles.SquerImage]}
                       source={require('../../../images/icons/image-29.jpg')}
                       >

                       </Image>
                       </View>
                       <View style={[{},styles.PlayImageView]}>
                           <TouchableOpacity>
                           <Image
                           style={{height:30,width:30}}
                           source={require('../../../images/icons/icon-27.png')}
                           >

                           </Image>
                           </TouchableOpacity>
                       </View>
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
                   <View style={[{},styles.SquerImageView]}>
                       <View>
                       <Image
                       style={[{},styles.SquerImage]}
                       source={require('../../../images/icons/image-16.png')}
                       >

                       </Image>
                       </View>
                       <View style={[{},styles.PlayImageView]}>
                           <TouchableOpacity>
                           <Image
                           style={{height:30,width:30}}
                           source={require('../../../images/icons/icon-27.png')}
                           >

                           </Image>
                           </TouchableOpacity>
                       </View>
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
                   <View style={[{},styles.SquerImageView]}>
                       <View>
                       <Image
                       style={[{},styles.SquerImage]}
                       source={require('../../../images/icons/image-16.png')}
                       >

                       </Image>
                       </View>
                       <View style={[{},styles.PlayImageView]}>
                           <TouchableOpacity>
                           <Image
                           style={{height:30,width:30}}
                           source={require('../../../images/icons/icon-27.png')}
                           >

                           </Image>
                           </TouchableOpacity>
                       </View>
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
                   <View style={[{},styles.SquerImageView]}>
                       <View>
                       <Image
                       style={[{},styles.SquerImage]}
                       source={require('../../../images/icons/image-33.jpg')}
                       >

                       </Image>
                       </View>
                       <View style={[{},styles.PlayImageView]}>
                           <TouchableOpacity>
                           <Image
                           style={{height:30,width:30}}
                           source={require('../../../images/icons/icon-27.png')}
                           >

                           </Image>
                           </TouchableOpacity>
                       </View>
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
                   <View style={[{},styles.SquerImageView]}>
                       <View>
                       <Image
                       style={[{},styles.SquerImage]}
                       source={require('../../../images/icons/image-31.jpg')}
                       >

                       </Image>
                       </View>
                       <View style={[{},styles.PlayImageView]}>
                           <TouchableOpacity>
                           <Image
                           style={{height:30,width:30}}
                           source={require('../../../images/icons/icon-27.png')}
                           >

                           </Image>
                           </TouchableOpacity>
                       </View>
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
                   <View style={[{},styles.SquerImageView]}>
                       <View>
                       <Image
                       style={[{},styles.SquerImage]}
                       source={require('../../../images/icons/image-35.jpg')}
                       >

                       </Image>
                       </View>
                       <View style={[{},styles.PlayImageView]}>
                           <TouchableOpacity>
                           <Image
                           style={{height:30,width:30}}
                           source={require('../../../images/icons/icon-27.png')}
                           >

                           </Image>
                           </TouchableOpacity>
                       </View>
                   </View>
                 </View>
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
                   <View style={[{},styles.SquerImageView]}>
                       <View>
                       <Image
                       style={[{},styles.SquerImage]}
                       source={require('../../../images/icons/image-29.jpg')}
                       >

                       </Image>
                       </View>
                       <View style={[{},styles.PlayImageView]}>
                           <TouchableOpacity>
                           <Image
                           style={{height:30,width:30}}
                           source={require('../../../images/icons/icon-27.png')}
                           >

                           </Image>
                           </TouchableOpacity>
                       </View>
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
                   <View style={[{},styles.SquerImageView]}>
                       <View>
                       <Image
                       style={[{},styles.SquerImage]}
                       source={require('../../../images/icons/image-16.png')}
                       >

                       </Image>
                       </View>
                       <View style={[{},styles.PlayImageView]}>
                           <TouchableOpacity>
                           <Image
                           style={{height:30,width:30}}
                           source={require('../../../images/icons/icon-27.png')}
                           >

                           </Image>
                           </TouchableOpacity>
                       </View>
                   </View>
                 </View>
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
                   <View style={[{},styles.SquerImageView]}>
                       <View>
                       <Image
                       style={[{},styles.SquerImage]}
                       source={require('../../../images/icons/image-29.jpg')}
                       >

                       </Image>
                       </View>
                       <View style={[{},styles.PlayImageView]}>
                           <TouchableOpacity>
                           <Image
                           style={{height:30,width:30}}
                           source={require('../../../images/icons/icon-27.png')}
                           >

                           </Image>
                           </TouchableOpacity>
                       </View>
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
                   <View style={[{},styles.SquerImageView]}>
                       <View>
                       <Image
                       style={[{},styles.SquerImage]}
                       source={require('../../../images/icons/image-16.png')}
                       >

                       </Image>
                       </View>
                       <View style={[{},styles.PlayImageView]}>
                           <TouchableOpacity>
                           <Image
                           style={{height:30,width:30}}
                           source={require('../../../images/icons/icon-27.png')}
                           >

                           </Image>
                           </TouchableOpacity>
                       </View>
                   </View>
                 </View>
            </ScrollView>
            </View>
            
        );
    }
}