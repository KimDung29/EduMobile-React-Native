/* eslint-disable react/react-in-jsx-scope */
import {View, TouchableOpacity, Linking, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {MARGINS, SIZES, COLORS} from '../../../constants';

// Recived an object
const SocialMediaLink = ({data, withoutMode}) => {
  const {isDarkMode} = useSelector(state => state.common);
  const dynamicStyles = styles({isDarkMode});

  const numbers = [];

  for (let i = 0; i < Object.keys(data).length; i++) {
    numbers.push(i);
  }

  return (
    <View style={dynamicStyles.container}>
      {!data ? (
        <Text />
      ) : (
        <>
          {numbers.map((n, i) => (
            <TouchableOpacity
              key={i}
              onPress={() =>
                Linking.openURL(
                  Object.values(data).length > 0 && Object.values(data)[n],
                )
                  ? Object.values(data)[n]
                  : ''
              }>
              <Icon
                style={
                  Object.values(data)[n]
                    ? dynamicStyles.icon
                    : dynamicStyles.hiddenIcon
                }
                withoutMode={withoutMode}
                name={
                  data &&
                  Object.values(data).length > 0 &&
                  Object.values(data)[n]
                    ? `logo-${Object.keys(data)[n]}`
                    : null
                }
              />
            </TouchableOpacity>
          ))}
        </>
      )}
    </View>
  );
};

export default SocialMediaLink;

const styles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: MARGINS.xTiny,
    },
    icon: {
      marginHorizontal: MARGINS.xTiny,
      fontSize: SIZES.xSmall,
      color: !isDarkMode ? COLORS.white : COLORS.gray,
    },
    hiddenIcon: {
      color: 'transparent',
    },
  });
