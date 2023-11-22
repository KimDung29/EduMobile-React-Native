import {StyleSheet} from 'react-native';
import {MODES, PADDINGS, MARGINS, TEXTS} from '../../constants';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: MARGINS.xLarge,
      paddingBottom: PADDINGS.large,
      backgroundColor: !isDarkMode ? MODES.black : MODES.white,
      height: height * 0.92,
    },
    iconEdu: {
      width: width * 0.2,
      height: height * 0.1,
      tintColor: !isDarkMode ? MODES.white : MODES.yellow,
    },
    title: {
      ...TEXTS.xLargeHeader(isDarkMode),
    },
    text: {
      color: !isDarkMode ? MODES.yellow : MODES.blue,
    },
    linkToPage: {
      textDecorationLine: 'underline',
      color: !isDarkMode ? MODES.yellow : MODES.blue,
    },
    switchPage: {
      marginVertical: MARGINS.small,
      flexDirection: 'row',
    },
  });

export default styles;
