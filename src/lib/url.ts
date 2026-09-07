/** Prefix internal paths with the GitHub Pages base (empty for a user site). */
export function path(href: string): string {
	if (
		href.startsWith('http://') ||
		href.startsWith('https://') ||
		href.startsWith('mailto:') ||
		href.startsWith('tel:') ||
		href.startsWith('#')
	) {
		return href;
	}

	const base = import.meta.env.BASE_URL;
	const normalized = href.startsWith('/') ? href : `/${href}`;
	if (base === '/') return normalized;
	return `${base.replace(/\/$/, '')}${normalized}`;
}

export function isCurrent(pathname: string, href: string): boolean {
	const current = pathname.replace(/\/$/, '') || '/';
	const target = path(href).replace(/\/$/, '') || '/';
	if (href === '/') {
		return current === target;
	}
	return current === target || current.startsWith(`${target}/`);
}

export function isCurrentAny(pathname: string, hrefs: string[]): boolean {
	return hrefs.some((href) => isCurrent(pathname, href));
}
