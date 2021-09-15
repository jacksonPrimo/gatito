import React from 'react';
import { Services } from './src/screens/services';
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { Cart } from './src/screens/cart';
import { Test } from './src/screens/test';
import { Provider } from "react-redux";
import { store } from './src/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      {/* <Test></Test> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Services">
          <Stack.Screen name="Services" component={Services} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}