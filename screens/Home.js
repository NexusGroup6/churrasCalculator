import * as React from "react";
import { View, Text, ImageBackground, StyleSheet, Alert } from "react-native";
import { Button } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backGround-churras.jpg")}
        style={styles.img}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.title}>Bem Vindo!</Text>
          {/* <Button title='Calculadora' color={'red'}/> */}
          <Button
            title="Calculadora"
            color='red'
            onPress={() => Alert.alert("Indo à calculadora...")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  img: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
  title: {
    fontSize: 38,
    fontWeight: "700",
    color: "#ffff",
  },
});
