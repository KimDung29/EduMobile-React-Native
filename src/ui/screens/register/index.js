/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {useSelector} from 'react-redux';
import { useTranslation } from 'react-i18next';
import Client from '../../../api/client';
import PageHeader from '../../components/page_header';
import Form from '../../components/form';
import { UseMutationHook } from '../../../hooks/useQueryHooks';

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
  const {t} = useTranslation();
  const [error, setError] = useState('');
  const {isDarkMode} = useSelector(state => state.common);
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    agreeToThePolicy: false,
  });
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
      navigation.navigate('RegisterScreen');
    }
    if (data?.status === 200) {
      if (data?.data?.token !== null) {
        // console.log('register suss: ', data?.data);
        navigation.navigate('LoginScreen');
      }
    }
  };
  return (
    <View style={dynamicStyles.container}>
      <PageHeader
        iconLeft={'goback'}
        iconRight={''}
        title={''}
        navigation={navigation}
      />

        <ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
         showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 30}}
          >
          <View style={dynamicStyles.wrapper}>
            <Text style={dynamicStyles.title}>
              {t('registerScreen.title')}
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
    </View>
  );
};

export default Register;
