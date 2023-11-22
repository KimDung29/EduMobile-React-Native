/* eslint-disable react/react-in-jsx-scope */
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {View, TouchableOpacity, FlatList, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SIZES, icons} from '../../../../constants';
import i18n from '../../../../config/translations';
import {useDataFetching} from '../../../../hook/useQueryHooks';
import Icon from 'react-native-vector-icons/Ionicons';
import {useEffect, useState} from 'react';
import {setIsLoading} from '../../../../redux/slice/commonSlice';

const ListImage = ({navigation, title, queryKey, path}) => {
  const dispatch = useDispatch();
  const {isDarkMode} = useSelector(state => state.common);
  const [like, setLike] = useState({});

  const {data, isLoading} = useDataFetching(queryKey, path);

  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [dispatch, isLoading]);

  const toggleLike = index => {
    setLike(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const dynamicStyles = styles({isDarkMode});
  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.xMediumHeader}>{i18n.t(title)}</Text>
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
          contentContainerStyle={{columnGap: SIZES.small}}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    </View>
  );
};

export default ListImage;
