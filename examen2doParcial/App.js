import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GetIDs from './component/GetIDs';
import GetTitleIDs from './component/GetTitleIDs';
import GetTitleIDsIncompled from './component/GetTitleIDsIncompled';
import GetTitleIDsCompled from './component/GetTiiGetTitleIDsCompled';

import GetIdUserIDs from './component/GetIdUserIDs'
import GetIdUserIDsCompled from './component/GetIdUserIDsCompled'
import GetIdUserIDsIncompled from './component/GetIdUserIDsIncompled'


// Definir los componentes de Stack
const Stack = createStackNavigator();

// Componente HomeScreen con botones para navegar
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Mostrar todos los IDs"
        onPress={() => navigation.navigate('GetIDs')}
      />
      <Button
        style={styles.button}

        title="Mostrar todos los Title y IDs"
        onPress={() => navigation.navigate('GetTitleIDs')}
      />
      <Button
        style={styles.button}

        title="Mostrar todos los Title y IDs sin resolver"
        onPress={() => navigation.navigate('GetTitleIDsIncompled')}
      />

      <Button
        style={styles.button}

        title="Mostrar todos los Title y IDs resueltos"
        onPress={() => navigation.navigate('GetTitleIDsCompled')}
      />

      <Button
        style={styles.button}

        title="Mostrar todos los IDs y ID Users"
        onPress={() => navigation.navigate('GetTitleIDsIdUsers')}
      />

      <Button
        style={styles.button}

        title="Mostrar todos los IDs y ID Users resueltos"
        onPress={() => navigation.navigate('GetTitleIDsIdUsersCompled')}
      />

      <Button
        style={styles.button}

        title="Mostrar todo los IDs y ID Users sin resolver"
        onPress={() => navigation.navigate('GetTitleIDsIdUsersIncompled')}
      />

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="GetIDs" component={GetIDs} options={{ title: 'Mostrar todos los IDs' }} />
        <Stack.Screen name="GetTitleIDs" component={GetTitleIDs} options={{ title: 'Mostrar todos los Title y IDs' }} />
        <Stack.Screen name="GetTitleIDsIncompled" component={GetTitleIDsIncompled} options={{ title: 'Mostrar todos los Title y IDs sin resolver' }} />
        <Stack.Screen name="GetTitleIDsCompled" component={GetTitleIDsCompled} options={{ title: 'Mostrar todos los Title y IDs resueltos' }} />

        <Stack.Screen name="GetTitleIDsIdUsers" component={GetIdUserIDs} options={{ title: 'Mostrar todos los IDs y ID Users' }} />

        <Stack.Screen name="GetTitleIDsIdUsersCompled" component={GetIdUserIDsCompled} options={{ title: 'Mostrar todos los IDs y ID Users resueltos' }} />
        <Stack.Screen name="GetTitleIDsIdUsersIncompled" component={GetIdUserIDsIncompled} options={{ title: 'Mostrar todo los IDs y ID Users sin resolver' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  button: {
    paddingBottom: 3,
    marginBottom: 10, 
  },
});
