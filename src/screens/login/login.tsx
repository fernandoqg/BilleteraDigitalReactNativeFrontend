import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { ReactElement } from 'react'
import { Button, Text, View } from 'react-native'

type componentProps = NativeStackScreenProps<any,any>;

function login({navigation}: componentProps):ReactElement{
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button 
      title='Principal'
      onPress={() => navigation.navigate('principal')}/>
      <Button 
      title="Ir a transacciones" 
      onPress={() => navigation.navigate('transacciones') }/>
      <Button 
      title='Ir a pagos'
      onPress={() => navigation.navigate('pagos')}/>
      <Button 
      title='Ir a transferencias'
      onPress={() => navigation.navigate('transferencia')}/>
      
    </View>
    )
}

export default login
