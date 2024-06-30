import React from "react"
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import { CORES } from "../../constants/cores";
import PoderDoHabitoFoto from "../../img/poder_habito.png";
import RapidoEDevagarFoto from "../../img/rapido_e_devagar.png";
import TecnologiaFoto from "../../img/tecnologia.png";

const MinhaBiblioteca = [
    { id: '1', imagem: PoderDoHabitoFoto },
    { id: '2', imagem: RapidoEDevagarFoto},
    { id: '3', imagem: TecnologiaFoto}
  ];

export default function Perfil () {

    const renderItem = ({ item }) => (
        <View style={styles.ListaLivros}>
          <Image source={item.imagem} style={styles.Imagem} />
          {item.desconto && <Text style={styles.desconto}>{item.desconto}</Text>}
        </View>
      );

    return (
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Image source={require('../../img/hamilton.jpg')} style={styles.foto} />
            <Text style={styles.nome}>Lewis Hamilton</Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sobre mim</Text>
            <Text style={styles.sectionContent}>
              Sou um ávido leitor que ama explorar diferentes gêneros literários. Nos meus tempos livres, gosto de escrever resenhas sobre os livros que leio e compartilhar com meus amigos.
            </Text>
          </View>
    
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Gêneros preferidos</Text>
            <Text style={styles.sectionContent}>Ficção</Text>
            <Text style={styles.sectionContent}>Fantasia</Text>
            <Text style={styles.sectionContent}>Mistério</Text>
          </View>
    
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Livros preferidos</Text>
            <FlatList
                data={MinhaBiblioteca}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.Item}
            />
          </View>
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: CORES.COR_FUNDO_PRETO,
        padding: 20,
      },
      header: {
        alignItems: 'center',
        marginBottom: 30,
      },
      foto: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
      },
      nome: {
        color: CORES.COR_BRANCA,
        fontSize: 24,
        fontWeight: 'bold',
      },
      section: {
        marginBottom: 20,
        alignItems: "center"
      },
      sectionTitle: {
        color: CORES.COR_PRIMARIA,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      sectionContent: {
        color: CORES.COR_BRANCA,
        fontSize: 16,
        marginBottom: 5,
      },
      Item: {
        flexDirection: 'row', 
        justifyContent: 'center',  
        padding: 10
      },
    
      Imagem: {
        width: 100,
        height: 150
      },
      ListaLivros:{
        marginRight: 20,
      },
    
      Texto: {
        color: CORES.COR_PRIMARIA,
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold'
      },
    });