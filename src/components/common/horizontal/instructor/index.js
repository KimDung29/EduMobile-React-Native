/* eslint-disable prettier/prettier */
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
import { useTranslation } from 'react-i18next';

const Instructor = ({navigation, title, queryKey, path}) => {
  const {t} = useTranslation();
  const {isDarkMode, isLoading} = useSelector(state => state.common);
  const dynamicStyles = styles({isDarkMode});

  const {data } = useDataFetching(queryKey, path);

  return (
    <View style={dynamicStyles.container}>
     {!isLoading && (
      <>
        <Text style={dynamicStyles.title}>{t(title)}</Text>
        <View style={dynamicStyles.wrapper}>
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
     )}
    </View>
  );
};

export default Instructor;
