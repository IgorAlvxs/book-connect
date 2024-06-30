import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { CORES } from "../../constants/cores";
import { AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function DetalhesScreen({ route, navigation }) {
  const { livro } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.voltarButton} 
        onPress={() => navigation.navigate('Home')}
      >
        <AntDesign name="arrowleft" size={24} color={CORES.COR_BRANCA} />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.row}>
          <Image source={livro.imagem} style={styles.imagem} />
          <View style={styles.infoSection}>
            <Text style={styles.titulo}>{livro.titulo}</Text>
            <View style={styles.infoContainer}>
              <MaterialIcons name="translate" size={20} color={CORES.COR_BRANCA} />
              <Text style={styles.info}>{livro.idioma}</Text>
            </View>
            <View style={styles.infoContainer}>
              <FontAwesome name="file-text" size={20} color={CORES.COR_BRANCA} />
              <Text style={styles.info}>{livro.paginas} páginas</Text>
            </View>
            <View style={styles.infoContainer}>
              <FontAwesome name="user" size={20} color={CORES.COR_BRANCA} />
              <Text style={styles.info}>{livro.autor}</Text>
            </View>
            <Text style={styles.preco}>{livro.preco}</Text>
            {livro.desconto && <Text style={styles.desconto}>{livro.desconto}</Text>}
          </View>
        </View>
        <Text style={styles.descricao}>{livro.descricao}</Text>
        <TouchableOpacity style={styles.comprarButton} onPress={() => navigation.navigate('Pagamento', { preco: livro.preco })}>
          <Text style={styles.comprarButtonText}>Comprar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.COR_FUNDO_PRETO,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  voltarButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    backgroundColor: CORES.COR_BTN_VOLtar,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 50,
    marginBottom: 30
  },
  imagem: {
    width: 160,
    height: 280,
    marginRight: 20,
  },
  infoSection: {
    flex: 1,
  },
  titulo: {
    color: CORES.COR_BRANCA,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  info: {
    color: CORES.COR_BRANCA,
    fontSize: 16,
    marginLeft: 5,
  },
  descricao: {
    color: CORES.COR_BRANCA,
    fontSize: 16,
    marginBottom: 20,
  },
  preco: {
    color: CORES.COR_PRECO,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  desconto: {
    color: CORES.COR_DESCONTO,
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    justifyContent: 'center',
    paddingBottom: 30, 
  },
  comprarButton: {
    backgroundColor: CORES.COR_PRIMARIA,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  comprarButtonText: {
    color: CORES.COR_BRANCA,
    fontSize: 18,
    fontWeight: 'bold',
  },
  voltarText: {
    color: CORES.COR_FUNDO_BOTAO,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
