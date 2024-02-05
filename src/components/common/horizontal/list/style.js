/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  MODES,
  COLORS,
  PADDINGS,
  MARGINS,
  SIZES,
  FONTS,
  TEXTS,
  BORDERS,
  SHADOWS,
  TEXT,
} from '../../../../constants';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    // Horizontal list
    container: {
      marginVertical: 10,
    },
    title: {
      ...TEXT.text16(isDarkMode),
      marginHorizontal: 16,
    },
    wrapper: {
      position: 'relative',
    },
    touchImg: {
      marginVertical: 10,
      marginLeft: 16,
      width: width * 0.6,
    },

    img: {
      width: width * 0.6,
      height: height * 0.2,
      borderRadius: 4,
      resizeMode: 'contain',
      objectFit: true,
    },

    content: {
      ...TEXT.text14(isDarkMode),
      marginTop: 5,
    },
    heartIconWrapper: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: '#fff',
      padding: 3,
      borderRadius: 4,
    },
  });

export default styles;
