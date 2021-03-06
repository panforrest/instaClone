import React, { Component } from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    Button, 
    StyleSheet 
} from 'react-native'
import config from "../../config"
import actions from "../../redux/actions"
import { connect } from 'react-redux'

class Login extends Component {
constructor(){
        super()
        this.state = {
            credentials: {
                email: "",
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


    login(){
        let credentials = this.state.credentials
        credentials.email = this.state.credentials.email.toLowerCase()
        console.log(JSON.stringify(credentials))
        fetch(config.baseUrl + 'login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        })
          .then(response => response.json())
          .then(jsonResponse=>{
            console.log(JSON.stringify(jsonResponse))
            if (jsonResponse.confirmation === "success"){
                this.props.userReceived(jsonResponse.data);
                this.props.navigation.navigate('main');
            }else{                
                throw new Error(jsonResponse.message)
            }
            // console.log(JSON.stringify(jsonResponse))
          })
          .catch(err=>{
            alert(JSON.stringify(err.message))
          })
        // alert(JSON.stringify(this.state.credentials))

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
                    autoCapitalize="none"
                    value={this.state.email}
                    onChangeText={text => this.updateText(text, "email")}  
                    placeholder="Username" 
                    autoCorrect={false}
                    style={styles.input}/>
                <TextInput 
                    autoCapitalize="none"
                    value={this.state.password}
                    onChangeText={text => this.updateText(text, "password")} 
                    secureTextEntry 
                    placeholder="Password"
                    autoCorrect={false} 
                    style={styles.input}/>
                <Button 
                    onPress={() => {
                        this.login()
                    }} 
                    title="Login" 
                />
                <Button title="No account? Sign up here?" onPress={()=>this.props.navigation.navigate('register')} />
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

const stateToProps = state => {
    return {

    }
}

const dispatchToProps = dispatch => {
    return {
        userReceived: (user) => dispatch(actions.userReceived(user))
    }
}

export default connect(stateToProps, dispatchToProps)(Login)