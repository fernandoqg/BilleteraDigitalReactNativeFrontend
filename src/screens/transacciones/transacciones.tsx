import React, { ReactElement } from 'react'
import { Button, Text, View } from 'react-native'

function transacciones({navigation}): ReactElement{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Transacciones</Text>
        <Button 
        title='Ir a login'
        onPress={() => navigation.navigate('login')}
        
        />
      </View>
        
    )
}

export default transacciones
