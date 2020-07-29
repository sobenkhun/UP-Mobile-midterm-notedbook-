import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import Button from '../Button';

export default props => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const ongologin = () => {
        props.navigation.navigate('Myprofile', {
            emailP: email,
            passP: password,
        });
    };
    const ongoregister = () => {
        props.navigation.navigate('Register')
    }
    const register =()=>{
        alert("Thanks for register! good luck")
    }
    return <View style={LoginStyle.container}>
            <Text style={LoginStyle.titleText}>My Account</Text>

            <View style={LoginStyle.inputContainer}>
              <Image style={LoginStyle.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
              <TextInput style={LoginStyle.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={setEmail} />
            </View>

            <View style={LoginStyle.inputContainer}>
              <Image style={LoginStyle.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
              <TextInput style={LoginStyle.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={setPassword} 
                />
            </View>

            {/* link to profile*/}
            <Button onClick={ongologin}></Button>
            {/* link to register page */}
            <TouchableOpacity>
                <View>
                    <Text style={LoginStyle.textRegister}
                        onPress={ongoregister}
                    >Get start with new account!</Text>
                </View>
            </TouchableOpacity>
          </View>
}

const LoginStyle = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e7ebf0',
      },
      inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:20 ,
        borderBottomWidth: 1,
        width: 350,
        height: 60,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
      },
      inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
      },
      inputIcon: {
        width: 10,
        height: 40,
        marginLeft: 20,
        justifyContent: 'center'
      },
      titleText: {
        fontSize: 50,
        fontWeight: "bold",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      textRegister: {
        padding: 10,
        textAlign: "center",
        margin: 5,
    }

 })