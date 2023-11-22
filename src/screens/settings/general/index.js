/* eslint-disable react/react-in-jsx-scope */
import {Text} from 'react-native';
import PageHeader from '../../../components/common/page_header';

const GeneralSetting = ({navigation}) => {
  return (
    <>
      <PageHeader
        iconLeft={'goBack'}
        iconRight={''}
        title={'settings.language'}
        navigation={navigation}
      />
      <Text>General</Text>
      <Text>General</Text>
    </>
  );
};

export default GeneralSetting;
