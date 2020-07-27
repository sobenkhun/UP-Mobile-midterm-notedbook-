import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const OPACITY = {
    BLUE: 0.4,
    NORMAL: 1
}

export default props => {
    const [opacity, setOpacity] = useState(1);
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
              <TouchableWithoutFeedback onPress={props.onClick}>
                    <View
                        onTouchStart={() => setOpacity(OPACITY.BLUE)}
                        onTouchEnd={() => setOpacity(OPACITY.NORMAL)}
                        style={[styles.buttonContainer, styles.btnButton]}>
                        <Text style={styles.btnText}>Get Start</Text>
                    </View>
                </TouchableWithoutFeedback>);
                
              {/* <TouchableHighlight style={[styles.buttonContainer, styles.btnButton]} onPress={() => this.onClickListener('login')}>
                <Text style={styles.btnText}>Get Start</Text>
              </TouchableHighlight> */}

            </View>
          </ImageBackground>
        </View>
        // <TouchableWithoutFeedback onPress={props.onClick}>
        //     <View
        //         onTouchStart={() => setOpacity(OPACITY.BLUE)}
        //         onTouchEnd={() => setOpacity(OPACITY.NORMAL)}
        //         style={StyleSheet.flatten([styles.button,props.style, { opacity }])}>
        //           <Text>Login</Text>
        //     </View>
        // </TouchableWithoutFeedback>);
}

const styles = StyleSheet.create(
    {
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
        // button: {
        //     backgroundColor: 'green',
        //     padding: 10,
        //     borderRadius: 12,
        //     alignItems: "center",
        //     margin: 5,
        //     elevation: 10
        // }
    }
)