/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  TEXT,
  bgColor,

} from '../../constants';

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
    icon: {
      width: width * 0.2,
      height: height * 0.1,
      tintColor: !isDarkMode ? "white" : "yellow",
    },
    title: {
      ...TEXT.text26(isDarkMode),
    },
  });
export default styles;
