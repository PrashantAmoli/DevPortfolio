export const triangleParticles = {
	fpsLimit: 60,
	particles: {
		number: {
			value: 80,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: '#ff0000',
			animation: {
				enable: true,
				speed: 20,
				sync: true,
			},
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#000000',
			},
			polygon: {
				nb_sides: 5,
			},
			image: {
				src: 'https://cdn.matteobruni.it/images/particles/github.svg',
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 3,
				opacity_min: 0.1,
				sync: false,
			},
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 12,
				size_min: 0.1,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 100,
			color: 'random',
			opacity: 0.4,
			width: 1,
			triangles: {
				enable: true,
				color: '#ffffff1a',
				opacity: 0.1,
			},
		},
		move: {
			enable: true,
			speed: 1,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: {
				enable: true,
				mode: 'repulse',
			},
			onclick: {
				enable: true,
				mode: 'push',
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 0.8,
				speed: 3,
			},
			repulse: {
				distance: 200,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
	background: {
		color: '#000000',
		image: '',
		position: '50% 50%',
		repeat: 'no-repeat',
		size: 'cover',
	},
};

export const polygonParticles = {
	particles: {
		color: {
			value: '#FF0000',
			animation: {
				enable: true,
				speed: 10,
			},
		},
		move: {
			attract: {
				enable: false,
				distance: 100,
				rotate: {
					x: 2000,
					y: 2000,
				},
			},
			direction: 'none',
			enable: true,
			outModes: {
				default: 'destroy',
			},
			path: {
				clamp: false,
				enable: true,
				delay: {
					value: 0,
				},
				generator: 'polygonPathGenerator',
				options: {
					sides: 6,
					turnSteps: 30,
					angle: 30,
				},
			},
			random: false,
			speed: 3,
			straight: false,
			trail: {
				fillColor: '#000',
				length: 20,
				enable: true,
			},
		},
		number: {
			density: {
				enable: true,
				area: 800,
			},
			value: 0,
		},
		opacity: {
			value: 1,
		},
		shape: {
			type: 'circle',
		},
		size: {
			value: 2,
		},
	},
	background: {
		color: '#000',
	},
	fullScreen: {
		zIndex: -1,
	},
	emitters: {
		direction: 'none',
		rate: {
			quantity: 1,
			delay: 0.25,
		},
		size: {
			width: 0,
			height: 0,
		},
		position: {
			x: 50,
			y: 50,
		},
	},
};
