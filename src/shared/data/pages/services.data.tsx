import {
    IconArrowsRightLeft,
    IconBrandTailwind,
    IconBrandWhatsapp,
    IconBulb,
    IconChevronsRight,
    IconClipboardHeart,
    IconComponents,
    IconEmergencyBed,
    IconFriends,
    IconHospitalCircle,
    IconListCheck,
    IconRocket,
    IconStretching,
    IconWoman,
} from '@tabler/icons-react';

import {
    CallToActionProps,
    ContentProps,
    FAQsProps,
    FeaturesProps,
    HeroProps,
    TestimonialsProps,
} from '~/shared/types';

import heroImg from '~/assets/images/hero.jpg';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
    title: 'Nuestros Servicios',
    subtitle:
        'Tratamientos avanzados para todos tus problemas vasculares. Expertos en diagnóstico y tratamiento de enfermedades circulatorias. ',
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
    id: 'featuresTwo-on-services',
    header: {
        title: 'Somos Especialistas',
    },
    items: [
        {
            title: 'Anomalías Vasculares en Niños',
            description: 'Las anomalías vasculares pueden ser un reto, pero con el tratamiento adecuado, ¡es posible superarlas!.',
            icon: IconFriends,
        },
        {
            title: 'Tratamiento de Várices Pélvicas',
            description:
                'Endolaser para tratar los cordones venosos dilatados localizados en el interior de la cavidad abdominal que rodean al útero y los ovarios',
            icon: IconWoman,
        },
        {
            title: 'Enfermedad Arterial Periférica',
            description:
                'Sientes dolor al caminar, sensación de frialdad y pérdida de pulso? Es posible que las arterias de tus extremidades estén bloquedas.',
            icon: IconStretching,
        },
        {
            title: 'Trombosis Venosa Profunda',
            description:
                'Este mal silencioso puede ser mortal si no se trata a tiempo. Acude a una cita si tienes hinchazón en las piernas, calambres en la pantorilla.',
            icon: IconEmergencyBed,
        },
        {
            title: 'Pie diabético',
            description:
                "El pie diabético aparece cuando existe niveles inadecuados de glucosa en la sangre y otros factores que concurren con frecuencia en personas con diabetes.",
            icon: IconClipboardHeart,
        },
        {
            title: 'Puerto subcutáneo',
            description:
                'Somos expertos en la colocación de puertos subcutáneos con técnicas mínimamente invasivas en pacientes pdiátricos y adultos.',
            icon: IconHospitalCircle,
        },
    ],
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
    id: 'contentOne-on-services-one',
    hasBackground: false,
    content:
        'Las anomalías vasculares se manifiestan desde temprana edad y pueden permanecer durante toda la vida. ',
    items: [
        {
            title: 'Tumores vasculares benignos',
            description:
                'Los hemangiomas infantiles se ven como una mancha rosada al momento de nacer, proliferan y se estabilizan alrededor de los 4 a 6 meses.',
        },
        {
            title: 'Tumores vasculares localmente agresivos',
            description:
                'El hemangioendotelioma es el tumor vascular localmente agresivo más frecuente en niños y puede poner en riesgo la vida del paciente.',
        },
        {
            title: 'Malformaciones venosas',
            description:
                'Son alteraciones en la morfogénesis de las venas, malformaciones que pueden producir dolor aunque no son anomalías proliferativas. ',
        },
    ],
    image: {
        src: cameraFrontImg,
        alt: 'Colorful Image',
    },
    isReversed: true,
    isAfterContent: false,
};

// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
    id: 'contentOne-on-services-two',
    hasBackground: false,
    content:
        'Las varices pélvicas aparecen con frecuencia en mujeres que han sido madres. Los síntomas más habituales son:',
    items: [
        {
            title: 'Dolor pélvico en la parte del abdomen',
        },
        {
            title: 'Dolor de piernas al estar de pie',
        },
        {
            title: 'Dolor durante la menstruación',
        },
        {
            title: 'Dolor en las relaciones sexuales',
        },
        {
            title: 'Dolor de espalda',
        },
        {
            title: 'Pesadez en las piernas',
        },
    ],
    image: {
        src: cameraBackImg,
        alt: 'Colorful Image',
    },
    isReversed: false,
    isAfterContent: true,
};

