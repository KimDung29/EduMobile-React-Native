/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { MODES, MODE, FLEX, TEXT, bgColor} from '../../../constants';

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      ...FLEX.rowBetween,
      padding: 10,
    },
    backIcon: {
      width: 40,
      height: 40,
      backgroundColor: bgColor(!isDarkMode),
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
      ...TEXT.text20(!isDarkMode),
    },
  });

export default styles;
