import {StyleSheet} from 'react-native';
import {COLORS, PADDINGS, MARGINS, TEXTS, SIZES, MODES} from '../../constants';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      backgroundColor: !isDarkMode ? MODES.black : MODES.white,
    },
    img: {
      width: width,
      height: height * 0.32,
      resizeMode: 'cover',
    },
    imgTitle: {
      ...TEXTS.boldText,
      color: COLORS.white,
      position: 'absolute',
      left: 20,
      bottom: 20,
    },
    touchHeart: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: COLORS.gray2,
      padding: PADDINGS.tiny,
      borderRadius: SIZES.tiny,
    },
    title: {
      ...TEXTS.xMediumHeader(isDarkMode),
    },
    content: {
      ...TEXTS.smallContent(isDarkMode),
      paddingLeft: PADDINGS.small,
    },
    price: {
      textTransform: 'uppercase',
    },
    //  Single course content
    contentContainer: {
      padding: PADDINGS.xxMedium,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: MARGINS.small,
      paddingRight: PADDINGS.small,
    },

    // Instruction
    instructorWrapper: {
      paddingVertical: PADDINGS.xLarge,
    },
    instructorContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: MARGINS.small,
    },
    instructorIcon: {
      width: width * 0.05,
      height: height * 0.03,
      tintColor: !isDarkMode ? MODES.white : MODES.black,
    },
    instructorTextName: {
      paddingVertical: PADDINGS.tiny,
      textTransform: 'capitalize',
      ...TEXTS.mediumContent(isDarkMode),
    },
    // START NOW
    startWrapper: {
      padding: PADDINGS.xSmall,
      backgroundColor: COLORS.gray2,
    },
    start: {
      color: COLORS.white,
      ...TEXTS.mediumHeader,
      textAlign: 'center',
      padding: PADDINGS.small,
      backgroundColor: COLORS.black,
      borderRadius: SIZES.small,
    },
  });

export default styles;
