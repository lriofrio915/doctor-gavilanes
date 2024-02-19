import type { Metadata } from "next";
import Hero from "~/components/widgets/Hero";
import { SITE } from "~/config";

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Home() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <Hero />
    </>
  );
}
