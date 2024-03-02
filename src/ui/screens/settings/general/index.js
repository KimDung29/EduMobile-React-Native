/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import styles from './style';
import { useSelector } from 'react-redux';
import PageHeader from '../../../components/page_header';

const GeneralSetting = ({navigation}) => {
  const {isDarkMode} = useSelector(state => state.common);
  const dynamicStyles = styles({isDarkMode});
  return (
    <View style={dynamicStyles.container}>
      <PageHeader
        iconLeft={'goBack'}
        iconRight={''}
        title={'settings.general'}
        navigation={navigation}
      />
      <Text style={dynamicStyles.text}>General</Text>
    </View>
  );
};

export default GeneralSetting;
