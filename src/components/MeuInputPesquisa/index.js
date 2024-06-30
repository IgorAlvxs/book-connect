import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { CORES } from "../../constants/cores";

const InputPesquisa = () => {
  return (
    <View style={styles.container}>
        <Feather name="search" size={24} color={CORES.COR_BORDA_INPUT} />
        <TextInput
        style={styles.input}
        placeholder='Buscar livro...'
        placeholderTextColor= {CORES.COR_BORDA_INPUT}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: CORES.COR_INPUT_PESQUISA,
    borderColor: CORES.COR_BORDA_INPUT,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    width: '100%',
    marginTop: 15
  },

  input: {
    flex: 1,
    color: CORES.COR_BRANCA,
    marginLeft: 10,
    BackgroundColor: CORES.COR_INPUT
  }
});

export default InputPesquisa;