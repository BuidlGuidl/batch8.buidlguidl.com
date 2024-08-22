import { SiGithub, SiTwitter } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";

export const ETH_ADDRESS = "0xF25f95C59f4f1C4010527DAa26e7974cB37c2Ae1";

export const socials = [
  {
    icon: SlGlobe,
    name: "Website",
    label: "Website",
    url: "https://nvillanueva.com",
    username: "nvillanueva.com",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    name: "GitHub",
    url: "https://github.com/mexicanace",
    username: "mexicanace",
  },
  {
    icon: SiTwitter,
    label: "Twitter",
    name: "Twitter",
    url: "twitter.com/mexicanace",
    username: "@mexicanace",
  },
  {
    name: "BuidlGuidl",
    url: `https://app.buidlguidl.com/builders/${ETH_ADDRESS}`,
    label: "BuidlGuidl",
    icon: BuidlGuidlLogo,
    username: "BuidlGuidl",
  },
] as const;

export type IconSocials = (typeof socials)[number]["icon"];
