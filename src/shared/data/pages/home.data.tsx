import {
    IconBrandWhatsapp
} from '@tabler/icons-react';

import { HeroProps, SocialProofProps } from '~/shared/types';

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