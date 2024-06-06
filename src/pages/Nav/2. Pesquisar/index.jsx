import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, estiloheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { estilo } from './style';
import filmes from '../../../Listas/Filmes'; //Importando lista de filmes

export default function Pesquisar() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(filmes.filter(filme => filme.genero !== 'Nenhum'));

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = filmes.filter(filme => 
      filme.genero !== 'Nenhum' && filme.nome.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const navigateToMovieDetail = (item) => {
    navigation.navigate('DetalhesFilme', { id: item.id });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToMovieDetail(item)}>
      <View style={estilo.itemContainer}>
        <Image source={item.cartaz} style={estilo.image} />
        <View style={estilo.textContainer}>
          <Text style={estilo.title}>{item.nome}</Text>
          <Text style={estilo.genre}>{item.genero}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={estilo.all}>
      <View style={estilo.body}>
        <TextInput
          style={estilo.searchBar}
          placeholder="PESQUISAR"
          value={search}
          onChangeText={handleSearch}
        />
        <FlatList
          data={filteredMovies}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
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
            color={'#14FF00'}
            onPress={() => navigation.navigate('Pesquisar')}
          />
          <Text style={{ fontSize: 10, color: '#14FF00' }}>PESQUISAR</Text>
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