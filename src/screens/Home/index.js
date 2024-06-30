import { CORES } from "../../constants/cores"; 
import InputPesquisa from "../../components/MeuInputPesquisa"; 
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import PoderDoHabitoFoto from "../../img/poder_habito.png";
import RapidoEDevagarFoto from "../../img/rapido_e_devagar.png";
import TecnologiaFoto from "../../img/tecnologia.png";
import EstudaFoto from "../../img/estuda_que_a_vida.png";

const livros = [
  { id: '1', titulo: 'O poder do hábito', preco: 'R$59,90', imagem: PoderDoHabitoFoto,  autor: 'Charles Duhigg', paginas: '408', idioma: 'Português', descricao: 'Charles Duhigg, repórter investigativo do New York Times, mostra que a chave para o sucesso é entender como os hábitos funcionam - e como podemos transformá-los. Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida.' },
  { id: '2', titulo: 'Rápido e Devagar duas formas de pensar', preco: 'R$57,90', imagem: RapidoEDevagarFoto,  autor: 'Daniel Kahneman', paginas: '608', idioma: 'Português', descricao: 'A tese principal do livro é uma diferenciação entre dois modos de pensamento : o “Sistema 1” é rápido, instintivo e emocional ; O "Sistema 2" é mais lento, mais deliberativo e mais lógico .'},
  { id: '3', titulo: 'Tecnologia o motor das transformações', preco: 'R$60,00', imagem: TecnologiaFoto, autor: 'Jorge Farias', paginas: '78', idioma: 'Português', descricao: 'Esta obra apresenta como alguns dos mais importantes processos de desenvolvimento tecnológico surgiram, influenciaram e foram influenciados pela sociedade.'},
  { id: '4', titulo: 'Estuda que a vida muda', preco: 'R$39,90', imagem: EstudaFoto, desconto: '10% off', autor: 'Alex Oliveira', paginas: '112', idioma: 'Português', descricao: 'Esse livro vai ajudar você a mudar definitivamente a sua vida! Inspirador, leve, objetivo e desafiante, seus princípios baseiam-se na experiência adquirida pelo autor ao longo de sua trajetória de vida pessoal e profissional, além de muitas informações coletadas após centenas - para não dizer milhares - de horas de estudo.'},
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { livro: item })}>
      <View style={styles.Item}>
        <Image source={item.imagem} style={styles.Imagem} />
        <View style={styles.LivroInfo}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.preco}>{item.preco}</Text>
          {item.desconto && <Text style={styles.desconto}>{item.desconto}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.Cabecalho}>
        <InputPesquisa/>
      </View>
      <View style={styles.tabs}>
        <Text style={styles.tab}>Gêneros</Text>
        <Text style={styles.tab}>Em oferta</Text>
        <Text style={styles.tab}>Mais vendidos</Text>
      </View>
      <FlatList
        data={livros}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.ListaLivros}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.COR_FUNDO_PRETO,
  },
  Cabecalho: {
    padding: 10,
    backgroundColor: CORES.COR_FUNDO_PRETO,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  tab: {
    color: CORES.COR_PRIMARIA,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ListaLivros: {
    padding: 10,
  },
  Item: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: CORES.COR_FUNDO_PRETO,
    borderRadius: 5,
    overflow: 'hidden',
  },
  Imagem: {
    width: 100,
    height: 150,
  },
  LivroInfo: {
    flex: 1,
    padding: 10,
  },
  titulo: {
    color: CORES.COR_BRANCA,
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  preco: {
    color: CORES.COR_PRECO,
    fontSize: 25,
    fontWeight: 'bold',
  },
  desconto: {
    color: CORES.COR_DESCONTO,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
