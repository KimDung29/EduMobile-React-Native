import {StyleSheet} from 'react-native';
import {MODES, PADDINGS, MARGINS, SIZES, TEXTS, BORDERS} from '../../constants';

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    xMediumHeader: {
      marginVertical: MARGINS.small,
      paddingHorizontal: PADDINGS.small,
      fontSize: SIZES.medium,
      ...TEXTS.mediumHeader,
      color: !isDarkMode ? MODES.white : MODES.black,
    },

    imageContainer: {
      marginTop: MARGINS.xTiny,
    },
    courseDetailWrapper: {
      ...BORDERS.middle,
      backgroundColor: !isDarkMode ? MODES.white : MODES.gray3,
      padding: PADDINGS.xxxLarge,
      marginHorizontal: MARGINS.small,
      marginBottom: MARGINS.xLarge,
    },
  });

export default styles;
