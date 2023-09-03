import React, { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login/login';
import { transacciones } from './screens/transacciones';
import payments from './screens/pagos/payments';
import transfer from './screens/transferencias/transfer';
import main from './screens/principal/main';

const Stack = createNativeStackNavigator();

const App = (): ReactElement => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="login" component={login} options={
        {
          headerShown:false,
          headerTitle:'Titulo login'
        }
        } />

        <Stack.Screen name="transacciones" component={transacciones} />
        <Stack.Screen name="pagos" component={payments} />
        <Stack.Screen name="transferencia" component={transfer} />
        <Stack.Screen name="principal" component={main} />

      </Stack.Navigator>

    </NavigationContainer>
   
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
})

export default App;