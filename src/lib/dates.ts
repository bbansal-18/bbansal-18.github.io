const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

/** Accepts "Present", "2024", or "2024-08". */
export function formatMonth(value: string): string {
	if (!value) return '';
	if (value.toLowerCase() === 'present') return 'Present';
	const ym = value.match(/^(\d{4})-(\d{2})$/);
	if (ym) {
		const month = MONTHS[Number(ym[2]) - 1];
		return month ? `${month} ${ym[1]}` : value;
	}
	return value;
}

export function formatPeriod(start: string, end?: string): string {
	const from = formatMonth(start);
	if (!end) return from;
	return `${from} – ${formatMonth(end)}`;
}

export function sortKey(entry: { data: { start: string } }): string {
	return entry.data.start;
}

export function byStartDesc<T extends { data: { start: string } }>(a: T, b: T): number {
	return sortKey(b).localeCompare(sortKey(a));
}
