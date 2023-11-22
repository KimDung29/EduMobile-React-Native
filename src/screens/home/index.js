/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {MODES, PADDINGS} from '../../constants';
import Client from '../../api/client';
import Filter from '../../components/common/horizontal/filter';
import ListImage from '../../components/common/horizontal/image';
import Instructor from '../../components/common/horizontal/instructor';
import Header from './Header';

const Home = ({navigation}) => {
  const {isDarkMode} = useSelector(state => state.common);

  const dynamicStyles = styles({isDarkMode});

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: !isDarkMode ? MODES.black : MODES.white,
          paddingBottom: PADDINGS.medium,
        },
      ]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={dynamicStyles.homeWrapper}>
        <Header navigation={navigation} />

        <Filter
          queryKey={'category_filter'}
          path={Client.categoryFilter}
          navigation={navigation}
        />

        <ListImage
          queryKey={'popularCourses'}
          path={Client.popularCourses}
          navigation={navigation}
          title={'home.popular'}
        />
        <ListImage
          queryKey={'newCourses'}
          path={Client.newCourses}
          navigation={navigation}
          title={'home.new'}
        />
        <Instructor
          queryKey={'instructors'}
          path={Client.instructors}
          navigation={navigation}
          title={'instructorScreen.title'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
