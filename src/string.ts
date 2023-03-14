import { isString } from 'check-it-type'

export function StringGuard(value: string, defaultValue = ''): string {
	if (isString(value)) return value
	return defaultValue
}