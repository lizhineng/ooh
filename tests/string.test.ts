import {it, expect} from '@jest/globals'
import ValidationError from '../src/errors/validation-error'
import string from '../src/string'

it('parses null', () => {
    expect(string().cast(null)).toBe('')
})

it('parses undefined', () => {
    expect(string().cast(undefined)).toBe('')
})

it('parses string', () => {
    expect(string().cast('foo')).toBe('foo')
})

it('parses number', () => {
    expect(string().cast(100)).toBe('100')
    expect(string().cast(100.1)).toBe('100.1')
})

it('parses boolean', () => {
    expect(string().cast(true)).toBe('true')
    expect(string().cast(false)).toBe('false')
})

it('parses object', () => {
    const obj = class {
        toString() { return 'foo' }
    }
    expect(string().cast(new obj)).toBe('foo')
})

it('validates required rule', () => {
    const schema = string().required()

    expect(() => schema.cast('')).toThrow(ValidationError)
    expect(() => schema.cast('foo')).not.toThrow(ValidationError)
})
