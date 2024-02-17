/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
import {StyleSheet} from 'react-native';
import {
  TEXT,
  BORDER
} from '../../../constants';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const styles = ({isDarkMode}) =>
  StyleSheet.create({
    // Form elements
    container: {
      width: width * 0.9,
    },
    checkboxWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 12,
    },
    checkboxLabel: {
      paddingLeft: 8,
      ...TEXT.text16(isDarkMode),
    },
    checkboxIcon: {
      ...TEXT.text20(isDarkMode),
    },
    formLabel: {
      marginTop: 20,
      marginBottom: 6,
      ...TEXT.text16(isDarkMode),
    },
    textInput: isDarkMode => ({
      ...BORDER.ra8_w0(isDarkMode),
      // ...TEXT.text14(!isDarkMode),
      color: isDarkMode ? '#000' : '#fff',
      padding: 16,
      backgroundColor: !isDarkMode ? '#ccc' : 'yellow',
    }),

    btnPress: {
      backgroundColor: !isDarkMode ? '#ccc' : 'yellow',
      padding: 16,
      marginVertical: 10,
      ...BORDER.ra8_w0(isDarkMode),
    },
    btnText: {
      textAlign: 'center',
      fontSize: 16,
      color: '#000',
    },

    error: {
      color: 'red',
      fontSize: 16,
    },
  });

export default styles;
