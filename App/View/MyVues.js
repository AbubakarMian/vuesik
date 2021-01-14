import React from 'react';

import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  Touchable,
  TouchableWithoutFeedback,
  Share,
  FlatList,


} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import styles from '../css/MyVuesCss';
import VidioActionstyles from '../css/VidioActionModalCSS';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import ProgressCircle from 'react-native-progress-circle';
import { TouchableItem } from 'react-native-tab-view';
import Video from 'react-native-video';
import MarqueeText from 'react-native-marquee';
var { width, height } = Dimensions.get('window');

export default class MyVues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      vidioActionModal: false,
      SavingModal: false,
      LikeModal: false,
      VidioReportModal: false,
      SameVideosModal: false,
      tabBarVisible: true,
      list: [],
      like: 0,
    };
  }
  componentWillMount() {
    this.props.navigation.dangerouslyGetParent().setOptions({
      tabBarVisible: this.state.tabBarVisible
    });
    let postData = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: 'TW9iaWxlIENsaWVudElEOiBUVzlpYVd4bElFTnNhV1Z1ZEVsRU9pQjJkV1Z6YVdzdFlYQndMV',
        'Authorization-secure': 'TW9iaWxlIENsaWVudElEOiBUVzlpYVd4bElFTnNhV1Z1ZEVsRU9pQjJkV1Z6YVdzdFlYQndMV',
        'client-id': 'vuesik-app-mobile',
      },
      // body: formData,
    };
    fetch('http://development.hatinco.com/vuesik_backend/public/api/home', postData)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === true) {
          console.log("response Json  ", responseJson)
          console.log(responseJson.response)
          this.setState({
            listLoaded: true,
            list: Array.from(responseJson.response),

          });
        }
        else {

        }
      })
      .catch(error => {
        console.log("error", error)
      });
  };
  videoOwner=()=>{
    var ownerId=2;
    console.log(ownerId)
    {this.props.navigation.navigate('UserProfile',{likes:this.state.like,ownerId} )}
  }
  Like = async () => {
    console.log("like")
    var videoLike = this.state.like + 1;
    this.setState({ like: videoLike });
    console.log('videoLike', videoLike)
  };
  render() {
    const shareMessage = () => {

      //Here is the Share API
      Share.share({
        url: require('../images/abc.mp4'),
        message: "df",
        title: ""
        // message: inputValue.toString(),
      })
        //after successful share return result
        .then((result) => console.log(result))
        //If any thing goes wrong it comes here
        .catch((errorMsg) => console.log(errorMsg));
    };
    return (
      <FlatList
        data={this.state.list}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback
            onLongPress={() => this.setState({ vidioActionModal: true })}
            onBackButtonPress={() => this.setState({ vidioActionModal: false })}
          >
            <View style={{ height: height, width: width, position: 'relative' }}>
              <Video
                source={{ uri: item.url }}
                ref={(ref) => {
                  this.player = ref
                }}
                onBuffer={this.onBuffer}
                onError={this.videoError}
                fullscreen={true}
                resizeMode={'cover'}
                repeat={true}
                style={[{ height: height, width: width }, styles.backgroundVideo]} />
              <View style={{ width: width, height: height, position: 'relative' }}>
                <View style={{ position: 'absolute', top: '5%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: width }}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Following")}
                  >
                    <View style={{ alignSelf: 'flex-end' }}>
                      <Text style={{ marginHorizontal: 10, color: '#b7b3b3' }}>Following</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View>
                      <Text style={{ marginHorizontal: 10, color: '#fff', borderBottomWidth: 1, borderBottomColor: '#fff', borderStyle: 'dashed' }}>MyVues</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{ height: height, width: width, position: 'relative' }}>
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '2%',
                      width: '50%',
                    }}>
                    <View>
                      <Text style={[{ color: '#fff', fontWeight: 'bold', fontSize: 15 }, styles.viewBottomColumn1username]}>
                        {/* {item.o} */}
                        @{item.video_owner.firstname}.{item.video_owner.lastname}
                      </Text>
                    </View>
                    <View>
                      <Text style={[{ color: '#fff', fontSize: 12 }, styles.viewBottomColumn1xt]}>
                        {item.detail}
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: width / 2 - 10 }}>
                      <View>
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate('Profile')
                          }
                          style={{ marginTop: 10, marginBottom: 10 }}>
                          <View style={{}}>
                            <Image
                              style={[
                                {
                                  borderRadius: 5,
                                  height: 40,
                                  width: 40,
                                  marginBottom: 20,
                                },
                              ]}
                              source={require('../images/icons/icon-28.png')}></Image>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={{}}>
                        <MarqueeText
                          style={{
                            color: '#fff',
                            textAlignVertical: 'center',
                            marginLeft: 5,
                            marginTop: 20,
                            alignSelf: 'center',

                          }}
                          duration={4000}
                          marqueeOnStart
                          loop
                          marqueeDelay={0}
                          marqueeResetDelay={0}
                          repeat={true}
                        >
                          orignal soud  from  {item.video_owner.firstname}.{item.video_owner.lastname} migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
        </MarqueeText>

                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ position: 'absolute', bottom: 230, right: 0 }}>
                <View>
                {/* , {likes:this.state.like} */}
                  <TouchableOpacity
                    onPress={
                      this.videoOwner
                    }>
                    <View>
                      <Image
                        style={[{ height: 50, width: 50 }]}
                        source={require('../images/icons/icon-32.png')}></Image>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ position: 'absolute', bottom: 170, right: 8 }}>
                <View>
                  <TouchableOpacity
                    onPress={() => this.setState({ showModal: true })}>
                    <View>
                      <Image
                        style={[{ height: 50, width: 50 }]}
                        source={require('../images/icons/icon-31.png')}></Image>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ position: 'absolute', bottom: 110, right: 20 }}>
                <View>
                  <TouchableOpacity
                    onPress={this.Like}
                  >
                    <View>
                      <Image
                        style={[{ height: 50, width: 50 }]}
                        source={require('../images/icons/icon-30.png')}></Image>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ position: 'absolute', bottom: 60, right: 50 }}>
                <View>
                  <TouchableOpacity
                    onPress={shareMessage}
                  >
                    <View>
                      <Image
                        style={[{ height: 50, width: 50 }]}
                        source={require('../images/icons/icon-29.png')}></Image>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ position: 'absolute', bottom: 0, right: 100, marginBottom: 20 }}>
                <View>
                  <TouchableOpacity

                  >
                    <View>
                      <Image
                        style={[{ height: 50, width: 50 }]}
                        source={require('../images/icons/icon-33.png')}></Image>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              {/*  */}
              {/* Vidio Click Action  */}
              <Modal
                isVisible={this.state.vidioActionModal}
                onBackButtonPress={() => this.setState({ vidioActionModal: false })}

                style={{

                  justifyContent: 'center',
                  alignItems: 'center',

                }}>
                <View style={{ alignSelf: 'center' }}>
                  <LinearGradient
                    start={{ x: 0.2, y: 0.25 }}
                    end={{ x: 0.8, y: 1.0 }}
                    colors={['#2e3192', '#800080', '#93278f']}
                    style={{
                      alignSelf: 'center',
                      padding: 10,
                      borderRadius: 5,
                      height: width / 2,
                      width: width / 1.8,
                      opacity: 0.5

                    }}>
                    <View style={{ alignSelf: 'center' }}>

                      <TouchableOpacity
                        onPress={() => this.setState({ vidioActionModal: false, SavingModal: true })}
                      >
                        <View style={{ flexDirection: 'row', borderBottomColor: '#fff', borderBottomWidth: 1, paddingTop: 2 }}>
                          <View style={{ marginBottom: 5 }}>
                            <Image
                              style={{ height: 30, width: 30, borderRadius: 50 }}
                              source={require('../images/icons/save-22.png')}>

                            </Image>
                          </View>
                          <View>
                            <Text
                              style={{
                                color: '#fff',
                                textAlignVertical: 'center',
                                fontSize: 12,
                                marginTop: 5,
                                marginLeft: 5
                              }}>
                              Save Vidio
                     </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => this.setState({ vidioActionModal: false, LikeModal: true })}
                      >
                        <View style={{ flexDirection: 'row', borderBottomColor: '#fff', borderBottomWidth: 1, paddingTop: 2 }}>
                          <View style={{ marginBottom: 5 }}>
                            <Image
                              style={{ height: 30, width: 30, borderRadius: 50 }}
                              source={require('../images/icons/favorites-23.png')}>

                            </Image>
                          </View>
                          <View>
                            <Text
                              style={{
                                color: '#fff',
                                textAlignVertical: 'center',
                                fontSize: 12,
                                marginTop: 5,
                                marginLeft: 5
                              }}>
                              Add To Favorites
                     </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => this.setState({ vidioActionModal: false, SameVideosModal: true })}
                      >
                        <View style={{ flexDirection: 'row', borderBottomColor: '#fff', borderBottomWidth: 1, paddingTop: 2 }}>
                          <View style={{ marginBottom: 5 }}>
                            <Image
                              style={{ height: 30, width: 30, borderRadius: 50 }}
                              source={require('../images/icons/notInterested-24.png')}>

                            </Image>
                          </View>
                          <View>
                            <Text
                              style={{
                                color: '#fff',
                                textAlignVertical: 'center',
                                fontSize: 12,
                                marginTop: 5,
                                marginLeft: 5
                              }}>
                              Not Interested
                     </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => this.setState({ vidioActionModal: false, VidioReportModal: true })}
                      >
                        <View style={{ flexDirection: 'row', }}>
                          <View style={{ marginBottom: 10 }}>
                            <Image
                              style={{ height: 30, width: 30, borderRadius: 50 }}
                              source={require('../images/icons/report-25.png')}>

                            </Image>
                          </View>
                          <View>
                            <Text
                              style={{
                                color: '#fff',
                                textAlignVertical: 'center',
                                fontSize: 12,
                                marginTop: 5,
                                marginLeft: 5
                              }}>
                              Report
                     </Text>
                          </View>
                        </View>
                      </TouchableOpacity>

                    </View>
                  </LinearGradient>
                </View>
              </Modal>
              {/*  */}
              {/* showModal */}
              <Modal
                isVisible={this.state.showModal}
                onBackdropPress={() => this.setState({ showModal: false })}
                style={{
                  height: height,
                  width: width,
                  alignItems: 'baseline',
                  justifyContent: 'flex-end',
                  borderRadius: 10,
                }}>
                <View style={{ height: height / 1.5, width: width, alignSelf: 'stretch', marginLeft: -17, borderRadius: 10, }}>
                  <LinearGradient
                    start={{ x: 0.2, y: 0.25 }}
                    end={{ x: 0.7, y: 1.0 }}
                    colors={['#2e3192', '#800080', '#93278f']}
                    style={{ height: height, width: width, borderRadius: 10, padding: 10, opacity: 0.6 }}>
                    <View>
                      <View style={{ flexDirection: 'row' }}>
                        <View
                          style={{ alignSelf: 'center', justifyContent: 'flex-end' }}>
                          <Text style={{ color: '#fff' }}>350 comments</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                          <Text style={{ color: '#fff', justifyContent: 'flex-end' }}>
                            x
                      </Text>
                        </View>
                      </View>
                    </View>
                  </LinearGradient>
                </View>

              </Modal>




              {/* Saving Moda */}
              <Modal
                isVisible={this.state.SavingModal}

                onBackdropPress={() => this.setState({ SavingModal: false })}
                style={{
                  height: 20, width: width - 300, justifyContent: 'center',
                  justifyContent: 'center'
                }}>
                <View style={{
                  height: 250, width: width - 50, justifyContent: 'center',
                  alignItems: 'center', borderRadius: 10
                }}>
                  <LinearGradient
                    start={{ x: 0.2, y: 0.25 }} end={{ x: 0.8, y: 1.0 }}
                    colors={['#2e3192', '#800080', '#93278f']}
                    style={{ marginLeft: 10, padding: 10, borderRadius: 5, paddingHorizontal: 30, height: 150 }}>
                    <View style={[{}, VidioActionstyles.center]}>




                      <View style={{ flexDirection: 'column', paddingTop: 20, }}>
                        <View style={{ flex: 1 }}>

                          <ProgressCircle
                            percent={75}
                            radius={50}

                            borderWidth={2}
                            color="#fff"
                            shadowColor="#999"
                            bgColor="purple"
                            opacity={0.6}
                            marginBottom="10"


                          >
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>{'75%'}</Text>
                          </ProgressCircle>

                        </View>

                      </View>
                      <Text style={{ alignSelf: 'center', marginBottom: 20, color: '#fff' }}>Saving</Text>

                    </View>







                  </LinearGradient>
                </View>
              </Modal>
              {/*  */}
              {/* Like Modal  */}
              <Modal
                isVisible={this.state.LikeModal}
                onBackdropPress={() => this.setState({ LikeModal: false })}

                style={{
                  height: 20, width: width - 300,
                  justifyContent: 'center'
                }}>
                <View style={{
                  height: 200, width: width - 50, justifyContent: 'center',
                  alignItems: 'center', borderRadius: 10
                }}>
                  <LinearGradient
                    start={{ x: 0.2, y: 0.25 }} end={{ x: 0.8, y: 1.0 }}
                    colors={['#2e3192', '#800080', '#93278f']}
                    style={{ opacity: 0.5, borderRadius: 5, paddingHorizontal: 30, height: 120 }}>
                    <View style={[{}, VidioActionstyles.center]}>




                      <View style={{ flexDirection: 'column', }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                          <Image
                            style={{ height: 40, width: 40, alignSelf: 'center' }}
                            source={require('../images/icons/like-28.png')}
                          >

                          </Image>
                          <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 10, marginTop: 5 }}>Add to Favorites</Text>
                        </View>

                      </View>


                    </View>







                  </LinearGradient>
                </View>
              </Modal>
              {/*  */}
              {/* Same Videos Modal  */}
              <Modal
                isVisible={this.state.SameVideosModal}
                onBackdropPress={() => this.setState({ SameVideosModal: false })}
                style={{
                  height: 20, width: width - 300, justifyContent: 'center',
                  justifyContent: 'center'
                }}>
                <View style={{
                  height: 200, width: width - 50, justifyContent: 'center',
                  alignItems: 'center', borderRadius: 10
                }}>
                  <LinearGradient
                    start={{ x: 0.2, y: 0.25 }} end={{ x: 0.8, y: 1.0 }}
                    colors={['#2e3192', '#800080', '#93278f']}
                    style={{ opacity: 0.5, borderRadius: 5, paddingHorizontal: 30, height: 120 }}>
                    <View style={[{}, VidioActionstyles.center]}>
                      <View style={{ flexDirection: 'column', }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                          <Image
                            style={{ height: 40, width: 40, alignSelf: 'center' }}
                            source={require('../images/icons/dislike-27.png')}
                          >

                          </Image>
                          <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 10, marginTop: 5 }}>We will show fewer videos</Text>
                          <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 10, }}>like this from now</Text>
                        </View>

                      </View>


                    </View>

                  </LinearGradient>
                </View>
              </Modal>
              {/*  */}
              {/* Vidio Report Modal  */}
              <Modal
                isVisible={this.state.VidioReportModal}
                onBackdropPress={() => this.setState({ VidioReportModal: false })}
                style={{
                  height: 20, width: width - 300, justifyContent: 'center',
                  justifyContent: 'center'
                }}>
                <View style={{
                  height: 200, width: width - 50, justifyContent: 'center',
                  alignItems: 'center', borderRadius: 10
                }}>
                  <LinearGradient
                    start={{ x: 0.2, y: 0.25 }} end={{ x: 0.8, y: 1.0 }}
                    colors={['#2e3192', '#800080', '#93278f']}
                    style={{ opacity: 0.5, borderRadius: 5, paddingHorizontal: 30, height: 120 }}>
                    <View style={[{}, VidioActionstyles.center]}>
                      <View style={{ flexDirection: 'column', }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                          <Image
                            style={{ height: 40, width: 40, alignSelf: 'center' }}
                            source={require('../images/icons/vidioReport-26.png')}
                          >

                          </Image>
                          <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 10, marginTop: 5 }}>You'r Vidio has been</Text>
                          <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 10, }}>now reported</Text>
                        </View>

                      </View>


                    </View>

                  </LinearGradient>
                </View>
              </Modal>
            </View>
          </TouchableWithoutFeedback>
        )}
      />

    );
  }
}


var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: width,
    height: height,
  },
});