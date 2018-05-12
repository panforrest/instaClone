import React, { Component } from 'react'
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import config from "../../config"
import Turbo from 'turbo360' 

class Camera extends Component {

  constructor(props){
    super(props)
    this.state = {
        userId: this.props.navigation.state.params.user
    }
  }  

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
          <TouchableOpacity
                onPress={this.takePicture.bind(this)}
                style = {styles.capture}
          >
            <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      // console.log(data)
      console.log(this.state.userId)
      const turbo = Turbo({ site_id: "5ae7d6272b572d001483eaac" })
      turbo
          .uploadFile({
            uri: data.uri,
            name:'camera_pic',
            type:'image/jpeg'
          })
          .then(response=>{
            console.log(response)
          })
          .catch(err=>{
            console.log(err)
          })

      // const resp = await fetch(
      //     config.baseUrl + "users/" + this.state.userId + "/photo", 
      //     {
      //         method: "POST",
      //         headers: {
      //           Accept: "application/json",
      //           "Content-Type": "application/json",
      //         },
      //         body: JSON.stringify({ body:"test" }),
      //     }
      // )



          // .then(response => response.json())
          // .then(jsonResponse=>{
          //   console.log(JSON.stringify(jsonResponse))
          //   if (jsonResponse.confirmation === "success"){
          //       this.props.navigation.navigate("main")
          //   }else{                
          //       throw new Error({message:'Sorry, something wrong: please try again'})
          //   }
          //   // console.log(JSON.stringify(jsonResponse))
          // })
          // .catch(err=>{
          //   console.log(err.message)
          // })
        
      // console.log(data);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

export default Camera