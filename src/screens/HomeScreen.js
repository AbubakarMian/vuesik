import * as React from 'react'
import {
  StyleSheet, View, Button,
  Platform, PermissionsAndroid, Dimensions, TouchableOpacity, Text, Image
} from 'react-native'
import DeepARView from './../components/DeepARView';
import { effectsData } from './../effectsData';
import { slideTransitionDefinition } from './../components/simplenavigator/TransitionDefinitions'
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import * as ImagePicker from '../../src';
// import * as ImagePicker '../../assets/'
import ImagePicker from 'react-native-image-crop-picker';

class HomeScreen extends React.Component {ß

  constructor(props) {
    super(props)

    this.state = {
      permissionsGranted: Platform.OS === 'ios',
      currentEffectIndex: 0,
      switchCameraInProgress: false
    }
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
        ]
      ).then(result => {
        if (
          result['android.permission.CAMERA'] === 'granted' &&
          result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted' &&
          result['android.permission.RECORD_AUDIO'] === 'granted') {
          this.setState({ permissionsGranted: true, showPermsAlert: false });
        } else {
          this.setState({ permissionsGranted: false, showPermsAlert: true });
        }
      })
    }
  }

  didAppear() {
    if (this.deepARView) {
      this.deepARView.resume();
    }
  }

  willDisappear() {
    if (this.deepARView) {
      this.deepARView.pause();
    }
  }

  onEventSent = (event) => {
    if (event.type === 'cameraSwitch') {
      this.setState({ switchCameraInProgress: false })
    } else if (event.type === 'initialized') {

    } else if (event.type === 'didStartVideoRecording') {

    } else if (event.type === 'didFinishVideoRecording') {
      this.screenshotTaken(event.value)
    } else if (event.type === 'recordingFailedWithError') {

    } else if (event.type === 'screenshotTaken') {
      this.screenshotTaken(event.value)
    } else if (event.type === 'didSwitchEffect') {

    } else if (event.type === 'imageVisibilityChanged') {

    }
  }

  onChangeEffect = (direction) => {
    if (!this.deepARView) {
      return
    }

    const { currentEffectIndex } = this.state
    var newIndex = direction > 0 ? currentEffectIndex + 1 : currentEffectIndex - 1
    if (newIndex >= effectsData.length) {
      newIndex = 0
    }
    if (newIndex < 0) {
      newIndex = effectsData.length - 1
    }

    const newEffect = effectsData[newIndex]
    this.deepARView.switchEffect(newEffect.name, 'effect')

    this.setState({ currentEffectIndex: newIndex })

  }

  takeScreenshot = () => {
    if (this.deepARView) {
      this.deepARView.takeScreenshot()
    }
  }

  screenshotTaken = (screenshotPath) => {
    const path = 'file:///' + screenshotPath;
    console.log(path)
    const transition = slideTransitionDefinition({ isVertical: true, direction: 1, duration: 200 })
    // this.props.push('preview', transition, { screenshotPath: path })
  }


  startRecording = () => {
    
    this.deepARView.startRecording()
    console.log("recording is start")
    // if (this.deepARView) {
    //   this.deepARView.startRecording()
    // }
  }


  finishRecording = () => {
    this.deepARView.finishRecording()
    
    console.log("recording is finished")
    // if (this.deepARView) {
    //   this.deepARView.finishRecording()
    // }
  }

  switchCamera = () => {
    const { switchCameraInProgress } = this.state;
    if (!switchCameraInProgress && this.deepARView) {
      this.setState({ switchCameraInProgress: true });
      this.deepARView.switchCamera();
    }
  }



  // Asad
  imageUpload=()=>{
    ImagePicker.openPicker({
    

      width: 300,
      height: 400,
      cropping: true
     
    }).then(image => {
      console.log(image);
    });
    ImagePicker.openPicker({
      mediaType: "video",
    }).then((video) => {
      console.log(video);
    });
};

