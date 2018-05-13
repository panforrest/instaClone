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
        // this.third = Dimensions.get("window").width/3
    }

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
          console.log(this.props.navigation.state.params)
        })

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

    componentWillUnmount() {
        this._navListener.remove()
    }

    login(){
    	// alert("pressed");
    	this.props.navigation.navigate("main")
    }

	render(){
        
        // console.log(third)

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
                <View style={styles.profilePicContainer}>
                    { this.state.profilePics.map((pic, i)=>{
                        // console.log(pic.url)
                        return ( 
                            <Image 
                                key = {pic.id}
                                style={styles.profilePicThumb} 
                                source={{ 
                                    uri: `${pic.url}=s${
                                        config.styleConstants.oneThirdWidth}-c`
                                }} 
                            />
                        )
                    })}
                </View>        
            </View>    
		)
	}
}

const styles = StyleSheet.create({
    profilePicContanier: {
        width: 100 + "%",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    profilePicThumb: {
        width: config.styleConstants.oneThirdWidth,
        height: config.styleConstants.oneThirdWidth
    }
})

export default Profile