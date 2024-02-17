/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, View} from 'react-native';
import IframeRenderer, {iframeModel} from '@native-html/iframe-plugin';
import RenderHTML from 'react-native-render-html';
import WebView from 'react-native-webview';
import { useSelector } from 'react-redux';

const renderers = {
  iframe: props => (
    <View renderToHardwareTextureAndroid={true}>
      <IframeRenderer {...props} />
    </View>
  ),
};

const customHTMLElementModels = {
  iframe: iframeModel,
};

const RenderDataHTML = React.memo(function RenderDataHTML({html, style = {}}) {
  const {isDarkMode} = useSelector(state => state.common);

  const commonTagStyles = {
    color: isDarkMode ? '#fff' : '#000',
  };
  return (
    <RenderHTML
      systemFonts={[
        'Poppins',
        'Poppins-ExtraLight',
        'Poppins-Light',
        'Poppins-Medium',
        'Poppins-SemiBold',
        'Poppins-Bold',
        'Poppins-ExtraBold',
      ]}
      source={{
        html: html || '',
      }}
      tagsStyles={{
        body: {
          fontFamily: 'Poppins-ExtraLight',
          fontSize: 13,
          fontWeight: '300',
          ...style,
        },
        p: commonTagStyles,
        h1: commonTagStyles,
        h2: commonTagStyles,
        h3: commonTagStyles,
        h4: commonTagStyles,
        ul: commonTagStyles,
        li: commonTagStyles,
        a: {color: isDarkMode ? 'yellow' : 'blue'},
      }}
      enableExperimentalMarginCollapsing
      renderers={renderers}
      WebView={WebView}
      contentWidth={Dimensions.get('window').width - 32}
      customHTMLElementModels={customHTMLElementModels}
      renderersProps={{
        img: {
          enableExperimentalPercentWidth: true,
        },
      }}
    />
  );
});

export default RenderDataHTML;
