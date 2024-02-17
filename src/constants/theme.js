/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */

const FONTS = {
  regular: 'Poppins',
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

const BUTTONBOTTOM = {
  wrap: {
    padding: 12,
    backgroundColor: "#fff",
    position: 'absolute',
    width: '100%',
    bottom: 60,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 10,
  }
};

export {
  SHADOWS,
  MODE,
  TEXT,
  FLEX,
  BORDER,
  bgColor,
  BUTTONBOTTOM,
};
