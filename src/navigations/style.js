import {StyleSheet} from 'react-native';
import {COLORS, PADDINGS, SIZES} from '../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: 75,
    borderTopLeftRadius: SIZES.large,
    borderTopRightRadius: SIZES.large,
  },
  selectedTab: {
    color: COLORS.black,
    borderTopWidth: 3.8,
    borderTopColor: COLORS.yellow,
    borderTopRightRadius: SIZES.small,
    borderTopLeftRadius: SIZES.small,
  },
  label: {
    paddingBottom: PADDINGS.tiny,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 40,
  },
  icon: {
    fontSize: SIZES.xxMedium,
    paddingTop: PADDINGS.small,
    paddingHorizontal: PADDINGS.xSmall,
  },
});
export default styles;
