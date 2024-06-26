import { Metadata } from "next";
import CallToAction from "~/components/widgets/CallToAction";
import { Contact } from "~/components/widgets/Contact";
import Content from "~/components/widgets/Content";
import FAQs from "~/components/widgets/FAQs";
import FeaturesService1 from "~/components/widgets/FeaturesService1";
import Hero from "~/components/widgets/HeroServices";
import Testimonials from "~/components/widgets/Testimonials";
import { contactHome } from "~/shared/data/pages/home.data";
import {
    callToActionServices,
    contentServicesOne,
    contentServicesTwo,
    faqsServices,
    features2Services,
    features4Services,
    heroServices,
    testimonialsServices,
} from '~/shared/data/pages/services.data';

export const metadata: Metadata = {
    title: 'Servicios',
};

const page = () => {
    return (
        <>
            <Hero {...heroServices} />
            <FeaturesService1 {...features2Services} />
            <Content {...contentServicesOne} />
            <Content {...contentServicesTwo} />
            <CallToAction {...callToActionServices} />
            <Contact {...contactHome} />
        </>
    )
}

export default page