import { createSlice } from '@reduxjs/toolkit';

type InititalState = {
  username: string;
  isModalOpen: boolean;
  isBanner: boolean;
  bannerMessage: string;
};

const modalDefaultData = {
	id: '',
	title: '',
	videoId: '',
	bucket: '',
	link: '',
};


export const portfolio = createSlice({
	name: 'portfolio',
	initialState: {
		username: 'prashantamoli',
		fullaname: '',
		about: '',
		email: '',
		links: [],
		images: [],
		roles: [],
		skills: [],
		projects: [],
		education: [],
		experience: [],
		// Modal
		isModalOpen: false,
		modalData: {
			id: '',
			title: '',
			videoId: '',
			bucket: '',
			link: '',
		},
		// Banner
    isBanner: false,
    bannerMessage: 'Welcome to DevPortfolio developed by @PrashantAmoli',
	},
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload;
		},
		openModal: (state, action) => {
			state.isModalOpen = true;
			state.modalData = action.payload;
		},
		closeModal: state => {
			state.isModalOpen = false;
			state.modalData = modalDefaultData;
		},
		showBanner: (state, action) => {
			state.isBanner = true;
			state.bannerMessage = action.payload;
		},
		hideBanner: state => {
			state.isBanner = false;
			state.bannerMessage = 'Welcome to DevPortfolio developed by @PrashantAmoli';
		},
		updateSkills: (state, action) => {
			state.skills = action.payload;
		},
		updateProjects: (state, action) => {
			state.projects = action.payload;
		},
		updateEducation: (state, action) => {
			state.education = action.payload;
		},
		updateExperience: (state, action) => {
			state.experience = action.payload;
		},
		updateRoles: (state, action) => {
			state.roles = action.payload;
		},
		updatePortfolio: (state, action) => {
			state.roles = action.payload.roles;
			state.skills = action.payload.skills;
			state.projects = action.payload.projects;
			state.education = action.payload.education;
			state.experience = action.payload.experience;
		}
	},
});

// Action creators are generated for each case reducer function
export const {
  setUsername,
	// Modal
	openModal,
	closeModal,
	// Banner
	showBanner,
	hideBanner,
	// Data
	updateSkills,
	updateProjects,
	updateEducation,
	updateExperience,
	updateRoles,
	updatePortfolio,
} = portfolio.actions;

export default portfolio.reducer;