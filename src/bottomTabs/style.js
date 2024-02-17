/* eslint-disable prettier/prettier */
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // height: Platform.OS === 'ios' ? 87 : 67,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderColor: '#E9E9E9',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 10,
  },

  label: {
    fontSize: 12,
    // fontFamily: 'DMRegular',
    marginVertical: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  icon: {
    fontSize: 18,
    paddingTop: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  activeBar: {
    height: 4,
    backgroundColor: '#0961F5',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  noActiveBar: {
    height: 4,
  },
  active: {
    color: '#0961F5',
  },
  noActive: {
    color: '#797979',
  },
});
export default styles;
