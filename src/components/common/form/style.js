/* eslint-disable no-shadow */
import {StyleSheet} from 'react-native';
import {
  MODES,
  PADDINGS,
  MARGINS,
  SIZES,
  TEXTS,
  COLORS,
} from '../../../constants';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const styles = ({isDarkMode}) =>
  StyleSheet.create({
    // Form elements
    container: {
      width: width * 0.85,
      marginVertical: MARGINS.xxMedium,
    },
    checkboxWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: MARGINS.xSmall,
    },
    checkboxLabel: {
      paddingLeft: PADDINGS.xxTiny,
      ...TEXTS.mediumContent(isDarkMode),
    },
    checkboxIcon: {
      fontSize: 20,
      color: !isDarkMode ? MODES.white : MODES.black,
    },
    formLabel: {
      marginTop: MARGINS.xxMedium,
      marginBottom: MARGINS.xTiny,
      ...TEXTS.mediumContent(isDarkMode),
    },
    textInput: isDarkMode => ({
      borderWidth: 1,
      borderColor: !isDarkMode ? COLORS.white : 'transparent',
      borderRadius: SIZES.small,
      color: COLORS.black,
      padding: SIZES.medium,
      backgroundColor: !isDarkMode ? MODES.white : MODES.yellow,
    }),

    btnPress: {
      backgroundColor: !isDarkMode ? MODES.white : MODES.yellow,
      padding: SIZES.medium,
      marginVertical: MARGINS.small,
      borderRadius: SIZES.xxTiny,
    },
    btnText: {
      textAlign: 'center',
      fontSize: SIZES.medium,
      color: COLORS.black,
    },

    error: {
      color: COLORS.red,
      fontSize: SIZES.medium,
    },
  });

export default styles;
