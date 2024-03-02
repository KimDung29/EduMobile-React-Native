/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

const PageHeader = ({navigation, iconLeft, title, iconRight}) => {
  const {t} = useTranslation()
  const {isDarkMode} = useSelector(state => state.common);

  const dynamicStyles = styles({isDarkMode});
  return (
    <View style={dynamicStyles.container}>
      <View>
        {iconLeft ? (
          <>
            <TouchableOpacity
              style={dynamicStyles.backIcon}
              onPress={() => navigation.goBack()}>
              <Icon name="arrow-back-outline" style={dynamicStyles.icon} />
            </TouchableOpacity>
          </>
        ) : (
          <Text />
        )}
      </View>
      <View>
        <Text style={dynamicStyles.title}>{t(title)}</Text>
      </View>
      <View>
        {iconRight ? (
          <TouchableOpacity
            onPress={() => {}}
            style={dynamicStyles.iconWrapper}>
            <Icon
              name="search-outline"
              style={dynamicStyles.icon}
              isDarkMode={isDarkMode}
            />
          </TouchableOpacity>
        ) : (
          <Text />
        )}
      </View>
    </View>
  );
};

export default PageHeader;
