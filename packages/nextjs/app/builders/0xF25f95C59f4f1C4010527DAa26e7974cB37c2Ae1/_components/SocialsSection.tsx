import Link from "next/link";
import { IconSocials, socials } from "../_data/socials";

type HoverRevealButtonProps = {
  Icon: IconSocials;
  label: string;
};

const HoverRevealButton = ({ Icon, label }: HoverRevealButtonProps) => {
  return (
    <div className="flex items-center gap-2 min-w-full md:min-w-32 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      <Icon className="h-5 w-5" />
      {label}
    </div>
  );
};

const SocialsSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2 sr-only">Socials</h2>
      <ul className="flex gap-4 items-center justify-center flex-col md:flex-row">
        {socials.map(social => (
          <li key={social.name} className="w-full md:w-min">
            <Link
              aria-label={social.name}
              className="flex items-center gap-2 opacity-85 hover:opacity-100 w-full px-8 md:px-0"
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

export default SocialsSection;
