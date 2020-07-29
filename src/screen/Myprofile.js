import React, { useState } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
export default props => {
    return <View style={mystyle.container}>
            <Image style={mystyle.imageprofile} source={{ uri: 'https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png' }}></Image>
            <Text style={mystyle.titleText}>My Profile</Text>

            <Text style={mystyle.messageTile}>Email:{"\n"} {props.route.params.emailP}</Text>
            <Text style={mystyle.messageTileP}>Password: {"\n"} {props.route.params.passP}</Text>
          </View>
}

const mystyle = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
        alignItems: 'center',
        justifyContent: "center"
      },
    imageprofile: {
        width:100,
        height: 100,
        alignItems: 'center',
        justifyContent: "center"
    },
    messageTile :{
        fontSize:20,
        color:'#000',
        textAlign:'left'
    },
    messageTileP: {
        fontSize:20,
        color:'#000',
        textAlign:'left'
    },
    titleText :{
        fontSize:30,
        color:'#522467',
        textAlign:'center'
    }
})
