import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import config from '../../config'

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            userId: "5af512b5c01f3c00143e9345",
            profilePics: []
        }
    }

    componentDidMount() {
        // console.log("Mounted")
        fetch(`${config.baseUrl}photo?user=${this.state.userId}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
          .then(response => response.json())
          .then(jsonResponse=>{
            // console.log(JSON.stringify(jsonResponse))
            this.setState({ profilePics: jsonResponse.data })
          })
          .catch(err=>{
            alert(JSON.stringify(err.message))
          })      
    }

    login(){
    	// alert("pressed");
    	this.props.navigation.navigate("main")
    }

	render(){
		return(
			<View
                style={{
                	height: 100 + "%",
                	width: 100 +"%",
                	flex: 1,
                	justifyContent: "center",
                	alignItems: "center"
                }}
                onPress={() => {
                	this.login();  //DON'T FORGET () HERE
                }}
            >
                { this.state.profilePics.map((pic, i)=>{
                    console.log(pic.url)
                    return ( 
                        <Image 
                            style={{ height: 100, width: 100 }} 
                            source={{uri: pic.url}} 
                        />
                    )
                  })}
            </View>    
		)
	}

}

export default Profile