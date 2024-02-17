/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import PageHeader from '../../../components/common/page_header';
import styles from './style';
import { useSelector } from 'react-redux';

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
