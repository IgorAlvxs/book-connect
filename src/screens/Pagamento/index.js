import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { CORES } from "../../constants/cores";
import { AntDesign } from '@expo/vector-icons';

export default function PagamentoScreen({ route, navigation }) {
    const { preco } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.voltarButton} 
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color={CORES.COR_BRANCA} />
      </TouchableOpacity>
      
      <Text style={styles.valorTotalLabel}>Valor total</Text>
      <Text style={styles.valorTotal}>{preco}</Text>

      <Text style={styles.label}>Forma de pagamento:</Text>
      <TextInput 
        style={styles.input} 
        value="PIX" 
        editable={false} 
      />

      <Text style={styles.label}>Código para o pagamento:</Text>
      <View style={styles.codigoContainer}>
        <TextInput 
          style={styles.codigoInput} 
          value="0471923847569231" 
          editable={false} 
        />
        <TouchableOpacity>
          <AntDesign name="copy1" size={24} color={CORES.COR_BRANCA} />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Pague com qr code:</Text>
      <Image 
        source={require('../../img/qrcode.png')}
        style={styles.qrCode}
      />

      <TouchableOpacity style={styles.comprarButton}>
        <Text style={styles.comprarButtonText}>Finalizar compra</Text>
      </TouchableOpacity>
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
    borderRadius: 5,
  },
  valorTotalLabel: {
    color: CORES.COR_BRANCA,
    fontSize: 18,
    marginTop: 40,
    textAlign: 'center',
  },
  valorTotal: {
    color: CORES.COR_PRECO,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60,
  },
  label: {
    color: CORES.COR_BRANCA,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: CORES.COR_FUNDO_PRETO,
    borderColor: CORES.COR_BORDA_INPUT,
    borderWidth: 2,
    color: CORES.COR_BRANCA,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  codigoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  codigoInput: {
    flex: 1,
    backgroundColor: CORES.COR_FUNDO_PRETO,
    borderColor: CORES.COR_BORDA_INPUT,
    borderWidth: 2,
    color: CORES.COR_BRANCA,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  qrCode: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20
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
});
