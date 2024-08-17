import React from "react";
import Image from "next/image";

type SkillComponentProps = {
  pathIcon: string;
  name: string;
};

const SkillComponent = ({ pathIcon, name }: SkillComponentProps) => {
  return (
    <div className="flex items-center gap-2 bg-primary p-3 rounded-xl hover:scale-105 hover:transition-all select-none">
      <Image src={pathIcon} className="w-6 h-6 text-primary" alt={name} width={24} height={24} />
      <span>{name}</span>
    </div>
  );
};

export default SkillComponent;
