/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import styles from './style';
import i18n from '../config/translations';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import IconF from 'react-native-vector-icons/Feather';
import YourOrders from '../screens/yourOrders';
import {useEffect} from 'react';
import Home from '../screens/home';
import MyCourse from '../screens/myCourse';
import Wishlist from '../screens/wishlist';
import MyProfile from '../screens/myProfile';
import Courses from '../screens/courses';

const Stack = createStackNavigator();

export default function BottomTabs() {
  const Tab = createBottomTabNavigator();
  const {language} = useSelector(state => state.common);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const Tab_screens = [
    {
      name: 'Home',
      component: Home,
      icon: 'home',
      label: 'bottomNavigation.home',
    },
    {
      name: 'Courses',
      component: Courses,
      icon: 'book',
      label: 'bottomNavigation.courses',
    },
    {
      name: 'MyCourse',
      component: MyCourse,
      icon: 'play-circle',
      label: 'bottomNavigation.myCourse',
    },
    {
      name: 'Wishlist',
      component: Wishlist,
      icon: 'heart',
      label: 'bottomNavigation.wishlist',
    },
    {
      name: 'ProfileStackScreen',
      component: ProfileStack,
      icon: 'user',
      label: 'bottomNavigation.profile',
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName={Tab_screens[0].name}
      screenOptions={{
        headerShown: false,
        headerTitle: '',
        tabBarShowLabel: true,
        tabBarStyle: styles.container,
      }}>
      {Tab_screens.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({focused}) => (
              <TabBarIcon icon={item.icon} focused={focused} />
            ),
            tabBarLabel: ({focused}) => (
              <TabBarLabel label={item.label} focused={focused} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="YourProfileScreen"
      presentation="card"
      screenOptions={{
        gesturesEnabled: true,
        headerTintColor: '#000',
        headerBackTitle: '',
        headerShown: false,
      }}>
      <Stack.Screen name="YourProfileScreen" component={MyProfile} />
      <Stack.Screen name="YourOrderScreen" component={YourOrders} />
      {/* <Stack.Screen name="YourCoursesScreen" component={YourCourses} />  */}
    </Stack.Navigator>
  );
}
function TabBarIcon({icon, focused}) {
  return (
    <IconF name={icon} style={[styles.icon, focused && styles.selectedTab]} />
  );
}

function TabBarLabel({label, focused}) {
  return <Text style={styles.label}>{i18n.t(label)}</Text>;
}
