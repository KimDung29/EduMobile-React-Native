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
  bgColor, textColor, TEXT, FLEX, BORDER,
} from '../../constants';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
StyleSheet.create({
    container: { },
    headerWrapper: {
      marginTop: 10,
      marginBottom: 5,
      ...FLEX.rowBetween,
    },
    text: {
      ...TEXT.text16(isDarkMode),
    },
    btnContainer: {
      ...FLEX.rowStart,
      paddingHorizontal: 16,
    },
    // USER INFORMATION
    userInfoHeader: {
      flexDirection: 'row',
      paddingHorizontal: 16,
    },
    userInfoHeaderImg: {
      width: 40,
      height: 40,
      marginRight: 24,
      ...BORDER.ra50_w1(isDarkMode),
    },
    userInfoText: {
      ...TEXT.text12(isDarkMode),
    },
    userInfoOverView: {
      margin: 16,
      padding: 16,
      ...TEXT.text12(isDarkMode),
      ...BORDER.ra12_w1(isDarkMode),
    },
    textContent: {
      // paddingTop: 16,
      ...TEXT.text14(isDarkMode),
    },

    // DARK MODE
    containerHeader: {
      ...FLEX.rowBetween,
      marginHorizontal: 16,
    },
    title: {
      ...TEXT.text12(isDarkMode),
    },
    touchBtn: {
      ...FLEX.rowBetween,
      ...BORDERS.middle,
      paddingHorizontal: 6,
      backgroundColor: bgColor(!isDarkMode),
    },
    icon: {
      ...TEXT.text16(!isDarkMode),
    },
    darModeText: {
      marginVertical: 4,
      paddingLeft: 4,
      ...TEXT.text12(!isDarkMode),
    },
    cateBtn: backgroundColor => ({
      marginTop: 30,
      marginBottom: 16,
      paddingHorizontal: 12,
      paddingVertical: 6,
      marginHorizontal:6,
      ...BORDER.ra18_w0(),
      backgroundColor: backgroundColor ? backgroundColor : 'white',
    }),
  });

export default styles;
