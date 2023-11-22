/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {MODES, PADDINGS} from '../../constants';
import Client from '../../api/client';
import HomeHeader from './HomeHeader';
import HorizontalFilter from '../../components/common/horizontal/filter';
import HorizontalListImage from '../../components/common/horizontal/image';
import HorizontalInstructor from '../../components/common/horizontal/instructor';

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
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={dynamicStyles.homeWrapper}>
          <HomeHeader navigation={navigation} />

          <HorizontalFilter
            queryKey={'category_filter'}
            path={Client.categoryFilter}
            navigation={navigation}
          />

          <HorizontalListImage
            queryKey={'popularCourses'}
            path={Client.popularCourses}
            navigation={navigation}
            title={'home.popular'}
          />
          <HorizontalListImage
            queryKey={'newCourses'}
            path={Client.newCourses}
            navigation={navigation}
            title={'home.new'}
          />
          <HorizontalInstructor
            queryKey={'instructors'}
            path={Client.instructors}
            navigation={navigation}
            title={'instructorScreen.title'}
          />
        </ScrollView>
      </>
    </SafeAreaView>
  );
};
export default Home;
