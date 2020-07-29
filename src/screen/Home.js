import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';

const image = { uri: "https://i.ibb.co/crmhTmK/picture-01.png" };
export default props => {

    const onlogin = () => {
      props.navigation.navigate('Login')
    }
    return <View style={mystyles.container}>
            <ImageBackground source={image} style={mystyles.image}>
                <View style={mystyles.bodycontainer}>
                    {/* title  */}
                    <View >
                        <Text style={mystyles.titleText}>
                        {"\n"}
                        Noted Book
                        </Text>
                    </View>

                    {/* subtitle */}
                    <View >
                        <Text style={mystyles.subtitle}>
                        Create Your Own Note
                        </Text>
                    </View>
                </View>
                {/* Button */}
                <TouchableOpacity style={[mystyles.buttonContainer, mystyles.btnButton]}>
                    <Text style={mystyles.btnText} onPress={onlogin}>Get Start</Text>
                </TouchableOpacity>
            </ImageBackground>

        </View>
}

const mystyles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      bodycontainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      titleText: {
        fontSize: 50,
        color: "#fff",
        fontWeight: "bold",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      subtitle: {
        fontSize: 30,
        color: "#000",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      buttonContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 35,
        marginRight:30,
        width: 350,
        borderRadius: 30,
      },
      btnButton: {
        backgroundColor: "#fff",
      },
      buttonregin: {
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 12,
        textAlign: "center",
        margin: 5,
        elevation: 10
    },
      btnText: {
        fontSize: 20,
        color: '#000',
        fontWeight: "bold"
      }
})

