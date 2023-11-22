/* eslint-disable react/react-in-jsx-scope */

import PageHeader from '../../../components/common/page_header';

const PasswordSetting = ({navigation}) => {
  return (
    <>
      <PageHeader
        iconLeft={'goBack'}
        iconRight={''}
        title={'settings.password'}
        navigation={navigation}
      />
    </>
  );
};

export default PasswordSetting;
