import Image from "next/image";
import nightmareFoxImage from "./../../../public/builders/avatars/0xD2692F9df925D18D527ABe8b3d99EE9E9C8d75AE.jpg";
import SkillComponent from "./_components/SkillComponent";
import { NextPage } from "next";
import { SiBootstrap, SiExpress, SiJavascript, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";
import { Address } from "~~/components/scaffold-eth";

const NightmareFox: NextPage = () => {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="rounded-full w-40 h-40 md:w-56 md:h-56 overflow-hidden border-red-500 border-2">
            <Image
              src={nightmareFoxImage}
              alt="NightmareFox Profile"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
            />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold">NightmareFox12</h1>
            <p className="text-muted-foreground">Learning web development</p>
            <Address address="0xD2692F9df925D18D527ABe8b3d99EE9E9C8d75AE" />
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About me</h2>
            <p className="text-muted-foreground">
              I am a web development enthusiast who is learning about modern web application design and development. I
              am passionate about technology and enjoy keeping up with market trends and tools. I am focusing on
              improving my skills in JavaScript, React, Node.js and databases, and hope to continue advancing in this
              exciting world. 🚀✨
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Skills</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <SkillComponent icon={<SiReact />} name="React" />
              <SkillComponent icon={<SiNodedotjs />} name="NodeJS" />
              <SkillComponent icon={<SiJavascript />} name="JavaScript" />
              <SkillComponent icon={<SiBootstrap />} name="Bootstrap" />
              <SkillComponent icon={<SiTailwindcss />} name="TailwindCSS" />
              <SkillComponent icon={<SiExpress />} name="ExpressJS" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NightmareFox;
