const defaultTheme = {
  cubicTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  labelGray: '#ffffff4d',
  labelBlue: '#8FA1D0',
  labelRosa: '#E09CB5',
  labelGreen: '#BEDBB0',

  spacing: value => `${value * 2}px`,

  radius: '8px',
};

export const themeBlack = {
  ...defaultTheme,
  logoPath: '#logo-white',
  colors: {
    background: '#161616',
    fontColor: '#161616',
    btnBackground: '#121212',
    btnColor: '#fff',
    btnPlus: '#BEDBB0',
    btnPlusHover: '#9DC888',
    btnPrimary: '#BEDBB0',
    btnPrimaryHover: '#9DC888',
    btnSmall: '#BEDBB0',
    inputColor: '#fff',
    inputBorder: '#BEDBB0',
    white: '#fff',
    black: '#212121',
    accentColor: '#BEDBB0',
    accentColorHover: '#9DC888',
    logoutIcon: '#BEDBB0',
    logoutIconHover: '#9DC888',
    logoutText: '#fff',

    // =============
    titleColor: '#FFFFFF',
    backgroundColor: '#1F1F1F',
    // =============
    sidebarBackground: '#121212',
    sidebarTabActive: 'rgb(31 31 31 / 40%)',
    sidebarBorder: 'rgba(255, 255, 255, 0.1)',
    sidebarBorder2: '#bedbb0',
    sidebarSupport: '#1f1f1f',
    logoBackground: '#1f1f1f',
    logoIcon: '#fff',
  },
  spacing: value => `${value * 4}px`,
};

export const themeLight = {
  ...defaultTheme,
  logoPath: '#logo-black',
  colors: {
    background: '#fdfdfd',
    fontColor: '#161616',
    btnBackground: '#161616',
    btnColor: '#fff',
    btnPlus: '#BEDBB0',
    btnPlusHover: '#9DC888',
    btnPrimary: '#BEDBB0',
    btnPrimaryHover: '#9DC888',
    btnSmall: '#BEDBB0',
    inputColor: '#161616',
    inputBorder: '#BEDBB0',
    white: '#fff',
    black: '#212121',
    accentColor: '#BEDBB0',
    accentColorHover: '#9DC888',
    logoutIcon: '#BEDBB0',
    logoutIconHover: '#9DC888',
    logoutText: '#161616',

    // =============

    firstBackgroundColor: '#F6F6F7',
    secondBackgroundColor: '#FFFFFF',
    thirdBackgroundColor: '#FCFCFC',

    // =============
    sidebarBackground: '#fff',
    sidebarTabActive: 'rgb(246 246 247 / 40%)',
    sidebarBorder: 'rgba(22, 22, 22, 0.1)',
    sidebarBorder2: '#bedbb0',
    sidebarSupport: '#f6f6f7',
    logoBackground: '#1f1f1f',
    logoIcon: '#fff',
  },
  // spacing: value => `${value * 4}px`,
};

export const themeViolet = {
  ...defaultTheme,
  logoPath: '#logo-violet',
  colors: {
    background: '#d6d8ff',
    fontColor: '#161616',
    btnBackground: '#fff',
    btnColor: '#161616',
    btnPlus: '#b8bcfd',
    btnPlusHover: '#979CEA',
    btnPrimary: '#5255bc',
    btnPrimaryHover: '#7B7EDE',
    btnSmall: '#ECEDFD',
    inputColor: '#161616',
    inputBorder: '#5255bc66',
    white: '#fff',
    black: '#212121',
    accentColor: '#b8bcfd',
    accentColorHover: '#5255bc',
    logoutIcon: '#fff',
    logoutIconHover: '#B8BCFD',
    logoutText: '#fff',
    sidebarBackground: '#5255bc',
    sidebarTabActive: 'rgba(255, 255, 255, 0.25)',
    sidebarBorder: 'rgba(255, 255, 255, 0.1)',
    sidebarBorder2: '#fff',
    sidebarSupport: 'rgba(236, 237, 253, 0.4)',
    logoBackground: '#ecedfd',
    logoIcon: '#5255bc',
  },
  spacing: value => `${value * 4}px`,
};
