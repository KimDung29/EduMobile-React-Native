import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from '../navigations/BottomTabs';
import SingleCourse from './singleCourse';
import Login from './login';
import Register from './register';
import GeneralSetting from './settings/general';
import PasswordSetting from './settings/password';
import DeleteAccountSetting from './settings/delete_account';
import LanguageSetting from './settings/language';
import Settings from './settings';

const AppNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeTabScreen"
      presentation="card"
      screenOptions={{
        gesturesEnabled: true,
        headerTintColor: '#000',
        headerBackTitle: '',
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={BottomTabs} />
      <Stack.Screen name="Courses/:id" component={SingleCourse} />
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="RegisterScreen" component={Register} />
      <Stack.Screen name="SettingsScreen" component={Settings} />
      <Stack.Screen name="GeneralScreen" component={GeneralSetting} />
      <Stack.Screen name="PasswordScreen" component={PasswordSetting} />
      <Stack.Screen
        name="DeleteAccountScreen"
        component={DeleteAccountSetting}
      />
      <Stack.Screen name="LanguageScreen" component={LanguageSetting} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