// Feature4 data on Services page *******************
export const features4Services: FeaturesProps = {
    id: 'featuresFour-on-services',
    hasBackground: true,
    columns: 2,
    header: {
        title: 'Main Features',
        subtitle:
            'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
    },
    isImageDisplayed: true,
    image: {
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
        alt: 'Hero TailNext',
    },
    items: [
        {
            title: 'Next.Js + Tailwind CSS Integration',
            description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
            icon: IconBrandTailwind,
        },
        {
            title: 'Ready-to-use Components',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            icon: IconComponents,
        },
        {
            title: 'Best Practices',
            description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
            icon: IconListCheck,
        },
        {
            title: 'Excellent Page Speed',
            description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
            icon: IconRocket,
        },
        {
            title: 'Search Engine Optimization (SEO)',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
            icon: IconArrowsRightLeft,
        },
        {
            title: 'Open to new ideas and contributions',
            description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
            icon: IconBulb,
        },
    ],
};

// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
    id: 'testimonials-on-home',
    hasBackground: false,
    isTestimonialUp: true,
    header: {
        title: 'Satisfied Client Experiences',
        subtitle:
            'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
    },
    testimonials: [
        {
            name: 'Silver Jordan',
            job: 'Senior Marketer',
            testimonial: `I had never found it so easy to customize a website. TailNext's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
            image: {
                src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                alt: 'Silver Jordan',
            },
            href: '/',
        },
        {
            name: 'Sarah Johnson',
            job: 'Business Owner',
            testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
            image: {
                src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                alt: 'Sarah Johnson',
            },
            href: '/',
        },
        {
            name: 'Lisa Gordon',
            job: 'Project Manager',
            testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with TailNext.`,
            image: {
                src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                alt: 'Lisa Gordon',
            },
            href: '/',
        },
    ],
    callToAction: {
        targetBlank: true,
        text: 'More testimonials...',
        href: '/',
    },
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
    id: 'faqs-on-services',
    hasBackground: true,
    header: {
        title: 'Answers to Common Queries',
        subtitle:
            'Etiam laoreet mi eros, vitae iaculis mi egestas blandit. Sed nisl diam, congue sed justo et, cursus sollicitudin ligula.',
    },
    columns: 1,
    items: [
        {
            title: 'Can I customize the templates to match my brand?',
            description: `Ut accumsan, massa at sagittis maximus, libero justo rhoncus metus, quis finibus neque justo quis nisi. Suspendisse sed sapien et justo iaculis faucibus.`,
            icon: IconChevronsRight,
        },
        {
            title: 'What if I need help customizing the template?',
            description: `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent imperdiet ultricies ex consequat egestas.`,
            icon: IconChevronsRight,
        },
        {
            title: 'Are there setup guides available?',
            description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
            icon: IconChevronsRight,
        },
        {
            title: 'Can I hire you for template customization?',
            description: `Phasellus est quam, mollis tincidunt dictum pulvinar, tempor vel justo. Mauris eu lobortis leo. Proin pretium arcu lectus, a mattis nisi fermentum quis.`,
            icon: IconChevronsRight,
        },
    ],
};

// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
    id: 'callToAction-on-services',
    hasBackground: false,
    title: 'Atención Médica Especializada',
    subtitle:
        'Nuestro horario laboral es bajo previa cita. Comunícate con nostros y agendamos el día y hora de tu consulta.',
    callToAction: {
        text: 'Agendar',
        href: 'https://api.whatsapp.com/send?phone=+593998340502&text=Saludos%20cordiales%20doctor%20Gavilanes.%20Deseo%20agendar%20una%20cita.',
        icon: IconBrandWhatsapp,
        targetBlank: true,
    },
};