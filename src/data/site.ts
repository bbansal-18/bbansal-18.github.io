/**
 * Site-wide identity and contact.
 * GitHub is omitted until a verified handle is available.
 */
export const site = {
	name: 'Bhavya Bansal',
	shortName: 'Bhavya',
	tagline: 'Computer Science student at Carnegie Mellon University',
	positioning: 'B.S. Computer Science',
	school: 'Carnegie Mellon University',
	graduation: 'Expected May 2028',
	intro:
		"I'm a Computer Science student at Carnegie Mellon with a Machine Learning concentration and Mathematical Finance minor. At my internship at MasterTrust, I've built real-world trading systems, including an execution platform that routes orders across accounts and processes live options data, along with a machine learning pipeline for testing trading strategies before they go live. On the side, I've built an AI-powered coding practice tool and a medication-tracking app now used by over a thousand patients. I like working across the stack, from backend systems to React frontends, and I'm especially drawn to projects that mix engineering with quantitative problem-solving. Going forward, I want to build high-impact software that's correct, efficient, and lean, able to do more with less and hold up under real-world use.",
	description:
		'Portfolio of Bhavya Bansal, Computer Science student at Carnegie Mellon University: research, projects, writing, and experience.',
	location: 'Pittsburgh, PA',
	email: 'bansalbhavya947@gmail.com',
	github: 'https://github.com/bbansal-18',
	linkedin: 'https://www.linkedin.com/in/bbansal18',
	resumeHref: '/resume/',
	resumePdf: '/resume.pdf',
	skillGroups: [
		{
			heading: 'Categories',
			items: [
				'Full-stack and SaaS',
				'Algorithms Design and Analysis',
				'Application Dev',
				'Trading systems',
				'Machine learning',
				'Data pipelines',
				'APIs',
			],
		},
		{
			heading: 'Languages',
			items: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'SQL', 'SML'],
		},
		{
			heading: 'Tools and Frameworks',
			items: [
				'React',
				'React Native',
				'Flask',
				'PyTorch',
				'Firebase',
				'AWS',
				'Git',
				'TensorFlow'
			],
		},
		{
			heading: 'Facts and Hobbies',
			items: ['English', 'Hindi', 'Punjabi', 'Tennis', 'Soccer', 'Pickleball'],
		},
	],
};

export const nav = {
	primary: [
		{ href: '/', label: 'Home' },
		{ href: '/about/', label: 'About' },
		{ href: '/education/', label: 'Education' },
		{ href: '/experience/', label: 'Experience' },
		{ href: '/projects/', label: 'Projects' },
	],
	more: [
		{
			href: '/research/',
			label: 'Research & Writing',
			match: ['/research/', '/writing/'],
		},
		{ href: '/awards/', label: 'Awards' },
		{ href: '/certifications/', label: 'Certifications' },
		{ href: '/activities/', label: 'Activities' },
	],
};

export const homeSections = [
	{
		href: '/experience/',
		label: 'Work Experience',
		dek: "A list of experiences where I have learned things beyond the scope of any lecture I have attended.",
		collection: 'experience' as const,
	},
	{
		href: '/projects/',
		label: 'Projects',
		dek: 'Things I built because a question or a gap needed a prototype.',
		collection: 'projects' as const,
	},
];
