import type { Metadata } from "next";
import { Contact } from "~/components/widgets/Contact";
import FAQs from "~/components/widgets/FAQs";
import Features from "~/components/widgets/Features";
import Hero from "~/components/widgets/HeroServices";
import Hero2 from "~/components/widgets/Hero2";
import Stats from "~/components/widgets/Stats";

import {
    contactAbout,
    faqsAbout,
    featuresFourAbout,
    featuresFourAboutTwo,
    features3About,
    hero2About,
    statsAbout,
    stepsAbout,
    testimonials2About,
    featuresAbout,
    teamAbout,
    heroAbout,
} from '~/shared/data/pages/about.data';
import Features4 from "~/components/widgets/Features4";
import Steps from "~/components/widgets/Steps";
import Features3 from "~/components/widgets/Features3";
import { contactHome } from "~/shared/data/pages/home.data";

export const metadata: Metadata = {
    title: `Perfil`,
};

const page = () => {
    return (
        <>
            <Hero {...heroAbout} />
            <Hero2 {...hero2About} />
            <Stats {...statsAbout} />
            <Features4 {...featuresFourAbout} />
            <Features4 {...featuresFourAboutTwo} />
            <Steps {...stepsAbout} />
            <Features3 {...features3About} />
            <Contact {...contactHome} />
        </>
    )
}

export default page