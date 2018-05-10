import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native'


class Register extends Component {

    constructor(){
        super()
        this.state = {
            credentials: {
                login: "",
                password: ""
            }
        }
    }

    updateText(text){
        alert(text)
    }


    register(){
    	
    	this.props.navigation.navigate("main") //NAVIGATE TO MAIN APP
    }

	render(){
		return(
			<View
                style={{
                	height: 100 + "%",
                	width: 100 +"%",
                	flex: 1,
                	justifyContent: "center",
                	alignItems: "center",
                    backgroundColor: "rgb(252, 61, 57)"
                }}
                
            >
                <Text>LOGIN PAGE</Text>
                <TextInput placeholder="Username" style={styles.input}/>
                <TextInput 
                    onChangeText={text => this.updateText(text)} 
                    secureTextEntry 
                    placeholder="Password" 
                    style={styles.input}/>
                <Button onPress={() => {this.register}} title="Signup" />

            </View>    
		)
	}

}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 100 + "%",
        paddingHorizontal: 50,
        backgroundColor: "rgb(255, 255, 255)" ,
        marginBottom: 10
    }
})

export default Register