/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { icons } from '../../constants';
import styles from './style';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';
import Client from '../../api/client';
import { useDataFetching } from '../../hook/useQueryHooks';
import Icon from 'react-native-vector-icons/Ionicons';
import PageHeader from '../../components/common/page_header';
import { useTranslation } from 'react-i18next';
import { setIsLoadMore } from '../../redux/slice/commonSlice';
import { randomColor } from '../../components/util/util';

const Courses = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [filterId, setFilterId] = useState(route?.params?.id || '');
  const [like, setLike] = useState({});
  const dispatch = useDispatch();
  const [dataCourse, setDataCourse] = useState([]);
  const [dataCate, setDataCate] = useState([]);
  const cate = 'category courses';
  const [allList, setAllList] = useState(false);

  const { isDarkMode, isLoading, isLoadMore, lastPage } = useSelector(state => state.common);
  const dynamicStyles = styles({ isDarkMode });

  const [page, setPage] = useState(1);
  const perPage = 5;

  const courseParams = {
    page: page,
    per_page: perPage,
    category: filterId === "all" ? '' : filterId,
  };
  const { data, refetch } = useDataFetching('courses', Client.courses, courseParams);

  const cateParams = {};
  const { data: categoryData } = useDataFetching('categories', Client.categoryFilter, cateParams, cate);


  useEffect(() => {
    setDataCourse(data);
    setDataCate(categoryData);
    setAllList(!filterId || filterId === 'all' ? true : false);

  }, [categoryData, data, filterId]);

  useEffect(() => {
    let timer;

    if (!lastPage && isLoadMore) {
      setPage(prevPage => prevPage + 1);
      timer = setTimeout(() => {
        refetch();
      }, 500);
    }
    if (lastPage && isLoadMore) {
      dispatch(setIsLoadMore(false));
    }
    return () => {
      clearTimeout(timer);
    };
  }, [lastPage, isLoadMore, refetch, dispatch]);


  useEffect(() => {
    setPage(1);
    courseParams.page = 1;
    refetch();
  }, [filterId]);

  const onScroll = ({ nativeEvent }) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 50;

    if (isCloseToBottom && !isLoading && !isLoadMore) {
      dispatch(setIsLoadMore(true));
    }
  };

  const toggleLike = index => {
    setLike(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const renderCate = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setFilterId(item.id);
          setAllList(false);
        }}
        style={[
          allList && item.id === 'all' ? dynamicStyles.selected :
            !allList && filterId !== 'all' &&
              filterId === item.id ? dynamicStyles.selected :
              dynamicStyles.normal(randomColor(index)),
          dynamicStyles.touchBtn
        ]}>
        <Text style={{ color: '#fff' }}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={dynamicStyles.container}>
      {!isLoading && (
        <>
          <PageHeader
            iconLeft={''}
            iconRight={icons.search}
            title={'courses.title'}
            navigation={navigation}
          />
          <View >
            <FlatList
              data={dataCate}
              renderItem={({ item, index }) => renderCate(item, index)}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 10, marginLeft: 8 }}
            />
            <ScrollView
              contentContainerStyle={{ paddingBottom: 220 }}
              showsVerticalScrollIndicator={false}
              automaticallyAdjustContentInsets={true}
              onScroll={onScroll}
              scrollEventThrottle={16}
            >
              {dataCourse &&
                dataCourse.length > 0 &&
                dataCourse.map((item, index) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Courses/:id', { id: item?.id })
                    }
                    key={index}
                    style={dynamicStyles.coursesWrapper}>
                    <View style={dynamicStyles.coursesImageContainer}>
                      <FastImage
                        style={dynamicStyles.coursesImage}
                        source={{
                          uri: item.image,
                        }}
                      />
                      <View style={dynamicStyles.cateWrap}>
                        {item?.categories.length > 0 && (
                          <Text style={dynamicStyles.cateText}>
                            {item.categories
                              .map(category => category.name)[0]}
                          </Text>
                        )}
                      </View>
                      <TouchableOpacity
                        onPress={() => toggleLike(index)}
                        style={dynamicStyles.heartIconWrapper}>
                        <Icon
                          name={like[index] ? 'heart' : 'heart-outline'}
                          size={18}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={dynamicStyles.coursesContent}>
                      <Text style={dynamicStyles.courseName}>{item.name}</Text>
                      <View style={dynamicStyles.coursesRow}>
                        <Icon
                          name="time-outline"
                          size={18}
                          style={{ color: 'yellow' }}
                        />
                        <Text style={dynamicStyles.durationWrapper}>
                          <Text style={dynamicStyles.duration}>
                            {t('durations')}
                          </Text>
                          {item.duration}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              <View style={styles.loading}>
                {isLoadMore && <ActivityIndicator size="large" color={`${isDarkMode ? 'white' : 'black'}`} />}
              </View>
            </ScrollView>
          </View>
        </>
      )}
    </View>
  );
};

export default Courses;
