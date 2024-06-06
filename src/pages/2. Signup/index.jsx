import { View, Image, TouchableOpacity, Text, TextInput } from "react-native"; // Importando Componentes
import { useNavigation } from '@react-navigation/native'; // Navegação
import { estilo } from './style'; // Importando Estilo do código

export default function Signup() {
  const navigation = useNavigation();

  return (
    <View style={estilo.all}>
      <View style={estilo.header}>
        <Image
          source={require('../../../assets/Logo.png')}
          style={estilo.logo}
        />
      </View>

      <View style={estilo.body}>
        <View style={estilo.registration_title}>
          <Text style={{ color: '#fff', width: '75.65%' }}>SIGN-UP</Text>
        </View>

        <View style={estilo.setInputs}>
          <TextInput
            placeholder="EMAIL"
            style={estilo.input}
          />
          <TextInput
            placeholder="USUARIO"
            style={estilo.input}
          />
          <TextInput
            placeholder="SENHA"
            style={estilo.input}
            secureTextEntry={true}
          />

          <TouchableOpacity style={estilo.button}>
            <Text>SIGN-UP</Text>
          </TouchableOpacity>
        </View>

        <View style={estilo.goConnect}>
          <Text
            style={{ color: '#fff', width: '75.65%' }}
            onPress={() => navigation.navigate('Login')}>
            JÁ TEM CONTA? CONECTE-SE
          </Text>
        </View>
      </View>

      <View style={estilo.footer}>
        <Text
          onPress={() => navigation.navigate('Login_Signup')}
          style={estilo.back}>
          VOLTAR
        </Text>
      </View>
    </View>
  );
}