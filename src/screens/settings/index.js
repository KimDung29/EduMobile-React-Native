/* eslint-disable prettier/prettier */
// components/myProfile/MyProfile.jsx
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import i18n from '../../config/translations';
import { useSelector } from 'react-redux';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import PageHeader from '../../components/common/page_header';

const SETTING_LIST = [
  { label: 'settings.general', value: 'GeneralScreen', icon: 'aperture-outline' },
  { label: 'settings.password', value: 'PasswordScreen', icon: 'key-outline' },
  { label: 'settings.language', value: 'LanguageScreen', icon: 'language-outline' },
  { label: 'settings.deleteAccount', value: 'DeleteAccountScreen', icon: 'trash-outline' },
];

const Settings = ({ navigation }) => {
  const { isDarkMode, language } = useSelector(state => state.common);

  // useEffect(() => {
  //   i18n.changeLanguage(language);
  // }, [language]);

  const handleTouch = path => {
    navigation.navigate(path);
  };

  const dynamicStyles = styles({ isDarkMode });
  return (
    <View style={dynamicStyles.container}>
      <PageHeader
        iconLeft={'goBack'}
        iconRight={''}
        title={'settings.title'}
        navigation={navigation}
      />
      <View>
        {SETTING_LIST.map((list, index) => (
          <View key={'list' + index} style={dynamicStyles.items}>
            <TouchableOpacity
              onPress={() =>  handleTouch(list.value)}
              style={dynamicStyles.profileListBtn}>
              <View style={dynamicStyles.touchItem}>
                <Icon
                  name={list.icon}
                  style={dynamicStyles.profileIcon}
                />
                <Text style={dynamicStyles.profileText}>
                  {i18n.t(list.label)}
                </Text>
              </View>
              <Icon name="chevron-forward-outline" style={dynamicStyles.arrowRight} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Settings;
