// Function to format datetime
export function formatDateTime(value: string | null): string {
	if (value === null) return ''; // If value is null, return empty string

	const date = new Date(value);
	return date.toLocaleDateString('en-US',
		{
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric' });
}