import * as React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Checkbox } from 'react-native-paper';
const Calculadora = () => {
   const [checked, setChecked] = React.useState(false);
   return (
      <SafeAreaView style={styles.container}>
         <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
               setChecked(!checked);
            }}
            color={'green'}
            uncheckColor={'red'}
         />
      <Text>Checkbox</Text>
      </SafeAreaView>
   );
};
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
});
export default Calculadora;


/*import * as React from 'react';
import { Text, View } from 'react-native';


export default function Calculadora() {
   return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{fontSize:16,fontWeight:'700'}}>Calculadora</Text>
</View>
   );
 }*/