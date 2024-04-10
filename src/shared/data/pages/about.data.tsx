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

// Features data on About page *******************
export const featuresAbout: FeaturesProps = {
    id: 'features-on-about',
    hasBackground: true,
    header: {
        title: 'Our record of excellence',
        subtitle:
            'Etiam lobortis elementum ornare. Vestibulum lacinia magna ut eleifend facilisis. Cras ac mi nec diam auctor dictum.',
        tagline: 'Achievements',
    },
    columns: 1,
    items: [
        {
            title: 'Global recognition',
            description:
                'Nullam porttitor lacus elit, sed pellentesque eros aliquam eget. Phasellus interdum placerat enim sed vehicula. Ut tincidunt, magna in iaculis maximus, lectus ante dignissim neque, imperdiet sodales enim augue a quam.',
            icon: IconAward,
        },
        {
            title: 'Innovator of the year award',
            description:
                'Cras mollis elit massa, vel interdum libero molestie a. Nulla facilisi. Suspendisse cursus non sapien ut tincidunt. Sed non tortor sit amet nisl tristique facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            icon: IconAward,
        },
        {
            title: 'Sustainability award',
            description:
                'Sed non tortor sit amet nisl tristique facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent in tempor orci. Vestibulum velit justo, dignissim quis nisl nec, scelerisque ultrices mi sapien diam quis elit.',
            icon: IconAward,
        },
    ],
};

// Team data on About page *******************
export const teamAbout: TeamProps = {
    id: 'team-on-about',
    hasBackground: false,
    header: {
        title: 'Meet our executive team',
        subtitle:
            'Proin quis neque vehicula, sagittis felis ut, scelerisque mi. Nullam consequat, erat eu luctus sodales, ipsum tellus facilisis magna, eu condimentum lectus.',
        tagline: 'team',
    },
    teams: [
        {
            name: 'John Peterson',
            occupation: 'Founder & CEO',
            image: {
                src: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
                alt: 'John Peterson',
            },
            items: [
                {
                    title: 'Know more on Twitter',
                    icon: IconBrandTwitter,
                    href: '#',
                },
                {
                    title: 'Know more on Linkedin',
                    icon: IconBrandLinkedin,
                    href: '#',
                },
                {
                    title: 'Contact by email',
                    icon: IconMail,
                    href: '#',
                },
            ],
        },
        {
            name: 'Sarah Mitchell',
            occupation: 'Chief Creative Officer',
            image: {
                src: 'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
                alt: 'Sarah Mitchell',
            },
            items: [
                {
                    title: 'Know more on Twitter',
                    icon: IconBrandTwitter,
                    href: '#',
                },
                {
                    title: 'Know more on Linkedin',
                    icon: IconBrandLinkedin,
                    href: '#',
                },
                {
                    title: 'Contact by email',
                    icon: IconMail,
                    href: '#',
                },
            ],
        },
        {
            name: 'David Foster',
            occupation: 'Chief Technology Officer',
            image: {
                src: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80',
                alt: 'David Foster',
            },
            items: [
                {
                    title: 'Know more on Twitter',
                    icon: IconBrandTwitter,
                    href: '#',
                },
                {
                    title: 'Know more on Linkedin',
                    icon: IconBrandLinkedin,
                    href: '#',
                },
                {
                    title: 'Contact by email',
                    icon: IconMail,
                    href: '#',
                },
            ],
        },
        {
            name: 'Mary Smith',
            occupation: 'Chief Marketing Office',
            image: {
                src: 'https://images.unsplash.com/photo-1607503873903-c5e95f80d7b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
                alt: 'Mary Smith',
            },
            items: [
                {
                    title: 'Know more on Twitter',
                    icon: IconBrandTwitter,
                    href: '#',
                },
                {
                    title: 'Know more on Linkedin',
                    icon: IconBrandLinkedin,
                    href: '#',
                },
                {
                    title: 'Contact by email',
                    icon: IconMail,
                    href: '#',
                },
            ],
        },
        {
            name: 'Michael Turner',
            occupation: 'Chief Financial Officer',
            image: {
                src: 'https://images.unsplash.com/photo-1619380061814-58f03707f082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
                alt: 'Michael Turner',
            },
            items: [
                {
                    title: 'Know more on Twitter',
                    icon: IconBrandTwitter,
                    href: '#',
                },
                {
                    title: 'Know more on Linkedin',
                    icon: IconBrandLinkedin,
                    href: '#',
                },
                {
                    title: 'Contact by email',
                    icon: IconMail,
                    href: '#',
                },
            ],
        },
        {
            name: 'Laura Adams',
            occupation: 'Chief Customer Relations Officer',
            image: {
                src: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
                alt: 'Laura Adams',
            },
            items: [
                {
                    title: 'Know more on Twitter',
                    icon: IconBrandTwitter,
                    href: '#',
                },
                {
                    title: 'Know more on Linkedin',
                    icon: IconBrandLinkedin,
                    href: '#',
                },
                {
                    title: 'Contact by email',
                    icon: IconMail,
                    href: '#',
                },
            ],
        },
        {
            name: 'Robert Williams',
            occupation: 'Chief Operations Officer',
            image: {
                src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
                alt: 'Robert Williams',
            },
            items: [
                {
                    title: 'Know more on Twitter',
                    icon: IconBrandTwitter,
                    href: '#',
                },
                {
                    title: 'Know more on Linkedin',
                    icon: IconBrandLinkedin,
                    href: '#',
                },
                {
                    title: 'Contact by email',
                    icon: IconMail,
                    href: '#',
                },
            ],
        },
        {
            name: 'Emily Davis',
            occupation: 'Chief Strategy Officer',
            image: {
                src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
                alt: 'Emily Davis',
            },
            items: [
                {
                    title: 'Know more on Twitter',
                    icon: IconBrandTwitter,
                    href: '#',
                },
                {
                    title: 'Know more on Linkedin',
                    icon: IconBrandLinkedin,
                    href: '#',
                },
                {
                    title: 'Contact by email',
                    icon: IconMail,
                    href: '#',
                },
            ],
        },
    ],
};

