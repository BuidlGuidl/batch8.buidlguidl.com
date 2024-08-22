import { AboutMe } from "./_components/AboutMe";
import SocialsSection from "./_components/SocialsSection";
import { ETH_ADDRESS } from "./_data/socials";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const BuilderPage: NextPage = () => {
  return (
    <main className="container mx-auto px-4 py-8 space-y-8 max-w-5xl">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-4xl font-bold">Nicolas Villanueva</h1>
        <Address address={ETH_ADDRESS} format="short" />
      </div>

      <AboutMe />

      <SocialsSection />
    </main>
  );
};

export default BuilderPage;
