import { View, TouchableOpacity, Text } from "react-native"; // Importando Componentes
import { useNavigation } from '@react-navigation/native'; // Navegação
import * as Animatable from 'react-native-animatable'; // Animações
import { estilo } from './style'; // Estilo do código

export default function Login_Signup() {
  const navigation = useNavigation();

  return (
    <View style={estilo.all}>
      <View style={estilo.header}>
        <Animatable.Image
          animation='zoomInUp'
          source={require('../../../assets/Logo.png')}
          style={estilo.logo}
        />
      </View>

      <View style={estilo.body}>
        <TouchableOpacity
          style={estilo.ButtonDefault}
          onPress={() => navigation.navigate('Signup')}>
          <Text>BEM VINDO AO CINEPHONE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilo.ButtonDefault}
          onPress={() => navigation.navigate('Login')}>
          <Text>JÁ TEM CONTA? CONECTE-SE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}