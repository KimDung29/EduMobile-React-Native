/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {FLEX, BORDER,  TEXT,  bgColor} from '../../../constants';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgColor(isDarkMode),
    },
    coursesWrapper: {
      margin: 16,
    },
    coursesImageContainer: {
      position: 'relative',
    },
    cateWrap: {
      // flexDirection: 'row',
      position: 'absolute',
      left: 10, 
      bottom: 10,
      paddingVertical: 4,
      paddingHorizontal: 8,
      ...BORDER.ra12_w0(isDarkMode),
      backgroundColor:  '#797979',
    },
    cateText: {
      ...TEXT.textCate14,
    },
    coursesContent: {
      paddingVertical: 5,
    },
    courseName: {
      ...TEXT.textB14(isDarkMode),
      marginVertical: 5,
    },
    coursesRow: {
      ...FLEX.rowStart,
    },
    courseClock: {
      width: width * 0.036,
      height: height * 0.022,
      tintColor: 'yellow',
    },
    coursesImage: {
      width: width * 0.92,
      height: height * 0.3,
      borderRadius: 6,
      resizeMode: 'cover',
    },
    coursesText: {
      ...TEXT.text14(isDarkMode),
      paddingVertical: 2,
    },
    duration: {
      fontWeight: '700',
    },
    durationWrapper: {
      ...TEXT.text14(isDarkMode),
      marginLeft: 6,
    },
    heartIconWrapper: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: "#ffffff",
      padding: 6,
      borderRadius: 4,
    },
    loading: {
      color: '#fff',
      textAlign: 'center',
    },
    touchBtn: {
      paddingHorizontal: 12,
      paddingTop: 6,
      paddingBottom: 10,
      marginHorizontal: 6,
      ...BORDER.ra18_w0(),
      ...FLEX.columnCenter,
    },
    selected: {
      backgroundColor: '#000',
    },
    normal: backgroundColor =>  ({
      backgroundColor: backgroundColor ? backgroundColor : '#fff',
    }),
    allBg: {
      bgColor: 'red'
    }
  });

export default styles;
