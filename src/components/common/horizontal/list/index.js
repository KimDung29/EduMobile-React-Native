/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import styles from './style';
import {useSelector} from 'react-redux';
import {View, TouchableOpacity, FlatList, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import { icons} from '../../../../constants';
import {useDataFetching} from '../../../../hook/useQueryHooks';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const HorizontalList = ({navigation, title, queryKey, path}) => {
  const [like, setLike] = useState({});
  const {t} = useTranslation();
  const {isDarkMode, isLoading} = useSelector(state => state.common);
  const dynamicStyles = styles({isDarkMode});

  const {data} = useDataFetching(queryKey, path);

  const toggleLike = index => {
    setLike(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <View style={dynamicStyles.container}>
      {!isLoading && (
        <>
          <Text style={dynamicStyles.title}>{t(title)}</Text>
          <View style={dynamicStyles.wrapper}>
            <FlatList
              data={data}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Courses/:id', {id: item?.id})}
                  style={dynamicStyles.touchImg}>
                  <FastImage
                    style={dynamicStyles.img}
                    source={{
                      uri: item?.image ? item?.image : icons.user,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => toggleLike(index)}
                    style={dynamicStyles.heartIconWrapper}>
                    <Icon
                      name={like[index] ? 'heart' : 'heart-outline'}
                      size={19}
                    />
                  </TouchableOpacity>
                  <Text style={dynamicStyles.content}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.name}
              contentContainerStyle={{columnGap: 10}}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </View>
        </>
      )}
    </View>
  );
};

export default HorizontalList;
