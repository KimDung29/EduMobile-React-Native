/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import {MODES} from '../../constants';
import i18n from '../../config/translations';
import PageHeader from '../../components/common/page_header';

const Wishlist = ({navigation}) => {
  const {user} = useSelector(state => state.user);
  const {isDarkMode} = useSelector(state => state.common);

  return (
    <>
      <PageHeader
        iconLeft={''}
        iconRight={''}
        title={'wishlist.title'}
        navigation={navigation}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: !isDarkMode ? MODES.black : MODES.white,
        }}>
        <View>
          {!user.token ? (
            <Text
              style={{
                color: !isDarkMode ? MODES.white : MODES.black,
              }}>
              {i18n.t('needLogin')}
            </Text>
          ) : (
            <Text
              style={{
                color: !isDarkMode ? MODES.white : MODES.black,
              }}>
              My Course
            </Text>
          )}
        </View>
      </View>
    </>
  );
};

export default Wishlist;
