import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login_Signup from '../pages/1. Login_Signup';
import Filme from '../pages/Nav/1. Filme';
import Signup from '../pages/2. Signup';
import Login from '../pages/3. Login';
import Cinemas from '../pages/Nav/3. Cinemas';
import Perfil from '../pages/Nav/4. Perfil';
import Pesquisar from '../pages/Nav/2. Pesquisar';
import Sessao from '../pages/7. Sessoes';
import DetalhesFilme from '../pages/4. Filmes';
import Cinema from '../pages/5. Cinema';
import Agendar from '../pages/6. Agendar';


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
  
    <Stack.Navigator>
        <Stack.Screen // Page 1
        name='Login_Signup'
        component={Login_Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen // Page 7
        name='Sessao'
        component={Sessao}
        options={{ headerShown: false }}
      />
            <Stack.Screen // Page 5
        name='Cinema'
        component={Cinema}
        options={{ headerShown: false }}
      />
      <Stack.Screen // Page 5
        name='Agendar'
        component={Agendar}
        options={{ headerShown: false }}
      />
 
    
      <Stack.Screen // Page 2
        name='Signup'
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen // Page 3
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen // Page 4
        name='Filmes'
        component={Filme}
        options={{ headerShown: false }}
      />

      <Stack.Screen 
        name='Perfil'
        component={Perfil}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name='Cinemas'
        component={Cinemas}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name='Pesquisar'
        component={Pesquisar}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name='DetalhesFilme'
        component={DetalhesFilme}
        options={{ headerShown: false }}
      />
      


    </Stack.Navigator>
  );
}
