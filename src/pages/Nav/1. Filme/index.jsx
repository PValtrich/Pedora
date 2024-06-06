import React from 'react';
import { View, Text, ImageBackground, ScrollView, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { estilo } from './style';
import { Icon } from 'react-native-elements';
import filmes from '../../../Listas/Filmes'; // Importando lista de filmes

const Filme = () => {
  const navigation = useNavigation();

  // Função para renderizar cada cartão de filme
  const renderCinemaCard = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetalhesFilme', { id: item.id })}>
      <View style={estilo.cinemaCard}>
        <Image source={item.cartaz} style={estilo.cartaz} />
      </View>
    </TouchableOpacity>
  );

  const filtrarPorGenero = (genero, genero2) => filmes.filter(filme => filme.genero === genero || filme.genero === genero2);

  return (
    <View style={estilo.all}>
      <View style={estilo.header}>
        <View style={estilo.subHeader}>
          <ImageBackground
            style={estilo.mainPoster}
            source={require('../../../../assets/Code8_Renegados.jpg')}
          >
            <Text
              style={{
                color: '#fff',
                marginLeft: '1%'
              }}
              onPress={() => navigation.navigate('Filmes')}
            >
              CODE 8: PART II
            </Text>
          </ImageBackground>
        </View>
      </View>

      <View style={estilo.body}>
        <View style={estilo.scrollBeside}>
          <View style={estilo.scrollUp}>
            <Text style={{ color: '#fff', marginLeft: '1%' }}>
              AÇÃO
            </Text>
          </View>
          <View style={estilo.scrollDown}>
            <FlatList
              data={filtrarPorGenero('Ação', 'Nenhum')}
              renderItem={renderCinemaCard}
              keyExtractor={item => item.id.toString()}
              horizontal showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View style={estilo.scrollBeside}>
          <View style={estilo.scrollUp}>
            <Text style={{ color: '#fff', marginLeft: '1%' }}>
              COMÉDIA
            </Text>
          </View>
          <View style={estilo.scrollDown}>
            <FlatList
              data={filtrarPorGenero('Comédia', 'Nenhum')}
              renderItem={renderCinemaCard}
              keyExtractor={item => item.id.toString()}
              horizontal showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View style={estilo.scrollBeside}>
          <View style={estilo.scrollUp}>
            <Text style={{ color: '#fff', marginLeft: '1%' }}>
              TERROR
            </Text>
          </View>
          <View style={estilo.scrollDown}>
            <FlatList
              data={filtrarPorGenero('Terror', 'Nenhum')}
              renderItem={renderCinemaCard}
              keyExtractor={item => item.id.toString()}
              horizontal showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>

      <View style={estilo.nav}>
        <View style={estilo.iconav}>
          <Icon
            name='theaters'
            color={'#14FF00'}
            size={30}
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

export default Filme;
