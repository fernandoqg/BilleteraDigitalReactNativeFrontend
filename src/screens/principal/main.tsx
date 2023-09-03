import React, { ReactElement } from 'react'
import { Button, Text, View } from 'react-native'

function main({navigation}): ReactElement{
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Transacciones</Text>
        <Button
        title='Ver Saldos y Movimientos'
        onPress={() => navigation.navigate('transacciones')}
        />
        <Button
        title='Pagos'
        onPress={() => navigation.navigate('pagos')}
        />
      </View>
    )
}

export default main
