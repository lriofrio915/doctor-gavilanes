import {
    IconDownload
} from '@tabler/icons-react';

import { HeroProps } from '~/shared/types';

import heroImg from '~/assets/images/hero.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
    title: (
        <>
            Free template for <span className="hidden md:inline">starts a website using</span> <span>Next.js</span> +{' '}
            <span className="sm:whitespace-nowrap">Tailwind CSS</span>
        </>
    ),
    subtitle: (
        <>
            <span className="hidden md:inline">
                <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
                    TailNext
                </span>{' '}
                is a production ready template to start your new website using <em>Next.js</em> + <em>Tailwind CSS</em>.
            </span>{' '}
            It has been designed following Best Practices, SEO, Accessibility, Dark Mode, great Page Speed, image
            optimization.
        </>
    ),
    callToAction: {
        text: 'Get template',
        href: 'https://github.com/onwidget/tailnext',
        icon: IconDownload,
        targetBlank: true,
    },
    callToAction2: {
        text: 'Learn more',
        href: '/',
    },
    image: {
        src: heroImg,
        alt: 'Hero TailNext',
    },
};