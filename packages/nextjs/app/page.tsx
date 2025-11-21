import Link from "next/link";
import CheckedInCounter from "../components/CheckedInCounter";
import type { NextPage } from "next";
import BuildersActivities from "~~/components/BuildersActivities";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Batch 8</span>
          </h1>
          <p className="text-center text-lg">Get started by taking a look at your batch GitHub repository.</p>
          <p className="text-lg flex gap-2 justify-center">
            <CheckedInCounter />
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12 flex flex-col items-center justify-center space-y-8">
          <BuildersActivities />
          <Link href="/builders" className="underline">
            View all builders
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
