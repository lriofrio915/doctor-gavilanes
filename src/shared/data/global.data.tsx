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
        text: 'Dr. Patricio Gavilanes',
        href: 'https://twitter.com/CVascular_PG',
    },
};

// Header data
export const headerData: HeaderProps = {
    links: [
        /* {
            label: 'Cursos',
            icon: IconChevronDown,
            links: [
                {
                    label: 'Gratuitos',
                    href: '/cursos-freemium',
                },
                {
                    label: 'Premium',
                    href: '/cursos-premium',
                },
            ],
        }, */
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
            text: 'Contacto',
            href: '#contact',
            targetBlank: false,
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
            texts: ['Francisco de Orellana 6-27', 'Cumbayá, Ecuador'],
        },
        {
            title: 'WhatsApp',
            texts: ['099 834 0502'],
        },
        {
            title: 'Horario Laboral',
            texts: ['Previa Cita'],
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