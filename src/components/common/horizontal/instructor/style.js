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
    xMediumHeader: {
      ...TEXTS.xMediumHeader(isDarkMode),
      marginHorizontal: MARGINS.medium,
    },
    container: {
      marginVertical: MARGINS.medium,
    },
    touchContainer: {
      padding: PADDINGS.xTiny,
      marginHorizontal: MARGINS.small,
      ...BORDERS.middle,
      ...SHADOWS.medium,
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: MODES.white,
      width: width * 0.62,
    },
    fastImage: {
      width: 60,
      height: 60,
      borderRadius: 50,
      resizeMode: 'contain',
      objectFit: true,
    },
    textContainer: {
      paddingLeft: PADDINGS.small,
    },
    textName: {
      paddingHorizontal: PADDINGS.tiny,
      ...TEXTS.mediumHeader(isDarkMode),
    },
    horizontalTextHeader: {
      ...TEXTS.xMediumHeader,
      textAlign: 'left',
      color: !isDarkMode ? COLORS.black : COLORS.white,
    },
    textWrapper: {
      flexDirection: 'row',
      paddingTop: PADDINGS.tiny,
    },
    text: {
      color: COLORS.black,
      paddingHorizontal: PADDINGS.tiny,
    },
    linkIcon: {
      justifyContent: 'flex-start',
      paddingTop: PADDINGS.tiny,
    },
  });

export default styles;
