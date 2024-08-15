import React from "react";
import IndraAboutMeSection from "~~/app/builders/0x80Ad2861Ab5D4EeA61330A4bd7d6969357C463C3/_components/IndraAboutMeSection";
import IndraSkillsSection from "~~/app/builders/0x80Ad2861Ab5D4EeA61330A4bd7d6969357C463C3/_components/IndraSkillsSection";
import IndraSocialsSection from "~~/app/builders/0x80Ad2861Ab5D4EeA61330A4bd7d6969357C463C3/_components/IndraSocialsSection";
import IndraSparkleName from "~~/app/builders/0x80Ad2861Ab5D4EeA61330A4bd7d6969357C463C3/_components/IndraSparkleName";
import { indraEthAddress } from "~~/app/builders/0x80Ad2861Ab5D4EeA61330A4bd7d6969357C463C3/_data/indra-socials";
import { Address } from "~~/components/scaffold-eth";

const BuilderPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1>
          <IndraSparkleName />
        </h1>
        <Address address={indraEthAddress} format="short" />
      </div>

      <IndraAboutMeSection />

      <IndraSocialsSection />

      <IndraSkillsSection />
    </main>
  );
};

export default BuilderPage;
