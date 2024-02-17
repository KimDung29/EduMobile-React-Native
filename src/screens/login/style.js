/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { TEXT, bgColor} from '../../constants';

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
      tintColor: isDarkMode ? 'yellow' : '#ccc',
    },

    title: {
      ...TEXT.text26(isDarkMode),
    },
    text: {
      ...TEXT.text14(isDarkMode),
      color: isDarkMode ? "#fff" : "#000",
    },
    linkToPage: {
      ...TEXT.text14(isDarkMode),
      textDecorationLine: 'underline',
      color: !isDarkMode ? "blue" : "white",
    },
    switchPage: {
      marginVertical: 10,
      flexDirection: 'row',
    },
  });

export default styles;
