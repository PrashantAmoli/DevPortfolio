import { Key } from "react";
import { Experience, Education } from "@/utils/types";
import { EducationCard, ExperienceCard } from "@/components";

export default function Timeline({ experience, education }: { experience: Experience[], education: Education[] }) {
	const { company, position, description, start, end } = experience[0];

	const d1 = new Date(start);
	const d2 = new Date(end);

  const data = [ ...experience, ...education ];

  data.sort((a, b) => {
    const d1 = new Date(a.start);
    const d2 = new Date(b.start);

    return d1.getTime() - d2.getTime();
  });

	return (
    <>
      {/* Timeline items bar */}
      <div className="absolute w-1 h-screen z-10 left-2 md:left-1/2 flex flex-col gap-4 justify-evenly bg-white/10">
        {data.map((item: Education | Experience, index: Key) => (
          <hr key={index} className="text-h1 w-1 h-48 relative bg-white/0 backdrop-blur-3xl rounded-full shadow-white shadow-lg"/>
          ))
        }
      </div>

      <div className="absolute top-4 left-0 right-0 flex justify-evenly md:justify-around">
        <span className="text-h2">Education</span>
        <span className="text-h2">Experience</span>
      </div>

      {data.map((item: Education | Experience | unknown, index: Key) => (
        item.company ? <ExperienceCard key={index} experience={item} /> : <EducationCard key={index} education={item} />
      ))}
		{/* </div> */}
    </>
	);
}
