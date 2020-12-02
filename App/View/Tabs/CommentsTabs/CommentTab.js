import React from "react";
import {View,Text, Dimensions,StyleSheet,Image,ScrollView} from "react-native";
import {  TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../../css/TabsCSS/CommentsTabsCSS/CommentsTabCss";

var {width,hight} = Dimensions.get('window');


export default class CommentsTab extends React.Component{

    render(){
        return(
            <View style={[{},styles.center]}>
              <ScrollView style={[{},styles.Container]}>
                 <View style={[{},styles.Row]}>
                  <View style={[{},styles.RoundImageView]}>
                     <TouchableOpacity>
                     <Image 
                     source={require('../../../images/icons/circle-15.png')}
                     style={[{},styles.RoundImage]}>

                     </Image>
                     </TouchableOpacity>
                  </View>
                  <View style={[{},styles.ContenView]}>
                     <View>
                         <Text style={[{},styles.HeadingTxt]}>Kinamcpherson3036</Text>
                     </View>
                     <View>
                         <Text style={[{},styles.DescriptionTxt]}>
                         just Ignore theme if the start making rude remarks.
                             i'm  not  sure  what he  meant by that last    remark  .
                             2 weeks ago
                         </Text>
                     </View>
                  </View>
                  <View style={[{},styles.SquerImageView]}>
                     <Image
                     style={[{},styles.SquerImage]}
                     source={require('../../../images/icons/profile-15.jpg')}
                     >

                     </Image>
                  </View>

                 </View>
                 <View style={[{},styles.Row]}>
                  <View style={[{},styles.RoundImageView]}>
                     <TouchableOpacity>
                     <Image 
                     source={require('../../../images/icons/circle-50.png')}
                     style={[{},styles.RoundImage]}>

                     </Image>
                     </TouchableOpacity>
                  </View>
                  <View style={[{},styles.ContenView]}>
                     <View>
                         <Text style={[{},styles.HeadingTxt]}>Irmapatel7892</Text>
                     </View>
                     <View>
                         <Text style={[{},styles.DescriptionTxt]}>
                             just Ignore theme if the start making rude remarks.
                             i'm  not  sure  what he  meant by that last    remark  .
                             1 weeks ago
                         </Text>
                     </View>
                  </View>
                  <View style={[{},styles.SquerImageView]}>
                     <Image
                     style={[{},styles.SquerImage]}
                     source={require('../../../images/icons/profile-25.jpg')}
                     >

                     </Image>
                  </View>

                 </View>
                 <View style={[{},styles.Row]}>
                  <View style={[{},styles.RoundImageView]}>
                     <TouchableOpacity>
                     <Image 
                     source={require('../../../images/icons/circle-52.png')}
                     style={[{},styles.RoundImage]}>

                     </Image>
                     </TouchableOpacity>
                  </View>
                  <View style={[{},styles.ContenView]}>
                     <View>
                         <Text style={[{},styles.HeadingTxt]}>Read-my-picture1888 v</Text>
                     </View>
                     <View>
                         <Text style={[{},styles.DescriptionTxt]}>
                             just Ignore theme if the start making rude remarks.
                             i'm  not  sure  what he  meant by that last    remark  .
                             2 days ago
                         </Text>
                     </View>
                  </View>
                  <View style={[{},styles.SquerImageView]}>
                     <Image
                     style={[{},styles.SquerImage]}
                     source={require('../../../images/icons/profile-20.jpg')}
                     >

                     </Image>
                  </View>

                 </View>
                 <View style={[{},styles.Row]}>
                  <View style={[{},styles.RoundImageView]}>
                     <TouchableOpacity>
                     <Image 
                     source={require('../../../images/icons/circle-image-17.png')}
                     style={[{},styles.RoundImage]}>

                     </Image>
                     </TouchableOpacity>
                  </View>
                  <View style={[{},styles.ContenView]}>
                     <View>
                         <Text style={[{},styles.HeadingTxt]}>Irmapatel7892</Text>
                     </View>
                     <View>
                         <Text style={[{},styles.DescriptionTxt]}>
                             just Ignore theme if the start making rude remarks.
                             i'm  not  sure  what he  meant by that last    remark  .
                             1 hour ago
                         </Text>
                     </View>
                  </View>
                  <View style={[{},styles.SquerImageView]}>
                     <Image
                     style={[{},styles.SquerImage]}
                     source={require('../../../images/icons/profile-23.jpg')}
                     >

                     </Image>
                  </View>

                 </View>
                 <View style={[{},styles.Row]}>
                  <View style={[{},styles.RoundImageView]}>
                     <TouchableOpacity>
                     <Image 
                     source={require('../../../images/icons/circle-55.png')}
                     style={[{},styles.RoundImage]}>

                     </Image>
                     </TouchableOpacity>
                  </View>
                  <View style={[{},styles.ContenView]}>
                     <View>
                         <Text style={[{},styles.HeadingTxt]}>StephensonKim7831</Text>
                     </View>
                     <View>
                         <Text style={[{},styles.DescriptionTxt]}>
                             just Ignore theme if the start making rude remarks.
                             i'm  not  sure  what he  meant by that last    remark  .
                             1 hour ago
                         </Text>
                     </View>
                  </View>
                  <View style={[{},styles.SquerImageView]}>
                     <Image
                     style={[{},styles.SquerImage]}
                     source={require('../../../images/icons/profile-21.jpg')}
                     >

                     </Image>
                  </View>

                 </View>
                 <View style={[{},styles.Row]}>
                  <View style={[{},styles.RoundImageView]}>
                     <TouchableOpacity>
                     <Image 
                     source={require('../../../images/icons/circle-image-17.png')}
                     style={[{},styles.RoundImage]}>

                     </Image>
                     </TouchableOpacity>
                  </View>
                  <View style={[{},styles.ContenView]}>
                     <View>
                         <Text style={[{},styles.HeadingTxt]}>Jeniffer6311</Text>
                     </View>
                     <View>
                         <Text style={[{},styles.DescriptionTxt]}>
                             just Ignore theme if the start making rude remarks.
                             i'm  not  sure  what he  meant by that last    remark  .
                             2 weeks ago
                         </Text>
                     </View>
                  </View>
                  <View style={[{},styles.SquerImageView]}>
                     <Image
                     style={[{},styles.SquerImage]}
                     source={require('../../../images/icons/profile-14.png')}
                     >

                     </Image>
                  </View>

                 </View>
            </ScrollView>
            </View>
            
        );
    }
}