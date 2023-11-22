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
} from '../../constants';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    headerWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: PADDINGS.small,
    },
    text: {
      paddingLeft: PADDINGS.small,
      ...TEXTS.xMediumHeader(isDarkMode),
    },
    btnContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: PADDINGS.medium,
    },
    btnImage: dimension => ({
      width: dimension,
      height: dimension,
      resizeMode: 'cover',
      tintColor: !isDarkMode ? MODES.white : MODES.yellow,
    }),

    // USER INFORMATION
    userInfoHeader: {
      flexDirection: 'row',
      paddingHorizontal: PADDINGS.medium,
    },
    userInfoHeaderImg: {
      width: 40,
      height: 40,
      borderRadius: 50,
      marginRight: MARGINS.large,
      borderColor: COLORS.gray2,
      borderWidth: 1,
    },
    userInfoText: {
      fontSize: SIZES.xSmall,
      color: !isDarkMode ? COLORS.white : COLORS.black,
    },
    userInfoOverView: {
      margin: MARGINS.medium,
      padding: PADDINGS.medium,
      // backgroundColor: COLORS.white,
      color: COLORS.black,
      borderWidth: 1,
      borderColor: !isDarkMode ? COLORS.gray : 'transparent',
      borderRadius: SIZES.small,
    },
    xMediumHeader: {
      paddingTop: PADDINGS.medium,
      ...TEXTS.boldContent(isDarkMode),
    },

    // DARK MODE
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: MARGINS.medium,
    },
    title: {
      paddingTop: PADDINGS.medium,
      ...TEXTS.boldContent(isDarkMode),
    },
    touchBtn: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: PADDINGS.xTiny,
      backgroundColor: !isDarkMode ? MODES.white : MODES.gray2,
      ...BORDERS.middle,
    },
    icon: {
      fontSize: 20,
      color: 'black',
    },
    darModeText: {
      marginVertical: MARGINS.xxTiny,
      paddingHorizontal: PADDINGS.small,
      fontSize: SIZES.xxSmall,
      color: COLORS.black,
    },
  });

export default styles;
