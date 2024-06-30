import React from "react";
import { SafeAreaView, TextInput, StyleSheet, Text } from "react-native";
import { CORES } from "../../constants/cores";

const MeuInput = (props) =>{

    return (
        <SafeAreaView>
            <Text style={styles.label}>{ props.label }</Text>
            <TextInput
            style={ styles.input }
            placeholder={ props.placeHolder }
            secureTextEntry={ props.comMascara }
            placeHolderTextColor= {CORES.COR_BORDA_INPUT} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        marginBottom: 30,
        marginTop: 3,
        padding: 10,
        width: 320,
        borderRadius: 8,
        color: CORES.COR_BRANCA,
        fontSize: 15,
        borderColor: CORES.COR_BORDA_INPUT,
        backgroundColor: CORES.COR_INPUT,
        fontFamily: "Montserrat-Regular",
        height: 40
    },
    label:
    {
        fontSize: 15,
        color: CORES.COR_BRANCA
    }
});

export default MeuInput;