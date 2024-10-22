interface NavLink {
    name: string;
    url: string;
}

export const navLinks: NavLink[] = [
    { name: 'Home', url: '/' },
    { name: 'Content', url: '/content' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
];
