import type { Metadata } from "next";
import Features from "~/components/widgets/Features";
import Hero from "~/components/widgets/Hero";
import SocialProof from "~/components/widgets/SocialProof";
import { SITE } from "~/config";
import { heroHome, socialProofHome, featuresHome } from "~/shared/data/pages/home.data";

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Home() {
  return (
    <>
      <Hero {...heroHome} />
      <SocialProof {...socialProofHome} />
      <Features {...featuresHome} />
    </>
  );
}
