import { Key } from "react";
import { Experience } from "@/utils/types";

export default function ExperienceCard({ experience }: { experience: Experience }) {
	const { company, position, description, start, end } = experience;

	const d1 = new Date(start);
	const d2 = new Date(end);

	return (
		<div className="card relative md:left-1/4 mt-4 px-5 py-10">
			<h2 className="text-head">{company}</h2>
			<h2 className="text-subhead">{position}</h2>

			<ol>
				{description.map((tech: string, index: Key) => (
					<li key={index} className="text-body">
						{tech}{' '}
					</li>
				))}
			</ol>

			<div className="flex flex-row justify-evenly">
				<span className="text-body">{start}</span>
				<span className="text-body">{end}</span>
			</div>
		</div>
	);
}
