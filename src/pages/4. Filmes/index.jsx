import React from 'react';
import { View, Text, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { estilo } from './style';
import filmes from '../../Listas/Filmes'; // Importando lista de filmes

export default function DetalhesFilme() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const filme = filmes.find(f => f.id === id); // Selecionando o filme com base no ID

  const openTrailer = (url) => {
    Linking.openURL(url).catch((err) => console.error('Erro ao abrir URL:', err));
  };

  return (
    <View style={estilo.all}>
      <View style={estilo.header}>
        <Text style={{ color: '#fff' }}>SOBRE</Text>
      </View>

      <View style={estilo.body}>
        <View style={estilo.bodyUp}>
          <View style={estilo.bodyUpLeft}>
            <Image
              source={filme.cartaz}
              style={estilo.cartaz}
            />
          </View>
          <View style={estilo.bodyUpRight}>
            <View style={estilo.bodyUpRightUp}>
              <View style={estilo.bodyUpRightUpUpUp}>
                <Text style={{ fontSize: 12, color: '#fff' }}>{filme.ano}</Text>
                <View style={estilo.recommendedAge}>
                  <Text style={{ fontSize: 12, color: '#000' }}>{filme.idade_recomendada}</Text>
                </View>
                <Text style={{ fontSize: 12, color: '#fff' }}>{filme.duracao}</Text>
              </View>
              <View style={estilo.bodyUpRightUpBelow}>
                <Text style={{ fontSize: 12, color: '#fff' }}>{filme.genero}</Text>
              </View>
            </View>
            <View style={estilo.bodyUpRightBelow}>
              <View style={estilo.title}>
                <Text style={{ fontSize: 15, color: '#fff' }}>{filme.nome}</Text>
              </View>
              <View style={estilo.descricao}>
                <ScrollView>
                  <Text style={{ fontSize: 12, color: '#fff' }}>{filme.sinopse}</Text>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>

        <View style={estilo.bodyBelow}>
          <View style={estilo.elenco}>
            <Text style={{ fontSize: 15, color: '#fff' }}>ELENCO</Text>
            <View>
              <Text style={{ fontSize: 12, color: '#fff' }}>{filme.elenco.join(', ')}</Text>
            </View>
            <TouchableOpacity onPress={() => openTrailer(filme.trailer)} style={estilo.trailerButton}>
              <Text style={{ fontSize: 10, color: '#fff' }}>ASSISTIR TRAILER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={estilo.nav}>
        <View style={estilo.iconav}>
          <Icon
            name='theaters'
            size={30}
            color='#14FF00'
            onPress={() => navigation.navigate('Filmes')}
          />
          <Text style={{ fontSize: 10, color: '#14FF00' }}>FILMES</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='search'
            size={30}
            onPress={() => navigation.navigate('Pesquisar')}
          />
          <Text style={{ fontSize: 10 }}>PESQUISAR</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='movie'
            size={30}
            onPress={() => navigation.navigate('Cinemas')}
          />
          <Text style={{ fontSize: 10 }}>CINEMAS</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='person'
            size={30}
            onPress={() => navigation.navigate('Perfil')}
          />
          <Text style={{ fontSize: 10 }}>PERFIL</Text>
        </View>
      </View>
    </View>
  );
}