import React from "react";
import Link from "next/link";
import { HiFire, HiOutlineFire } from "react-icons/hi2";
import { RiShareBoxLine } from "react-icons/ri";
import { getBuildersGitHubActivities } from "~~/components/github-activities/data-fetches";
import { Address } from "~~/components/scaffold-eth";

const BuildersActivities = async () => {
  const buildersActivities = await getBuildersGitHubActivities();
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {Array.from(buildersActivities)
        .sort((a, b) => b[1].githubScore - a[1].githubScore)
        .map(([githubUsername, builderActivity]) => {
          const litFires = Math.min(Math.floor(builderActivity.githubScore), 5);

          const popoverTitle = `
            Github Username: ${githubUsername}
            Open PR: ${builderActivity.pr.openCount}
            Merged PR: ${builderActivity.pr.mergedCount}
            Closed PR: ${builderActivity.pr.closedCount}
            Commented Issues: ${builderActivity.issue.commentCount}
            Reaction Issues: ${builderActivity.issue.reactionCount}
            Score: ${builderActivity.githubScore.toFixed(2)}
        `;

          return (
            <div key={githubUsername} className="card bg-base-100 shadow-xl p-4 w-56">
              <div className="card-body p-0">
                <h2 className="card-title mb-2">
                  <Address address={builderActivity.address} format="short" />
                </h2>
                <div className="flex justify-between">
                  <div className="flex" title={popoverTitle}>
                    {[...Array(5)].map((_, index) =>
                      index < litFires ? (
                        <HiFire key={index} className="text-orange-500 text-xl" />
                      ) : (
                        <HiOutlineFire key={index} className="text-gray-400 text-xl" />
                      ),
                    )}
                  </div>
                  <Link href={`/builders/${builderActivity.address}`}>
                    <RiShareBoxLine className="w-5 h-5 opacity-70" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BuildersActivities;
