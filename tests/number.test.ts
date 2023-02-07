import {it, expect} from '@jest/globals'
import ValidationError from '../src/errors/validation-error'
import number from '../src/number'

it('parses null', () => {
    expect(number().cast(null)).toBe(null)
})

it('parses undefined', () => {
    expect(number().cast(undefined)).toBe(null)
})

it('parses string number', () => {
    expect(number().cast('100')).toBe(100)
    expect(number().cast('100.00')).toBe(100)
    expect(number().cast('100.01')).toBe(100.01)
})

it('parses number', () => {
    expect(number().cast(100)).toBe(100)
    expect(number().cast(100.00)).toBe(100)
    expect(number().cast(100.01)).toBe(100.01)
})

it('validates rules', () => {
    const rule = number().min(16).max(100)
    expect(rule.cast(16)).toBe(16)
    expect(() => rule.cast(15)).toThrow(ValidationError)
})
