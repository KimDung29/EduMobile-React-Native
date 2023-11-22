import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, View, ScrollView} from 'react-native';
import {COLORS, icons} from '../../constants';
import styles from './style';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import Client from '../../api/client';
import {useDataFetching} from '../../hook/useQueryHooks';
import Icon from 'react-native-vector-icons/Ionicons';
import i18n from '../../config/translations';
import {setIsLoading} from '../../redux/slice/commonSlice';
import PageHeader from '../../components/common/page_header';
import HorizontalFilter from '../../components/common/horizontal/filter';

const Courses = ({navigation}) => {
  const dispatch = useDispatch();
  const {isDarkMode} = useSelector(state => state.common);
  const {data, isLoading} = useDataFetching('courses', Client.courses);

  const [like, setLike] = useState({});

  const toggleLike = index => {
    setLike(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [dispatch, isLoading]);

  const dynamicStyles = styles({isDarkMode});
  return (
    <>
      <PageHeader
        iconLeft={''}
        iconRight={icons.search}
        title={'courses.title'}
        navigation={navigation}
      />
      <View style={dynamicStyles.container}>
        <HorizontalFilter
          queryKey={'category_filter'}
          path={Client.categoryFilter}
          navigation={navigation}
        />
        <ScrollView>
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Courses/:id', {id: item?.id})
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
                </View>
                <TouchableOpacity
                  onPress={() => toggleLike(index)}
                  style={dynamicStyles.heartIconWrapper}>
                  <Icon
                    name={like[index] ? 'heart' : 'heart-outline'}
                    size={18}
                  />
                </TouchableOpacity>
                <View style={dynamicStyles.coursesContent}>
                  <View style={dynamicStyles.coursesRow}>
                    {item?.categories.length > 0 && (
                      <Text style={dynamicStyles.xMediumHeader}>
                        {item.categories
                          .map(category => category.name)
                          .join(', ')}
                      </Text>
                    )}
                  </View>
                  <Text style={dynamicStyles.boldContent}>{item.name}</Text>
                  <View style={dynamicStyles.coursesRow}>
                    <Icon
                      name="time-outline"
                      size={18}
                      style={{color: COLORS.yellow}}
                    />
                    <Text style={dynamicStyles.durationWrapper}>
                      <Text style={dynamicStyles.duration}>
                        {i18n.t('durations')}
                      </Text>
                      {item.duration}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Courses;
