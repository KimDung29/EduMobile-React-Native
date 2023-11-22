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
} from '../../../../constants';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    // Horizontal list
    container: {
      marginVertical: MARGINS.xSmall,
    },
    wrapper: {
      position: 'relative',
    },
    xMediumHeader: {
      ...TEXTS.xMediumHeader(isDarkMode),
      marginHorizontal: MARGINS.medium,
    },
    touchImg: {
      marginVertical: MARGINS.medium,
      marginLeft: MARGINS.medium,
      width: width * 0.6,
    },

    img: {
      width: width * 0.6,
      height: height * 0.2,
      borderRadius: SIZES.xTiny,
      resizeMode: 'contain',
      objectFit: true,
    },

    content: {
      ...TEXTS.mediumContent(isDarkMode),
      marginTop: MARGINS.xTiny,
    },
    heartIconWrapper: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: COLORS.gray2,
      padding: PADDINGS.tiny,
      borderRadius: SIZES.xTiny,
    },
  });

export default styles;
