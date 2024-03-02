/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {TEXT, bgColor, FLEX} from '../../../constants';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgColor(isDarkMode),
    },
    items: {
      marginHorizontal: 16,
      marginTop: 16,
      paddingBottom: 16,
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
