import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Works } from "@/components/sections/Works";
import { CodeStock } from "@/components/sections/CodeStock";
import { Skills } from "@/components/sections/Skills";
import { Career } from "@/components/sections/Career";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Works />
      <CodeStock />
      <Skills />
      <Career />
      <Contact />
    </>
  );
}
