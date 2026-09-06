import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const link = z.object({
	label: z.string(),
	href: z.string(),
});

const common = {
	title: z.string(),
	summary: z.string(),
	/** Sort key. Use YYYY, YYYY-MM, or a full ISO date. */
	start: z.string(),
	end: z.string().optional(),
	featured: z.boolean().default(false),
	placeholder: z.boolean().default(false),
	draft: z.boolean().default(false),
	tags: z.array(z.string()).default([]),
	links: z.array(link).default([]),
};

const research = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
	schema: z.object({
		...common,
		role: z.string(),
		venue: z.string().optional(),
		advisor: z.string().optional(),
	}),
});

const experience = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
	schema: z.object({
		...common,
		org: z.string(),
		role: z.string(),
		location: z.string().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		...common,
		role: z.string().optional(),
	}),
});

const writing = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
	schema: z.object({
		...common,
		kind: z.enum(['note', 'publication', 'post']).default('note'),
	}),
});

const awards = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/awards' }),
	schema: z.object({
		...common,
		issuer: z.string(),
	}),
});

const activities = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
	schema: z.object({
		...common,
		org: z.string(),
		role: z.string(),
	}),
});

const education = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
	schema: z.object({
		...common,
		school: z.string(),
		degree: z.string(),
		location: z.string().optional(),
		highlights: z.array(z.string()).default([]),
	}),
});

const pages = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
	schema: z.object({
		title: z.string(),
		placeholder: z.boolean().default(false),
	}),
});

export const collections = {
	research,
	experience,
	projects,
	writing,
	awards,
	activities,
	education,
	pages,
};
