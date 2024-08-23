import React from "react";

type SkillComponentProps = {
  icon: React.ReactNode;
  name: string;
};

const SkillComponent = ({ icon, name }: SkillComponentProps) => {
  return (
    <div className="flex items-center gap-2 bg-primary p-3 rounded-xl hover:scale-105 hover:transition-all select-none">
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default SkillComponent;
