import { Education } from "@/utils/types";

export default function EducationCard({ education }: { education: Education }) {
	const { school, location, degree, field, start, end } = education;

	return (
		<div className="relative md:right-1/4 mt-16 px-5 py-10">
			<div className="card w-full py-10 px-5">
				<h2 className="text-head">{school} {location}</h2>
				<h2 className="text-subhead">{degree}</h2>
				<h2 className="text-subhead">{field}</h2>
				<h2 className="text-body">{start} - {end}</h2>
			</div>
		</div>
	);
}
