/* eslint-disable prettier/prettier */
import React from 'react';
import {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

const Form = ({
  formData,
  onChangeText,
  buttonTitle,
  onSubmitEditing,
  value,
  error,
}) => {
  const {t} = useTranslation();
  const {isDarkMode} = useSelector(state => state.common);
  const [isCheck, setIsCheck] = useState(false);
  const dynamicStyles = styles({isDarkMode});

  const handleCheckbox = () => {
    setIsCheck(!isCheck);
    onChangeText('agreeToThePolicy', !isCheck);
  };

  return (
    <View style={dynamicStyles.container}>
      {formData.map((item, index) =>
        item.type === 'checkbox' ? (
          <View key={`checkbox-${index}`} style={dynamicStyles.checkboxWrapper}>
            <TouchableOpacity onPress={handleCheckbox}>
              <Icon
                name={!isCheck ? 'square-outline' : 'checkbox-outline'}
                style={dynamicStyles.checkboxIcon}
              />
            </TouchableOpacity>
            <Text style={dynamicStyles.checkboxLabel}>
              {t(item.label)}
            </Text>
          </View>
        ) : (
          <TextInputPattern
            key={`textInputPattern-${index}`}
            label={t(item.label)}
            name={item.name}
            type={item.type}
            value={value[item.name]}
            placeholder={t(item.placeholder)}
            isDarkMode={isDarkMode}
            onChangeText={text => onChangeText(item.name, text)}
          />
        ),
      )}
      <Text style={dynamicStyles.error}>{error}</Text>
      <TouchableOpacity
        onPress={onSubmitEditing}
        style={dynamicStyles.btnPress}>
        <Text style={dynamicStyles.btnText}>{t(buttonTitle)}</Text>
      </TouchableOpacity>
    </View>
  );
};

const TextInputPattern = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChangeText,
  isDarkMode,
}) => {
  const dynamicStyles = styles({isDarkMode});
  return (
    <View>
      <Text style={dynamicStyles.formLabel}>{label}</Text>
      <TextInput
        style={dynamicStyles.textInput(isDarkMode)}
        name={name}
        type={type}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value ? value : ''}
        keyboardType={type === 'email' ? 'email-address' : null}
        secureTextEntry={type === 'password' ? true : false}
      />
    </View>
  );
};

export default Form;
