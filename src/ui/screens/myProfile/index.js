/* eslint-disable prettier/prettier */
// components/myProfile/MyProfile.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PageHeader from '../../components/page_header';
import { useTranslation } from 'react-i18next';
import { setUser } from '../../../redux/slice/userSlice';

const PROFILE_LIST = [
  {
    label: 'settings.title',
    value: 'SettingsScreen',
    icon: 'settings-outline',
  },
  {
    label: 'myOrders.title',
    value: 'MyOrderScreen',
    icon: 'bag-handle-outline',
  },
  {
    label: 'logout',
    value: 'logout',
    icon: 'log-out-outline',
  },
];

const MyProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const { user } = useSelector(state => state.user);
  const { isDarkMode } = useSelector(state => state.common);
  const dynamicStyles = styles({ isDarkMode });

  const handleLogout = () => {
    dispatch(setUser(''));
    navigation.navigate('Home');
  };

  return (
    <View style={dynamicStyles.container}>
      <PageHeader
        iconLeft={''}
        iconRight={''}
        title={'profile.title'}
        navigation={navigation}
      />
      {!user.token && (
        <View style={dynamicStyles.wrapper}>
          <Text
            style={dynamicStyles.textCommon}>
            {t('needLogin')}
          </Text>
        </View>
      )}

      {user.token ? (
        <View >
          <View style={dynamicStyles.userInfoHeader}>
            <Image
              source={{
                uri:
                  user?.avatar_url ||
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjCj43UJiVu-3Qp9b5yj-SwLGR-kndCzqLaiMv5SMkITd4CcbQQ7vX_CEZd-xxqka8ZM&usqp=CAU',
              }}
              style={dynamicStyles.userInfoHeaderImg}
            />
            <View style={dynamicStyles.textWrap}>
              <Text style={dynamicStyles.userInfoText}>
                {user.user_display_name}
              </Text>
              <Text style={dynamicStyles.userInfoText}>
                {user.user_email}
              </Text>
            </View>
          </View>
          {PROFILE_LIST.map((list, index) => (
            <View key={'list' + index} style={dynamicStyles.items}>
              <TouchableOpacity
                onPress={() =>  list.value === 'logout' ? handleLogout() : navigation.navigate(list.value)}
                style={dynamicStyles.profileListBtn}>
                <View style={dynamicStyles.touchItem}>
                  <Icon
                    name={list.icon}
                    style={dynamicStyles.profileIcon}
                  />
                  <Text style={dynamicStyles.profileText}>
                    {t(list.label)}
                  </Text>
                </View>
                <Icon name="chevron-forward-outline" style={dynamicStyles.arrowRight} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : null}

    </View>
  );
};

export default MyProfile;
