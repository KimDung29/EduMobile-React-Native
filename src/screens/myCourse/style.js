/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {
  bgColor,
  TEXT,
} from '../../constants';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = ({ isDarkMode }) =>
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
    }

  });

export default styles;