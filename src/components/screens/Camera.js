import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


class Camera extends Component {
    login(){
    	// alert("pressed");
    	this.props.navigation.navigate("main")
    }

	render(){
		return(
			<TouchableOpacity  //WHEN TouchableOpacity NO View
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
                <Text>Future Camera</Text>

            </TouchableOpacity>    
		)
	}

}

export default Camera