// Testimonial2 data on About page *******************
export const testimonials2About: TestimonialsProps = {
    id: 'testimonialsTwo-on-about',
    hasBackground: true,
    isTestimonialUp: true,
    header: {
        title: 'Our success stories',
        tagline: 'Customer comments',
    },
    testimonials: [
        {
            name: 'Jane Smith',
            job: 'UX Designer',
            testimonial: `Your templates have been a game-changer for my projects. They're not just beautifully designed; they're also incredibly easy to customize. Thanks to your templates, I've been able to save time and deliver stunning websites to my clients.`,
            image: {
                src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                alt: 'Jane Smith',
            },
            href: '/',
        },
        {
            name: 'John Doe',
            job: 'Frontend Developer',
            testimonial: `I can't say enough good things about your Next.js and Tailwind CSS templates. As a frontend developer, I appreciate the clean and well-organized code. These templates have significantly sped up my development process, and the results are always impressive.`,
            image: {
                src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                alt: 'John Doe',
            },
            href: '/',
        },
        {
            name: 'Emily Turner',
            job: 'Marketing Manager',
            testimonial: `This templates have made our marketing campaigns stand out. The responsiveness and performance of the websites we've built with them have boosted our conversion rates. Thank you for helping us shine in the digital world!`,
            image: {
                src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                alt: 'Emily Turner',
            },
            href: '/',
        },
        {
            name: 'Michael Clark',
            job: 'Startup Founder',
            testimonial: `I stumbled upon your templates while looking for a way to launch my startup quickly. Your templates not only saved me valuable time but also gave my business a professional and modern online presence. Highly recommended!`,
            image: {
                src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                alt: 'Michael Clark',
            },
            href: '/',
        },
        {
            name: 'Linda Johnson',
            job: 'Freelance Web Designer',
            testimonial: `I've been using your templates for my freelance projects, and my clients are always thrilled with the results. The templates are not only visually appealing but also user-friendly, making my job much easier.`,
            image: {
                src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                alt: 'Linda Johnson',
            },
            href: '/',
        },
        {
            name: 'David Rogers',
            job: 'E-commerce Entrepreneur',
            testimonial: `The speed and SEO-friendliness of the websites I've built with these templates have led to increased traffic and sales. I couldn't be happier!`,
            image: {
                src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                alt: 'David Rogers',
            },
            href: '/',
        },
    ],
};

// FAQS data on About page *******************
export const faqsAbout: FAQsProps = {
    id: 'faqs-on-faqs',
    hasBackground: false,
    header: {
        title: 'Frequently Asked Questions',
        subtitle:
            'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
        tagline: 'FAQS',
    },
    items: [
        {
            title: 'Who we are and what we do?',
            description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
            title: 'What values and principles guide our work?',
            description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
            title: 'What is our experience?',
            description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
            title: 'What is our team like?',
            description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
            title: 'How do we engage with the community?',
            description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
            title: 'What support channels do we offer?',
            description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
    ],
};

// Contact data on About page *******************
export const contactAbout: ContactProps = {
    id: 'contact-on-about',
    hasBackground: true,
    header: {
        title: 'Contact us',
        tagline: 'Contact info',
    },
    content:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
    items: [
        {
            title: 'Our Address',
            description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
            icon: IconMapPin,
        },
        {
            title: 'Contact',
            description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
            icon: IconPhoneCall,
        },
        {
            title: 'Working hours',
            description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
            icon: IconClock,
        },
    ],
    form: {
        inputs: [
            {
                type: 'text',
                label: 'Name',
                name: 'name',
                placeholder: 'Introduce your name',
                autocomplete: 'off',
            },
            {
                type: 'email',
                label: 'Email address',
                name: 'email',
                placeholder: 'Introduce your email address',
                autocomplete: 'on',
            },
        ],
        textarea: {
            cols: 30,
            rows: 5,
            label: 'How can we help you?',
            name: 'textarea',
            placeholder: 'Write your message...',
        },
        checkboxes: [
            {
                label: 'Have you read our privacy policy?',
                value: '',
            },
        ],
        btn: {
            title: 'Contact us',
            type: 'submit',
        },
    },
};