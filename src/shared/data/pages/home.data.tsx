import {
    IconBrandWhatsapp, IconBrandTailwind, IconComponents, IconListCheck, IconRocket, IconArrowsRightLeft, IconBulb

} from '@tabler/icons-react';

import { HeroProps, SocialProofProps, FeaturesProps } from '~/shared/types';

import cirugiaLogo from '~/assets/images/cirugia-logo.png';
import doctorLogo from '~/assets/images/doctor-logo.png';
import estetoscopioLogo from '~/assets/images/estetoscopio-logo.png';
import heroImg from '~/assets/images/hero.jpg';
import hospitalLogo from '~/assets/images/hospital-logo.png';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
    title: (
        <>
            Angiología y Cirugía Vascular
        </>
    ),
    subtitle: (
        <>
            <span className="hidden md:inline">
                <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
                    Dedicación incansable
                </span>{' '}
                por la salud de todos mis pacientes.
            </span>{' '}
            Mi compromiso es proporcionar cuidado excepcional, basado en años de formación académica y experiencia clínica especializada.
        </>
    ),
    callToAction: {
        text: 'Agendar Cita',
        href: 'https://api.whatsapp.com/send?phone=+593999061838&text=Saludos%20cordiales%20doctor.%20Deseo%20agendar%20una%20cita.',
        icon: IconBrandWhatsapp,
        targetBlank: true,
    },
    /* callToAction2: {
        text: 'Learn more',
        href: '/',
    }, */
    image: {
        src: heroImg,
        alt: 'Hero TailNext',
    },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
    id: 'socialProof-on-home',
    hasBackground: false,
    images: [
        {
            /* link: '', */
            src: doctorLogo,
            alt: 'doctor',
        },
        {
            /* link: '', */
            src: hospitalLogo,
            alt: 'hospital',
        },
        {
            /* link: '', */
            src: estetoscopioLogo,
            alt: 'estetoscopio',
        },
        {
            /* link: '', */
            src: cirugiaLogo,
            alt: 'cirugia',
        },
    ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
    id: 'features-on-home',
    hasBackground: false,
    columns: 3,
    header: {
        title: (
            <>
                What you get with <span className="whitespace-nowrap">TailNext</span>
            </>
        ),
        subtitle:
            "Elevating Your Digital Presence: Discover the Synergies Unleashed in Our Platform's Core Strengths, from Seamless Integration to Open Collaboration.",
        tagline: 'Features',
    },
    items: [
        {
            title: 'Next.Js + Tailwind CSS Integration',
            description:
                'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
            icon: IconBrandTailwind,
            callToAction: {
                text: 'Discover now',
                href: '/',
            },
        },
        {
            title: 'Ready-to-use Components',
            description:
                'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
            icon: IconComponents,
            callToAction: {
                text: 'Discover now',
                href: '/',
            },
        },
        {
            title: 'Best Practices',
            description:
                'By prioritizing maintainability and scalability through coding standards and design principles, your website stays robust and efficient.',
            icon: IconListCheck,
            callToAction: {
                text: 'Discover now',
                href: '/',
            },
        },
        {
            title: 'Excellent Page Speed',
            description:
                'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
            icon: IconRocket,
            callToAction: {
                text: 'Discover now',
                href: '/',
            },
        },
        {
            title: 'Search Engine Optimization (SEO)',
            description:
                "Boost online visibility with our SEO-friendly website. Effective strategies and practices enhance your website's search engine ranking, making it easier for users to find your content.",
            icon: IconArrowsRightLeft,
            callToAction: {
                text: 'Discover now',
                href: '/',
            },
        },
        {
            title: 'Open to new ideas and contributions',
            description:
                'We welcome new ideas and contributions to our platform. Whether you have feature suggestions, want to contribute code, or share insights, our platform is open for collaboration.',
            icon: IconBulb,
            callToAction: {
                text: 'Discover now',
                href: '/',
            },
        },
    ],
};
