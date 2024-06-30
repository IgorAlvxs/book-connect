import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"
import MeuInput from "../../components/MeuInput";
import { CORES } from "../../constants/cores";
import MeuButton from "../../components/MeuButton";

function Login({navigation}){

    const logar = () => {
        navigation.navigate('Home');
    };

    return(
       <View style={styles.boxLogin}>
        <Image style={styles.logo} source={require('../../img/logo.png')} />
        <Text style={styles.titulo}>A Melhor Biblioteca Pessoal Do Brasil</Text>
        <MeuInput
            label="E-mail"
            placeHolder="exemplo@exemplo.com"
            comMascara={false}
        />
        <MeuInput
            label="Senha"
            placeHolder="123456"
            comMascara={true}
        />

        <TouchableOpacity onPress={() => handlePress('')}>
            <Text style={styles.linkSenha}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <MeuButton
            value="ENTRAR"
            callback={logar}
        />

        <Text>
            <Text style={styles.textoPadrao}>Ainda não possui conta? </Text>
            <TouchableOpacity onPress={() => handlePress('')}>
                <Text style={styles.linkConta}>CRIAR CONTA!</Text>
            </TouchableOpacity>
        </Text>
       </View>

    );
}

const styles = StyleSheet.create({
    boxLogin: {
        backgroundColor: CORES.COR_FUNDO_PRETO,
        flex: 1,
        alignItems: 'center'
    },

    titulo: {
        color: CORES.COR_PRIMARIA,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold'
    },

    logo: {
        marginTop: 60,
        width: 300,
        height: 300,
        alignSelf: 'center'
    },
    
    linkSenha: {
        color: CORES.COR_PRIMARIA,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginTop: -20
    },
    
    textoPadrao: {
        color: CORES.COR_BRANCA,
        marginBottom: 10,
        marginTop: 20,
        fontSize: 18
    },

    linkConta: {
        color: CORES.COR_PRIMARIA,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        alignItems: 'right',
        marginTop: 20
    }
});

export default Login;