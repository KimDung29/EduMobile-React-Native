/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {MODES, PADDINGS, MARGINS, TEXT, bgColor} from '../../constants';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgColor(isDarkMode),
    },
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconEdu: {
      width: width * 0.2,
      height: height * 0.1,
      tintColor:  'yellow',
    },

    title: {
      ...TEXT.text26(isDarkMode),
    },
    text: {
      color: isDarkMode ? "yellow" : "blue",
    },
    linkToPage: {
      textDecorationLine: 'underline',
      color: !isDarkMode ? "yellow" : "blue",
    },
    switchPage: {
      marginVertical: 10,
      flexDirection: 'row',
    },
  });

export default styles;
