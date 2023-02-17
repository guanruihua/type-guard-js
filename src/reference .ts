import { isArray, isAsyncFunction, isFunction, isObject } from 'check-it-type'

export function ArrayGuard<T>(value: T[], defaultValue = []): T[] {
	if (isArray(value)) return value
	return defaultValue
}

export function ObjectGuard<T extends Record<string, unknown>>(value: T, defaultValue = {}): T {
	if (isObject(value)) return value
	return defaultValue as T
}

export type FunctionType = (...args: unknown[]) => unknown

export function FunctionGuard<T extends FunctionType>(value: T, defaultValue = () => undefined): T {
	if (isFunction(value)) {
		return value
	}
	return defaultValue as T
}

export type AsyncFunctionType = (...args: unknown[]) => Promise<unknown>

export function AsyncFunctionGuard<T extends AsyncFunctionType>(
	value: T,
	defaultValue = () => Promise.resolve(undefined)
): T {
	if (isAsyncFunction(value)) {
		return value
	}
	return defaultValue as T
}