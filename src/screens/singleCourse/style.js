/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {FLEX, bgColor, TEXT, BUTTONBOTTOM} from '../../constants';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgColor(isDarkMode),
    },
    img: {
      width: width,
      height: height * 0.32,
      resizeMode: 'cover',
    },
    headTitle: {
      ...TEXT.text20(isDarkMode),
      marginBottom: 10,
    },
    touchHeart: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: '#C1C0C8',
      padding: 4,
      borderRadius: 4,
    },
    title: {
      ...TEXT.text20(isDarkMode),
    },
    content: {
      ...TEXT.text12(isDarkMode),
      paddingLeft: 10,
    },
    price: {
      textTransform: 'uppercase',
    },
    //  Single course content
    contentContainer: {
      padding: 20,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleWrapper: {
      ...FLEX.rowBetween,
      marginBottom: 10,
      paddingRight: 10,
    },

    // Instruction
    instructorWrapper: {
      paddingTop: 32,
      paddingBottom: 80,
    },
    instructorContainer: {
      ...FLEX.columnCenter,
      marginBottom: 10,
    },
    instructorIcon: {
      width: width * 0.05,
      height: height * 0.03,
      tintColor: isDarkMode ? '#FFFF' : '#000',
      marginBottom: 5,
    },
    instructorTextName: {
      paddingVertical: 4,
      textTransform: 'capitalize',
      ...TEXT.text14(isDarkMode),
    },
    // START NOW
    startWrapper: {
      ...BUTTONBOTTOM.wrap,
    },
    start: {
      ...BUTTONBOTTOM.text,
    },
    linkWrap: {
      ...FLEX.rowCenter,
      marginVertical: 8,
    },
    iconLink: {
      marginHorizontal: 6,
      fontSize: 20,
      color: isDarkMode ? 'white' : '#242424',
    },
    hiddenIcon: {
      color: 'transparent',
    },
  });

export default styles;
