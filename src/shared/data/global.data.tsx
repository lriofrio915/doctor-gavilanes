import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconChevronDown
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
        {
            label: 'Cursos',
            icon: IconChevronDown,
            links: [
                {
                    label: 'Freemium',
                    href: '/cursos-premium',
                },
                {
                    label: 'Premium',
                    href: '/cursos-premium',
                },
            ],
        },
        /* {
            label: 'Inicio',
            href: '/',
        }, */
        {
            label: 'Perfil',
            href: '/perfil',
        },
        {
            label: 'Servicios',
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
            texts: ['Cumbayá', 'Pichincha, Ecuador'],
        },
        {
            title: 'Emergencias',
            texts: ['+593 99 906 1838'],
        },
        {
            title: 'Email',
            texts: ['patriciogavilanes.87@gmail.com'],
        },
    ],
    socials: [
        { label: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/CVascular_PG' },
        { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/cirujano_vascular_y_angiologo/' },
        { label: 'Facebook', icon: IconBrandFacebook, href: 'https://www.facebook.com/patricio.gavilanes.18' },
        { label: 'LinkedIn', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/patricio-gavilanes-1b1849274/' },
    ],
    footNote: (
        <div className="mr-4 text-sm">
            <span className="float-left mr-1.5 h-7 md:h-9 w-5 rounded-sm bg-[url(/logo.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
            Copyright © 2024 {' '}
            <a
                className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
                href="/"
                target="_blank"
            >
                {' '}
                - Dr. Patricio Gavilanes
            </a>
        </div>
    ),
};