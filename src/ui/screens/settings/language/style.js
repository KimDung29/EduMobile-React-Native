/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { bgColor , BUTTONBOTTOM, FLEX, TEXT} from '../../../../constants';

const { width, height } = Dimensions.get('window');

const styles = ({ isDarkMode }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgColor(isDarkMode),
    },
    //  Languages
    items: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      ...FLEX.rowBetween,
    },
    icon: {
      ...TEXT.text20(isDarkMode),
    },
    text: {
      ...TEXT.text16(isDarkMode),
    },
    updateBtn: {
      ...BUTTONBOTTOM.wrap,
      bottom: 5,
    },
    updateText: {
      ...BUTTONBOTTOM.text,
    },
  });

export default styles;
