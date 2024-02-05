/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';
import RootScreen from './src';

const queryClient = new QueryClient();

const MainApp = () => {
  const Stack = createStackNavigator();

  const commonScreenOptions = {
    headerShadowVisible: false,
    headerShown: false,
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <NavigationContainer>
            <QueryClientProvider client={queryClient}>
              {/* React Query Provider */}
              <Stack.Navigator screenOptions={commonScreenOptions}>
                <Stack.Screen name="RootScreen" component={RootScreen} />
              </Stack.Navigator>
            </QueryClientProvider>
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default MainApp;
