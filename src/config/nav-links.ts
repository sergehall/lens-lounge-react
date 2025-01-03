export const RoutePaths = {
    home: '/',
    profile: '/profile',
    dialogs: '/dialogs',
    dialogsContacts: '/dialogs/contacts',
    news: '/news',
    technologies: '/technologies',
    about: '/about',
    contact: '/contact',
} as const;


export interface NavLinkProps {
    name: string;
    url: typeof RoutePaths[keyof typeof RoutePaths];
}

export const navLinks: NavLinkProps[] = [
    { name: 'Home', url: RoutePaths.home },
    { name: 'Profile', url: RoutePaths.profile },
    { name: 'Dialogs', url: RoutePaths.dialogs },
    { name: 'DialogsContacts', url: RoutePaths.dialogsContacts },
    { name: 'News', url: RoutePaths.news },
    { name: 'Technologies', url: RoutePaths.technologies },
    { name: 'About', url: RoutePaths.about },
    { name: 'Contact', url: RoutePaths.contact },
];
