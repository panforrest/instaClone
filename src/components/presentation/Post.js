import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from '../../config'

class Post extends Component {

	constructor(){
		super()
		this.state = {
			screenWidth: 0
		}
	}

    componentDidMount(){
    	//alert(Dimensions.get("window").width) //ALERT THE WIDTH OF THE DEVICE
    	this.setState({
    		liked: false,
    		screenWidth: Dimensions.get("window").width
    	})
    }

    likeToggled(){
    	this.setState({
    		liked: !this.state.liked
    	})
    }

	render(){
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);

        const imageUri = "https://lh3.googleusercontent.com/kPRNb82LdxpCTR8SaaPS3VJ4Q_tyTdAI8i6hZiwLwG-BWRQ5_v693Ipz4o3C2tAiC6N7q4MLWKBAz2g3Lc5HG6M-XA" + "=s" + imageHeight + "-c";

        const heartIconColor = (this.state.liked) ? "rgb(252, 61, 57)": null

        // alert(imageHeight);

		return(
            <View style={{ flex: 1, width: 100 + "%" }}>
                <View style={styles.userBar}>
                    <View style={{ flexDirection: "row", alignItems: "center"}}>
                        <Image
                            style={styles.userPic}
                            source={{
                                uri:
                                    "https://lh3.googleusercontent.com/uY3WgCwA4UTBZ9qcLswX0QDQpiQqfAB3-vJFPzaXZplH7ci1Y3D5mxURbD9VvkXpUCRFTox3GJhpOkWHRQU4D-SOUA" 
                            }} 
                        />
                        <Text style={{ marginLeft: 10 }}>Forrest Pan</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 30}}>...</Text>
                    </View>
                </View>

                <TouchableOpacity
                  activeOpacity={0.9}  //DETERMINES THE FLASH STRENGTH
                  onPress={() => {
                  	// alert("press")
                    this.likeToggled();
                  }}
                >
	                <Image 
	                    style={{ width: this.state.screenWidth, height: 400}}
			            source={{uri: imageUri}}
			        />
		        </TouchableOpacity>
                <View style={styles.iconBar}>
                    <Image style={[styles.icon, {height: 40, width: 40, tintColor: heartIconColor}] } source={config.images.heartIcon} />
                    <Image style={[styles.icon, {height: 36, width: 36}] } source={config.images.bubbleIcon} />
                    <Image style={[styles.icon, {height: 50, width: 35}] } source={config.images.arrowIcon} />
                </View>
                <View style={styles.iconBar}>
                    <Image 
                        style={[
                        	styles.icon, 
                        	{height: 30, width: 30}] } 
                        	source={config.images.heartIcon} />
                    <Text>128 likes</Text>
                </View>

            </View>
		)
	}
}

const styles = StyleSheet.create({ 
	tempNav: {
		width: 100 + "%", 
		height: 75, 
		marginTop: 20,
		backgroundColor: "rgb(250,250,250)" ,
		borderBottomColor: "rgb(233,233,233)",
		borderBottomWidth: StyleSheet.hairlineWidth,
		justifyContent: "center",
		alignItems: "center"	
	},
	userBar: {
		width: 100 + "%",
		height: config.styleConstants.rowHeight,
		backgroundColor: "rgb(255, 255, 255)",
		flexDirection: "row",
		paddingHorizontal: 10,
		justifyContent: "space-between"
	},

	userPic: {
		height: 40,
		width: 40,
		borderRadius: 20
	},

	iconBar: {
		height: config.styleConstants.rowHeight,
		width: 100 + "%",
		borderColor: "rgb(233,233,233)",
		borderTopWidth: StyleSheet.hairlineWidth,
		borderBottomWidth: StyleSheet.hairlineWidth,
		flexDirection: "row",
		alignItems: "center" 
	},

	icon: {
		marginLeft: 10
	}

})



export default Post