imagecapture=()=>{
  
ImagePicker.openCamera({
  filename: true,
  cropping: true,
}).then(image => {
  console.log('Image console !!!!!!!', image);
  this.setState({
      imagePath: image.path,
      imageType: image.mime,
      spinner: true,
  })
  this.getImage(image);

})
}
  render() {

    const { permissionsGranted, currentEffectIndex } = this.state
    const { width } = Dimensions.get('window')

    const effect = effectsData[currentEffectIndex]
    const screenshotImg = require('../../assets/images/screenshot.png')
    const cameraSwitchImg = require('../../assets/images/camera.png')

    return (
      <View style={styles.container}>
        { permissionsGranted ?
          <DeepARView
            onEventSent={this.onEventSent}
            ref={ref => this.deepARView = ref}
            style={{ width: width, height: '100%' }}
          /> :
          null
        }

        <View style={{flexDirection:'row',width:width,paddingHorizontal:10,position:'absolute',top:30}}>
           <View style={{flex:1,justifyContent:'center'}}>
              <TouchableOpacity>
                <Image
                style={{height:40,width:40}}
                source={require('../../App/images/icons/icon-camera.png')}
                >

                </Image>
                <Text style={{color:'#fff', textAlign:'center',width:40,marginTop:10}}>Flip</Text>
              </TouchableOpacity>  
           </View>
           <View style={{flex:1,justifyContent:'center'}}>
              <TouchableOpacity>
                <Image
                style={{height:40,width:40}}
                source={require('../../App/images/icons/speed-07.png')}
                >

                </Image>
                <Text style={{color:'#fff', textAlign:'center',width:40,marginTop:10}}>Speed</Text>
              </TouchableOpacity>  
           </View>
           <View style={{flex:1,justifyContent:'center'}}>
              <TouchableOpacity>
                <Image
                style={{height:40,width:40}}
                source={require('../../App/images/icons/filter-08.png')}
                >

                </Image>
                <Text style={{color:'#fff', textAlign:'center',width:40,marginTop:10}}>Filters</Text>
              </TouchableOpacity>  
           </View>
           <View style={{flex:1,justifyContent:'center'}}>
              <TouchableOpacity>
                <Image
                style={{height:40,width:40}}
                source={require('../../App/images/icons/timer-09.png')}
                >

                </Image>
                <Text style={{color:'#fff', textAlign:'center',width:40,marginTop:10}}>TImer</Text>
              </TouchableOpacity>  
           </View>
           <View style={{flex:1,justifyContent:'center'}}>
              <TouchableOpacity>
                <Image
                style={{height:40,width:40}}
                source={require('../../App/images/icons/flash-10.png')}
                >

                </Image>
                <Text style={{color:'#fff', textAlign:'center',marginTop:10}}>Flash</Text>
              </TouchableOpacity>  
           </View>
           
           <View style={{flex:1,justifyContent:'center'}}>
              <TouchableOpacity>
                <Image
                style={{height:40,width:40}}
                source={require('../../App/images/icons/beauty.png')}
                >

                </Image>
                <Text style={{color:'#fff', textAlign:'center',marginTop:10}}>Beauty</Text>
              </TouchableOpacity>  
           </View>
           <View style={{flex:1,justifyContent:'center'}}>
              <TouchableOpacity>
                <Image
                style={{height:40,width:40}}
                source={require('../../App/images/icons/sound-12.png')}
                >

                </Image>
                <Text style={{color:'#fff', textAlign:'center',marginTop:10}}>Sound</Text>
              </TouchableOpacity>  
           </View>
        </View>

        <TouchableOpacity style={styles.cameraSwitchContainer} onPress={() => this.switchCamera()}>
          <Image style={styles.camera} source={cameraSwitchImg} />
        </TouchableOpacity>
        
        <View style={styles.bottomBtnContainer}>

          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => this.onChangeEffect(-1)}>
            <View style={styles.prevContainer}><Text style={styles.prev}>Previous</Text></View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => this.takeScreenshot()}>
            <View style={styles.screenshotContainer}><Image style={styles.screenshot} source={screenshotImg} /></View>
          </TouchableOpacity>


          <TouchableOpacity style={{ flex: 1, alignItems: 'center',backgroundColor:'blue' }} onPress={() => this.startRecording()}>
            <View style={styles.screenshotContainer}><Text>Start</Text></View>
          </TouchableOpacity>


          <TouchableOpacity style={{ flex: 1, alignItems: 'center',backgroundColor:'red' }} onPress={() => this.finishRecording()}>
            <View style={styles.screenshotContainer}><Text>finish</Text></View>
          </TouchableOpacity>


          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => this.onChangeEffect(1)}>
            <View style={styles.nextContainer}><Text style={styles.next}>Next</Text></View>
          </TouchableOpacity>
          
          
        </View>
        <View style={{flexDirection:'row',position:'absolute',bottom:50,justifyContent:'center',alignItems:'center'}}>
          <View style={{flex:1,marginLeft:30}}>
            <TouchableOpacity>
              <Image
              style={{height:50,width:50}}
              source={require('../../App/images/icons/effects-13.png')}
              >

              </Image>
            </TouchableOpacity>
          </View>
          <View style={{flex:1,marginHorizontal:40}}>
            <TouchableOpacity
            // onPress={() => this.imagecapture()}
            onPress={()=>this.props.navigation.navigate('Effect')}
            // onPressIn={() => this.startRecording()}
            // onPressOut={() => this.finishRecording()}
            >
              <Image
              style={{height:50,width:50}}
              source={require('../../App/images/icons/capture-15.png')}
              >

              </Image>
            </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
            <TouchableOpacity
              onPress={() =>{this.imageUpload()}}
            >
              <Image
              style={{height:50,width:50}}
              source={require('../../App/images/icons/upload-14.png')}
              >

              </Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  deepARView: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  titleContainer: {
    position: 'absolute',
    top: 100,
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 4,
    backgroundColor: 'white'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20
  },

  bottomBtnContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    bottom: 150,
    height: 50
  },
  nextContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: 'white'
  },
  prevContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: 'white'
  },
  next: {
    textAlign: 'center',
    fontSize: 28
  },
  prev: {
    textAlign: 'center',
    fontSize: 28
  },

  screenshotContainer: {},
  screenshot: {
    width: 70,
    height: 70
  },

  cameraSwitchContainer: {
    position: 'absolute',
    width: 50,
    height: 40,
    right: 20,
    top: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  }
})

export default HomeScreen;