import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Checkbox } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Calcular from "../script";
//import Calculadora from "../script";

const Calculadora = () => {
  const check = () => {
    if (checked != true) {
      alert("checkbox está verdadeiro");
    } else {
      alert("nothing");
    }
  };

  const Limpar = () => {
    setResultado("");
    setResultado2("");
  };

  // TEXT INPUT NUMBER
  const [adultos, setAdultos] = useState("");
  const [kids, setKids] = useState("");
  const [resultado, setResultado] = useState("");
  const [resultado2, setResultado2] = useState("");

  const Calcular = () => {
    setResultado(adultos * 600);
    setResultado2(kids * 100);
  };

  // CORTES
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);

  //ACOMPANHAMENTOS
  const [checked6, setChecked6] = React.useState(false);
  const [checked7, setChecked7] = React.useState(false);
  const [checked8, setChecked8] = React.useState(false);
  const [checked9, setChecked9] = React.useState(false);

  //BEBIDAS
  const [checked10, setChecked10] = React.useState(false);
  const [checked11, setChecked11] = React.useState(false);
  const [checked12, setChecked12] = React.useState(false);
  const [checked13, setChecked13] = React.useState(false);

  //SUPRIMENTOS
  const [checked14, setChecked14] = React.useState(false);
  const [checked15, setChecked15] = React.useState(false);
  const [checked16, setChecked16] = React.useState(false);
  const [checked17, setChecked17] = React.useState(false);

  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <Text style={styles.title}>Calculadora</Text>
        </SafeAreaView>

        <SafeAreaView>
          <Text style={styles.subtitle}>1. QUANTOS ADULTOS? </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => {
              setAdultos(texto);
            }}
            value={String(adultos)}
            placeholder="Informe a quantidade de Adultos!"
            keyboardType="numeric"
          />

          <Text style={styles.subtitle}>2. QUANTAS CRIANÇAS? </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => {
              setKids(texto);
            }}
            value={String(kids)}
            placeholder="Informe a quantidade de Crianças!"
            keyboardType="numeric"
          />
        </SafeAreaView>

        <SafeAreaView>
          <Text style={styles.subtitle}>3. CORTES</Text>

          <Text style={styles.placeholder}> PICANHA SUÍNA</Text>
          <Checkbox //PICANHA SUINA
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
              check();
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>COSTELA SUÍNA</Text>
          <Checkbox // COSTELA SUINA
            status={checked1 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked1(!checked1);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>CARNE BOVINA</Text>
          <Checkbox // CARNE BOVINA
            status={checked2 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked2(!checked2);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>LINGUIÇA</Text>
          <Checkbox //  LINGUIÇA
            status={checked3 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked3(!checked3);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>COXINHA DE ASA</Text>
          <Checkbox // COXINHA DE ASA
            status={checked4 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked4(!checked4);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>SOBRECOXA</Text>
          <Checkbox // SOBRECOXA
            status={checked5 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked5(!checked5);
            }}
            color={"red"}
            uncheckColor={"red"}
          />
        </SafeAreaView>

        <SafeAreaView>
          <Text style={styles.subtitle}>4. ACOMPANHAMENTOS</Text>

          <Text style={styles.placeholder}>PÃO DE ALHO</Text>
          <Checkbox // PÃO DE ALHO
            status={checked6 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked6(!checked6);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>FAROFA</Text>
          <Checkbox // FAROFA
            status={checked7 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked7(!checked7);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>QUEIJO COALHO</Text>
          <Checkbox // QUEIJO COALHO
            status={checked8 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked8(!checked8);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>VINAGRETE</Text>
          <Checkbox // VINAGRETE
            status={checked9 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked9(!checked9);
            }}
            color={"red"}
            uncheckColor={"red"}
          />
        </SafeAreaView>

        <SafeAreaView>
          <Text style={styles.subtitle}>5. BEBIDAS</Text>

          <Text style={styles.placeholder}> REFRIGERANTE</Text>
          <Checkbox //  REFRIGERANTE
            status={checked10 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked10(!checked10);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>SUCO</Text>
          <Checkbox // SUCO
            status={checked11 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked11(!checked11);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>CERVEJA</Text>
          <Checkbox // CERVEJA
            status={checked12 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked12(!checked12);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>ÁGUA</Text>
          <Checkbox // ÁGUA
            status={checked13 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked13(!checked13);
            }}
            color={"red"}
            uncheckColor={"red"}
          />
        </SafeAreaView>

        <SafeAreaView>
          <Text style={styles.subtitle}>6. SUPRIMENTOS</Text>

          <Text style={styles.placeholder}>CARVÃO</Text>
          <Checkbox //  CARVÃO
            status={checked14 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked14(!checked14);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>COPOS</Text>
          <Checkbox // COPOS
            status={checked15 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked15(!checked15);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>TALHERES</Text>
          <Checkbox // TALHERES
            status={checked16 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked16(!checked16);
            }}
            color={"red"}
            uncheckColor={"red"}
          />

          <Text style={styles.placeholder}>PRATOS</Text>
          <Checkbox //  PRATOS
            status={checked17 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked17(!checked17);
            }}
            color={"red"}
            uncheckColor={"red"}
          />
          <SafeAreaView>
            <TouchableOpacity style={styles.botao} onPress={() => Calcular()}>
              <Text style={styles.titleBotao}>CALCULAR</Text>
            </TouchableOpacity>
          </SafeAreaView>

          <SafeAreaView>
            <TouchableOpacity style={styles.botao} onPress={() => Limpar()}>
              <Text style={styles.titleBotao}>LIMPAR</Text>
            </TouchableOpacity>
          </SafeAreaView>

          <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>
              Resultado:{" "}
            </Text>
            <Text style={{ color: "crimson" }}>{resultado}</Text>
            <Text style={{ color: "crimson" }}>{resultado2}</Text>
          </SafeAreaView>

          

        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "red",
    fontSize: 32,
    padding: 20,
    textAlign: "right",
  },

  subtitle: {
    color: "black",
    textAlign: "justify",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 15,
  },

  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    color: "black",
    borderRadius: 15,
    borderColor: "black",
    marginLeft: 20,
    marginRight: 20,
  },

  placeholder: {
    fontSize: 12,
    fontWeight: "700",
    color: "black",
    padding: 3,
    marginLeft: 5,
  },
  botao: {
    backgroundColor: "red",
    color: "white",
    borderRadius: 100,
    margin: 20,
  },
  titleBotao: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
    padding: 13,
  },
});
export default Calculadora;
