import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"; // Importando Componentes
import { useNavigation } from '@react-navigation/native'; // Navegação
import { estilo } from "./style"; // Importando Estilo

export default function Login() {
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
        <View style={estilo.loginText}>
          <Text style={{ color: '#fff', width: '75.65%' }}>LOGIN</Text>
        </View>
        <View style={estilo.setInputs}>
          <TextInput
            placeholder="USUARIO"
            style={estilo.input}
          />
          <TextInput
            placeholder="SENHA"
            style={estilo.input}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={estilo.button}
            onPress={() => navigation.navigate('Filmes')}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={estilo.goCreate}>
          <Text
            style={{ color: '#fff', width: '75.65%' }}
            onPress={() => navigation.navigate('Signup')}>
            NÃO TEM CONTA? CRIE
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