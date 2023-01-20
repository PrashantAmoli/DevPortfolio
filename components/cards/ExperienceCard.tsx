import { Key } from "react";
import { Experience } from "@/utils/types";

export default function ExperienceCard({ experience }: { experience: Experience }) {
	const { company, position, description, start, end } = experience;

	return (
		<div className="card">
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
