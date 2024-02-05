/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import icons from '../../constants/icons.js';
import styles from './style.js';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slice/userSlice.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { toggleTheme } from '../../redux/slice/commonSlice.js';
import { useTranslation } from 'react-i18next';

const Header = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  const { isDarkMode, isLoading } = useSelector(state => state.common);
  const dynamicStyles = styles({ isDarkMode });

  const handleLogout = () => {
    dispatch(setUser(''));
    navigation.navigate('HomeScreen');
  };

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      {!isLoading && (
        <>
          <View style={dynamicStyles.headerWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}
              style={dynamicStyles.btnContainer}>
              <Text style={dynamicStyles.text}>EDUMOBILE</Text>
            </TouchableOpacity>

            {/* Right side */}
            <View style={dynamicStyles.containerHeader}>
              <TouchableOpacity onPress={handleToggle} style={dynamicStyles.touchBtn}>
                <Icon
                  name={`${isDarkMode ? 'sunny-outline' : 'moon-outline'}`}
                  style={dynamicStyles.icon}
                />
                <Text style={dynamicStyles.darModeText}>
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={dynamicStyles.btnContainer}>
            {!user?.token ? (
              <>
                <TouchableOpacity
                  onPress={() => navigation.navigate('LoginScreen')}>
                  <Text style={dynamicStyles.textContent}>
                    {t('login')}
                  </Text>
                </TouchableOpacity>

                <Text style={dynamicStyles.textContent}> | </Text>

                <TouchableOpacity
                  onPress={() => navigation.navigate('RegisterScreen')}>
                  <Text style={dynamicStyles.textContent}>
                    {t('register')}
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity onPress={handleLogout}>
                <Text style={dynamicStyles.textContent}>
                  {t('logout')}
                </Text>
              </TouchableOpacity>
            )}
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


        </>
      )}
    </>
  );
};

export default Header;
