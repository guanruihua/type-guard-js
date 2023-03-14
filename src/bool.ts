import { isBoolean } from 'check-it-type'

export function BooleanGuard(value: boolean, defaultValue = false, strict = true): boolean {
	if (isBoolean(value)) return value
	if (!strict && !isBoolean(value)) return !!value
	return defaultValue
}
