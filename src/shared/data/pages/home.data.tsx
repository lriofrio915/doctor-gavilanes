import {
    IconBrandWhatsapp, IconFriends, IconWoman, IconStretching, IconEmergencyBed, IconHospitalCircle, IconClipboardHeart

} from '@tabler/icons-react';

import { HeroProps, SocialProofProps, FeaturesProps, ContentProps } from '~/shared/types';

import cirugiaLogo from '~/assets/images/cirugia-logo.png';
import doctorLogo from '~/assets/images/doctor-logo.png';
import estetoscopioLogo from '~/assets/images/estetoscopio-logo.png';
import heroImg from '~/assets/images/hero.jpg';
import hospitalLogo from '~/assets/images/hospital-logo.png';
import doctorImg from '~/assets/images/hero5.png';

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
        alt: 'medical profesional',
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
                Atenciones <span className="whitespace-nowrap">Médicas</span>
            </>
        ),
        subtitle:
            "Diagnóstico, tratamiento y control de las enfermedades que afectan a los vasos sanguíneos.",
        tagline: 'Servicios',
    },
    items: [
        {
            title: 'Anomalías Vasculares en Niños',
            description:
                'Las anomalías vasculares pueden ser un reto, pero con el tratamiento adecuado, ¡es posible superarlas!.',
            icon: IconFriends,
            callToAction: {
                text: 'Leer más',
                href: '/',
            },
        },
        {
            title: 'Tratamiento de Várices Pélvicas',
            description:
                'Endolaser para tratar los cordones venosos dilatados localizados en el interior de la cavidad abdominal que rodean al útero y los ovarios',
            icon: IconWoman,
            callToAction: {
                text: 'Leer más',
                href: '/',
            },
        },
        {
            title: 'Enfermedad Arterial Periférica',
            description:
                'Sientes dolor al caminar, sensación de frialdad y pérdida de pulso? Es posible que las arterias de tus extremidades estén bloquedas.',
            icon: IconStretching,
            callToAction: {
                text: 'Leer más',
                href: '/',
            },
        },
        {
            title: 'Trombosis Venosa Profunda',
            description:
                'Este mal silencioso puede ser mortal si no se trata a tiempo. Acude a una cita si tienes hinchazón en las piernas, calambres en la pantorilla.',
            icon: IconEmergencyBed,
            callToAction: {
                text: 'Leer más',
                href: '/',
            },
        },
        {
            title: 'Pie diabético',
            description:
                "El pie diabético aparece cuando existe niveles inadecuados de glucosa en la sangre y otros factores que concurren con frecuencia en personas con diabetes.",
            icon: IconClipboardHeart,
            callToAction: {
                text: 'Leer más',
                href: '/',
            },
        },
        {
            title: 'Puerto subcutáneo',
            description:
                'Somos expertos en la colocación de puertos subcutáneos con técnicas mínimamente invasivas en pacientes pdiátricos y adultos.',
            icon: IconHospitalCircle,
            callToAction: {
                text: 'Leer más',
                href: '/',
            },
        },
    ],
};

export const contentHomeTwo: ContentProps = {
    id: 'contentOne-on-home-two',
    hasBackground: true,
    content:
      'Porque tu salud vascular es nuestra prioridad. Nuestros diagnosticos son precisos y los tratamientos personalizados, utilizamos tecnología de vanguardia y nos enfocamosen el cuidado integral',
    items: [
      {
        title: 'Más de 10 años de experiencia en hospitales de prestigio',
      },
      {
        title: 'Enfoque 100% centrado en el paciente',
      },
      {
        title: 'Comprometidos con tu bienestar vascular a largo plazo',
      },
      {
        title: 'Alta experiencia y tayectoria como cirujano vascular y endovascular',
      },
      {
        title: 'Trabajamos con técnicas mínimamente invasivas',
      },
      {
        title: 'Somos expertos en el manejo de varices',
      },
    ],
    image: {
      src: doctorImg,
      alt: 'Colorful Image',
    },
    isReversed: true,
    isAfterContent: true,
  };
