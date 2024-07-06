import { MONTHS } from '$lib/constants.js';

export function formatNumber(x, pct = false) {
	if (pct) {
		let num_decimals = 1;
		if (x < 1) {
			num_decimals = 2;
		} else if (x < 0.1) {
			num_decimals = 3;
		} else if (x < 0.01) {
			num_decimals = 4;
		} else if (x < 0.001) {
			num_decimals = 5;
		}
		return x.toFixed(num_decimals) + '%'; // Hacky
	}
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatString(x) {
	return x.toString().replaceAll('--', '–');
}

export const arrayRange = (stop, step = 1) =>
	Array.from({ length: stop / step }, (value, index) => index * step);

export const arrayRangeStartStop = (start, stop, step = 1) =>
	Array.from({ length: (stop - start) / step + 1 }, (value, index) => start + index * step);

export function ordinalSuffix(i) {
	let j = i % 10,
		k = i % 100;
	if (j === 1 && k !== 11) {
		return i + 'st';
	}
	if (j === 2 && k !== 12) {
		return i + 'nd';
	}
	if (j === 3 && k !== 13) {
		return i + 'rd';
	}
	return i + 'th';
}

export function formatDate(date) {
	return MONTHS[date.month] + ' ' + date.day + ', ' + date.year;
}

export function isSize(size, innerWidth) {
	return innerWidth < {
		"sm": 640,
		"md": 768,
		"lg": 1024,
		"xl": 1280,
		"2xl": 1536,
	}[size];
}

export function dateLaterThan(a, b) {
	if (a.year > b.year) {
		return true;
	} else if (a.year < b.year) {
		return false;
	}

	if (a.month > b.month) {
		return true;
	} else if (a.month < b.month) {
		return false;
	}

	if (a.day > b.day) {
		return true;
	} else if (a.day < b.day) {
		return false;
	}
	return false;
}
