import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Dicas() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Dicas</Text>
        {/* Dica 1 */}
        <View>
          <Text style={styles.subtitle}>
            1. Planeje a quantidade de comida e bebida para seu churrasco
          </Text>
          <Text style={styles.content}>
            Utilizando o Churras Calculator, é possível saber a quantidade exata
            de carne e bebida a ser comprada, assim ajudando no não desperdício
            e para que não se gaste mais ou menos do que o necessário. Deste
            modo, seu churrasco será melhor planejado e mais eficiente.
          </Text>
        </View>

        {/* Dica 2 */}
        <View>
          <Text style={styles.subtitle}>
            2. Use mais do que o sal grosso como tempero
          </Text>
          <Text style={styles.content}>
            Uma grande dica para tornar seu churrasco ainda melhor é utilizar
            outros temperos nas carnes e não somente o sal grosso. Para carnes
            bovinas, é interessante usar o Dry Black Rub, que é um sal com
            diversas especiarias para dar um gosto diferente à carne. Já para
            carne de porco e frango é bom usar o Dry Rub, que é um tempero de
            especiarias com um gosto muito marcante.
          </Text>
          <Image
            style={styles.img}
            source={require("../imgs/dry_hub_black.jpg")}
          />
        </View>

        {/* Dica 3 */}
        <View>
          <Text style={styles.subtitle}>
            3. Prepare alguns molhos para as carnes
          </Text>
          <Text style={styles.content}>
            Os molhos são muito importantes no churrasco, tanto para fazer na
            preparação das carnes, quanto para fazer com um molho para comer
            junto com a carne pronta. Como dica para molhos para fazer na
            preparação do churrasco são o barbecue e as mostardas. O barbecue é
            muito bom para se colocar nos frangos ou na costela antes de colocar
            na grelha. Já a mostarda é ótima para colocar nos frangos ou carne
            de porco antes, entretanto também fica muito boa para se comer junto
            com a linguiça. O molho de alho é um molho para se comer junto com a
            carne feita, podendo se colocar em qualquer tipo.
          </Text>
          <Image style={styles.img} source={require("../imgs/molho.jpg")} />
        </View>

        {/* Dica 4 */}
        <View>
          <Text style={styles.subtitle}>
            4. Use a técnica certa para assar as carnes
          </Text>
          <Text style={styles.content}>
            Para se assar de forma adequada a carne, é necessário ter os
            seguintes pontos muito bem entendidos: - Cortar a peça da carne
            sempre contra a fibra - Saber controlar o fogo e ter seu objetivo
            com ele, deixando a carne mais no primeiro degrau para selá-la e no
            segundo degrau para ela pegar o ponto certo - Dependendo do tempero,
            tente usá-lo após a carne estiver pronta, pois assim a carne terá
            uma reação de maillard melhor e ficará mais macia e suculenta -
            Antes de cortar as carnes bovinas, deixe elas descansarem por em
            média de 2-5 minutos, para todos os líquidos da carne ficarem dentro
            dela
          </Text>
          <Image
            style={styles.imgBottom}
            source={require("../imgs/corteCarne.jpg")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

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
  content: {
   color: "black",
   textAlign: "justify",
   fontSize: 19,
   paddingLeft: 20,
   paddingRight: 20,
   marginBottom: 15,
  },
  img: {
    marginBottom: 25,
    alignSelf: "center",
    width: "100%",
  },
  imgBottom: {
    marginTop: 20,
    alignSelf: "center",
    width: "100%",
  },
});
