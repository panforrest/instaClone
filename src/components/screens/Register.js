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

    updateText(text, field){
        // alert(text)
        let newCredentials = Object.assign(this.state.credentials);
        newCredentials[field] = text;
        this.setState({
            credentials: newCredentials
        })
    }


    register(){
    	alert(JSON.stringify(this.state.credentials))
    	// this.props.navigation.navigate("main") //NAVIGATE TO MAIN APP
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
                <TextInput
                    value={this.state.login}
                    onChangeText={text => this.updateText(text, "login")}  
                    placeholder="Username" 
                    autoCorrect={false}
                    style={styles.input}/>
                <TextInput 
                    value={this.state.password}
                    onChangeText={text => this.updateText(text, "password")} 
                    secureTextEntry 
                    placeholder="Password"
                    autoCorrect={false} 
                    style={styles.input}/>
                <Button onPress={() => {this.register()}} title="Signup" />

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