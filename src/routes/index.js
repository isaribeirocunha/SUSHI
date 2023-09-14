import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/welcome'
import SignIn from '../pages/signin'
import cadastro from '../pages/cadastro'
import inicio from '../pages/inicio'
import comprar from '../pages/comprar'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" 
        component= { Welcome }
        options= { {headerShown: false} }
         />
      <Stack.Screen 
        name="SignIn" 
        component= { SignIn } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="cadastro" 
        component= { cadastro } 
        options= { {headerShown: false} }
        />
         <Stack.Screen 
        name="inicio" 
        component= { inicio } 
        options= { {headerShown: false} }
        />
         <Stack.Screen 
        name="comprar" 
        component= { comprar } 
        options= { {headerShown: false} }
        />
    </Stack.Navigator>
  )
}