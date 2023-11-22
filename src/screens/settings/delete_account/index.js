/* eslint-disable react/react-in-jsx-scope */

import PageHeader from '../../../components/common/page_header';

const DeleteAccountSetting = ({navigation}) => {
  return (
    <>
      <PageHeader
        iconLeft={'goBack'}
        iconRight={''}
        title={'settings.deleteAccount'}
        navigation={navigation}
      />
    </>
  );
};

export default DeleteAccountSetting;
