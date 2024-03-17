import type { Metadata } from "next";
import Hero from "~/components/widgets/Hero";
import SocialProof from "~/components/widgets/SocialProof";
import Content from "~/components/widgets/Content";
import Features from "~/components/widgets/Features";
import Testimonials from "~/components/widgets/Testimonials";
import { SITE } from "~/config";
import { heroHome, socialProofHome, featuresHome, contentHomeTwo, testimonialsHome } from "~/shared/data/pages/home.data";

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Home() {
  return (
    <>
      <Hero {...heroHome} />
      <SocialProof {...socialProofHome} />
      <Content {...contentHomeTwo} />
      <Features {...featuresHome} />
      <Testimonials {...testimonialsHome} />
    </>
  );
}
