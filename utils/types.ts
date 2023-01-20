export interface Links {
	name: string;
	link: string;
}

export interface Project {
	title: string;
	technologies: string[];
	description: string[];
	images: string[];
	link: string;
	github: string;
}

export interface Experience {
	company: string;
	position: string;
	description: string[];
	start: string;
	end: string;
}

export interface Education {
	school: string;
	location: string;
	degree: string;
	field: string;
	description: string[];
	start: string;
	end: string;
}

export default interface Portfolio {
	username: string;
	fullname: string;
	email: string;
	about: string;
	images: string[];
	links: Links[];
	roles: string[];
	skills: string[];
	projects: Project[];
	education: Education[];
	experience: Experience[];
}
