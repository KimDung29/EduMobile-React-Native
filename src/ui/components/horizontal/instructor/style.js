/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  TEXT,
  SHADOWS,
  BORDER,
} from '../../../../constants';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {},
    title: {
      ...TEXT.text16(isDarkMode),
      marginHorizontal: 16,
    },
    wrapper: {
      marginVertical: 16,
      marginLeft: 16,
    },
    touchContainer: {
      ...BORDER.ra50_w1(isDarkMode),
      ...SHADOWS.medium,
      backgroundColor: '#fff',
    },
    fastImage: {
      width: 60,
      height: 60,
      borderRadius: 50,
      resizeMode: 'contain',
      objectFit: true,
    },
  });

export default styles;
