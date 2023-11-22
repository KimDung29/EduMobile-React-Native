/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image';

import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import {COLORS, MODES, icons} from '../../constants';

import Client from '../../api/client';
import {useDataFetching} from '../../hook/useQueryHooks';
import i18n from '../../config/translations';
import Icon from 'react-native-vector-icons/Ionicons';
import {useEffect, useState} from 'react';
import {setIsLoading} from '../../redux/slice/commonSlice';
import PageHeader from '../../components/common/page_header';
import RenderDataHTML from '../../components/common/render_data_html/RenderDataHTML';
import ShowListItems from '../../components/common/show_list_items/ShowListItems';
import SocialMediaLink from '../../components/common/social_media_link';

const SingleCourse = ({navigation, route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const {isDarkMode} = useSelector(state => state.common);
  // i18n.changeLanguage(lang);
  const {data, isLoading} = useDataFetching(['courses', id], Client.course, id);

  const {data: users} = useDataFetching('instructors', Client.instructors);

  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [dispatch, isLoading]);

  const onLike = () => {
    setLiked(!liked);
  };

  const instructor = users.filter(user => data?.instructor?.id === user?.id);

  const dynamicStyles = styles({isDarkMode});
  return (
    <>
      <PageHeader
        iconLeft={'goback'}
        iconRight={''}
        title={'singleCourse.title'}
        navigation={navigation}
      />

      <ScrollView style={dynamicStyles.container}>
        <View>
          <FastImage
            style={dynamicStyles.img}
            source={{
              uri: data?.image !== null ? data?.image : icons.user,
            }}
          />
          <Text style={dynamicStyles.imgTitle}>{data?.name}</Text>
          <TouchableOpacity onPress={onLike} style={dynamicStyles.touchHeart}>
            <Icon name={liked ? 'heart' : 'heart-outline'} size={20} />
          </TouchableOpacity>
        </View>
        <View style={dynamicStyles.contentContainer}>
          <View style={dynamicStyles.titleContainer}>
            <View style={dynamicStyles.titleWrapper}>
              <View style={dynamicStyles.titleWrapper}>
                <Icon
                  name="time-outline"
                  size={20}
                  style={{color: COLORS.yellow}}
                />
                <Text style={dynamicStyles.content}>{data?.duration}</Text>
              </View>
              <View style={dynamicStyles.titleWrapper}>
                <Icon
                  name="people-outline"
                  size={20}
                  style={{color: COLORS.yellow}}
                />
                <Text style={dynamicStyles.content}>
                  {data?.count_students}
                </Text>
              </View>
            </View>
            <Text style={[dynamicStyles.content, dynamicStyles.price]}>
              {data?.price_rendered}
            </Text>
          </View>

          <Text style={dynamicStyles.title}>
            {i18n.t('singleCourse.overview')}
          </Text>

          <RenderDataHTML
            style={{color: !isDarkMode ? MODES.white : MODES.black}}
            html={data?.content}
          />
          {/* Curriculum */}
          <ShowListItems
            data={data?.sections}
            title={'singleCourse.curriculum'}
            length={'length'}
          />
          {/* Instructor */}
          {instructor.length === 0 && <Text>No data</Text>}
          {instructor.length > 0 && (
            <View style={dynamicStyles.instructorWrapper}>
              <Text style={dynamicStyles.title}>
                {i18n.t('singleCourse.instructor')}
              </Text>
              <View style={dynamicStyles.instructorContainer}>
                <Image
                  style={dynamicStyles.instructorIcon}
                  source={
                    instructor[0].avatar_url !== ''
                      ? instructor[0]?.avatar_url
                      : icons.user
                  }
                />
                <Text style={dynamicStyles.instructorTextName}>
                  {instructor[0]?.name || 'Anonymous'}
                </Text>
                {/* Social Media Link */}
                <SocialMediaLink
                  withoutMode={'display'}
                  data={instructor[0]?.social}
                />
                <Text style={dynamicStyles.content}>
                  {instructor[0]?.description}
                </Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={dynamicStyles.startWrapper}>
        <TouchableOpacity>
          <Text style={dynamicStyles.start}>
            {i18n.t('singleCourse.btnStartNow')}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SingleCourse;
