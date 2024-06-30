import React from "react"
import { Text, View, Image, StyleSheet } from "react-native"
import { CORES } from "../../constants/cores";
import { Feather, FontAwesome } from '@expo/vector-icons';

export default function SobreNos () {

    return (  
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../../img/LogoCiaLivro.png')} />
        <Text style={styles.titulo}>
            O melhor lugar para encontrar o seu livro desejado!
        </Text>
        <Text style={styles.descricoes}>
            Venha por a sua leitura em dia em uma das nossas livrarias. E você ainda poderá saborear um delicioso café!
        </Text>

        <Text marginBottom={60}>
            <Feather name="map-pin" style={styles.comIcone}>
              R. Visc. de Ipiabas, 58 - A - Centro, Valença - RJ, 27600-000
            </Feather>
            
        </Text>

        <Text style={styles.contato}> Nossos Contatos </Text>

        <Text marginBottom={80}>
            <FontAwesome name="phone" style={styles.comIcone} > (24) 2452-4233{'\n'} </FontAwesome>
            <FontAwesome name="whatsapp" style={styles.comIcone} > (24) 98148-0025{'\n'} </FontAwesome>
            <Feather name="instagram" style={styles.comIcone}> @ciadolivro </Feather>
        </Text>
    </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: CORES.COR_FUNDO_PRETO,
        padding: 25
    },

    logo: {
        width: 200,
        height: 300,
        alignSelf: 'center'
    },

    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 40,
        color: CORES.COR_BRANCA,
        textAlign: "center",
        marginTop: -60
    },

    descricoes: {
        fontSize: 20,
        textAlign: "center",
        color: CORES.COR_BRANCA,
        marginBottom: 30
    },
    
    comIcone: {
        fontSize: 20,
        color: CORES.COR_BRANCA,
        textAlign: "center",
        marginTop: 20,
        alignItems: "center",
        color: CORES.COR_BRANCA,
        lineHeight: 32
    },

    contato: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        color: CORES.COR_PRIMARIA,
        textAlign: "center",
        marginTop: 10
    }

})