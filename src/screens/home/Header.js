import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import icons from '../../constants/icons.js';
import styles from './style.js';
import {useDispatch, useSelector} from 'react-redux';
import i18n from '../../config/translations/index.js';
import {setUser} from '../../redux/slice/userSlice.js';
import Icon from 'react-native-vector-icons/Ionicons';
import {toggleTheme} from '../../redux/slice/commonSlice.js';

const Header = ({navigation}) => {
  const dispatch = useDispatch();
  const {isDarkMode} = useSelector(state => state.common);
  const {user} = useSelector(state => state.user);

  const dynamicStyles = styles({isDarkMode});
  const handleLogout = () => {
    dispatch(setUser(''));
    navigation.navigate('HomeScreen');
  };
  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  // console.log('user: ', user);
  return (
    <>
      <View style={dynamicStyles.headerWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={dynamicStyles.btnContainer}>
          {icons.graduation && (
            <Image
              source={icons.graduation}
              style={dynamicStyles.btnImage(50)}
            />
          )}
          <Text style={dynamicStyles.text}>EDU</Text>
        </TouchableOpacity>

        {/* Right side */}
        <View style={dynamicStyles.btnContainer}>
          {!user?.token ? (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={dynamicStyles.xMediumHeader}>
                  {' '}
                  {i18n.t('login')}
                </Text>
              </TouchableOpacity>

              <Text style={dynamicStyles.xMediumHeader}> | </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={dynamicStyles.xMediumHeader}>
                  {i18n.t('register')}
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity onPress={handleLogout}>
              <Text style={dynamicStyles.xMediumHeader}>
                {i18n.t('logout')}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {user.token ? (
        <View style={dynamicStyles.userInfoHeader}>
          <Image
            source={{
              uri:
                user?.avatar_url ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjCj43UJiVu-3Qp9b5yj-SwLGR-kndCzqLaiMv5SMkITd4CcbQQ7vX_CEZd-xxqka8ZM&usqp=CAU',
            }}
            style={dynamicStyles.userInfoHeaderImg}
          />
          <View>
            <Text style={dynamicStyles.userInfoText}>
              {user.user_display_name}
            </Text>
            <Text style={dynamicStyles.userInfoText}>{user.user_email}</Text>
          </View>
        </View>
      ) : null}

      <View style={dynamicStyles.container}>
        <Text style={dynamicStyles.title}>{i18n.t('home.category')}</Text>
        <Text />
        <TouchableOpacity onPress={handleToggle} style={dynamicStyles.touchBtn}>
          <Icon
            name={`${isDarkMode ? 'moon-outline' : 'sunny-outline'}`}
            style={dynamicStyles.icon}
          />
          <Text style={dynamicStyles.darModeText}>
            {!isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;
