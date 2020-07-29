/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

const image = { uri: "https://i.ibb.co/crmhTmK/picture-01.png" };

export default class App extends Component {

  onClickListener = (viewId) => {
    Alert.alert("Reminding", "Your login is incorrect! Please try again letter.");
  }

  render() {
    return (
        <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
            <View style={styles.bodycontainer}>
              {/* title  */}
              <View >
                <Text style={styles.titleText}>
                  {"\n"}
                  Noted Book
                </Text>
              </View>

              {/* subtitle */}
              <View >
                <Text style={styles.subtitle}>
                  Create Your Own Note
                </Text>
              </View>
              {/* button */}
              <TouchableHighlight style={[styles.buttonContainer, styles.btnButton]} onPress={() => this.onClickListener('login')}>
                <Text style={styles.btnText}>Get Start</Text>
              </TouchableHighlight>
            </View>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
    color: "#fff",
    fontWeight: "bold",
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
    width: 350,
    borderRadius: 30,
  },
  btnButton: {
    backgroundColor: "#fff",
  },
  btnText: {
    fontSize: 20,
    color: '#000',
    fontWeight: "bold"
  }
  
});