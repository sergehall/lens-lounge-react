const theme = {
  global: {
    transparentBorder: 'rgba(0, 0, 0, 0.1)',
    semiTransparentBorder: 'rgba(0, 0, 0, 0.2)',
    secondaryColor: '#61DAFB',
    backgroundColor: '#282c34',
    borderColor: '#444444',
    transparentTextShadow: 'rgba(0, 0, 0, 0.5)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    boxShadowBackgroundColor: '0 4px 8px rgba(40, 44, 52, 0.2)',
    boxShadowNeon: '0 0 5px 2px rgba(97, 218, 251, 0.7)',
    boxShadowNeonShort: '0 0 3px 1px rgba(97, 218, 251, 0.9)',
    boxShadowGlowOnSecondaryColor: '0 0 5px #0d2b3d, 0 0 10px #0d2b3d, 0 0 20px #61dafb',
  },
  highlights: {
    red: '#FF0000',
    yellow: '#FFD700',
    orange: '#FFA500',
    white: '#FFFFFF',
    brightGreen: '#00ff00',
    orangeRed: '#FF4500',
    lightGray: '#dddddd',
  },
  alert: {
    warningColor: '#FF0000',
  },

  text: {
    // Base & core colors
    white: '#FFFFFF',
    lightGray: '#F0F0F0',
    light: '#CCCCCC',
    muted: '#AAAAAA',
    softWhite: '#E0E0E0',
    colorDarkCharcoalBlue: '#282c34',
    colorDarkGray: '#333333',
    slateGray: '#6c757d',

    // Font sizes
    fontSize: {
      default: '1.2rem',
      title: '2rem',
      mobileTitle: '1.5rem',
      contact: '1rem',
      metaPost: '0.7rem',
    },

    // Typography settings
    lineHeight: '1.6',
  },
  border: {
    borderSecondaryColor: '2px solid #61dafb',
    borderRadius: '8px',
  },
  buttons: {
    primaryBg: '#0095F6',
    primaryText: '#ffffff',
    primaryHoverBg: '#1877f2',
  },
  contact: {
    inputBorderColor: 'rgba(0, 0, 0, 0.2)',
    inputFocusBorderColor: '#FF4500',
    buttonBg: '#FF4500',
    buttonHoverBg: '#FFD700',
    textColor: '#E0E0E0',
    titleFontSizeMobile: '1.5rem',
  },
  header: {
    navBg: '#282c34',
    textColor: '#FFFFFF',
    logoBoxShadow:
      '0 0 20px rgba(97, 218, 251, 0.9),\n    0 0 40px rgba(97, 218, 251, 0.7),\n    0 0 60px rgba(97, 218, 251, 0.5);',
  },
  authorization: {
    boxShadow: '0 0 10px #61DAFB, 0 0 20px #61DAFB',
  },
  links: {
    color: '#61DAFB',
    hoverBg: '#3A3F47',
    hoverColor: '#FFD700',
    visitedColor: '#B86FC4',
    activeColor: '#FFA500',
    activeBg: '#444444',
    activeText: '#FFFFFF',
  },
  profile: {
    photoSize: '140px',
    fieldGap: '5px',
    detailsGap: '5px',
    detailsPadding: '10px',
  },
  news: {
    titleFontSize: '2.5rem',
    titleFontSizeMobile: '1.5rem',
    boxShadow: '0 4px 8px rgba(97, 218, 251, 0.5)',
    highlightColor: '#444444',
    hoverTextColor: '#FFFFFF',
    articleHoverBg: '#3A3F47',
    paddingBottom: '20px',
  },
  about: {
    titleFontSize: '2.5rem',
    titleFontSizeMobile: '1.5rem',
    paragraphFontSize: '1.2rem',
    paragraphFontSizeMobile: '1rem',
    aboutSectionMaxWidth: '800px',
    aboutSectionPadding: '20px',
    aboutSectionPaddingMobile: '15px',
  },
  imageBanner: {
    containerBorderRadius: '8px',
    textWrapperPadding: '20px',
    titleFontSize: '1.2em',
    titleFontSizeMobile: '1.5em',
    descriptionFontSize: '1em',
    descriptionFontSizeMobile: '1em',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  },
  home: {
    bottomSectionMaxWidth: '800px',
    bottomSectionPadding: '20px',
    bottomSectionPaddingMobile: '15px',
  },
  dialogs: {
    userListBorderColor: 'rgba(255, 255, 255, 0.1)',
    userBgActiveColor: '#1C6F99',
    userItemActiveColor: '#282c34',
    userItemInactiveColor: '#000000',
    messageFromOtherBg: '#f0f0f0',
    noMessagesBg: '#f9f9f9',
    noMessagesColor: '#888888',
    transparentBg: 'transparent',
    boxShadowNeonShortWhite:
      '0 0 2px 1px rgba(255, 255, 255, 1), 0 0 8px 4px rgba(220, 240, 255, 0.7)',
    boxShadowNeonShortWhiteSmall:
      '0 0 1px 0.5px rgba(255, 255, 255, 1), 0 0 4px 2px rgba(220, 240, 255, 0.7)',
    boxShadowNeonShortBlue:
      '0 0 4px 2px rgba(28, 111, 153, 1), 0 0 10px 5px rgba(28, 111, 153, 0.8)',
    boxShadowNeonShortBlueSmall:
      '0 0 2px 1px rgba(28, 111, 153, 1), 0 0 5px 2.5px rgba(28, 111, 153, 0.8)',
  },
  contacts: {
    userListBorderColor: 'rgba(255, 255, 255, 0.1)',
    userBgActiveColor: '#1C6F99',
    userItemActiveColor: '#282c34',
    userItemInactiveColor: '#000000',
    noContactsColor: 'Red',
    noContactsBg: '#61DAFB',
  },
  technologies: {
    listStyleType: 'disc',
    listStylePosition: 'inside',
    responsivePadding: '15px',
    margin: '5px 0',
    responsiveListStyleType: 'none',
    responsiveMargin: '10px 0',
  },
  post: {
    hoverTransform: '-4px',
    transition: 'transform 0.2s ease',
  },
  myPosts: {
    containerGap: '5px',
    postPadding: '16px',
    postBorderRadius: '8px',
    postHoverTransform: '-4px',
    responsiveGridTemplate: '1fr',
  },
  summarize: {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)',
    textGap: '10px',
    titleFontSize: '1.5em',
    titleFontSizeMobile: '1.2em',
    descriptionFontSize: '1em',
    descriptionFontSizeMobile: '0.9em',
  },
  spacing: {
    default: '5px',
    small10: '10px',
    medium20: '20px',
    large40: '40px',
    large60: '60px',
  },
  stance: {
    logoBackgroundB4B: `linear-gradient(
            180deg,
            #FFFFFF 0%,
            #FFFFFF 25%,
            #FF4500 40%,
            #FF4500 60%,
            #FFFFFF 75%,
            #FFFFFF 100%
        )`,
    logoBackgroundCircle: `radial-gradient(
            circle,
                #282c34 0%, 
                #282c34 20%, 
                #61DAFB 60%, 
                #61DAFB 100%  
            )`,
  },
  tile: {
    height: '300px',
    mobileTile: '200px',
  },
};

export type Theme = typeof theme;

export default theme;
