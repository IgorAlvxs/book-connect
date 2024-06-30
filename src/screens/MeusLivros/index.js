import { CORES } from "../../constants/cores"; 
import InputPesquisa from "../../components/MeuInputPesquisa"; 
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import PoderDoHabitoFoto from "../../img/poder_habito.png";
import RapidoEDevagarFoto from "../../img/rapido_e_devagar.png";
import TecnologiaFoto from "../../img/tecnologia.png";

const MinhaBiblioteca = [
  { id: '1', titulo: 'O poder do hábito', preco: 'R$59,90', imagem: PoderDoHabitoFoto,  autor: 'Charles Duhigg', paginas: '408', idioma: 'Português', descricao: 'Charles Duhigg, repórter investigativo do New York Times, mostra que a chave para o sucesso é entender como os hábitos funcionam - e como podemos transformá-los. Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida.' },
  { id: '2', titulo: 'Rápido e Devagar duas formas de pensar', preco: 'R$57,90', imagem: RapidoEDevagarFoto,  autor: 'Daniel Kahneman', paginas: '608', idioma: 'Português', descricao: 'A tese principal do livro é uma diferenciação entre dois modos de pensamento : o “Sistema 1” é rápido, instintivo e emocional ; O "Sistema 2" é mais lento, mais deliberativo e mais lógico .'},
  { id: '3', titulo: 'Tecnologia o motor das transformações', preco: 'R$60,00', imagem: TecnologiaFoto, autor: 'Jorge Farias', paginas: '78', idioma: 'Português', descricao: 'Esta obra apresenta como alguns dos mais importantes processos de desenvolvimento tecnológico surgiram, influenciaram e foram influenciados pela sociedade.'},
];


export default function MeusLivros({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Ler', { livro: item })}>
    <View style={styles.ListaLivros}>
      <Image source={item.imagem} style={styles.Imagem} />
      {item.desconto && <Text style={styles.desconto}>{item.desconto}</Text>}
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View >
           <InputPesquisa/>
      </View>
      <View style={styles.container}>
      <Text style={styles.Texto}>Minha biblioteca</Text>
        <FlatList
        data={MinhaBiblioteca}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.Item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.COR_FUNDO_PRETO,
    padding: 10
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
  desconto: {
    color: CORES.COR_PRECO,
    fontSize: 25,
    fontWeight : 'bold'
  }, 
});
