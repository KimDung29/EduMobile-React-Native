/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import {store} from '../redux/store';
const currentState = store.getState();
const {isDarkMode} = currentState.common;


const COLORS = {
  primary: '#312651',
  secondary: '#444262',
  tertiary: '#FF7754',

  gray: '#83829A',
  gray2: '#C1C0C8',
  gray3: '#CCCCCC',
  gray4: '#B7AFAF6B',

  red: '#FF0000',

  white: '#FFFFFF',
  lightWhite: '#FAFAFC',

  yellow: '#ffd900',
  black: '#000000',

  blue: '#0000FF',
  blue2: '#0066FF',

  tabBarActiveTintColor: '#0000FF',
};

const PADDINGS = {
  tiny: 4,
  xTiny: 6,
  xxTiny: 8,
  small: 10,
  xSmall: 12,
  xxSmall: 14,
  medium: 16,
  xMedium: 18,
  xxMedium: 20,
  large: 24,
  xLarge: 32,
  xxLarge: 40,
  xxxLarge: 50,
};

const MARGINS = {
  tiny: 4,
  xTiny: 6,
  xxTiny: 8,
  small: 10,
  xSmall: 12,
  xxSmall: 14,
  medium: 16,
  xMedium: 18,
  xxMedium: 20,
  large: 24,
  xLarge: 32,
  xxLarge: 40,
  xxxLarge: 50,
};

const SIZES = {
  tiny: 4,
  xTiny: 6,
  xxTiny: 8,
  small: 10,
  xSmall: 12,
  xxSmall: 14,
  xxxSmall: 15,
  medium: 16,
  xMedium: 18,
  xxMedium: 20,
  large: 24,
  xLarge: 32,
  xxLarge: 40,
  xxxLarge: 50,
};

const MODES = {
  white: '#FFFFFF',
  yellow: '#ffd900',
  black: '#2a2929c0',
  gray2: '#C1C0C8',
  green: '#008000',
};
const DARKMODE = {
  white: '#FFFFFF',
  yellow: '#ffd900',
  black: '#2a2929c0',
  gray2: '#C1C0C8',
  green: '#008000',
}

const LIGHTMODE = {
  white: '#FFFFFF',
  black: '#000',
}

const FONTS = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
};

const MODE = {
  darkText: '#fff',
  darkBg: '#2a2929c0',
  lightText: '#000',
  lightBg: '#fff',
  darkBorder: 'transparent',
  lightBorder: '#C1C0C8',
};

 const bgColor = (isDarkMode) => isDarkMode ? MODE.darkBg : MODE.lightBg;
 const textColor = (isDarkMode) => isDarkMode ? MODE.darkText : MODE.lightText;
 const borderColor = (isDarkMode) => isDarkMode ? MODE.darkBorder : MODE.lightBorder;

const TEXT = {
  text12: isDarkMode => ({
    fontSize: 12,
    color: textColor(isDarkMode),
    fontFamily: FONTS.regular,
  }),
  text14: isDarkMode => ({
    fontSize: 14,
    color: textColor(isDarkMode),
    fontFamily: FONTS.regular,
  }),
  text16: isDarkMode => ({
    fontSize: 16,
    color: textColor(isDarkMode),
    fontFamily: FONTS.regular,
  }),
  text20: isDarkMode => ({
    fontSize: 20,
    color: textColor(isDarkMode),
    fontFamily: FONTS.regular,
  }),
  text26: isDarkMode => ({
    fontSize: 26,
    color: textColor(isDarkMode),
    fontFamily: FONTS.regular,
  }),
  textB14: isDarkMode => ({
    fontSize: 14,
    color: textColor(isDarkMode),
    fontFamily: FONTS.regular,
    fontWeight: '700',
  }),
  textB16: isDarkMode => ({
    fontSize: 16,
    color: textColor(isDarkMode),
    fontFamily: FONTS.regular,
    fontWeight: '700',
  }),
  textCate14: {
    fontSize: 14,
    color: '#fff',
    fontFamily: FONTS.regular,
  },
};

const FLEX = {
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rowEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flext-end',
  },
  columnCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const BORDER = {
  ra32_w0:(isDarkMode) => ({
    borderTopWidth: 0,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderColor: borderColor(isDarkMode),
  }),
  ra8_w0:(isDarkMode) => ({
    borderTopWidth: 0,
    borderRadius: 8,
    borderColor: borderColor(isDarkMode),
  }),
  ra12_w0:(isDarkMode) => ({
    borderTopWidth: 0,
    borderRadius: 12,
    borderColor: borderColor(isDarkMode),
  }),
  ra12_w1: (isDarkMode) => ({
    borderWidth: 1,
    borderRadius: 12,
    borderColor: borderColor(isDarkMode),
  }),
  ra18_w1: (isDarkMode) => ({
    borderWidth: 1,
    borderRadius: 18,
    borderColor: borderColor(isDarkMode),
  }),
  ra18_w0: (isDarkMode) => ({
    borderWidth: 0,
    borderRadius: 18,
    borderColor: borderColor(isDarkMode),
  }),
  ra50_w1: (isDarkMode) => ({
    borderWidth: 1,
    borderRadius: 50,
    borderColor: borderColor(isDarkMode),
  }),
}
const TEXTS = {
  smallContent: isDarkMode => ({
    fontSize: SIZES.xSmall,
    color: !isDarkMode ? COLORS.white : COLORS.black,
  }),
  mediumContent: isDarkMode => ({
    fontSize: SIZES.medium,
    color: !isDarkMode ? COLORS.white : COLORS.black,
  }),
  boldContent: isDarkMode => ({
    fontWeight: '600',
    fontSize: SIZES.medium,
    color: !isDarkMode ? COLORS.white : COLORS.black,
  }),
  mediumHeader: isDarkMode => ({
    fontWeight: '700',
    fontSize: SIZES.medium,
    color: !isDarkMode ? COLORS.black : COLORS.black,
  }),
  xMediumHeader: isDarkMode => ({
    fontWeight: '700',
    fontSize: SIZES.xMedium,
    color: !isDarkMode ? COLORS.white : COLORS.black,
  }),
  xLargeHeader: isDarkMode => ({
    fontWeight: '700',
    color: !isDarkMode ? COLORS.white : COLORS.black,
    fontSize: SIZES.xLarge,
  }),
};


const BORDERS = {
  small: {
    borderTopWidth: 0,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderColor: 'transparent',
  },
  middle: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: COLORS.gray4,
  },
  middle2: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: '#bfbabab1',
  },
  middle3: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: 'transparent',
  },
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#28272789',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.84,
    elevation: 3,
  },
  large: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
};




export {
  MODES,
  COLORS,
  PADDINGS,
  MARGINS,
  SIZES,
  FONTS,
  TEXTS,
  BORDERS,
  SHADOWS,
  DARKMODE,
  LIGHTMODE,
  MODE,
  TEXT,
  FLEX,
  BORDER,
  bgColor
};
