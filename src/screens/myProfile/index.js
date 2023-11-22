// components/myProfile/MyProfile.jsx
import React from 'react';
import i18n from '../../config/translations';
import {useSelector} from 'react-redux';
import styles from './style';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PageHeader from '../../components/common/page_header';

const PROFILE_LIST = [
  {
    label: 'settings.title',
    value: 'SettingsScreen',
    icon: 'settings-outline',
    bgColor: 'green',
  },
  {
    label: 'myOrders.title',
    value: '',
    icon: 'bag-handle-outline',
    bgColor: 'yellow',
  },
];

const MyProfile = ({navigation}) => {
  const {user} = useSelector(state => state.user);
  const {isDarkMode} = useSelector(state => state.common);
  const dynamicStyles = styles({isDarkMode});

  return (
    <>
      <PageHeader
        iconLeft={''}
        iconRight={''}
        title={'profile.title'}
        navigation={navigation}
      />

      <View style={dynamicStyles.container}>
        {!user.token ? (
          <View style={dynamicStyles.needLoginContainer}>
            <Text style={dynamicStyles.needLoginText}>
              {i18n.t('needLogin')}
            </Text>
          </View>
        ) : (
          <>
            {user.token ? (
              <View style={dynamicStyles.wrapper}>
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
                    <Text style={dynamicStyles.userInfoText}>
                      {user.user_email}
                    </Text>
                  </View>
                </View>
                {PROFILE_LIST.map((list, index) => (
                  <View key={'list' + index} style={dynamicStyles.items}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate(list.value)}
                      style={dynamicStyles.profileListBtn}>
                      <View style={dynamicStyles.touchItem}>
                        <Icon
                          name={list.icon}
                          style={dynamicStyles.profileIcon(list.bgColor)}
                        />
                        <Text style={dynamicStyles.profileText}>
                          {i18n.t(list.label)}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ) : null}
          </>
        )}
      </View>
    </>
  );
};

export default MyProfile;
