import React from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { estilo } from './style';
import { Icon } from 'react-native-elements';
import filmecinemas from '../../Listas/FilmesCinemas';

export default function Cinema() {
  const navigation = useNavigation();
  const route = useRoute();
  const { city } = route.params;

  const filteredMovies = filmecinemas.filter(item => item.cidade === city);

  const navigateToAgendar = (movie) => {
    navigation.navigate('Agendar', { movie });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToAgendar(item)}>
      <View style={estilo.list}>
        <View style={estilo.cinemaname}>
          <Text style={{ color: '#000', fontSize: 15 }}>{item.cidade}</Text>
        </View>
        <View style={estilo.conteudo}>
          <View style={estilo.viewEsquerda}>
            <Image
              style={estilo.cartaz}
              source={item.cartaz}
            />
          </View>
          <View style={estilo.viewDireita}>
            <View style={estilo.cima}>
              <Text style={{ color: '#000', fontSize: 15 }}>{item.nome}</Text>
            </View>
            <View style={estilo.meio}>
              <View style={estilo.bodyUpRightUpUpUp}>
                <Text style={{ fontSize: 12, color: '#000' }}>{item.anoPublicacao}</Text>
                <View style={estilo.recommendedAge}>
                  <Text style={{ fontSize: 12, color: '#000' }}>{item.idade_recomendada}</Text>
                </View>
                <Text style={{ fontSize: 12, color: '#000' }}>{item.duracao}</Text>
              </View>
              <View style={estilo.bodyUpRightUpBelow}>
                <Text style={{ fontSize: 12, color: '#000' }}>{item.genero}</Text>
              </View>
            </View>
            <ScrollView style={estilo.baixo}>
              <Text style={{ fontSize: 10, color: '#000' }}>{item.sinopse}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={estilo.all}>
      <View style={estilo.header}>
        <Text style={{ color: '#000' }}>FILMES EM {city.toUpperCase()}</Text>
      </View>
      <View style={estilo.body}>
        <FlatList
          data={filteredMovies}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View style={estilo.nav}>
        <View style={estilo.iconav}>
          <Icon
            name='theaters'
            size={30}
            onPress={() => navigation.navigate('Filmes')}
          />
          <Text style={{ fontSize: 10 }}>FILMES</Text>
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
            color={'#14FF00'}
            onPress={() => navigation.navigate('Cinemas')}
          />
          <Text style={{ fontSize: 10, color: '#14FF00' }}>CINEMAS</Text>
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
