import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

class InstaClone extends Component {

	constructor(){
		super()
		this.state = {
			screenWidth: 0
		}
	}

    componentDidMount(){
    	//alert(Dimensions.get("window").width) //ALERT THE WIDTH OF THE DEVICE
    	this.setState({
    		screenWidth: Dimensions.get("window").width
    	})
    }

	render(){
        const imageUri = "https://lh3.googleusercontent.com/kPRNb82LdxpCTR8SaaPS3VJ4Q_tyTdAI8i6hZiwLwG-BWRQ5_v693Ipz4o3C2tAiC6N7q4MLWKBAz2g3Lc5HG6M-XA" + "=s" + this.state.screenWidth

		return(
            <View style={{ flex: 1, width: 100 + "%", height: 100 + "%"}}>
                <View style={styles.tempNav}>
                    <Text >Instagram</Text>
                </View>
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

                <Image 
                    style={{ width: this.state.screenWidth, height: 470}}
		            source={{uri: imageUri}}
		        />


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
		height: 50,
		backgroundColor: "rgb(255, 255, 255)",
		flexDirection: "row",
		paddingHorizontal: 10,
		justifyContent: "space-between"
	},

	userPic: {
		height: 40,
		width: 40,
		borderRadius: 20
	}

})



export default InstaClone