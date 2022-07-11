import * as icon  from 'react-icons/si'

const profile = {
	name: 'Alexandra Rivera',
	role: 'Engineer',
	description: 'I\'m a mechanical engineering and materials science student at Duke University. I\'m passionate about...',
};

const social = [
	{ icon: icon.SiGithub, link: 'https://github.com/acr67' },

	/*{ icon: icon.SiInstagram, link: 'https://instagram.com/xanny.rivera' },*/
	
	{ icon: icon.SiLinkedin, link: 'https://www.linkedin.com/in/alexandraceciliarivera/' },
];

const brand = 'ACR'


const work = [
	{
		name: 'Materials Science',
		description: 'Lawrence Livermore National Laboratory: I prepare diamond anvil cells for high-energy x-ray experimentation to simulate high-pressure/high-temperature environments.',
		stack: [
			{ icon: icon.SiMicrosoftpowerpoint, name: 'PowerPoint' },
			/*{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },*/
		],
		/*linkProject: 'https://example.com',
		linkGithub: 'https://github.com',*/
	},
	{
		name: 'Nuclear Science',
		description: 'Lawrence Livermore National Laboratory: Supported remotely research that uses plasma-flow reactor to simulate nuclear fallout formation.',
		stack: [
			{ icon: icon.SiMicrosoftpowerpoint, name: 'PowerPoint' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'Validation',
		description: 'Maxar Technologies, Hardware and Software Validation: I supported the validation laboratory remotely.',
		stack: [
			{ icon: icon.SiCplusplus, name: 'C++' },
			{ icon: icon.SiMicrosoftpowerpoint, name: 'PowerPoint' },
		
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'Drones',
		description: 'XPrize, Rainforest Engineering, Ocean Engineering, Ardupilot Mission Planner, Q Ground Control.',
		stack: [

		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'Robotics',
		description: 'Repair of robotic arm.',
		stack: [
			
			{ icon: icon.SiArduino, name: 'Arduino' },
			{ icon: icon.SiCplusplus, name: 'C++' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
]


const stack = [
	{
		name: 'General',
		items: [
			{ icon: icon.SiMicrosoftexcel, name: 'Microsoft Excel' },
		],
	},
	{
		name: 'Front End, Beginner',
		items: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
		],
	},
	{
		name: 'Back End, Beginner/Intermediate',
		items: [
			{ icon: icon.SiC, name: 'C' },
			{ icon: icon.SiCplusplus, name: 'C++' },
			{ icon: icon.SiJava, name: 'Java', },
			{ icon: icon.SiSqlite, name: 'SQL', },
		],
	},
]

const contact = {
	description: 'I\'m currently open to work, and will graduate in December 2023. Have an opportunity? Please reach out :)',
	email: 'acr67@duke.edu'
}

export { profile, social, work, stack, contact, brand }