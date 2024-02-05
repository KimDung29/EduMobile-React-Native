/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {useSelector} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import i18n from '../../../config/translations';
import Icon from 'react-native-vector-icons/Ionicons';

const PageHeader = ({navigation, iconLeft, title, iconRight}) => {
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
        <Text style={dynamicStyles.title}>{i18n.t(title)}</Text>
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
