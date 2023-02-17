import { isString, isNumber, isBoolean } from 'check-it-type'

export function StringGuard(value: string, defaultValue = ''): string {
	if (isString(value)) return value
	return defaultValue
}

export function NumberGuard(value: number, defaultValue = 0): number {
	if (isNumber(value)) return value
	return defaultValue
}

export function BooleanGuard(value: boolean, defaultValue = false, strict = true): boolean {
	if (isBoolean(value)) return value
	if (!strict && !isBoolean(value)) return !!value
	return defaultValue
}
