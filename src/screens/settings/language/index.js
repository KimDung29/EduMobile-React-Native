/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable no-unused-vars */
import {useDispatch, useSelector} from 'react-redux';
import i18n from '../../../config/translations';
import {ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './style';
import {useState} from 'react';
import {setLanguage} from '../../../redux/slice/commonSlice';
import Icon from 'react-native-vector-icons/Ionicons';
import PageHeader from '../../../components/common/page_header';

const languageOptions = [
  {label: 'English', value: 'en'},
  {label: '한국인', value: 'ko'},
  {label: 'Português', value: 'pt'},
  {label: 'Española', value: 'es'},
];

const LanguageSetting = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);
  const {isDarkMode, language} = useSelector(state => state.common);
  const [selected, setSelected] = useState('');

  const changeLanguage = () => {
    dispatch(setLanguage(selected));
    i18n.changeLanguage(selected);
  };

  const dynamicStyles = styles({isDarkMode});
  return (
    <View style={dynamicStyles.container}>
      <PageHeader
        iconLeft={'goBack'}
        iconRight={''}
        title={'settings.language'}
        navigation={navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={dynamicStyles.wrapper}>
        {languageOptions.map((lang, i) => (
          <View key={'lang' + i}>
            <TouchableOpacity
              style={dynamicStyles.items}
              onPress={() => setSelected(lang.value)}>
              <Text style={dynamicStyles.text}>{lang.label}</Text>
              {selected === lang.value ||
              (!selected && language === lang.value) ? (
                <Icon name="checkmark-outline" style={dynamicStyles.icon} />
              ) : null}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={changeLanguage}
        style={dynamicStyles.updateBtn}>
        <Text style={dynamicStyles.updateText}>
          {i18n.t('settings.update')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageSetting;
