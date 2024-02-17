/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useEffect, useState } from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import Client from '../../api/client';
import Instructor from '../../components/common/horizontal/instructor';
import Icon from 'react-native-vector-icons/Ionicons';
import { bgColor } from '../../constants/theme';
import HorizontalList from '../../components/common/horizontal/list';
import { View, Image, TouchableOpacity, Text, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { setUser } from '../../redux/slice/userSlice';
import { toggleTheme } from '../../redux/slice/commonSlice';
import { useDataFetching } from '../../hook/useQueryHooks';
import { randomColor } from '../../components/util/util';

const Home = ({navigation}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const [dataCategory, setDataCategory] = useState([]);

  const { isDarkMode, isLoading } = useSelector(state => state.common);
  const dynamicStyles = styles({ isDarkMode });

  const handleLogout = () => {
    dispatch(setUser(''));
    navigation.navigate('HomeScreen');
  };

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  const { data: categoryData } = useDataFetching('categorie-home', Client.categoryFilter);

  useEffect(() => {
    setDataCategory(categoryData);
  } , [categoryData]);

  const goTo = (id) => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Courses',
          params: {id: id},
        }
      ],
    });
  };
  const renderCategory = (item, index) => {
    return (
      <>
       {!isLoading && !item ? <Text>No data</Text> : (
         <TouchableOpacity
         onPress={() => {
           goTo(item.id);
         }}
         style={dynamicStyles.cateBtn(randomColor(index))}>
         <Text style={{color: '#fff'}}>{item?.name}</Text>
       </TouchableOpacity>
       )}
      </>
    );
  };
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: bgColor(isDarkMode),
          paddingBottom: 16,
        },
      ]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}
        style={dynamicStyles.homeWrapper}>

      {!isLoading && (
        <>
          <View style={dynamicStyles.headerWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}
              style={dynamicStyles.btnContainer}>
              <Text style={dynamicStyles.text}>EDUMOBILE</Text>
            </TouchableOpacity>

            {/* Right side */}
            <View style={dynamicStyles.containerHeader}>
              <TouchableOpacity onPress={handleToggle} style={dynamicStyles.touchBtn}>
                <Icon
                  name={`${isDarkMode ? 'sunny-outline' : 'moon-outline'}`}
                  style={dynamicStyles.icon}
                />
                <Text style={dynamicStyles.darModeText}>
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={dynamicStyles.btnContainer}>
            {!user?.token ? (
              <>
                <TouchableOpacity
                  onPress={() => navigation.navigate('LoginScreen')}>
                  <Text style={dynamicStyles.textContent}>
                    {t('login')}
                  </Text>
                </TouchableOpacity>

                <Text style={dynamicStyles.textContent}> | </Text>

                <TouchableOpacity
                  onPress={() => navigation.navigate('RegisterScreen')}>
                  <Text style={dynamicStyles.textContent}>
                    {t('register')}
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
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
                <Text style={dynamicStyles.userInfoText}>{user.user_email}</Text>
              </View>
            </View>
            )}
          </View>

        <FlatList
          data={dataCategory}
          renderItem={({item, index}) => renderCategory(item, index)}
          keyExtractor={item => item?.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginLeft: 8}}
          />
        </>
      )}

        <HorizontalList
          queryKey={'popularCourses'}
          path={Client.popularCourses}
          navigation={navigation}
          title={'home.popular'}
        />
        <HorizontalList
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
