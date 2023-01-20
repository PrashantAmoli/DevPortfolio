import { Project } from "@/utils/types";
import { Key } from "react";

export default function ProjectCard({ project }: { project: Project }) {
	const { title, description, technologies, link, github } = project;

	return (
		<div className="card">
			<h2 className="text-head">{title}</h2>

			<ol>
				{technologies.map((tech: string, index: Key) => (
					<span key={index} className="text-body">
						{tech}{' '}
					</span>
				))}
			</ol>

			<ol>
				{description.map((tech: string, index: Key) => (
					<li key={index} className="text-body">
						{tech}{' '}
					</li>
				))}
			</ol>
			<a href={link} target="_blank" rel="noreferrer" className="text-link">
				{link ? "Link" : null}
			</a>
			<a href={github} target="_blank" rel="noreferrer" className="text-link">
				{github ? "GitHub" : null}
			</a>
		</div>
	);
}
