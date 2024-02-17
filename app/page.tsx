import type { Metadata } from "next";
import { SITE } from "~/config";
//import Hero from "../src/components/widgets/Hero";

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Home() {
  return (
    <h1>Hola Mundo</h1>
  );
}
