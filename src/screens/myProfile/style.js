import {StyleSheet} from 'react-native';
import {COLORS, MARGINS, MODES, PADDINGS, TEXTS, SIZES} from '../../constants';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      backgroundColor: !isDarkMode ? MODES.black : MODES.white,
      height: '100%',
    },
    needLoginContainer: {
      backgroundColor: !isDarkMode ? MODES.black : MODES.white,
      height: '100%',
    },
    needLoginText: {
      paddingVertical: height * 0.35,
      textAlign: 'center',
      color: !isDarkMode ? MODES.white : MODES.black,
    },
    wrapper: {
      marginTop: MARGINS.small,
    },
    items: {
      flexDirection: 'row',
      justifyContent: '',
      alignItems: 'center',
      paddingLeft: width * 0.35,
      paddingTop: 15,
    },
    touchItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    profileIcon: bgColor => ({
      fontSize: SIZES.medium,
      padding: PADDINGS.xTiny,
      borderRadius: 6,
      color: !isDarkMode ? COLORS.blue : COLORS.white,
      backgroundColor: !isDarkMode ? MODES.white : MODES[bgColor],
    }),
    profileText: {
      ...TEXTS.mediumContent(isDarkMode),
      marginLeft: MARGINS.small,
    },
    // USER INFORMATION
    userInfoHeader: {
      flexDirection: 'row',
      paddingHorizontal: PADDINGS.medium,
    },
    userInfoHeaderImg: {
      width: 40,
      height: 40,
      borderRadius: 50,
      marginRight: MARGINS.large,
      borderColor: COLORS.gray2,
      borderWidth: 1,
    },
    userInfoText: {
      fontSize: SIZES.xSmall,
      color: !isDarkMode ? COLORS.white : COLORS.black,
    },
    userInfoOverView: {
      margin: MARGINS.medium,
      padding: PADDINGS.medium,
      // backgroundColor: COLORS.white,
      color: COLORS.black,
      borderWidth: 1,
      borderColor: !isDarkMode ? COLORS.gray : 'transparent',
      borderRadius: SIZES.small,
    },
    xMediumHeader: {
      paddingTop: PADDINGS.medium,
      ...TEXTS.boldContent(isDarkMode),
    },
  });
export default styles;
