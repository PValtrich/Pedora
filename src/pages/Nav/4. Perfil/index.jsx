import React from 'react';
import { View, Text, TextInput, TouchableOpacity, } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { estilo } from './style';
import { Icon } from 'react-native-elements';



export default function Perfil() {
  const navigation = useNavigation();

  return (
    <View style={estilo.all}>
      <View style={estilo.header}>
        <Text style={{ color: '#fff' }}>SOBRE</Text>
      </View>
      <View style={estilo.body}>
        <View style={estilo.bodyscrool}>
        <Text style={estilo.texto}>USUARIO</Text>
        <Text style={estilo.texto}>EMAIL</Text>
        <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate('Sessao')}>
          <Text style={{fontSize: 15, color: '#000'}}>HISTÓRICO DE SESSÕES</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={estilo.nav}>
        <View style={estilo.iconav}>
          <Icon
            name='theaters'
            size={30}
            onPress={() => navigation.navigate('Filmes')}
          />
          <Text style={{ fontSize: 10,}}>FILMES</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='search'
            size={30}
            onPress={() => navigation.navigate('Pesquisar')}
          />
          <Text style={{ fontSize: 10,}}>PESQUISAR</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='movie'
            size={30}
            onPress={() => navigation.navigate('Cinemas')}
          />
          <Text style={{ fontSize: 10,}}>CINEMAS</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='person'
            size={30}
            color={'#14FF00'}
            onPress={() => navigation.navigate('Perfil')}
          />
          <Text style={{ fontSize: 10,
            color: '#14FF00',}}>PERFIL</Text>
        </View>
      </View>
    </View>

  );
}