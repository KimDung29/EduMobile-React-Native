import {StyleSheet} from 'react-native';
import {COLORS, MARGINS, PADDINGS, TEXTS} from '../../constants';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
    items: {
      padding: PADDINGS.small,
      marginVertical: MARGINS.small,
      marginHorizontal: MARGINS.xTiny,
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      ...TEXTS.mediumContent(isDarkMode),
    },
    chevronIcon: {
      color: 'green',
      fontSize: 18,
    },
  });

export default styles;
