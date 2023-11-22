/* eslint-disable react/react-in-jsx-scope */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import {SIZES, icons} from '../../../../constants';
import FastImage from 'react-native-fast-image';
import SocialMediaLink from '../../social_media_link';
import i18n from '../../../../config/translations';
import {useDataFetching} from '../../../../hook/useQueryHooks';
import {useEffect} from 'react';
import {setIsLoading} from '../../../../redux/slice/commonSlice';

const HorizontalInstructor = ({navigation, path, queryKey, title}) => {
  const dispatch = useDispatch();
  const {isDarkMode} = useSelector(state => state.common);

  const {data, isLoading} = useDataFetching(queryKey, path);
  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [dispatch, isLoading]);

  const dynamicStyles = styles({isDarkMode});
  return (
    <>
      <Text style={dynamicStyles.xMediumHeader}>{i18n.t(title)}</Text>
      <View style={dynamicStyles.container}>
        <FlatList
          data={data}
          renderItem={({item}) =>
            item?.avatar_url &&
            item?.first_name &&
            item?.last_name &&
            item?.instructor_data?.total_courses &&
            item?.instructor_data?.total_users ? (
              <TouchableOpacity
                onPress={() => navigation.jumpTo('Courses')}
                style={dynamicStyles.touchContainer}>
                <View style={''}>
                  {item?.avatar_url ? (
                    <FastImage
                      style={[dynamicStyles.fastImage]}
                      source={{
                        uri: item?.avatar_url,
                      }}
                    />
                  ) : (
                    <Image
                      source={icons.user}
                      style={[dynamicStyles.fastImage]}
                    />
                  )}
                </View>
                <View style={dynamicStyles.textContainer}>
                  <Text style={dynamicStyles.textName}>
                    {item?.first_name + ' ' + item?.last_name}
                  </Text>
                  <View style={dynamicStyles.textWrapper}>
                    <Text style={dynamicStyles.text}>
                      {i18n.t('instructorScreen.countCourse', {
                        count: item?.instructor_data?.total_courses || 0,
                      })}
                    </Text>
                    <Text style={dynamicStyles.text} />
                    <Text style={dynamicStyles.text}>
                      {i18n.t('instructorScreen.countStudent', {
                        count: item?.instructor_data?.total_users || 0,
                      })}
                    </Text>
                  </View>
                  {/* Social */}
                  <View style={dynamicStyles.linkIcon}>
                    <SocialMediaLink withoutMode={false} data={item?.social} />
                  </View>
                </View>
              </TouchableOpacity>
            ) : null
          }
          keyExtractor={item => item.name}
          contentContainerStyle={{columnGap: SIZES.small}}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    </>
  );
};

export default HorizontalInstructor;
