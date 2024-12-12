// Define global variables
const theme = {
    global: {
        transparentBorder: 'rgba(0, 0, 0, 0.1)',
        semiTransparentBorder: 'rgba(0, 0, 0, 0.2)',
        primaryColor: '#FF4500',
        secondaryColor: '#61DAFB',
        textColor: '#E0E0E0',
        backgroundColor: '#282c34',
        transparentTextShadow: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    contact: {
        containerBg: '#282c34',
        titleFontSize: '2.5rem',
        titleColor: '#FF4500',
        formBg: '#61DAFB',
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
    },
    authorization: {},
    branding: {
        logoBg: '#FFFFFF',
    },
    highlights: {
        yellow: '#FFD700',
        orange: '#FFA500',
        white: '#FFFFFF',
        brightGreen: '#00ff00',
    },
    content: {
        bg: '#61DAFB',
        textColor: '#333333',
    },
    links: {
        color: '#61DAFB',
        hoverBg: '#3A3F47',
        hoverText: '#FFD700',
        visitedColor: '#B86FC4',
        activeColor: '#FFA500',
        activeBg: '#444444',
        activeText: '#FFFFFF',
    },
    profile: {
        bg: '#61DAFB',
        linkColor: '#282c34',
        containerBg: '#61DAFB',
        textColor: '#282c34',
        photoSize: '120px',
        fieldGap: '5px',
        detailsGap: '10px',
        detailsPadding: '15px',
    },
    news: {
        titleFontSize: '2.5rem',
        titleFontSizeMobile: '1.5rem',
        primaryColor: '#FF4500',
        bg: '#FFFFFF',
        boxShadow: '0 4px 8px rgba(97, 218, 251, 0.5)',
        textColor: '#333333',
        highlightColor: '#444444',
        hoverBg: '#282c34',
        hoverTextColor: '#FFFFFF',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        articleBg: '#61DAFB',
        articleHoverBg: '#3A3F47',
        paddingBottom: '20px',
    },
    about: {
        containerBg: '#282c34',
        titleColor: '#FF4500',
        titleFontSize: '2.5rem',
        titleFontSizeMobile: '1.5rem',
        paragraphFontSize: '1.2rem',
        paragraphFontSizeMobile: '1rem',
        paragraphColor: '#E0E0E0',
        highlightColor: '#FFFFFF',
        highlightHoverColor: '#FFD700',
        linkColor: '#61DAFB',
        linkHoverColor: '#FFD700',
    },
    imageBanner: {
        containerBorderRadius: '8px',
        textWrapperPadding: '20px',
        textWrapperColor: '#282c34',
        titleFontSize: '1.8em',
        titleFontSizeMobile: '1.5em',
        titleColor: '#ffffff',
        descriptionFontSize: '1.2em',
        descriptionFontSizeMobile: '1em',
        descriptionColor: '#ffffff',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    },
    home: {
        containerBg: '#282c34',
        welcomeTextColor: '#FF4500',
        welcomeTextFontSize: '2rem',
        welcomeTextFontSizeMobile: '1.5rem',
        bottomSectionMaxWidth: '800px',
        bottomSectionPadding: '20px',
        bottomSectionPaddingMobile: '15px',
        highlightColor: '#FFD700',
        highlightHoverColor: '#FFA500',
    },
    dialogs: {
        containerBg: '#61DAFB',
        userListBg: '#f9f9f9',
        userListBorderColor: 'rgba(0, 0, 0, 0.1)',
        userItemActiveBg: '#FFD700',
        userItemActiveColor: '#FFFFFF',
        userItemInactiveColor: '#000000',
        userItemHoverBg: '#f0f0f0',
        avatarBorderColor: 'rgba(0, 0, 0, 0.2)',
        messageFromMeBg: '#FFD700',
        messageFromMeColor: '#FFFFFF',
        messageFromOtherBg: '#f0f0f0',
        messageFromOtherColor: '#333333',
        noMessagesBg: '#f9f9f9',
        noMessagesColor: '#888888',
    },
    technologies: {
        containerBg: '#61DAFB',
        containerColor: '#282c34',
        listStyleType: 'disc',
        linkColor: '#282c34',
        linkHoverColor: '#FFD700',
        listStylePosition: 'inside',
        responsivePadding: '15px',
        margin: '5px 0',
        responsiveListStyleType: 'none',
        responsiveMargin: '10px 0',
    },
    post: {
        containerBg: '#61DAFB',
        borderColor: '#61DAFB',
        titleColor: '#333',
        descriptionColor: '#666',
        hoverTransform: '-4px',
        transition: 'transform 0.2s ease',
    },
    myPosts: {
        containerGap: '5px',
        postPadding: '16px',
        postBorderColor: '#ddd',
        postBorderRadius: '8px',
        postBgColor: '#fff',
        postHoverTransform: '-4px',
        responsiveGridTemplate: '1fr',
    },
    summarize: {
        containerBg: '#61DAFB',
        containerTextColor: '#282c34',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)',
        imageBg: '#FFFFFF',
        titleColor: '#282c34',
        descriptionColor: '#3A3F47',
        textGap: '10px',
        titleFontSize: '1.5em',
        titleFontSizeMobile: '1.2em',
        descriptionFontSize: '1em',
        descriptionFontSizeMobile: '0.9em',
    },
    spacing: {
        default: '5px',
        medium20: '20px',
        large40: '40px',
        large60: '60px'
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
    },
};

export type Theme = typeof theme;

export default theme;
