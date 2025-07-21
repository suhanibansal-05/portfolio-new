import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { achievements } from "../constants";

const AchievementCard = ({ title, description }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
      )}
    >
      <div className="flex flex-col gap-2">
        <figcaption className="text-lg font-bold text-white">
          {title}
        </figcaption>
        <blockquote className="mt-2 text-sm text-neutral-200">{description}</blockquote>
      </div>
    </figure>
  );
};

export default function Testimonial() {
  // Repeat the achievements to fill the marquee
  const repeatCount = 4;
  const repeatedAchievements = Array(repeatCount).fill(achievements).flat();
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">My Achievements</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:50s]">
          {repeatedAchievements.map((achievement, idx) => (
            <AchievementCard key={achievement.title + idx} {...achievement} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
