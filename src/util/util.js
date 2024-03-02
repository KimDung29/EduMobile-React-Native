/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
export const COLOR_LIST = [
    '#7ec4cf',
    '#f87c95',
    '#e59a93',
    '#e89d88',
    '#70d6ff',
    '#d39d8a',
    '#ffd670',
    '#a3fff0',
    '#e5bcbe',
    '#f5e960',
  ];

 export const randomColor = index => {
    // uniqueCategories that can only randomly select one color, if its index is greater than color.length it will return starting from index 0
    return COLOR_LIST[index % COLOR_LIST.length];
  };