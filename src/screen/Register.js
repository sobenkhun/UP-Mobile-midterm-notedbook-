import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://i.ibb.co/crmhTmK/picture-01.png" };
const logo = { uri: "https://i.ibb.co/crmhTmK/picture-01.png" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      {/* <Text style={styles.text}>Inside</Text> */}
      <View>
          <Text style={styles.title}>Note Book</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Create Your Own Note</Text>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  title: {
    color: '#fff',
    fontSize: 50,
    marginLeft: 70,
    fontWeight: "bold",
    alignItems: 'center'
  },
  subtitle: {
    color: '#fff',
    fontSize: 30,
    marginLeft: 40,
    marginRight: 30,
    fontWeight: "bold",
    alignItems: 'center'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
//   text: {
//     color: "grey",
//     fontSize: 30,
//     fontWeight: "bold"
//   }
});

export default App;




