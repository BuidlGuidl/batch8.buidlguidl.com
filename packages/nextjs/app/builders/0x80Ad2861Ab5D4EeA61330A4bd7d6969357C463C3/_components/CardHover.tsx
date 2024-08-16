import { type IndraIconSkill } from "~~/app/builders/0x80Ad2861Ab5D4EeA61330A4bd7d6969357C463C3/_data/indra-skills";

type CardProps = {
  Icon: IndraIconSkill;
  name: string;
  description: string;
  time: string;
};

const CardContent = ({ Icon, description, name, time }: CardProps) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-y-2 rounded-lg relative h-full w-full py-6 px-8 z-10">
      <div className="flex items-center text-sm">
        <Icon className="h-5 w-5" />
        <h3 className="ml-2 text-lg font-semibold">{name}</h3>
      </div>
      <p className="text-sm">{description}</p>
      <div className="flex justify-end">
        <span>{time}</span>
      </div>
    </div>
  );
};

export const CardHoverEffect1 = (props: CardProps) => {
  return (
    <div className="h-full w-full group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-500  font-medium">
      <span className="absolute h-full w-full  bg-secondary  transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
      <CardContent {...props} />
    </div>
  );
};

export const CardHoverEffect2 = (props: CardProps) => {
  return (
    <div className="group relative inline-flex h-full w-full items-center justify-center overflow-hidden rounded-md bg-secondary  font-medium text-primary-content">
      <span className="absolute h-0 w-0 bg-blue-500 transition-all duration-300 group-hover:h-full group-hover:w-full"></span>
      <CardContent {...props} />
    </div>
  );
};

export const CardHoverEffect3 = (props: CardProps) => {
  return (
    <div className="group relative h-full w-full overflow-hidden overflow-x-hidden rounded-md bg-secondary">
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
      </span>
      <CardContent {...props} />
    </div>
  );
};

export const CardHoverEffect4 = (props: CardProps) => {
  return (
    <div className="group relative z-0 h-full w-full overflow-hidden overflow-x-hidden rounded-md bg-secondary">
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
      </span>
      <CardContent {...props} />
    </div>
  );
};
