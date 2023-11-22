import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {COLORS, PADDINGS, TEXTS} from '../../../constants';

const {width, height} = Dimensions.get('window');

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
    //  Languages
    items: {
      padding: PADDINGS.small,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    icon: {
      fontSize: 20,
      color: COLORS.blue,
    },
    text: {
      ...TEXTS.mediumContent(isDarkMode),
    },
    updateBtn: {
      width: '100%',
      backgroundColor: COLORS.blue2,
      padding: PADDINGS.small,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    updateText: {
      textAlign: 'center',
      fontSize: 20,
      color: COLORS.white,
    },
  });

export default styles;
