/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import i18n from '../../../config/translations';
import Icon from 'react-native-vector-icons/Ionicons';

const ShowListItems = ({data, length, title}) => {
  const {isDarkMode} = useSelector(state => state.common);
  const [visibleSections, setVisibleSections] = useState({});

  const dynamicStyles = styles({isDarkMode});

  const toggleSectionVisibility = index => {
    setVisibleSections(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <View style={dynamicStyles.container}>
      {title ? (
        <Text style={dynamicStyles.title}>{i18n.t(title)}</Text>
      ) : (
        <Text />
      )}
      {data &&
        data.map((section, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => toggleSectionVisibility(index)}
              style={dynamicStyles.touchItem}>
              <View style={dynamicStyles.touchWrapper}>
                <Icon
                  name={
                    visibleSections[index]
                      ? 'caret-up-outline'
                      : 'caret-down-outline'
                  }
                  style={dynamicStyles.icon}
                />
                <Text style={dynamicStyles.text}>{section.title}</Text>
              </View>
              {length ? (
                <Text style={dynamicStyles.text}>{section?.items.length}</Text>
              ) : (
                <Text />
              )}
            </TouchableOpacity>
            {visibleSections[index] && section.course_id ? (
              section?.items.map(item => (
                <View key={item.id} style={dynamicStyles.listItemWrapper}>
                  <Icon
                    name="phone-portrait-outline"
                    style={dynamicStyles.iconPhone}
                  />
                  <Text style={dynamicStyles.text}>{item.title}</Text>
                </View>
              ))
            ) : (
              <Text> </Text>
            )}
          </View>
        ))}
    </View>
  );
};

export default ShowListItems;
