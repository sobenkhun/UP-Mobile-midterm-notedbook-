import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const OPACITY = {
    BLUE: 0.4,
    NORMAL: 1
}

export default props => {
    const [opacity, setOpacity] = useState(1);
    return (
        <TouchableWithoutFeedback onPress={props.onClick}>
            <View
                onTouchStart={() => setOpacity(OPACITY.BLUE)}
                onTouchEnd={() => setOpacity(OPACITY.NORMAL)}
                style={StyleSheet.flatten([styles.button, props.style, { opacity }])}>
                  <Text style={styles.loginText}>Login</Text>
            </View>
        </TouchableWithoutFeedback>);
}

const styles = StyleSheet.create(
    {
        button: {
            height: 50,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 350,
            borderRadius: 30,
            backgroundColor: "#522467"
          },
          loginText: {
            color: '#fff'
          }
    }
)