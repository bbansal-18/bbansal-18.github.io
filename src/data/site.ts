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
		"I'm a Computer Science student at Carnegie Mellon, minoring in Machine Learning and Mathematical Finance. At my internship at MasterTrust, I've built real-world trading systems, including an execution platform that routes orders across accounts and processes live options data, along with a machine learning pipeline for testing trading strategies before they go live. On the side, I've built an AI-powered coding practice tool and a medication-tracking app now used by over a thousand patients. I like working across the stack, from backend systems to React frontends, and I'm especially drawn to projects that mix engineering with quantitative problem-solving. Going forward, I want to build high-impact software that's correct, efficient, and lean, able to do more with less and hold up under real-world use.",
	description:
		'Portfolio of Bhavya Bansal, Computer Science student at Carnegie Mellon University: research, projects, writing, and experience.',
	location: 'Pittsburgh, PA',
	email: 'bansalbhavya947@gmail.com',
	github: '',
	linkedin: 'https://www.linkedin.com/in/bbansal18',
	resumeHref: '/resume/',
	resumePdf: '/resume.pdf',
	skillGroups: [
		{
			heading: 'Now',
			blurb: 'What I spend the most time thinking about.',
			items: [
				'Full-stack and SaaS',
				'Quantitative trading systems',
				'Machine learning',
				'Data pipelines',
			],
		},
		{
			heading: 'Languages',
			blurb: 'What I write in, day to day.',
			items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'SQL', 'SML'],
		},
		{
			heading: 'Tools',
			blurb: 'Supporting context — not a claim of mastery.',
			items: [
				'React',
				'React Native',
				'Flask',
				'PyTorch',
				'Firebase',
				'AWS',
				'Git',
				'OpenAI API',
			],
		},
		{
			heading: 'Also',
			blurb: 'How I talk, and what I do when I am not at a keyboard.',
			items: ['English', 'Hindi', 'Punjabi', 'Tennis', 'Soccer', 'Pickleball'],
		},
	],
};

export const nav = {
	primary: [
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
		{ href: '/activities/', label: 'Activities' },
	],
};

export const homeSections = [
	{
		href: '/experience/',
		label: 'Experience',
		dek: 'Roles told as stories — what the work was for, not a job description.',
		collection: 'experience' as const,
	},
	{
		href: '/projects/',
		label: 'Projects',
		dek: 'Things I built because a question or a gap needed a prototype.',
		collection: 'projects' as const,
	},
];
