import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-web';

export default function Calculadora() {
   const [adulto, setAdulto] = useState(0);
   const [resultado, setResultado] = useState(0);

   const calcAdultos = () => {
      setResultado(parseFloat(adulto) * 0.500);
   }

   return (
      <>
        
         <View style={styles.container}>
         <Text style={{ fontSize: 16, fontWeight: '700' }}>Calculadora</Text>
            <StatusBar style="auto" />
            <TextInput
               style={styles.input}
               onChangeText={(teste) => { setAdulto(teste) }}
               value={String(adulto)}
               placeholder="Quantidade de adultos"
               keyboardType="numeric"
            />

            <TouchableOpacity
               style={styles.button}
               onPress={() => calcAdultos()}
            >
               <Text>Press Here</Text>
            </TouchableOpacity>
            <TextInput
               value={String(resultado)}
               onChangeText={(teste) => { setResultado(teste) }}
            />
         </View>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
   },
   input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
   },
});

/*export default function Calculadora() {
   return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{fontSize:16,fontWeight:'700'}}>Calculadora</Text>
</View>
   );
 }*/