import { Education } from "@/utils/types";

export default function EducationCard({ education }: { education: Education }) {
	const { school, location, degree, field, start, end } = education;

	return (
		<div className="card">
			<h2 className="text-head">{school} {location}</h2>
			<h2 className="text-subhead">{degree}</h2>
			<h2 className="text-subhead">{field}</h2>
			<h2 className="text-body">{start} - {end}</h2>
		</div>
	);
}
