/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {FLEX, TEXT, BORDER,
   bgColor} from '../../../constants';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgColor(isDarkMode),
    },

    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textCommon: {
      ...TEXT.text16(isDarkMode),
    },
    userInfoHeader: {
      ...FLEX.columnCenter,
      marginBottom: 12,
    },
    userInfoHeaderImg: {
      width: 60,
      height: 60,
      resizeMode: 'cover',
      ...BORDER.ra50_w1(isDarkMode),
      marginTop: 10,
    },
    textWrap: {
      ...FLEX.columnCenter,
      marginTop: 5,
    },
    userInfoText: {
      ...TEXT.text14(isDarkMode),
    },
    items: {
      marginHorizontal: 16,
      marginTop: 12,
      paddingBottom: 12,
      borderBottomWidth: 0.5,
      borderBottomColor: '#ccc',
    },
    profileListBtn: {
      ...FLEX.rowBetween,
    },
    touchItem: {
      ...FLEX.rowStart,
    },
    profileIcon: {
      ...TEXT.text20(isDarkMode),
      marginRight: 10,

    },
    profileText: {
      ...TEXT.text16(isDarkMode)
    },
    arrowRight: {
      ...TEXT.text20(isDarkMode),
    },
  });
export default styles;
