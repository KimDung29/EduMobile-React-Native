/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  TEXT,
} from '../../../constants';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    // showListItem
    container: {
      paddingVertical: 4,
    },
    title: {
      ...TEXT.text20(isDarkMode),
      paddingVertical: 4,
      marginVertical: 10,
    },
    icon: {
      marginLeft: 10,
      ...TEXT.text16(isDarkMode),
    },
    iconPhone: {
      ...TEXT.text16(isDarkMode),
    },
    text: {
      ...TEXT.text16(isDarkMode),
      paddingLeft: 10,
    },
    touchItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    touchWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    listItemWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 24,
      marginVertical: 6,
    },
  });

export default styles;
