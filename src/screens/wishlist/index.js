/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import i18n from '../../config/translations';
import PageHeader from '../../components/common/page_header';
import styles from './style';

const Wishlist = ({navigation}) => {
  const {user} = useSelector(state => state.user);
  const {isDarkMode} = useSelector(state => state.common);

  const dynamicStyles = styles({isDarkMode});
  return (
    <View style={dynamicStyles.container}>
      <PageHeader
        iconLeft={''}
        iconRight={''}
        title={'wishlist.title'}
        navigation={navigation}
      />
      <View
        style={dynamicStyles.wrapper}>
        <View>
          {!user.token ? (
            <Text
              style={dynamicStyles.textCommon}>
              {i18n.t('needLogin')}
            </Text>
          ) : (
            <Text
              style={dynamicStyles.textCommon}>
              Wishlist
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default Wishlist;
