/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, TouchableOpacity, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';
import {COLORS, PADDINGS, MARGINS, BORDERS} from '../../../../constants';
import {useDataFetching} from '../../../../hook/useQueryHooks';
import {useEffect} from 'react';
import {setIsLoading} from '../../../../redux/slice/commonSlice';

const COLOR_LIST = [
  '#7ec4cf',
  '#f55c7a',
  '#f57c73',
  '#f68c70',
  '#70d6ff',
  '#ff9770',
  '#ffd670',
  '#55d6c2',
  '#f49097',
  '#f5e960',
];
const HorizontalFilter = ({navigation, path, queryKey, courses}) => {
  const dispatch = useDispatch();
  const {data, isLoading} = useDataFetching(queryKey, path);

  const randomColor = index => {
    // uniqueCategories that can only randomly select one color, if its index is greater than color.length it will return starting from index 0
    return COLOR_LIST[index % COLOR_LIST.length];
  };
  // To get unique category name
  const uniqueCategories = new Set();
  data?.forEach(category => {
    uniqueCategories.add(category?.name);
  });
  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [dispatch, isLoading]);
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <View style={styles.container}>
            {uniqueCategories.size > 0 ? (
              <View style={{flexDirection: 'row'}}>
                {[...uniqueCategories].map((category, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      navigation.jumpTo('Courses');
                    }}
                    style={styles.touchBtn(
                      !courses ? randomColor(index) : 'white',
                    )}>
                    <Text style={{color: COLORS.white}}>{category}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <Text>There are no data to display</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HorizontalFilter;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: MARGINS.xSmall,
    marginVertical: MARGINS.medium,
  },
  touchBtn: backgroundColor => ({
    paddingHorizontal: PADDINGS.xSmall,
    paddingVertical: PADDINGS.xTiny,
    marginHorizontal: MARGINS.xTiny,
    ...BORDERS.middle3,
    backgroundColor: backgroundColor ? backgroundColor : COLORS.white,
  }),
});
