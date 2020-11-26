import React from "react";
import {View,Text, Dimensions,StyleSheet,TouchableOpacity,Image} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styles from "../css/Help&FaqsCss";
import SearchInput, { createFilter } from 'react-native-search-filter';
var {width,height} = Dimensions.get('window');



export default class HelpFaqs extends React.Component{


    contactForm(){
        return(

            <View style={[{}]}>
                  <View>
                         <Text style={{textAlign:'center'}}>
                             Please let us know how we can help?
                         </Text>
                     </View>
                     <View style={{marginTop:10,paddingHorizontal:10, width:width-50,height:40, borderColor:'purple',borderRadius:3, marginHorizontal:30,borderWidth:2, alignItems:'flex-start'}}>
                         <TextInput>
                             Fill Name
                         </TextInput>
                     </View>
                     <View style={{marginTop:10,paddingHorizontal:10, width:width-50,height:40, borderColor:'purple',borderRadius:3, marginHorizontal:30,borderWidth:2, alignItems:'flex-start'}}>
                         <TextInput>
                             Email Address
                         </TextInput>
                     </View>
                     <View style={{marginTop:10, width:width-50,height:80,paddingHorizontal:10, borderColor:'purple',borderRadius:3, marginHorizontal:30,borderWidth:2, alignItems:'flex-start'}}>
                         <TextInput
                         multiline={true}

                         >
                             Message type here......
                         </TextInput>
                     </View>
                     <TouchableOpacity
                     
                     >
                         <Text style={{backgroundColor:'purple',width:width-50,color:'#fff',textAlign:'center',paddingVertical:10,borderRadius:5,marginVertical:10,marginHorizontal:30}}>Send message</Text>
                     </TouchableOpacity>
                  </View>

        );
    }

    sendText(){
       return( 
       <View style={{justifyContent:'center',alignItems:'center',paddingVertical:100}}>
       <View style={{}}>
           <Text>
               Thank you for reaching Out!
           </Text>
       </View>
       <View>
           <Text>
               One of our Customer Service Specialist
           </Text>
       </View>
       <View>
           <Text>will reply back as soon as possible</Text>
       </View>
   </View> )
    }
    render(){
        return(
            <View style={[{},styles.center]}>
                <View style={{flexDirection:'row', paddingHorizontal:20,borderBottomWidth:1,paddingBottom:10}}>
                    <View style={{flex:1,}}>
                      <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('Settings')}
                      >
                      <Image
                         style={{height:20,width:30}}
                         source={require('../images/icons/backarrow-36.png')}
                         >

                        </Image>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex:2}}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>Help & FAQs</Text>
                    </View>
                </View>
                <View style={[{},styles.MainContainer]}>
                {/* contact form */}
                <this.contactForm/> 

                {/* confirmation text  */}


               
              
                  <View style={[{},styles.SearchContainer]}>
                     <View style={[{},styles.SearchRow]}>
                         <View>
                             <Image
                              style={{height:30,width:30}}
                              source={require('../images/icons/search.png')}
                             >

                             </Image>
                         </View>
                         <View>
                            <SearchInput 
                                onChangeText={(term) => { this.searchUpdated(term) }}
                        
                                style={[{width:width,},]}
                                // icon={<Icons name="barcode-scan" size={100}/>}
                                placeholder="  Search........."
                                />
                            </View>
                     </View>
                     <View>
                         <Text style={[{},styles.Heading]}>
                             SELECT A TOPIC TO VIEW FAQs
                         </Text>
                     </View>
      
                  
                  </View>
               
                </View>
                <ScrollView style={[{},styles.ScrollViewContainer]}>
                    <TouchableOpacity>
                    <View style={[{},styles.ScrollViewRow]}>
                          <View>
                              <Text>Suggestion</Text>
                          </View>
                          <View style={[{},styles.ScrollViewRowImg]}>
                              <Image
                              style={{height:20,width:20}}
                               source={require('../images/icons/lessthen-24.png')}
                              >

                              </Image>
                          </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={[{},styles.ScrollViewRow]}>
                          <View>
                              <Text>Account and profile</Text>
                          </View>
                          <View style={[{},styles.ScrollViewRowImg]}>
                              <Image
                              style={{height:20,width:20}}
                               source={require('../images/icons/lessthen-24.png')}
                              >

                              </Image>
                          </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={[{},styles.ScrollViewRow]}>
                          <View>
                              <Text>Feed/Search/Share</Text>
                          </View>
                          <View style={[{},styles.ScrollViewRowImg]}>
                              <Image
                              style={{height:20,width:20}}
                               source={require('../images/icons/lessthen-24.png')}
                              >

                              </Image>
                          </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={[{},styles.ScrollViewRow]}>
                          <View>
                              <Text>Video and Sound</Text>
                          </View>
                          <View style={[{},styles.ScrollViewRowImg]}>
                              <Image
                              style={{height:20,width:20}}
                               source={require('../images/icons/lessthen-24.png')}
                              >

                              </Image>
                          </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={[{},styles.ScrollViewRow]}>
                          <View>
                              <Text>Follow/Like/Comment</Text>
                          </View>
                          <View style={[{},styles.ScrollViewRowImg]}>
                              <Image
                              style={{height:20,width:20}}
                               source={require('../images/icons/lessthen-24.png')}
                              >

                              </Image>
                          </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={[{},styles.ScrollViewRow]}>
                          <View>
                              <Text>Notification and Message</Text>
                          </View>
                          <View style={[{},styles.ScrollViewRowImg]}>
                              <Image
                              style={{height:20,width:20}}
                               source={require('../images/icons/lessthen-24.png')}
                              >

                              </Image>
                          </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={[{},styles.ScrollViewRow]}>
                          <View>
                              <Text>Live/Payment/Rewards</Text>
                          </View>
                          <View style={[{},styles.ScrollViewRowImg]}>
                              <Image
                              style={{height:20,width:20}}
                               source={require('../images/icons/lessthen-24.png')}
                              >

                              </Image>
                          </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={[{},styles.ScrollViewRow]}>
                          <View>
                              <Text>Crashing/Not Responding/Lagging/Other</Text>
                          </View>
                          <View style={[{},styles.ScrollViewRowImg]}>
                              <Image
                              style={{height:20,width:20}}
                               source={require('../images/icons/lessthen-24.png')}
                              >

                              </Image>
                          </View>
                      </View>
                    </TouchableOpacity>
                  </ScrollView>
            </View>
        );
    }
}