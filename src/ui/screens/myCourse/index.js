/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import PageHeader from '../../components/page_header';
import styles from './style';
import { useTranslation } from 'react-i18next';

const MyCourse = ({navigation}) => {
  const {t} = useTranslation();
  const {user} = useSelector(state => state.user);
  const {isDarkMode} = useSelector(state => state.common);

  const dynamicStyles = styles({isDarkMode});
  return (
    <View style={dynamicStyles.container}>
      <PageHeader
        iconLeft={''}
        iconRight={''}
        title={'myCourse.title'}
        navigation={navigation}
      />
      <View
        style={dynamicStyles.wrapper}>
        <View>
          {!user.token ? (
            <Text
              style={dynamicStyles.textCommon}>
              {t('needLogin')}
            </Text>
          ) : (
            <Text
              style={dynamicStyles.textCommon}>
              My Course
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default MyCourse;
