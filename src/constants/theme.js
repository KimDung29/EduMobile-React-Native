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

const FONTS = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
};

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
    borderTopLeftRadius: SIZES.xLarge,
    borderTopRightRadius: SIZES.xLarge,
    borderColor: 'transparent',
  },
  middle: {
    borderWidth: 1,
    borderRadius: SIZES.xMedium,
    borderColor: COLORS.gray4,
  },
  middle2: {
    borderWidth: 1,
    borderRadius: SIZES.xMedium,
    borderColor: '#bfbabab1',
  },
  middle3: {
    borderWidth: 1,
    borderRadius: SIZES.xMedium,
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
};
