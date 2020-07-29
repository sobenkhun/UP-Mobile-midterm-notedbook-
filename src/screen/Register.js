import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';

export default props => {
    const onlogin = () => {
      props.navigation.navigate('Login')
    }

    const registerSuccess =()=>{
        alert("Thanks for register! Get your noted now.")
    }
    return <View style={styles.container}>
            <Text style={styles.titleText}>Register Now</Text>
            
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
              <TextInput style={styles.inputs}
                placeholder="First Name"
                // underlineColorAndroid='transparent'
                // onChangeText={(fname) => this.setState({ fname })} 
                />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
              <TextInput style={styles.inputs}
                placeholder="Last Name"
                // underlineColorAndroid='transparent'
                // onChangeText={(lname) => this.setState({ lname })} 
                />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
              <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                // underlineColorAndroid='transparent'
                // onChangeText={(email) => this.setState({ email })}
                 />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
              <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                // underlineColorAndroid='transparent'
                // onChangeText={(password) => this.setState({ password })} 
                />
            </View>
            <TouchableOpacity>
                <View style={styles.button} onPress={registerSuccess}>
                    <Text style={styles.btnText}>Submit</Text>
                </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.textLogin} onPress={onlogin}>Go to login page!</Text>
            </View>
          </View>
}

const styles = StyleSheet.create({
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
      button: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        borderRadius: 30,
        backgroundColor: "#522467"
      },
      btnText: {
        color: '#fff'
      },
      textLogin: {
        padding: 10,
        textAlign: "center",
        margin: 5,
    }
    })