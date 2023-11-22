import React from 'react';
import {useSelector} from 'react-redux';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
import AppNavigation from './screens';

const {width, height} = Dimensions.get('window');

const RootScreen = () => {
  const {isLoading} = useSelector(state => state.common);

  return (
    <>
      <View style={styles.container}>
        <AppNavigation />
        {isLoading && (
          <View style={styles.overlay}>
            <ActivityIndicator size="large" color="white" />
          </View>
        )}
      </View>
    </>
  );
};

export default RootScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  overlay: {
    width,
    height,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
