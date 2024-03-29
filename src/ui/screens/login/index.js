/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {icons} from '../../../constants';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import { useTranslation } from 'react-i18next';
import Client from '../../../api/client';
import PageHeader from '../../components/page_header';
import Form from '../../components/form';
import { UseMutationHook } from '../../../hooks/useQueryHooks';
import { setUser } from '../../../redux/slice/userSlice';

const FORM_LOGIN = [
  {
    label: 'loginScreen.usernameLabel',
    name: 'username',
    type: 'text',
    placeholder: 'loginScreen.usernamePlaceholder',
  },
  {
    label: 'loginScreen.passwordLabel',
    name: 'password',
    type: 'password',
    placeholder: 'loginScreen.passwordPlaceholder',
  },
];

const Login = ({navigation}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const {isDarkMode} = useSelector(state => state.common);

  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const dynamicStyles = styles({isDarkMode});

  const handleChangeInput = (fieldName, text) => {
    setValues(prevState => ({
      ...prevState,
      [fieldName]: text,
    }));
  };

  const mutation = UseMutationHook(Client.login);

  const handleLogin = async e => {
    // console.log('values: ', values);

    e.preventDefault();
    const data = await mutation.mutateAsync(values);

    if (data?.status >= 400) {
      // console.log('login err: ', data);
      setError(data?.data?.message);
      navigation.navigate('LoginScreen');
    }
    if (data?.status === 200) {
      if (data?.data?.token !== null) {
        dispatch(setUser(data?.data));
        // console.log('login suss: ', data?.data);
        navigation.navigate('HomeScreen');
      }
    }
  };

  // console.log('user: ', user);
  return (
    <View style={dynamicStyles.container}>
      <PageHeader
        iconLeft={'goback'}
        iconRight={''}
        title={''}
        navigation={navigation}
      />
      <View style={dynamicStyles.wrapper}>
        <Image source={icons.graduation} style={dynamicStyles.iconEdu} />
        <Text style={dynamicStyles.title}>
          {t('loginScreen.title')}
        </Text>

        <Form
          buttonTitle={'login'}
          onSubmitEditing={handleLogin}
          formData={FORM_LOGIN}
          onChangeText={(fieldName, text) =>
            handleChangeInput(fieldName, text)
          }
          value={values}
          error={error}
        />

        <TouchableOpacity onPress={() => {}}>
          <Text style={[dynamicStyles.text,{textDecorationLine: 'underline' } ]}>
            {t('loginScreen.forgotPassword')}
          </Text>
        </TouchableOpacity>

        <View style={dynamicStyles.switchPage}>
          <Text style={[dynamicStyles.linkToPage, {textDecorationLine: 'none' }]}>
            {t('loginScreen.registerText')}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={[dynamicStyles.linkToPage]}>
              {t('loginScreen.register')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
