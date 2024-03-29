import {
    IconBrandWhatsapp, IconFriends, IconWoman, IconStretching, IconEmergencyBed, IconHospitalCircle, IconClipboardHeart, IconMapPin, IconPhoneCall, IconClock

} from '@tabler/icons-react';

import { HeroProps, SocialProofProps, FeaturesProps, ContentProps, TestimonialsProps, FAQsProps, ContactProps } from '~/shared/types';

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
import doctorContactoImg from '~/assets/images/hero4.png';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
    title: (
        <>
            Angiología y Cirugía Vascular
        </>
    ),
    subtitle: (
        <>
            <span className="md:inline">
                <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
                    El compromiso
                </span>{' '}
                con todos mis pacientes es proporcionar cuidado excepcional,
            </span>{' '}
            basado en años de formación académica y experiencia clínica especializada.
        </>
    ),
    callToAction: {
        text: 'Agendar Cita',
        href: 'https://api.whatsapp.com/send?phone=+593998340502&text=Saludos%20cordiales%20doctor.%20Deseo%20agendar%20una%20cita.',
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
    header: {
        title: 'VANGUARDISTA',
        tagline: 'EXCELENCIA PROFESIONAL',
    },
    hasBackground: true,
    content:
        'Tu salud vascular es nuestra prioridad. Nuestros diagnosticos son precisos y los tratamientos personalizados, utilizamos tecnología de vanguardia y nos enfocamos en el cuidado integral',
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
        title: 'Preguntas Frecuentes',
        subtitle:
            'Conoce las preguntas más frecuentes que nos hacen nuestros pacientes, y si tienes alguna en particular no dudes en ponerte en contacto inmediatamente.',
        tagline: 'INFORMACIÓN',
    },
    items: [
        {
            title: '¿Qué es la enfermedad arterial periférica (EAP)?',
            description: `También conocida como EAP, es un trastorno circulatorio en el que las arterias que suministran sangre a las piernas y los pies se estrechan o se bloquean debido a la acumulación de placa. Esto puede causar dolor al caminar, calambres en las piernas, úlceras en los pies y aumentar el riesgo de problemas cardiovasculares graves.`,
        },
        {
            title: '¿Cuáles son los síntomas de un aneurisma y cómo se diagnostica?',
            description: `Los síntomas de un aneurisma pueden variar dependiendo de su ubicación, pero pueden incluir dolor repentino e intenso en el área afectada, latidos anormales, dolor abdominal o en el pecho. Se pueden utilizar pruebas de diagnóstico como ecografías, tomografías computarizadas (TC) o resonancias magnéticas (RM) para confirmar la presencia de un aneurisma.`,
        },
        {
            title: "¿Cómo se tratan las varices y cuándo debo considerar la cirugía?",
            description: `El tratamiento de las varices puede incluir cambios en el estilo de vida, como el ejercicio regular y elevar las piernas, así como el uso de medias de compresión. En casos más graves, pueden realizarse procedimientos médicos como la escleroterapia o la ablación endovenosa. La cirugía puede considerarse si los síntomas son graves o si hay complicaciones como úlceras o trombosis.`,
        },
        {
            title: "¿Qué es una trombosis venosa profunda (TVP) y cómo se previene?",
            description: `La trombosis venosa profunda es la formación de coágulos de sangre en las venas profundas, generalmente en las piernas. Para prevenir la TVP, es importante mantenerse activo, mover las piernas regularmente, evitar estar sentado o de pie por largos períodos, mantener un peso saludable y usar medias de compresión si es necesario.`,
        },
        {
            title: '¿Cuáles son los riesgos asociados con la cirugía vascular?',
            description: `Los riesgos de la cirugía vascular pueden incluir infección, sangrado, coágulos de sangre, daño a los nervios o tejidos circundantes, reacciones alérgicas a la anestesia y complicaciones relacionadas con el corazón o los pulmones. Sin embargo, muchos procedimientos se realizan de manera segura y con bajos riesgos cuando se llevan a cabo por un cirujano vascular experimentado.`,
        },
        {
            title: '¿Qué puedo hacer para mejorar mi circulación sanguínea en casa?',
            description: `Para mejorar la circulación sanguínea en casa, se recomienda mantener un estilo de vida saludable que incluya una dieta balanceada, ejercicio regular, evitar el tabaco y reducir el estrés. Además, es importante mantener las extremidades elevadas cuando sea posible, usar ropa cómoda y evitar temperaturas extremadamente frías o calientes que puedan afectar la circulación.`,
        },
    ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
    hasBackground: true,
    header: {
        title: 'Comunícate Hoy',
        subtitle: 'Pondremos punto final a tus dolencias vasculares.',
        tagline: 'Contacto',
    },
    content:
        'Visítanos en cualquiera de nuestros consultorios médicos para dar solución definitiva a tus  dolencias vasculares. Llena el siguiente formulario y procederemos a comunicarnos contigo.',
    /* items: [
        {
            title: 'Dirección',
            description: ['Francisco de Orellana 6-27', 'Cumbayá, Ecuador'],
            icon: IconMapPin,
        },
        {
            title: 'Contacto',
            description: ['WhatsApp: 099 834 0502', 'Mail: patriciogavilanes.87@gmail.com'],
            icon: IconPhoneCall,
        },
        {
            title: 'Horario laboral',
            description: ['Previa Cita'],
            icon: IconClock,
        },
    ], */
    form: {
        title: 'Completa los siguientes datos',
        inputs: [
            {
                type: 'text',
                name: 'name',
                autocomplete: 'off',
                placeholder: 'Tu nombre',
            },
            {
                type: 'number',
                name: 'number',
                autocomplete: 'on',
                placeholder: 'Tu número de WhatsApp',
            },
        ],
        textarea: {
            cols: 30,
            rows: 5,
            name: 'textarea',
            placeholder: 'Escribe aquí el motivo de tu consulta...',
        },
        btn: {
            title: 'Enviar',
            type: 'submit',
        },
    },
    image: {
        src: doctorContactoImg,
        alt: 'doctor gavilanes',
    },
};