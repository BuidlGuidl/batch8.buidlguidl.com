import { SiGithub, SiLinkedin, SiTwitter, SiYoutube } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";

export const indraSocials = [
  {
    icon: SlGlobe,
    name: "Website",
    label: "Website",
    url: "https://dub.sh/indra-web",
    username: "indralukmana.com",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    name: "GitHub",
    url: "https://dub.sh/indra-github",
    username: "indralukmana",
  },
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    name: "LinkedIn",
    url: "https://dub.sh/indra-linkedin",
    username: "in/indralukmana",
  },
  {
    icon: SiTwitter,
    label: "Twitter",
    name: "Twitter",
    url: "https://dub.sh/indra-twitter",
    username: "@indluk",
  },
  {
    icon: SiYoutube,
    label: "Youtube",
    username: "@indluk",
    name: "Youtube",
    url: "https://dub.sh/indra-youtube",
  },
  {
    name: "BuidlGuidl",
    url: "https://app.buidlguidl.com/builders/0x80Ad2861Ab5D4EeA61330A4bd7d6969357C463C3",
    label: "BuidlGuidl",
    icon: BuidlGuidlLogo,
    username: "0x8...3C3",
  },
] as const;

export type IndraIconSocials = (typeof indraSocials)[number]["icon"];
