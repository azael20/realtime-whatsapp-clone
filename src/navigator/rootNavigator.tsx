import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChatScreen } from '../screens/Chats/ChatScreen';
import { MainTabNavigator } from './tabsNavigator';
import { LoginScreen } from '../screens/Auth/LoginScreen';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { persistor, RootState } from '../redux/store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from '@apollo/client';
import { SafeAreaView, StatusBar, StatusBarPropsAndroid, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import AwesomeAlert from 'react-native-awesome-alerts';
import { clearError } from '../redux/slices/activity/activity';
import { CustomActivityIndicator } from '../subcomponents/CustomActivityIndicator';

const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const httpUri: string = process.env.HTTP_LINK!;
const wsUri: string = process.env.WS_LINK!;

const HomeStackScreen = ({ navigation }: any) => {

  return (
    <HomeStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#fff'
        }
      }}
    >
      <HomeStack.Screen name={'Home'} component={MainTabNavigator} options={{ headerShown: false }} />
      <HomeStack.Screen name={'ChatScreen'} component={ChatScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
};
const LoginStackScreen = () => {

  return (
    <LoginStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#F6F6F6'
        }
      }}
    >
      <LoginStack.Screen name={'LoginScreen'} component={LoginScreen} options={{ headerTitle: 'Name' }} />
    </LoginStack.Navigator>
  );
};

const httpLink = new HttpLink({
  uri: httpUri
});

const wsLink = new GraphQLWsLink(createClient({
  url: wsUri,
}));

const splitLink = split(({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore'
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all'
    }
  }
});

export const RootNavigator = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.user);
  const activity = useSelector((state: RootState) => state.activity);

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <AwesomeAlert
          show={(activity.error.message ?? '').length > 1}
          showProgress={false}
          title={activity.error.title ?? 'Error'}
          message={activity.error.message!}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText={'Okay'}
          confirmButtonColor={activity.error.buttonColor ?? '#DD6B55'}
          onConfirmPressed={() => dispatch(clearError())}
          onDismiss={() => dispatch(clearError())}
        />
        <MyStatusBar backgroundColor={'#F6F6F6'} />
        <NavigationContainer>
          {state.isAuthenticated ?
            <HomeStackScreen /> : <LoginStackScreen />
          }
        </NavigationContainer>
        {
          activity.isLoading
            ? (
              <View
                style={[StyleSheet.absoluteFill, { flex: 1, backgroundColor: 'rgba(0,0,0,0.18)' }]}
                pointerEvents={!activity.isLoading ? 'none' : 'auto'}
              >
                <CustomActivityIndicator />
              </View>
            ) : null
        }
      </View>
    </ApolloProvider>
  );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const MyStatusBar = ({ backgroundColor, ...props }: StatusBarPropsAndroid) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent barStyle={'dark-content'} backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
});
