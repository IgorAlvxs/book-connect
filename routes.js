import { CORES } from "./src/constants/cores";

import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import MeusLivros from "./src/screens/MeusLivros";
import SobreNos from "./src/screens/SobreNos";
import Perfil from "./src/screens/Perfil";
import DetalhesScreen from './src/screens/Livro';
import PagamentoScreen from "./src/screens/Pagamento";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

import { SimpleLineIcons } from '@expo/vector-icons';
import LerLivroScreen from "./src/screens/LerLivro";

export const StackNavigate = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="Home"
                component={DrawerNavigate}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen 
                name="Detalhes" 
                component={DetalhesScreen}
            />
            <Stack.Screen 
                name="Pagamento" 
                component={PagamentoScreen} 
            />
            <Stack.Screen 
                name="Ler" 
                component={LerLivroScreen} 
            />
        </Stack.Navigator>
    )
}

export const DrawerNavigate = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{ 
            headerShown: true,
            headerStyle: { 
              backgroundColor: '#1a1a1a', 
              borderBottomWidth: 0
            },
            headerTintColor: '#FFFFFF', 
            headerTitle: () => null 
          }}>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerActiveTintColor: CORES.COR_FUNDO_PRETO,
                    drawerActiveBackgroundColor: CORES.COR_PRIMARIA,
                    drawerInactiveTintColor: CORES.COR_BRANCA,
                    drawerStyle: {
                        backgroundColor: CORES.COR_FUNDO_PRETO
                    },
                    drawerIcon: ({ focused }) => (
                        <SimpleLineIcons
                            name="home"
                            size={24}
                            color={focused ? CORES.COR_FUNDO_PRETO : CORES.COR_BRANCA}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Meus Livros"
                component={MeusLivros}
                options={{
                    drawerActiveTintColor: CORES.COR_FUNDO_PRETO,
                    drawerActiveBackgroundColor: CORES.COR_PRIMARIA,
                    drawerInactiveTintColor: CORES.COR_BRANCA,
                    drawerStyle: {
                        backgroundColor: CORES.COR_FUNDO_PRETO
                    },
                    drawerIcon: ({ focused }) => (
                        <SimpleLineIcons
                            name="notebook"
                            size={24}
                            color={focused ? CORES.COR_FUNDO_PRETO : CORES.COR_BRANCA}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Sobre Nós"
                component={SobreNos}
                options={{
                    drawerActiveTintColor: CORES.COR_FUNDO_PRETO,
                    drawerActiveBackgroundColor: CORES.COR_PRIMARIA,
                    drawerInactiveTintColor: CORES.COR_BRANCA,
                    drawerStyle: {
                        backgroundColor: CORES.COR_FUNDO_PRETO
                    },
                    drawerIcon: ({ focused }) => (
                        <SimpleLineIcons
                            name="info"
                            size={24}
                            color={focused ? CORES.COR_FUNDO_PRETO : CORES.COR_BRANCA}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    drawerActiveTintColor: CORES.COR_FUNDO_PRETO,
                    drawerActiveBackgroundColor: CORES.COR_PRIMARIA,
                    drawerInactiveTintColor: CORES.COR_BRANCA,
                    drawerStyle: {
                        backgroundColor: CORES.COR_FUNDO_PRETO
                    },
                    drawerIcon: ({ focused }) => (
                        <SimpleLineIcons
                            name="user"
                            size={24}
                            color={focused ? CORES.COR_FUNDO_PRETO : CORES.COR_BRANCA}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}