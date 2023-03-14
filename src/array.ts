import { isArray } from 'check-it-type'

export function ArrayGuard<T>(value: T[], defaultValue = []): T[] {
	if (isArray(value)) return value
	return defaultValue
}