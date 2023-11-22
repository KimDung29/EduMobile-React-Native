import {StyleSheet} from 'react-native';
import {
  MODES,
  COLORS,
  PADDINGS,
  MARGINS,
  SIZES,
  FONTS,
  TEXTS,
  BORDERS,
  SHADOWS,
} from '../../constants';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    keyboard: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: PADDINGS.large,
      backgroundColor: !isDarkMode ? MODES.black : MODES.white,
      height: height * 0.98,
    },
    icon: {
      width: width * 0.2,
      height: height * 0.1,
      tintColor: !isDarkMode ? MODES.white : MODES.yellow,
    },
    title: {
      ...TEXTS.xLargeHeader(isDarkMode),
    },
  });
export default styles;
