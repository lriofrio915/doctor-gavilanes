import type { Metadata } from "next";
import Hero from "~/components/widgets/Hero";
import { SITE } from "~/config";
import { heroHome } from "~/shared/data/pages/home.data";

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Home() {
  return (
    <>
      <Hero {...heroHome} />
    </>
  );
}
