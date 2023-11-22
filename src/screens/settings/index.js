// components/myProfile/MyProfile.jsx
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import i18n from '../../config/translations';
import {useSelector} from 'react-redux';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import PageHeader from '../../components/common/page_header';

const SETTING_LIST = [
  {label: 'settings.general', value: 'GeneralScreen'},
  {label: 'settings.password', value: 'PasswordScreen'},
  {label: 'settings.deleteAccount', value: 'DeleteAccountScreen'},
  {label: 'settings.language', value: 'LanguageScreen'},
];

const Settings = ({navigation}) => {
  const {isDarkMode, language} = useSelector(state => state.common);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const handleTouch = path => {
    navigation.navigate(path);
  };
  const dynamicStyles = styles({isDarkMode});
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
          <TouchableOpacity
            key={'list' + index}
            onPress={() => handleTouch(list.value)}
            style={dynamicStyles.items}>
            <View style={dynamicStyles.content}>
              <Text style={dynamicStyles.text}>{i18n.t(list.label)}</Text>

              <Icon
                name="chevron-forward-outline"
                style={dynamicStyles.chevronIcon}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Settings;
