import type { Metadata } from "next";
import Hero from "~/components/widgets/Hero";
import SocialProof from "~/components/widgets/SocialProof";
import { SITE } from "~/config";
import { heroHome, socialProofHome } from "~/shared/data/pages/home.data";

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Home() {
  return (
    <>
      <Hero {...heroHome} />
      <SocialProof {...socialProofHome} />
    </>
  );
}
