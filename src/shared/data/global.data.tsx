import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
    title: 'Medicina Vascular',
    callToAction: {
        text: 'Pon tu salud al cuidado de manos profesionales.',
        href: '/',
    },
    callToAction2: {
        text: 'Síguenos @onWidget en X',
        href: '/',
    },
};

// Header data
export const headerData: HeaderProps = {
    links: [
        /* {
            label: 'Pages',
            icon: IconChevronDown,
            links: [
                {
                    label: 'Services',
                    href: '/services',
                },
                {
                    label: 'Pricing',
                    href: '/pricing',
                },
                {
                    label: 'About us',
                    href: '/about',
                },
                {
                    label: 'Contact us',
                    href: '/contact',
                },
                {
                    label: 'FAQs',
                    href: '/faqs',
                },
                {
                    label: 'Terms & Conditions',
                    href: '/terms',
                },
                {
                    label: 'Privacy Policy',
                    href: '/privacy',
                },
            ],
        }, */
        {
            label: 'Inicio',
            href: '/',
        },
        {
            label: 'Perfil',
            href: '/perfil',
        },
        {
            label: 'Servicio',
            href: '/servicios',
        },
        {
            label: 'Blog',
            href: '/blog',
        },
    ],
    actions: [
        {
            text: 'Agendar',
            href: '/',
            targetBlank: true,
        },
    ],
    isSticky: true,
    showToggleTheme: true,
    showRssFeed: false,
    position: 'right',
};

// Footer data
/* export const footerData: FooterProps = {
    title: 'Medicina Vascular',
    links: [
        {
            label: 'Términos & Condiciones',
            href: '/terminos',
        },
        {
            label: 'Politica de Privacidad',
            href: '/privacidad',
        },
    ],
    columns: [
        {
            title: 'Product',
            links: [
                {
                    label: 'Features',
                    href: '/',
                },
                {
                    label: 'Security',
                    href: '/',
                },
                {
                    label: 'Team',
                    href: '/',
                },
                {
                    label: 'Enterprise',
                    href: '/',
                },
                {
                    label: 'Customer stories',
                    href: '/',
                },
                {
                    label: 'Pricing',
                    href: '/pricing',
                },
                {
                    label: 'Resources',
                    href: '/',
                },
            ],
        },
        {
            title: 'Platform',
            links: [
                {
                    label: 'Developer API',
                    href: '/',
                },
                {
                    label: 'Partners',
                    href: '/',
                },
            ],
        },
        {
            title: 'Support',
            links: [
                {
                    label: 'Docs',
                    href: '/',
                },
                {
                    label: 'Community Forum',
                    href: '/',
                },
                {
                    label: 'Professional Services',
                    href: '/',
                },
                {
                    label: 'Skills',
                    href: '/',
                },
                {
                    label: 'Status',
                    href: '/',
                },
            ],
        },
        {
            title: 'Company',
            links: [
                {
                    label: 'About',
                    href: '/',
                },
                {
                    label: 'Blog',
                    href: '/blog',
                },
                {
                    label: 'Careers',
                    href: '/',
                },
                {
                    label: 'Press',
                    href: '/',
                },
                {
                    label: 'Inclusion',
                    href: '/',
                },
                {
                    label: 'Social Impact',
                    href: '/',
                },
                {
                    label: 'Shop',
                    href: '/',
                },
            ],
        },
    ],
    socials: [
        { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
        { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
        { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    ],
    footNote: (
        <div className="mr-4 text-sm dark:text-slate-400">
            <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
            Copyright © 2024{' '}
            <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
                {' '}
                - Dr. Patricio Gavilanes
            </a>
        </div>
    ),
}; */

// Footer2 data
export const footerData2: FooterProps = {
    links: [
        {
            label: 'Términos & Condiciones',
            href: '/terminos',
        },
        {
            label: 'Politica de Privacidad',
            href: '/privacidad',
        },
    ],
    columns: [
        {
            title: 'Dirección',
            texts: ['51 Phasellus Avenue Maecenas', 'Aliquam, AQ 52098'],
        },
        {
            title: 'Teléfono',
            texts: ['Emergencias: +593 99 906 1838', 'Citas: +593 99 906 1838'],
        },
        {
            title: 'Email',
            texts: ['Consultorio: patriciogavilanes.87@gmail.com'],
        },
    ],
    socials: [
        { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
        { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
        { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
        { label: 'LinkedIn', icon: IconBrandLinkedin, href: '#' },
    ],
    footNote: (
        <div className="mr-4 text-sm">
            <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
            Copyright © 2024 {' '}
            <a
                className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
                href="/"
            >
                {' '}
                - Dr. Patricio Gavilanes
            </a>
        </div>
    ),
};