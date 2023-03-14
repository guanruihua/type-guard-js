import { isAsyncFunction, isFunction } from 'check-it-type'

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