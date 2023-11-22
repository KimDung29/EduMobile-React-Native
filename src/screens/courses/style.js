import {StyleSheet} from 'react-native';
import {MODES, COLORS, PADDINGS, MARGINS, SIZES, TEXTS} from '../../constants';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      backgroundColor: !isDarkMode ? MODES.black : MODES.white,
    },
    coursesWrapper: {
      // padding: PADDINGS.xLarge,
      margin: MARGINS.medium,
    },
    coursesImageContainer: {
      position: 'relative',
    },
    coursesContent: {
      paddingTop: PADDINGS.medium,
    },
    coursesRow: {
      flexDirection: 'row',
    },
    courseClock: {
      width: width * 0.036,
      height: height * 0.022,
      tintColor: COLORS.yellow,
    },
    coursesImage: {
      width: width * 0.92,
      height: height * 0.3,
      borderRadius: SIZES.xTiny,
      resizeMode: 'cover',
    },
    coursesText: {
      ...TEXTS.mediumContent(isDarkMode),
      paddingVertical: PADDINGS.tiny / 1.5,
    },
    duration: {
      fontWeight: '700',
    },
    durationWrapper: {
      ...TEXTS.smallContent(isDarkMode),
      marginLeft: MARGINS.tiny,
    },
    heartIconWrapper: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: COLORS.gray2,
      padding: PADDINGS.tiny,
      borderRadius: SIZES.small,
    },
    xMediumHeader: {
      ...TEXTS.xMediumHeader(isDarkMode),
    },
    boldContent: {
      paddingVertical: PADDINGS.tiny,
      ...TEXTS.boldContent(isDarkMode),
    },
  });

export default styles;
