import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './Src/Navigation/AuthStack'
import { Provider } from 'react-redux'
import { Store } from './Src/Store/Store/Store';

const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
    </Provider>
  )
}

export default App