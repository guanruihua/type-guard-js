import { log } from '0log'
import { BaseValueMap } from 'unit-testing-js'
import { AsyncFunctionGuard, NumberGuard, StringGuard } from '..'

BaseValueMap.get('@EMPTY_FUNCTION').forEach(item => {
	log(NumberGuard(item))
})