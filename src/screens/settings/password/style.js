/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {TEXT, bgColor, BUTTONBOTTOM, FLEX} from '../../../constants';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgColor(isDarkMode),
    },
    text: {
        ...TEXT.text16(isDarkMode),
        textAlign: 'center',
        marginTop: 30,
    },
});

export default styles;