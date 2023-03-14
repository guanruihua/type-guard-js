import { isNumber } from 'check-it-type'

export function NumberGuard(value: number, defaultValue = 0): number {
	if (isNumber(value)) return value
	return defaultValue
}