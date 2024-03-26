import {
    IconBrandWhatsapp, IconFriends, IconWoman, IconStretching, IconEmergencyBed, IconHospitalCircle, IconClipboardHeart

} from '@tabler/icons-react';

import { HeroProps, SocialProofProps, FeaturesProps, ContentProps, TestimonialsProps, FAQsProps } from '~/shared/types';

import cirugiaLogo from '~/assets/images/cirugia-logo.png';
import doctorLogo from '~/assets/images/doctor-logo.png';
import estetoscopioLogo from '~/assets/images/estetoscopio-logo.png';
import heroImg from '~/assets/images/hero.jpg';
import hospitalLogo from '~/assets/images/hospital-logo.png';
import doctorImg from '~/assets/images/hero5.png';
import taliaTestimonio from '~/assets/images/taliaTestimonio.jpg';
import saraTestimonio from '~/assets/images/saraTestimonio.jpg';
import karenTestimonio from '~/assets/images/karenTestimonio.jpg';
import lisaTestimonio from '~/assets/images/lisaTestimonio.jpg';
import kevinTestimonio from '~/assets/images/kevinTestimonio.jpg';
import jordanTestimonio from '~/assets/images/jordanTestimonio.jpg';

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

// Contenido data on Home page *******************
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

// Testimonios data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
    id: 'testimonials-on-home',
    hasBackground: true,
    header: {
        title: 'Escuchamos a nuestros pacientes',
        subtitle:
            'Nuestro enfoque primordial es en el paciente, nos caracterizamos por nuestra calidad profesional y sobre todo por nuestra calidad humana.',
    },
    testimonials: [
        {
            name: 'Talia Q.',
            job: 'Profesora',
            testimonial: `Paso largas horas de pie en el aula, lo que me causaba molestias en las piernas. Gracias al tratamiento con el Dr. Gavilanes, mis problemas de circulación han mejorado significativamente. Ahora puedo seguir enseñando con comodidad y sin molestias.`,
            image: {
                src: taliaTestimonio,
                alt: 'Talia',
            },
            href: '/',
        },
        {
            name: 'Jordan L.',
            job: 'Mecánico',
            testimonial: `El tratamiento fue muy efectivo y la atención personalizada, alivió mis síntomas y me permitió volver a trabajar con energía renovada.`,
            image: {
                src: jordanTestimonio,
                alt: 'Jordan',
            },
            href: '/',
        },
        {
            name: 'Karen A.',
            job: 'Nutricionista',
            testimonial: `Como nutricionista, sé lo importante que es cuidar nuestra salud. El Dr. Gavilanes me ayudó a abordar mis problemas vasculares con un enfoque integral que complementa mi estilo de vida saludable.`,
            image: {
                src: karenTestimonio,
                alt: 'Karen',
            },
            href: '/',
        },
        {
            name: 'Sara M.',
            job: 'Chef',
            testimonial: `Gracias al tratamiento del Dr. Gavilanes, mis problemas de venas varicosas han mejorado notablemente. Ahora puedo continuar deleitando a mis comensales con platos deliciosos y sin molestias.`,
            image: {
                src: saraTestimonio,
                alt: 'Sara',
            },
            href: '/',
        },
        {
            name: 'Kevin V.',
            job: 'Ingeniero en Sistemas',
            testimonial: `Por un largo tiempo descuidé mi salud hasta que el dolor de piernas fue insoportable, gracias al doctor estoy nuevamente realizando mis actividades con normalidad.`,
            image: {
                src: kevinTestimonio,
                alt: 'Kevin',
            },
            href: '/',
        },
        {
            name: 'Lisa G.',
            job: 'Odontóloga',
            testimonial: `Agradezco al doctor Gavilanes su oportuno tratamiento para aliviar con mis síntomas y dar soluciones oportunas a dolencias que sufría hace algunos años atrás, me siento muy agradecida.`,
            image: {
                src: lisaTestimonio,
                alt: 'Lisa',
            },
            href: '/',
        },
    ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
    id: 'faqsTwo-on-home',
    hasBackground: false,
    header: {
        title: 'Frequently Asked Questions',
        subtitle:
            'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
        tagline: 'FAQS',
    },
    items: [
        {
            title: 'What do I need to start?',
            description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
            title: 'How to install the NextJS + Tailwind CSS template?',
            description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
            title: "What's something that you completely don't understand?",
            description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
            title: "What's an example of when you changed your mind?",
            description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
            title: 'What is something that you would really like to try again?',
            description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
            title: 'If you could only ask one question to each person you meet, what would that question be?',
            description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
    ],
};