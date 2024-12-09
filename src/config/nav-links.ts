export interface NavLinkProps {
    name: string;
    url: string;
}

export const navLinks: NavLinkProps[] = [
    { name: 'Home', url: '/' },
    { name: 'Profile', url: '/profile' },
    { name: 'Messages', url: '/messages' },
    { name: 'News', url: '/news' },
    { name: 'Technologies', url: '/technologies' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
];
