import {StyleSheet} from 'react-native';
import {COLORS, PADDINGS, MARGINS, TEXTS, MODES} from '../../../constants';

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    // Page header
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBlockColor: !isDarkMode ? 'transparent' : COLORS.gray2,
      backgroundColor: !isDarkMode ? MODES.black : COLORS.white,
      paddingVertical: PADDINGS.small,
      paddingHorizontal: PADDINGS.small,
    },
    iconWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      ...TEXTS.xMediumHeader(isDarkMode),
    },

    icon: {
      ...TEXTS.mediumContent(isDarkMode),
    },
  });

export default styles;
