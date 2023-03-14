import { isObject } from 'check-it-type'

export function ObjectGuard<T extends Record<string, unknown>>(value: T, defaultValue = {}): T {
	if (isObject(value)) return value
	return defaultValue as T
}