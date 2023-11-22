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
} from '../../../constants';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    // showListItem
    container: {
      paddingVertical: PADDINGS.tiny,
    },
    title: {
      ...TEXTS.xMediumHeader(isDarkMode),
      paddingVertical: PADDINGS.tiny,
      marginVertical: MARGINS.small,
    },
    icon: {
      marginLeft: MARGINS.small,
      ...TEXTS.mediumContent(isDarkMode),
    },
    iconPhone: {
      ...TEXTS.mediumContent(isDarkMode),
    },
    text: {
      ...TEXTS.mediumContent(isDarkMode),
      paddingLeft: PADDINGS.small,
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
      marginLeft: MARGINS.large,
      marginVertical: MARGINS.xTiny,
    },
  });

export default styles;
