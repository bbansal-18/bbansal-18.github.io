import { getCollection, type CollectionEntry } from 'astro:content';
import { byStartDesc } from './dates';

type ListedCollection =
	| 'research'
	| 'experience'
	| 'projects'
	| 'writing'
	| 'awards'
	| 'activities'
	| 'education';

export async function listed<C extends ListedCollection>(
	collection: C,
): Promise<CollectionEntry<C>[]> {
	const entries = await getCollection(collection, ({ data }) => !data.draft);
	return entries.sort(byStartDesc);
}

export function pickFeatured<T extends { data: { featured?: boolean } }>(
	entries: T[],
	count = 2,
): T[] {
	const featured = entries.filter((entry) => entry.data.featured);
	return (featured.length > 0 ? featured : entries).slice(0, count);
}
