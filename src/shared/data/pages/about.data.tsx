import {
    ContactProps,
    FAQsProps,
    FeaturesProps,
    HeroProps,
    StatsProps,
    StepsProps,
    TeamProps,
    TestimonialsProps,
} from '~/shared/types';
import hero2Img from '~/assets/images/hero5.png';
import {
    IconAdjustments,
    IconAward,
    IconBook,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBulb,
    IconCirclesRelation,
    IconClock,
    IconFlame,
    IconHeartHandshake,
    IconHomeEco,
    IconMail,
    IconMapPin,
    IconNumber1,
    IconNumber2,
    IconNumber3,
    IconNumber4,
    IconNumber5,
    IconPalette,
    IconPhoneCall,
    IconPuzzle2,
    IconScale,
    IconThumbUp,
    IconUser,
} from '@tabler/icons-react';

//Hero data on About page *******************
export const heroAbout: HeroProps = {
    title: '¿Quiénes Somos?',
    subtitle:
        'Conoce el perfil profesional y los logros académicos de nuestro médico de cabecera a lo largo de toda su trayectoria.',
};

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
    title: 'Una Trayectoria de Excelencia',
    subtitle:
        'Patricio es un distinguido profesional con una formación académica integral que abarca diversas especialidades médicas y una dedicación constante a la mejora continua. Obtuvo su título de Médico en la Universidad Central del Ecuador en 2010, marcando el inicio de una carrera excepcional.',
    tagline: 'Dr. Patricio Gavilanes',
    callToAction: {
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/patricio-gavilanes-1b1849274/',
        targetBlank: true,
    },
    callToAction2: {
        text: 'WhatsApp',
        href: 'https://api.whatsapp.com/send?phone=+593998340502&text=Saludos%20cordiales%20doctor%20Gavilanes.%20Deseo%20agendar%20una%20cita.',
    },
    image: {
        src: hero2Img,
        alt: 'Dr. Patricio Gavilanes',
    },
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
    id: 'stats-on-about',
    hasBackground: true,
    items: [
        {
            title: 1,
            description: 'Especialización',
        },
        {
            title: 4,
            description: 'Maestrías',
        },
        {
            title: 1,
            description: 'Fellowship',
        },
        {
            title: 3,
            description: 'Diplomados',
        },
    ],
};

// FeaturesFour data on About page *******************
export const featuresFourAbout: FeaturesProps = {
    id: 'features-four-on-about',
    hasBackground: false,
    header: {
        title: 'Misión',
        subtitle:
            'Como cirujano vascular y endovascular, nuestra misión es proporcionar atención médica de alta calidad y compasión a nuestros pacientes. Nos comprometemos a ofrecer tratamientos innovadores y personalizados para abordar una variedad de condiciones vasculares, desde enfermedades arteriales hasta venosas.',
        tagline: 'Misión y Valores',
    },
};

// FeaturesFour data on About page (Two) *******************
export const featuresFourAboutTwo: FeaturesProps = {
    id: 'features-four-on-about-two',
    hasBackground: false,
    header: {
        title: 'Valores',
        subtitle: 'Nuestra prioridad es mejorar la salud y el bienestar de nuestros pacientes.',
    },
    isAfterContent: true,
    columns: 2,
    items: [
        {
            title: 'Excelencia',
            description: 'Buscamos la mejora continua y la actualización constante en las últimas tecnologías y técnicas médicas.',
            icon: IconUser,
        },
        {
            title: 'Compromiso con el paciente',
            description:
                'Escuchamos sus preocupaciones y proporcionamos información clara sobre su condición y tratamientos.',
            icon: IconBulb,
        },
        {
            title: 'Ética profesional',
            description: 'Trabajamos con integridad, transparencia y honestidad en todas nuestras interacciones con los pacientes.',
            icon: IconThumbUp,
        },
        {
            title: 'Colaboración interdisciplinaria',
            description: 'Reconocemos el valor de trabajar en equipo y colaborar estrechamente con otros profesionales.',
            icon: IconAdjustments,
        },
        {
            title: 'Innovación y avance',
            description:
                'Abrazamos la innovación y el avance buscando nuevas formas de mejorar los resultados de los tratamientos.',
            icon: IconHeartHandshake,
        },
        {
            title: 'Empatía',
            description: 'Reconocemos las preocupaciones de nuestros pacientes y nos esforzamos por comprenderlas. ',
            icon: IconHomeEco,
        },
    ],
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
    id: 'steps-on-about',
    hasBackground: true,
    isImageDisplayed: false,
    header: {
        title: 'Medicina & Docencia',
        subtitle:
            'La experiencia desde la parte práctica de la medicina y el complemento teórico en las aulas convierte al médico en un excelente ser humano al servicio de la comunidad.',
        tagline: 'Experiencia',
    },
    items: [
        {
            title: 'Hospital Pediátrico Baca Ortiz',
            description:
                'Médico Especialista en Angiología y Cirugía Vascular. (2023 - actualidad)',
            icon: IconNumber1,
        },
        {
            title: 'Pontificia Universidad Católica del Ecuador',
            description:
                'Docente de posgrado de Cirugía Vascular y Endovascular. (2020 - 2022)',
            icon: IconNumber2,
        },
        {
            title: 'Hospital Provincial General Pablo Arturo Suárez',
            description:
                'Médico Especialista en Angiología y Cirugía Vascular. (2018-2022)',
            icon: IconNumber3,
        },
        /* {
            title: 'Expanding horizons',
            description:
                'Aenean mollis est ac quam viverra, eget dictum justo iaculis. Morbi venenatis neque sed blandit faucibus. Pellentesque sit amet justo at ligula eleifend lacinia. Etiam nec orci quam.',
            icon: IconNumber4,
        },
        {
            title: 'Our ongoing commitment',
            description:
                'Sed vel purus a odio tincidunt mollis. Nam et tortor est. Aliquam sodales interdum tortor ac condimentum. Suspendisse laoreet nulla est, ac luctus est tempus ut.',
            icon: IconNumber5,
        }, */
    ],
};

// Features3 data on About page *******************
export const features3About: FeaturesProps = {
    id: 'featuresThree-on-about',
    hasBackground: false,
    columns: 3,
    header: {
        title: 'Libros & Artículos',
        subtitle:
            'Cada publicación científica es una oportunidad para compartir experiencias y lecciones que benefician a la comunidad médica y a la sociedad en general.',
        tagline: 'Publicaciones',
    },
    items: [
        {
            title: 'Riesgos de Amputación',
            description: 'Es un estudio observacional analítico, retrospectivo de casos y controles que se presenta a continuación.',
            icon: IconCirclesRelation,
        },
        {
            title: 'Síndrome de Budd Chiari',
            description: 'El caso que se presenta a continuación trata de un paciente de 15 años de edad, de género masculino.',
            icon: IconPalette,
        },
        {
            title: 'El Apnea Obstructiva',
            description: 'Se correlaciona con alteraciones cardiovasculares y alteraciones metabólicas.',
            icon: IconBook,
        },
        {
            title: 'Aneurisma Verdadero',
            description: 'Definición e identificación de un aneurisma verdadero de la arteria femoral.',
            icon: IconPuzzle2,
        },
        {
            title: 'Reparación Endovascular',
            description: 'El tratamiento endovascular en la mejor opción terapeútica en pacientes con aneurisma de aorta.',
            icon: IconFlame,
        },
        {
            title: 'Pseudoaneurisma Postrauma',
            description: 'Tratamiento de la arteria auricular en el Hospital Pablo Arturo Suárez. Revista Angiología.',
            icon: IconScale,
        },
    ],
};