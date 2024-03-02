/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import styles from './style';
import { useSelector } from 'react-redux';
import PageHeader from '../../../components/page_header';

const DeleteAccountSetting = ({navigation}) => {
  const {isDarkMode} = useSelector(state => state.common);
  const dynamicStyles = styles({isDarkMode});

  return (
    <View style={dynamicStyles.container}>
      <PageHeader
        iconLeft={'goBack'}
        iconRight={''}
        title={'settings.deleteAccount'}
        navigation={navigation}
      />
      <Text style={dynamicStyles.text}>Delete Account</Text>
    </View>
  );
};

export default DeleteAccountSetting;
