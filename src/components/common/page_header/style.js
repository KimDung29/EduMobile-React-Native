/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {  FLEX, TEXT, bgColor} from '../../../constants';

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      ...FLEX.rowBetween,
      paddingVertical: 10,
      paddingHorizontal: 16,
    },
    backIcon: {
      width: 40,
      height: 40,
      borderWidth:1,
      borderColor: bgColor(!isDarkMode),
      borderRadius: 50,
      ...FLEX.columnCenter,
    },
    iconWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      ...TEXT.text20(isDarkMode),
      fontSize: 24,
    },

    icon: {
      ...TEXT.text20(isDarkMode),
    },
  });

export default styles;
