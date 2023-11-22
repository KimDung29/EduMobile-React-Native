import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../../constants';
import styles from './style';
import {useSelector} from 'react-redux';
import Client from '../../api/client';
import {UseMutationHook} from '../../hook/useQueryHooks';
import i18n from '../../config/translations';
import Form from '../../components/common/form';
import PageHeader from '../../components/common/page_header';

const FORM_REGISTER = [
  {
    label: 'registerScreen.usernamePlaceholder',
    name: 'username',
    type: 'text',
    placeholder: 'registerScreen.usernamePlaceholder',
  },
  {
    label: 'registerScreen.emailPlaceholder',
    name: 'email',
    type: 'email',
    placeholder: 'registerScreen.emailPlaceholder',
  },
  {
    label: 'registerScreen.passwordPlaceholder',
    name: 'password',
    type: 'password',
    placeholder: 'registerScreen.passwordPlaceholder',
  },
  {
    label: 'registerScreen.confirmPasswordPlaceholder',
    name: 'confirm_password',
    type: 'password',
    placeholder: 'registerScreen.confirmPasswordPlaceholder',
  },
  {
    label: 'registerScreen.termAndCondition',
    type: 'checkbox',
  },
];

const Register = ({navigation}) => {
  const [error, setError] = useState('');
  const {isDarkMode} = useSelector(state => state.common);
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    agreeToThePolicy: false,
  });
  const {lang} = useSelector(state => state.language);
  i18n.changeLanguage(lang);
  const dynamicStyles = styles({isDarkMode});

  const handleChangeInput = (fieldName, text) => {
    if (fieldName === 'agreeToThePolicy') {
      setValues(prevState => ({
        ...prevState,
        agreeToThePolicy: !prevState.agreeToThePolicy, // Toggle the value for the checkbox
      }));
    } else {
      setValues(prevState => ({
        ...prevState,
        [fieldName]: text,
      }));
    }
  };

  const mutation = UseMutationHook(Client.register);

  const handleRegistration = async e => {
    // console.log('values: ', values);
    e.preventDefault();
    const data = await mutation.mutateAsync(values);

    if (data?.status >= 400) {
      // console.log('register err: ', data);
      setError(data?.data?.message);
      navigation.navigate('register');
    }
    if (data?.status === 200) {
      if (data?.data?.token !== null) {
        // console.log('register suss: ', data?.data);
        navigation.navigate('login');
      }
    }
  };
  return (
    <>
      <PageHeader
        iconLeft={'goback'}
        iconRight={''}
        title={''}
        navigation={navigation}
      />
      <ScrollView>
        <View style={dynamicStyles.container}>
          <Image source={icons.graduation} style={dynamicStyles.icon} />
          <Text style={dynamicStyles.title}>
            {i18n.t('registerScreen.title')}
          </Text>

          <Form
            buttonTitle={'registerScreen.btnSubmit'}
            onSubmitEditing={handleRegistration}
            formData={FORM_REGISTER}
            onChangeText={(fieldName, text) =>
              handleChangeInput(fieldName, text)
            }
            value={values}
            error={error}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Register;
