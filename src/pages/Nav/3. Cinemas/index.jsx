import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { estilo } from './style';
import filmecinemas from '../../../Listas/FilmesCinemas';

export default function Cinemas() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredCities, setFilteredCities] = useState([...new Set(filmecinemas.map(item => item.cidade))]);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = [...new Set(filmecinemas
      .filter(item => item.cidade.toLowerCase().includes(text.toLowerCase()))
      .map(item => item.cidade)
    )];
    setFilteredCities(filtered);
  };

  const navigateToCinema = (city) => {
    navigation.navigate('Cinema', { city });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToCinema(item)}>
      <View style={estilo.itemContainer}>
        <Text style={estilo.cityName}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={estilo.all}>
      <View style={estilo.header}>
        <Text style={{ color: '#fff' }}>ENCONTRAR CINEMAS</Text>
      </View>
      <View style={estilo.body}>
        <View style={estilo.input}>
          <TextInput
            style={estilo.searchBar}
            placeholder="PESQUISAR"
            value={search}
            onChangeText={handleSearch}
          />
        </View>
        <View style={estilo.resultados}>
          <Text style={{ color: '#fff', fontSize: 15 }}>RESULTADOS</Text>
          <View style={estilo.lista}>
            <FlatList
              data={filteredCities}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          </View>
        </View>
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
