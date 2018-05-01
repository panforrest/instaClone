import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

class InstaClone extends Component {
	render(){
		return(
            <View style={{ flex: 1, width: 100 + "%", height: 100 + "%"}}>
                <Text>My Instagram Clone</Text>
                <Image 
                    style={{ width: 100 + "%", height: 50}}
		            source={{uri: 
		              "https://lh3.googleusercontent.com/kPRNb82LdxpCTR8SaaPS3VJ4Q_tyTdAI8i6hZiwLwG-BWRQ5_v693Ipz4o3C2tAiC6N7q4MLWKBAz2g3Lc5HG6M-XA"
		            }}
		        />


            </View>
		)
	}
}

export default InstaClone