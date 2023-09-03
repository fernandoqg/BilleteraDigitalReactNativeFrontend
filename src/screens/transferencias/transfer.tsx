import React, { ReactElement } from 'react'
import { Button, Text, View } from 'react-native'

function transfer({navigation}): ReactElement  {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button
      title="Ir a login"
      onPress={() => navigation.navigate('login')}/>
    </View>
    )
}

export default transfer
