import Link from "next/link";
import { SiGithub, SiLinkedin, SiTwitter, SiYoutube } from "react-icons/si";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";

export const socials = [
  {
    icon: SiGithub,
    label: "GitHub",
    name: "GitHub",
    navbar: true,
    url: "https://dub.sh/indra-github",
    username: "indralukmana",
  },
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    name: "LinkedIn",
    navbar: true,
    url: "https://dub.sh/indra-linkedin",
    username: "in/indralukmana",
  },
  {
    icon: SiTwitter,
    label: "Twitter",
    name: "Twitter",
    navbar: true,
    url: "https://dub.sh/indra-twitter",
    username: "@indluk",
  },
  {
    icon: SiYoutube,
    label: "Youtube",
    username: "@indluk",
    name: "Youtube",
    navbar: true,
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

type Icon = (typeof socials)[number]["icon"];

type HoverRevealButtonProps = {
  Icon: Icon;
  label: string;
};

const HoverRevealButton = ({ Icon, label }: HoverRevealButtonProps) => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded bg-primary px-5 py-2.5 text-primary-content transition-all duration-300 hover:bg-secondary hover:ring-2 hover:ring-secondary hover:ring-offset-2">
      <span className="flex items-center gap-2">
        <Icon className="h-5 w-5" />
        {label}
      </span>
    </div>
  );
};

const IndraSocialsSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2 sr-only">Socials</h2>
      <ul className="grid grid-cols-1 md:grid-cols-[repeat(5,1fr)] gap-6 items-center">
        {socials.map(social => (
          <li key={social.name}>
            <Link
              aria-label={social.name}
              className="flex items-center gap-2 opacity-85 hover:opacity-100 "
              href={social.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <HoverRevealButton Icon={social.icon} label={social.username} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IndraSocialsSection;
